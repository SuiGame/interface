<template>
  <router-view></router-view>
</template>

<script>
import * as ethWallet from '@/web3/wallet-eth'
import * as suiWallet from '@/web3/wallet-sui'
import emitter from '@/common/js/emitter'
import { transformAddress } from '@/common/js/utils'

export default {
  data() {
    return {
      walletAddr: '',
      token: '',
      userName: '',
      email: '',

      scholarRatio: 0,
      scholarAddr: '',

      isGameSubAccount: false,
    }
  },
  computed: {
    vWalletAddr() {
      return transformAddress(this.walletAddr)
    },
  },
  methods: {
    async connect(walletName) {
      if (!walletName) {
        walletName = localStorage.getItem('CONNECTED_WALLET')
      }
      localStorage.setItem('CONNECTED_WALLET', walletName)

      if (this._promise) return this._promise

      // this._promise = this._connectEth(walletName)
      this._promise = this._connectSui(walletName)
      const result = await this._promise
      this._promise = null

      return result
    },
    async _connectEth(walletName) {
      let walletAddr = ''
      try {
        walletAddr = await ethWallet.connect(walletName)
        const web3Instance = ethWallet.getWeb3Instance()
        const chainId = await web3Instance.eth.getChainId()
        if (!ethWallet.isSupportedChain(chainId)) {
          alert('Please change your network provider to the Ethereum')
        }
      } catch (err) {
        console.error(err)
      }
      this.walletAddr = walletAddr
      return walletAddr
    },
    async _connectSui(walletName) {
      let walletAddr = ''
      try {
        walletAddr = await suiWallet.connect(walletName)
      } catch (err) {
        console.error(err)
      }
      this.walletAddr = walletAddr
      return walletAddr
    },

    // async sign() {
    //   if (this._signing) return
    //   this._signing = true
    //   this.setToken()
    //   let token = ''
    //   try {
    //     const res = await wallet.sign()
    //     if (res.code == 200) {
    //       token = res.data?.token || ''
    //     }
    //   } catch (err) {
    //     console.error(err)
    //   }
    //   this._signing = false
    //   this.setToken(token)
    //   return token
    // },
    setToken(token) {
      token = token || ''
      this.token = token

      const axiosDefaultsHeaders = this.$axios.defaults.headers
      if (token) {
        axiosDefaultsHeaders.common['FTOKEN'] = token
      } else {
        delete axiosDefaultsHeaders.common['FTOKEN']
      }
    },

    async getUserInfo() {
      try {
        const res = await this.$axios.get('/account/get_login_info')
        if (res.code != 200) {
          throw new Error(res.msg)
        }

        const { userAddr, loginName, email, commissionAddr, commissionRatio, isGameSubAccount } =
          res.data || {}
        this.walletAddr = userAddr || ''
        this.userName = loginName || ''
        this.email = email || ''
        this.scholarRatio = (commissionRatio || 0) * 100
        this.scholarAddr = commissionAddr || ''
        this.isGameSubAccount = !!isGameSubAccount
      } catch (err) {
        this.userName = ''
        console.error(err)
      }
    },

    logout() {
      this.walletAddr = ''
      this.userName = ''
      this.email = ''
      this.scholarRatio = 0
      this.scholarAddr = ''
      this.isGameSubAccount = false
      this.setToken()
      emitter.emit('accountsChanged')
    },

    async checkLogin() {
      const oUrl = new URL(window.location.href)
      const searchParams = oUrl.searchParams
      const code = searchParams.get('code') || ''
      if (!code) return

      // 清除连接中的 code 和 isGameSubAccount 参数
      searchParams.delete('code')
      window.history.replaceState(null, '', oUrl.href)

      // 用中心登录后的 code 换取页面 token
      const url = '/account/code_to_token'
      const params = new URLSearchParams()
      params.append('authCode', code)

      const res = await this.$axios.post(url, params)
      if (!res || res.code != 200) {
        alert(res.msg)
        return
      }
      this.setToken(res.data?.token)

      // 拉取用户身份信息
      await this.getUserInfo()
    },
  },
  mounted() {},
  created() {
    this.checkLogin().then(() => {
      emitter.emit('auth-init')
    })

    ethWallet.bind({
      accountsChanged: async (accounts) => {
        const walletAddr = (accounts && accounts[0]) || ''
        if (walletAddr && this.walletAddr === walletAddr) return
        this.walletAddr = walletAddr
        emitter.emit('accountsChanged')
      },
      chainChanged: (chainId) => {
        if (!ethWallet.isSupportedChain(chainId)) {
          alert('Please change your network provider to the Ethereum')
        }
        window.location.reload()
      },
    })
    suiWallet.bind({
      accountsChanged: async (accounts) => {
        const walletAddr = (accounts && accounts[0]) || ''
        if (walletAddr && this.walletAddr === walletAddr) return
        this.walletAddr = walletAddr
        emitter.emit('accountsChanged')
      },
    })
  },
}
</script>

<style></style>

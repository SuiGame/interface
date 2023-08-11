<template>
  <div class="comp-nav" v-bind="$attrs">
    <main class="main-wrap">
      <nav class="nav">
        <a class="link link-home" href="/">
          <img class="logo" src="@/assets/common/logo.png" />
        </a>
        <router-link
          v-for="tab in tabs"
          :key="tab"
          :class="[
            'link',
            'm-v-hide',
            $route.path.search(tab.regexp) > -1 ? 'router-link-active' : '',
          ]"
          :to="tab.path"
        >
          {{ tab.text }}
        </router-link>
        <!-- <Input
          class="search"
          :icon="require('@/assets/comp-nav/icon-search.png')"
          placeholder="Search by collection, NFT or user"
          v-model.trim="keyword"
          @enter="onSearch"
        ></Input> -->
      </nav>
      <div class="btns">
        <!-- <a class="btn btn-cart">
          <span class="bubble" v-if="cartCount > 0">{{ cartCount }}</span>
          <i class="trigger" @click.stop="onCart"></i>
        </a> -->
        <a class="btn btn-profile">
          <span class="inner" v-if="$root.vWalletAddr" @click.stop="onProfile">
            <span class="name">{{ $root.vWalletAddr }}</span>
            <img class="avatar" src="@/assets/page-minting/comp-dashboard/icon-caesar.png" />
            <!-- <img class="avatar" :src="$root.user.avatar" /> -->
          </span>
          <span class="inner connect" v-else @click.stop="onProfile">
            <span class="name">Connect Wallet</span>
          </span>
          <!-- <i class="trigger" v-else @click.stop="onProfile"></i> -->
          <UserModal ref="UserModal" class="user-modal"></UserModal>
        </a>
        <!-- <a class="btn btn-connect" @click.stop="onWallet">
          <WalletModal ref="WalletModal" class="wallet-modal"></WalletModal>
        </a> -->
        <a
          v-if="outerPath.indexOf($route.path) != -1"
          :class="['btn', 'btn-menu', 'pc-v-hide', menuVisible ? 'close' : '']"
          @click.stop="onMenu"
        >
          <i class="line line-1"></i>
          <i class="line line-2"></i>
          <i class="line line-3"></i>
        </a>
      </div>
    </main>
  </div>
  <div class="comp-nav-placeholder"></div>
  <div
    :class="['comp-nav-menu', 'pc-v-hide', outerPath.indexOf($route.path) == -1 ? 'fixed' : '']"
    v-if="menuVisible || outerPath.indexOf($route.path) == -1"
    @click.stop="menuVisible = false"
  >
    <router-link
      v-for="tab in tabs"
      :key="tab"
      :class="['link', $route.path.search(tab.regexp) > -1 ? 'router-link-active' : '']"
      :to="tab.path"
    >
      <img class="icon" :src="$route.path.search(tab.regexp) > -1 ? tab.icon1 : tab.icon0" />
      <span>{{ tab.text }}</span>
    </router-link>
  </div>
  <CartModal ref="CartModal" @change="onCartChange"></CartModal>
  <ConnectDialog ref="ConnectDialog"></ConnectDialog>
  <WalletSignDialog ref="WalletSignDialog"></WalletSignDialog>
</template>

<script>
// import Input from '@/components/Input.vue'
import CartModal from '@/modules/CartModal.vue'
import UserModal from '@/modules/UserModal.vue'
// import WalletModal from '@/modules/WalletModal.vue'
import WalletSignDialog from '@/modules/WalletSignDialog.vue'
import ConnectDialog from '@/modules/ConnectDialog.vue'
import emitter from '@/common/js/emitter'

export default {
  components: {
    // Input,
    CartModal,
    UserModal,
    // WalletModal,
    WalletSignDialog,
    ConnectDialog,
  },
  data() {
    return {
      keyword: '',

      cartCount: 0,

      menuVisible: false,
      outerPath: ['/'],
    }
  },
  computed: {
    tabs() {
      return [
        {
          path: '/minting',
          regexp: /\/minting/,
          text: this.$t('Nav.Minting'),
          icon0: new URL('@/assets/comp-nav/nav-minting.png', import.meta.url).href,
          icon1: new URL('@/assets/comp-nav/nav-minting-a.png', import.meta.url).href,
        },
        // { path: '/defi', regexp: /\/defi/, text: this.$t('SideTab.DeFi') },
        {
          path: '/games',
          regexp: /\/games/,
          text: this.$t('Game2.Games'),
          icon0: new URL('@/assets/comp-nav/nav-games.png', import.meta.url).href,
          icon1: new URL('@/assets/comp-nav/nav-games-a.png', import.meta.url).href,
        },
        {
          path: '/market/marketplace',
          regexp: /\/market\/marketplace/,
          text: this.$t('Market2.Marketplace'),
          icon0: new URL('@/assets/comp-nav/nav-market.png', import.meta.url).href,
          icon1: new URL('@/assets/comp-nav/nav-market-a.png', import.meta.url).href,
        },
        {
          path: '/market/prelaunch',
          regexp: /\/market\/prelaunch/,
          text: this.$t('Market.Prelaunch'),
          icon0: new URL('@/assets/comp-nav/nav-prelaunch.png', import.meta.url).href,
          icon1: new URL('@/assets/comp-nav/nav-prelaunch-a.png', import.meta.url).href,
        },
      ]
    },
  },
  methods: {
    // onSearch() {
    //   console.log('------onSearch:', this.keyword)
    // },

    onCartChange(orders) {
      this.cartCount = orders?.length || 0
    },

    onCart() {
      this._toggle('CartModal')
      this.$emit('cart')
    },
    onProfile() {
      const ref = this.$root.vWalletAddr ? 'UserModal' : 'ConnectDialog'
      // const ref = this.$root.token ? 'UserModal' : 'ConnectDialog'
      this._toggle(ref)
    },
    // onWallet() {
    //   const ref = this.$root.token ? 'WalletModal' : 'ConnectDialog'
    //   this._toggle(ref)
    // },
    onMenu() {
      this._toggle('MenuModal')
    },
    _toggle(ref) {
      const names = [
        'CartModal',
        'UserModal',
        // 'WalletModal',
        'WalletSignDialog',
        'ConnectDialog',
        'MenuModal',
      ]
      names.forEach((name) => {
        const $ref = this.$refs[name]
        if ($ref) {
          if (ref === name) {
            typeof $ref.toggle == 'function' ? $ref.toggle() : $ref.show()
          } else {
            $ref.hide()
          }
        } else if (name === 'MenuModal') {
          this.menuVisible = ref === name ? !this.menuVisible : false
        }
      })
    },

    async _onWalletChange() {
      if (this.$root.token) return

      const isExist = await this._isExistUser()
      if (isExist) {
        await this.$root.sign()
        await this.$root.getUserInfo()
        emitter.emit('auth-change')
      } else {
        this._toggle('WalletSignDialog')
      }
    },
    async _isExistUser() {
      const url = `${import.meta.env.VUE_APP_API_FBOX2}/web/users/is_exist`
      const params = {
        type: 'userAddr',
        value: this.$root.userWallet,
      }

      const res = await this.$axios.get(url, { params })
      if (res.code != 200) {
        console.warn(res.msg)
        return
      }

      return !!res.data?.isExisted
    },
  },
  created() {
    emitter.on('wallet-connect', this.onProfile)
    emitter.on('wallet-change', this._onWalletChange)
  },
  unmounted() {
    emitter.off('wallet-connect', this.onProfile)
    emitter.off('wallet-change', this._onWalletChange)
  },
}
</script>

<style>
:root {
  --nav2-height: 3.5rem;
}
@media (max-width: 768.89px) {
  :root {
    --nav2-height: 5rem;
  }
}
</style>

<style lang="scss" scoped>
@import '@/common/css/variable.scss';

.comp-nav {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
  color: $color-white;
  background-color: #050c51;
  box-shadow: 0 0 0.8rem 0 rgba(91, 92, 97, 0.1);
  -webkit-tap-highlight-color: transparent;
  .main-wrap {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: var(--nav2-height);
    margin-top: 0;
    margin-bottom: 0;
    color: inherit;
  }
  .nav {
    display: flex;
    align-items: center;
    font-family: 'Gilroy-Bold';
    font-size: 0.8rem;
    .link {
      display: block;
      margin-right: 1.5rem;
      font-weight: 500;
      color: inherit;
      cursor: pointer;
      &.link-home {
        margin-right: 2.5rem;
        @media (max-width: 768.89px) {
          margin-right: 0;
        }
      }
      &:hover,
      &.router-link-active {
        color: $color-blue;
      }
    }
    .logo {
      display: block;
      width: 6.9rem;
      @media (max-width: 768.89px) {
        width: 9.2rem;
      }
    }
  }
  .search {
    width: 20rem;
    margin-left: 2rem;
  }
  .btns {
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    .btn {
      position: relative;
      display: block;
      margin-left: 1.5rem;
      cursor: pointer;
      @media (max-width: 768.89px) {
        margin-left: 0.5rem;
      }
      .trigger {
        display: block;
        width: 1.5rem;
        height: 1.5rem;
        background: center center / 100% no-repeat;
        @media (max-width: 768.89px) {
          width: 2rem;
          height: 2rem;
        }
      }
    }
    .btn-cart {
      .trigger {
        background-image: url('@/assets/comp-nav/icon-cart.png');
        &:hover {
          background-image: url('@/assets/comp-nav/icon-cart-active.png');
        }
      }
      .bubble {
        position: absolute;
        top: -10%;
        right: -30%;
        box-sizing: border-box;
        display: inline-block;
        min-width: 0.8rem;
        height: 0.8rem;
        padding: 0 0.2rem;
        font-size: 0.6rem;
        line-height: 0.8rem;
        color: $color-white;
        text-align: center;
        background-color: $color-red;
        border-radius: 1rem;
        @media (max-width: 768.89px) {
          min-width: 0.65rem;
          height: 0.65rem;
          font-size: 0.5rem;
          line-height: 0.65rem;
        }
      }
    }
    .btn-profile {
      .inner {
        display: block;
        padding: 0.3rem 0.3rem 0.3rem 0.1rem;
        line-height: 1;
        white-space: nowrap;
        border: 0.05rem solid $color-blue;
        border-radius: 2rem;
        @media (max-width: 768.89px) {
          padding: 0.5rem 0.5rem 0.5rem 0.4rem;
        }
      }
      .name {
        margin: 0 0.5rem;
        font-size: 0.8rem;
        color: $color-blue;
        vertical-align: middle;
        @media (max-width: 768.89px) {
          margin: 0 0.3rem;
          font-size: 0.6rem;
        }
      }
      .avatar {
        width: 1.1rem;
        height: 1.1rem;
        overflow: hidden;
        vertical-align: middle;
        filter: invert(50%) sepia(92%) saturate(1172%) hue-rotate(189deg) brightness(102%)
          contrast(101%);
        border-radius: 1.5rem;
        @media (max-width: 768.89px) {
          width: 2rem;
          height: 2rem;
        }
      }
      .trigger {
        // background-image: url('@/assets/comp-nav/icon-profile.png');
        // &:hover {
        //   background-image: url('@/assets/comp-nav/icon-profile-active.png');
        // }
      }
      .connect {
        line-height: 1rem;
        @media (max-width: 768.89px) {
          line-height: 2.4rem;
          .name {
            margin: 0 0.6rem;
          }
        }
      }
    }
    .btn-connect {
      padding: 0.2rem 0;
      .trigger {
        background-image: url('@/assets/comp-nav/icon-wallet.png');
        &:hover {
          background-image: url('@/assets/comp-nav/icon-wallet-active.png');
        }
      }
    }
    .btn-menu {
      width: 0.9rem;
      padding: 0.2rem;
      font-size: 0;
      @media (max-width: 768.89px) {
        margin-left: 0.35rem;
      }
      .line {
        display: block;
        width: inherit;
        height: 0.1rem;
        margin: 0.22rem 0;
        background-color: $color-black;
        border-radius: 0.05rem;
        transition: transform 0.5s, width 0.4s, opacity 0.4s;
        &.line-1 {
          transform-origin: top left;
        }
        &.line-3 {
          transform-origin: bottom left;
        }
      }
      &.close {
        .line {
          width: 0.97rem;
        }
        .line-1 {
          transform: rotate(45deg);
        }
        .line-2 {
          width: 0;
          opacity: 0;
        }
        .line-3 {
          transform: rotate(-45deg);
        }
      }
    }
  }

  .user-modal,
  .wallet-modal {
    top: 130%;
    right: -1rem;
    @media (max-width: 768.89px) {
      position: fixed;
      top: var(--nav2-height);
      right: 0;
      bottom: 0;
      left: 0;
      background-color: darken($color-white, 1);
    }
  }
}
.comp-nav-placeholder {
  height: var(--nav2-height);
}
.comp-nav-menu {
  position: fixed;
  top: var(--nav2-height);
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  padding: 1em 0;
  text-align: left;
  -webkit-user-select: none;
  background-color: darken($color-white, 1);
  -webkit-tap-highlight-color: transparent;
  .link {
    display: block;
    padding: 0 1.5em;
    font-size: 0.8rem;
    font-weight: 500;
    line-height: 2.5rem;
    color: #202eb2;
    cursor: pointer;
    &.router-link-active {
      color: #437dff;
    }
    .icon {
      width: 1.2em;
      margin-right: 0.5em;
      vertical-align: -0.25em;
    }
  }
  &.fixed {
    top: auto;
    display: flex;
    padding: 0;
    background-color: #050c51;
    box-shadow: 0 0 0.8rem 0 rgba(91, 92, 97, 0.1);
    .link {
      flex: 1;
      padding: 0.9em 0 0.8em;
      font-size: 1rem;
      line-height: 1;
      text-align: center;
      .icon {
        display: block;
        width: 2em;
        margin: 0 auto 0.5em;
      }
    }
  }
}
</style>

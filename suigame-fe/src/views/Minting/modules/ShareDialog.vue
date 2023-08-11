<template>
  <Dialog :visible="visible" class="dialog-share">
    <main class="share-main">
      <a class="close" @click="onClose"></a>
      <img class="img" src="@/assets/page-minting/dialog-share/share-1.png" />
      <div class="info">
        <h1 class="title">Copy link</h1>
        <input class="input" id="shareLink" type="text" :value="shareLink" />
        <div>
          <Button
            class="btn-copy"
            ref="$btnCopy"
            data-clipboard-target="#shareLink"
            :disabled="btnDisabled"
          >
            Copy link
          </Button>
        </div>
        <div class="social">
          <span class="label">Share to</span>
          <a class="item" :href="social.twitter" target="_blank">
            <img class="icon" src="@/assets/page-minting/dialog-share/icon-twitter.png" />
          </a>
          <a class="item" :href="social.telegram" target="_blank">
            <img class="icon" src="@/assets/page-minting/dialog-share/icon-telegram.png" />
          </a>
          <!-- <a class="item discord" href="" target="_blank">
            <img class="icon" src="@/assets/page-minting/dialog-share/icon-discord.png" />
          </a> -->
        </div>
      </div>
    </main>
  </Dialog>
</template>

<script setup>
import { ref, nextTick, onUnmounted, getCurrentInstance } from 'vue'
import Clipboard from 'clipboard'
import Dialog from '@/components/Dialog.vue'
import Button from '@/components/Button.vue'

const visible = ref(false)
function show() {
  visible.value = true
  init()
}
function hide() {
  visible.value = false
  _clipboard && _clipboard.destroy()
}

function onClose() {
  hide()
}

defineExpose({
  show,
  hide,
})

const app = getCurrentInstance()
const social = ref({})
const shareLink = ref('')
const btnDisabled = ref(false)
const $btnCopy = ref()
let _clipboard
function init() {
  const $root = app.root.data
  const link = `${location.origin}/#/share?inviter=${$root.walletAddr}`
  social.value = {
    twitter: `https://twitter.com/share?text=SuiGame&url=${encodeURIComponent(link)}`,
    telegram: `https://t.me/share/url?url=${encodeURIComponent(link)}`,
  }

  shareLink.value = link
  btnDisabled.value = false
  nextTick(() => {
    const elem = $btnCopy.value.$el
    _clipboard = new Clipboard(elem)
    _clipboard.on('success', () => {
      btnDisabled.value = true
    })
  })
}
onUnmounted(() => {
  _clipboard && _clipboard.destroy()
})
</script>

<style lang="scss" scoped>
@import '@/common/css/variable.scss';

.dialog-share {
  .share-main {
    position: relative;
    box-sizing: border-box;
    display: flex;
    width: 48rem;
    background-color: #050c51;
    border: 0.1rem solid #abb5ff;
    border-radius: 1rem;
    @media (max-width: 768.89px) {
      display: block;
      width: 30rem;
    }
  }
  .close {
    position: absolute;
    top: -2rem;
    right: -2rem;
    display: inline-block;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    background: url('@/assets/page-minting/common/close.png') center center / 2rem auto no-repeat;
  }
  .img {
    display: block;
    @media (max-width: 768.89px) {
      width: 100%;
    }
  }
  .info {
    flex: 1;
    padding: 1.6rem 2.2rem;
    text-align: left;
    @media (max-width: 768.89px) {
      padding: 1.6rem 1.2rem;
      text-align: center;
    }
    .title {
      font-family: 'Gilroy-Bold';
      font-size: 1.5rem;
    }
    .input {
      box-sizing: border-box;
      width: 100%;
      height: 2rem;
      padding: 0 1rem;
      margin: 1.5rem 0 2rem;
      font-family: 'Gilroy-Medium';
      font-size: 1rem;
      color: $color-white;
      background-color: #1a2271;
      border: 0 none;
      outline: none;
      @media (max-width: 768.89px) {
        height: 3.6rem;
        font-size: 1.2rem;
      }
    }
    .btn-copy {
      width: 8rem;
      padding: 0;
      font-size: 0.9rem;
      background-image: linear-gradient(180deg, #4aa3ff 0%, #1f38db 100%);
      border-radius: 0.2rem;
      @media (max-width: 768.89px) {
        width: 10rem;
        font-size: 1.2rem;
        line-height: 3.2rem;
      }
    }
    .social {
      display: flex;
      align-items: center;
      padding-top: 1.2rem;
      margin-top: 1.2rem;
      font-size: 0.8rem;
      border-top: 0.05rem solid rgba(255, 255, 255, 0.2);
      @media (max-width: 768.89px) {
        margin-top: 2rem;
        font-size: 1.4rem;
      }
      .label {
        margin-right: 0.4rem;
      }
      .item {
        margin: 0 0.4rem;
      }
      .icon {
        display: block;
        width: 1.2rem;
        @media (max-width: 768.89px) {
          width: 2.4rem;
        }
      }
    }
  }
}
</style>

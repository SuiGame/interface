<template>
  <Dialog class="wallet-sign-dialog" :visible="visible">
    <main class="wallet-main">
      <header class="header">
        <h1 class="title">Welcome to ForthBox</h1>
      </header>
      <section class="content">
        <img class="logo" src="@/assets/common/token-fbx.png" />
        <p class="text">
          <span>By connecting your wallet and using ForthBox, </span>
          <span>
            you agree to our
            <a
              class="link"
              href="https://static.forthbox.io/document/Terms-of-Service.pdf"
              target="_blank"
            >
              Terms of Service
            </a>
            and Privacy Policy .
          </span>
        </p>
      </section>
      <footer class="footer">
        <Button class="btn-cancel" :handler="onCancel">Cancel</Button>
        <Button class="btn-ok" loader :handler="onSign">Accept and sign</Button>
      </footer>
    </main>
  </Dialog>
</template>

<script>
import Dialog from '@/components/Dialog.vue'
import Button from '@/components/Button.vue'
import emitter from '@/common/js/emitter'

export default {
  components: {
    Dialog,
    Button,
  },
  props: {},
  data() {
    return {
      visible: false,
    }
  },
  methods: {
    show() {
      if (this.visible) return
      this.visible = true
    },
    hide() {
      if (!this.visible) return
      this.visible = false
    },

    onCancel() {
      this.$root.logout()
      this.hide()
    },
    async onSign() {
      await this.$root.sign()
      await this.$root.getUserInfo()

      this.hide()

      emitter.emit('auth-change')
    },
  },
  created() {},
}
</script>

<style lang="scss" scoped>
@import '@/common/css/variable.scss';

.wallet-sign-dialog {
  .wallet-main {
    box-sizing: border-box;
    width: 28rem;
    text-align: left;
    background-color: $color-white;
    border-radius: 1rem;
    &::before,
    &::after {
      content: '';
      display: table;
      clear: both;
    }
    @media (max-width: 768.89px) {
      width: 15rem;
    }
  }
  .header {
    margin: 1.5rem 0;
    text-align: center;
    @media (max-width: 768.89px) {
      margin: 1rem 0;
    }
    .title {
      line-height: 1.4;
      font-size: 1.5rem;
      font-weight: 500;
      @media (max-width: 768.89px) {
        font-size: 1rem;
      }
    }
  }
  .content {
    padding: 0 1rem;
    .logo {
      margin: 2.5rem auto 2rem;
      display: block;
      width: 5rem;
      @media (max-width: 768.89px) {
        margin: 1rem auto 1rem;
        width: 3.5rem;
      }
    }
    .text {
      margin: 0 auto;
      text-align: center;
      span {
        display: block;
        @media (max-width: 768.89px) {
          display: inline;
        }
      }
    }
    .link {
      color: $color-blue;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .footer {
    margin: 2.5rem 0 2rem;
    text-align: center;
    @media (max-width: 768.89px) {
      margin: 1rem 0 1rem;
    }
    .fbx-btn {
      box-sizing: border-box;
      margin-bottom: 0.5rem;
      width: 11rem;
      border-radius: 0.5rem;
    }
    .btn-cancel {
      @include btn-stroke-pure($color-primary, $color-border, $color-blue, $color-blue);
    }
    .btn-ok {
      margin-left: 2rem;
      @include btn-fill-color();
      @media (max-width: 768.89px) {
        margin-left: 0;
      }
    }
  }
}
</style>

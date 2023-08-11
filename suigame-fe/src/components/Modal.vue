<template>
  <Dialog :class="['fbx-modal', type]" :visible="visible" :bgVisible="bgVisible">
    <main :class="['modal-main', visible ? 'animateIn' : 'animateOut']">
      <h1 class="title" v-if="title">{{ title }}</h1>
      <div class="content">{{ content }}</div>
      <div class="btns" v-if="!!cancelBtnVisible || !!confirmBtnVisible">
        <a class="btn-cancel" v-if="!!cancelBtnVisible" @click="onCancel">
          {{ cancelBtnText || 'Cancel' }}
        </a>
        <a class="btn-confirm" v-if="!!confirmBtnVisible" @click="onConfirm">
          {{ confirmBtnText || 'OK' }}
        </a>
      </div>
    </main>
  </Dialog>
</template>

<script>
import Dialog from './Dialog.vue'

export default {
  components: {
    Dialog,
  },
  props: {
    type: String, // toast, alert, confirm
    title: String,
    content: String,
    cancelBtnVisible: Boolean,
    cancelBtnText: String,
    cancelCallback: Function,
    confirmBtnVisible: Boolean,
    confirmBtnText: String,
    confirmCallback: Function,

    removeElement: Function,
  },
  data() {
    return {
      visible: false,
      bgVisible: true,
    }
  },
  methods: {
    show() {
      this.visible = true
      this.bgVisible = this.type !== 'toast'
    },
    hide() {
      this.visible = false
      setTimeout(() => {
        this.removeElement()
      }, 1000)
    },

    onCancel() {
      typeof this.cancelCallback == 'function' && this.cancelCallback()
      this.hide()
    },
    onConfirm() {
      typeof this.confirmCallback == 'function' && this.confirmCallback()
      this.hide()
    },
  },
}
</script>

<style lang="scss">
.fbx-modal {
  .modal-main {
    min-width: 16rem;
    padding: 0.9rem 1.2rem;
    line-height: 1.5;
    border-radius: 0.2rem;
    background-color: rgba(255, 255, 255, 0.99);
    &.animateIn {
      animation: 300ms linear fadeIn both;
    }
    &.animateOut {
      animation: 300ms linear fadeOut both;
    }
  }
  .title {
    font-size: 1rem;
    font-weight: normal;
    text-align: left;
  }
  .content {
    margin: 1rem 0;
    font-size: 0.8rem;
  }
  .btns {
    text-align: right;
  }
  @mixin btn {
    display: inline-block;
    padding: 0 1rem;
    line-height: 1.5rem;
    font-size: 0.8rem;
    color: darken(#03a9ff, 12);
    cursor: pointer;
    &:hover {
      opacity: 0.75;
    }
  }
  .btn-cancel,
  .btn-confirm {
    @include btn();
  }
  .btn-cancel {
    color: #717a83;
  }

  &.toast {
    pointer-events: none;
    .dialog-main {
      max-width: 70%;
      vertical-align: top;
    }
    .modal-main {
      pointer-events: initial;
      margin: 3rem auto 0;
      min-width: 5rem;
      line-height: 1.5;
      box-shadow: 0 0 1.2rem 0.05rem rgba(91, 92, 97, 0.3);
      &.animateIn {
        animation: 200ms linear toastIn both;
      }
      &.animateOut {
        animation: 200ms linear toastOut both;
      }
    }
    .content {
      margin: 0;
      word-break: break-word;
    }
    @keyframes toastIn {
      0% {
        opacity: 0;
        transform: translateY(-200%) translateZ(0);
      }
      100% {
        opacity: 1;
        transform: translateZ(0);
      }
    }
    @keyframes toastOut {
      0% {
        opacity: 1;
        transform: translateZ(0);
      }
      100% {
        opacity: 0;
        transform: translateY(-200%) translateZ(0);
      }
    }
  }
  // &.alert {
  // }
  // &.confirm {
  // }
}
</style>

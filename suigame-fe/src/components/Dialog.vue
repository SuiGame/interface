<template>
  <div class="fbx-dialog" v-if="iVisible" @click.self="onHide">
    <div
      :class="['dialog-bg', bgAnimate ? (iBgAnimate ? 'fadeIn' : 'fadeOut') : '']"
      :style="bgVisible ? '' : 'visibility: hidden;'"
      @click.self="onHide"
      @touchmove.prevent.stop
    ></div>
    <div :class="['dialog-main', animate ? (iAnimate ? 'fadeIn' : 'fadeOut') : '']">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dialog',
  props: {
    visible: {
      type: Boolean,
    },
    animate: {
      type: Boolean,
    },
    bgVisible: {
      type: Boolean,
      default: true,
    },
    bgAnimate: {
      type: Boolean,
    },
  },
  data() {
    return {
      iBgAnimate: false,

      iVisible: false,
      iAnimate: false,
    }
  },
  watch: {
    visible(visible) {
      this._onVisibleChange(visible)
    },
  },
  methods: {
    _onVisibleChange(visible) {
      clearTimeout(this._timeout)
      if (visible) {
        this.iBgAnimate = true
        this.iAnimate = true
        this.iVisible = true
      } else {
        this.iBgAnimate = false
        this.iAnimate = false
        if (this.bgAnimate || this.animate) {
          this._timeout = setTimeout(() => {
            this.iVisible = false
          }, 500)
        } else {
          this.iVisible = false
        }
      }
    },

    onHide() {
      this.$emit('hide')
    },
  },
  created() {
    this._onVisibleChange(this.visible)
  },
}
</script>

<style lang="scss">
.fbx-dialog {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  padding: 0.5rem 0;
  text-align: center;
  font-size: 0;
  // background-color: rgba(0, 0, 0, 0.5);
  overflow: auto;
  &::before {
    content: '';
    display: inline-block;
    width: 0;
    height: 100%;
    vertical-align: middle;
  }
  .dialog-bg {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    background-color: rgba(0, 0, 0, 0.6);
    transform: translateZ(0);
  }
  .dialog-main {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    font-size: 0.7rem;
    &::before,
    &::after {
      content: '';
      display: table;
      clear: both;
    }
  }

  .fadeIn {
    animation: 300ms linear dialogFadeIn both;
  }
  .fadeOut {
    animation: 300ms linear dialogFadeOut both;
  }
  @keyframes dialogFadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes dialogFadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
}
</style>

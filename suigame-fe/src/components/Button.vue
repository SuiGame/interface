<template>
  <a
    :class="[
      'fbx-btn',
      type ? `btn-${type}` : '',
      disabled || iLoading ? 'disabled' : '',
      iLoading ? 'loading' : '',
    ]"
    @click="onClick"
  >
    <Loader v-if="iLoading"></Loader>
    <slot v-else></slot>
  </a>
</template>

<script>
import Loader from './Loader.vue'

export default {
  components: {
    Loader,
  },
  props: {
    type: String,
    /**
     * 是否禁用按钮
     */
    disabled: Boolean,
    /**
     * 是否Loading（与props.loader互斥，不要同时设置这两个属性）
     */
    loading: Boolean,
    /**
     * 是否启用Loader，配合props.handler使用（与props.loading互斥，不要同时设置这两个属性）
     */
    loader: Boolean,
    /**
     * 点击处理函数，返回Promise
     * @returns Promise
     */
    handler: Function,
  },
  data() {
    return {
      iLoading: false,
    }
  },
  watch: {
    loading(loading) {
      this.iLoading = loading
    },
  },
  methods: {
    onClick() {
      if (typeof this.handler !== 'function') return

      if (this.iLoading || this.disabled) return
      this.loader && (this.iLoading = true)

      Promise.resolve(this.handler())
        .then(() => {
          this.loader && (this.iLoading = false)
        })
        .catch((err) => {
          console.error(err)
          this.loader && (this.iLoading = false)
        })
    },
  },
}
</script>

<style lang="scss">
.fbx-btn {
  display: inline-block;
  padding: 0 1.1rem;
  line-height: 2.2rem;
  border-radius: 1.1rem;
  text-align: center;
  text-decoration: none;
  font-size: 0.8rem;
  color: #fff;
  cursor: pointer;

  &:not(.disabled):hover {
    opacity: 0.92;
  }
  &:not(.disabled):active {
    opacity: 0.85;
  }
  &.btn-color {
    background: linear-gradient(90deg, #0078ff, #ae00ff);
  }
  &.disabled {
    background: #999 !important;
    border-color: #999 !important;
    cursor: not-allowed;
  }
}
</style>

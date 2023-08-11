<template>
  <div class="modal-language" v-if="visible" @click.stop="">
    <div class="row head" @click="onHide">
      <span>Choose language</span>
    </div>
    <div :class="['row', $root.$i18n.locale == 'en' ? 'active' : '']" @click="onLanguage('en')">
      <span class="text">English</span>
    </div>
    <div
      :class="['row', $root.$i18n.locale == 'zh-TW' ? 'active' : '']"
      @click="onLanguage('zh-TW')"
    >
      <span class="text">中文 (繁體)</span>
    </div>
    <div :class="['row', $root.$i18n.locale == 'ko' ? 'active' : '']" @click="onLanguage('ko')">
      <span class="text">한국어</span>
    </div>
  </div>
</template>

<script>
import { isInElem } from '@/common/js/utils'

export default {
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
    toggle() {
      this.visible ? this.hide() : this.show()
    },

    onHide() {
      this.hide()
    },
    onLanguage(language) {
      this.$root.$i18n.locale = language || 'en'
    },
  },
  created() {
    this._hide = (evt) => {
      if (!isInElem(evt, this.$refs.UserModal)) {
        this.hide()
      }
    }
    document.addEventListener('click', this._hide)
  },
  unmounted() {
    document.removeEventListener('click', this._hide)
  },
}
</script>

<style lang="scss" scoped>
@import '@/common/css/variable.scss';

.modal-language {
  position: absolute;
  z-index: 100;
  box-sizing: border-box;
  width: 10rem;
  overflow: hidden;
  background-color: $color-white;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.6rem 0.05rem rgba(91, 92, 97, 0.16);
  @media (max-width: 768.89px) {
    width: 100%;
    border-radius: 0;
    box-shadow: none;
  }
  .row {
    padding: 0 1rem;
    font-size: 0.8rem;
    line-height: 2.7rem;
    border-bottom: 0.05rem solid $color-border;
    &:hover {
      background-color: #f9f9f9;
    }
    &.active {
      color: $color-blue;
    }
  }
  .head {
    display: flex;
    align-items: center;
    line-height: 3rem;
    &::before {
      display: block;
      width: 0.3rem;
      height: 0.3rem;
      margin-right: 0.5rem;
      content: '';
      border-top: 0.1rem solid $color-secondary;
      border-left: 0.1rem solid $color-secondary;
      transform: rotate(-45deg);
    }
  }
}
</style>

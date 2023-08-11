<template>
  <label :class="['fbx-input', disabled ? 'disabled' : '']">
    <img v-if="icon" class="input-icon" :src="icon" />
    <input
      class="input-value"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :value="modelValue"
      @input="onInput"
      @keyup.enter="onEnter"
    />
    <slot></slot>
  </label>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text',
    },
    icon: String,
    modelValue: [String, Number],
    placeholder: String,
    disabled: Boolean,
  },
  methods: {
    onInput(evt) {
      this.$emit('update:modelValue', evt.target.value)
      this.$emit('change', evt.target.value)
    },
    onEnter(evt) {
      this.$emit('enter', evt.target.value)
    },
  },
}
</script>

<style lang="scss">
@import '@/common/css/variable.scss';

.fbx-input {
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  height: 2.2rem;
  font-size: 0.7rem;
  background-color: $color-white;
  border: 0.05rem solid $color-border;
  border-radius: 0.3rem;
  @media (max-width: 768.89px) {
    height: 2rem;
    font-size: 0.65rem;
  }
  &:hover {
    border-color: $color-blue;
  }
  &.disabled {
    border-color: $color-border;
  }
  .input-icon {
    display: block;
    width: 0.8rem;
    height: 0.8rem;
    margin-left: 0.75rem;
    @media (max-width: 768.89px) {
      width: 0.75rem;
      height: 0.75rem;
      margin-left: 0.6rem;
    }
  }
  .input-value {
    box-sizing: border-box;
    display: block;
    flex: 1;
    width: 0;
    height: inherit;
    padding: 0 0.75rem;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    text-align: inherit;
    background: transparent;
    border: 0 none;
    outline: none;
    @media (max-width: 768.89px) {
      padding: 0 0.5rem;
    }
    &::placeholder {
      color: $color-gray;
    }
  }
}
</style>

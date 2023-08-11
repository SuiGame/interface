<template>
  <div ref="fbxTooltipTrigger">
    <slot></slot>
  </div>

  <div ref="fbxTooltip" class="fbx-tooltip">
    <div class="tooltip-arrow"></div>
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    trigger: { type: String, default: 'hover' }, // manual,click,hover
    visible: Boolean,
    text: String,
  },
  data() {
    return {
      style: '',
    }
  },
  watch: {
    visible(visible) {
      if (visible) {
        this._show()
      } else {
        this._hide()
      }
    },
  },
  methods: {
    toast() {
      this._show()

      clearTimeout(this._autoTimeout)
      this._autoTimeout = setTimeout(() => this._hide(), 1500)
    },

    _show() {
      if (!this.text || this._visible) return

      const tooltip = this._tooltip
      const tooltipRect = tooltip._rect || {}
      const triggerRect = this._getElemRect(this._trigger)

      Object.assign(tooltip.style, {
        top: `${triggerRect.top - tooltipRect.height - 5}px`,
        left: `${triggerRect.left - tooltipRect.width / 2 + triggerRect.width / 2}px`,
      })

      document.body.appendChild(tooltip)

      clearTimeout(this._timeout)
      this._timeout = setTimeout(() => {
        Object.assign(tooltip.style, {
          opacity: 1,
          transform: 'none',
        })
      }, 0)

      this._visible = true
    },
    _hide() {
      if (!this._visible) return
      this._visible = false

      const tooltip = this._tooltip
      Object.assign(tooltip.style, {
        opacity: 0,
        transform: '',
      })

      clearTimeout(this._timeout)
      this._timeout = setTimeout(() => {
        tooltip.remove()
      }, 500)
    },

    _getElemRect(elem) {
      if (elem && elem._rect) return elem._rect

      let top = 0
      let left = 0
      let temp = elem
      while (temp) {
        top += temp.offsetTop
        left += temp.offsetLeft
        temp = temp.offsetParent
      }

      elem._rect = {
        top,
        left,
        width: elem.offsetWidth,
        height: elem.offsetHeight,
      }

      return elem._rect
    },
  },
  mounted() {
    const wrap = this.$refs.fbxTooltipTrigger
    const trigger = wrap.children[0]

    wrap.parentNode.appendChild(trigger)
    wrap.remove()

    if (trigger) {
      if (this.trigger == 'click') {
        trigger.addEventListener('click', this._show)
      } else if (this.trigger == 'hover') {
        trigger.addEventListener('mouseenter', this._show)
        trigger.addEventListener('mouseleave', this._hide)
      }
    }
    this._trigger = trigger

    const tooltip = this.$refs.fbxTooltip
    tooltip._rect = {
      width: tooltip.offsetWidth,
      height: tooltip.offsetHeight,
    }
    tooltip.remove()
    this._tooltip = tooltip
  },
  unmounted() {
    const trigger = this._trigger
    if (trigger) {
      if (this.trigger == 'click') {
        trigger.removeEventListener('click', this._show)
      } else if (this.trigger == 'hover') {
        trigger.removeEventListener('mouseenter', this._show)
        trigger.removeEventListener('mouseleave', this._hide)
      }
      trigger.remove()
    }

    this._tooltip.remove()
  },
}
</script>

<style lang="scss">
.fbx-tooltip {
  position: absolute;
  opacity: 0;
  z-index: 300;
  padding: 0.2rem 0.3rem;
  line-height: 1.4;
  font-size: 0.6rem;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 0.2rem;
  transform: translateY(15%);
  transition: opacity 0.3s, transform 0.3s;
  .tooltip-arrow {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-top: 0.25rem solid rgba(0, 0, 0, 0.75);
    border-left: 0.2rem solid transparent;
    border-right: 0.2rem solid transparent;
    border-bottom: 0;
  }
}
</style>

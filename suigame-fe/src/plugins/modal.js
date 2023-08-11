import { h, render } from 'vue'
import modal from '@/components/Modal.vue'
import { type } from '@/common/js/utils'

function createModal(options) {
  options = options || {}

  const container = document.createElement('div')
  const removeElement = () => {
    // render(null, container)
    document.body.removeChild(container)
  }

  const vnode = h(modal, {
    ...options,
    removeElement,
  })
  render(vnode, container)
  document.body.appendChild(container)

  const vm = vnode.component.proxy
  vm.show()

  return vm
}

function formatArgs(options) {
  if (type(options) !== 'object') {
    options = {
      content: (options || '').toString(),
    }
  }
  return options
}

const _modal = {
  confirm(options) {
    options = formatArgs(options)
    createModal({
      ...options,
      cancelBtnVisible: true,
      confirmBtnVisible: true,
      type: 'confirm',
    })
  },
  alert(options) {
    options = formatArgs(options)
    createModal({
      ...options,
      cancelBtnVisible: false,
      confirmBtnVisible: true,
      type: 'alert',
    })
  },
  toast(options) {
    options = formatArgs(options)
    const vm = createModal({
      ...options,
      title: '',
      cancelBtnVisible: false,
      confirmBtnVisible: false,
      type: 'toast',
    })
    setTimeout(() => {
      vm.hide()
    }, options.duration || 3000)
  },
}

export default {
  install: (app) => {
    app.config.globalProperties.$modal = _modal
  },
}

export { _modal }

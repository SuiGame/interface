const GAME_SYMBOL = ''

/**
 * 生成用户中心指定路径的页面链接
 * @param {String} path 页面路径
 * @param {Object} params 页面参数
 */
export function genUCenterLink(path, params) {
  const query = [`url=${encodeURIComponent(window.location.href)}`]

  params = Object.assign({ gameSymbol: GAME_SYMBOL }, params)
  Object.keys(params).forEach((key) => {
    const value = params[key]
    if (value) {
      query.push(`${key}=${value}`)
    }
  })

  return `${import.meta.env.VITE_UCENTER_HOST}/#${path}?${query.join('&')}`
}

/**
 * 获取用户中心登录页的页面链接
 * @param {Object} params 页面参数
 */
export function getLoginLink(params) {
  return genUCenterLink('/login', params)
}

/**
 * 跳转到用户中心的登录页
 * @param {Object} params 页面参数
 */
export function toLogin(params) {
  window.location.href = getLoginLink(params)
}

/**
 * 获取用户中心忘记密码页的页面链接
 * @param {Object} params 页面参数
 */
export function getPasswordLink(params) {
  return genUCenterLink('/password', params)
}

/**
 * 跳转到用户中心的忘记密码页
 * @param {Object} params 页面参数
 */
export function toPassword(params) {
  window.location.href = getPasswordLink(params)
}

/**
 * 获取用户中心钱包认证页的页面链接
 * @param {Object} params 页面参数
 */
export function getAuthLink(params) {
  return genUCenterLink('/auth', params)
}

/**
 * 跳转到用户中心的钱包认证页
 * @param {Object} params 页面参数
 */
export function toAuth(params) {
  window.open(getAuthLink(params))
}

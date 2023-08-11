# Sui Game

## Dependencies

### Enviroment

- Node: 14.18+, 16+
- Vite
  > 推荐使用 Vue3 `<script setup>` SFCs 开发，详见：[script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup)

### Framework

- vue3
- vue-router
- sass

### Code Review

- eslint
- stylelint
- prettier
- husky
- lint-staged

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/)
- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- EditorConfig

## Development & Release

> 需预先安装 Node 环境（版本：14.18+, 16+）

### 操作步骤

1. 安装依赖：`yarn install`
2. 代码编译
   1. 本地开发：`yarn dev`
   2. 测试环境：`yarn gamma`
   3. 正式环境：`yarn build`
3. 浏览器打开页面
   1. 本地开发：http://localhost:8006/
   2. 测试环境：
   3. 正式环境：https://www.suigame.io/

### 其它

1. 本地开发时，可以构建预览版本检查发布到测试环境和正式环境的最终效果，操作如下：
   1. 执行正式构建：`yarn build`
   2. 启动预览服务：`yarn preview`
   3. 浏览器打开页面：http://localhost:4173/
2. 测试环境和正式环境编译后的输出结果在目录 _/dist_ 下

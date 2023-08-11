<template>
  <header :class="['comp-nav']">
    <main class="nav-main">
      <a class="nav-home" href="/">
        <img class="logo" src="@/assets/common/logo.png" />
      </a>
      <nav class="nav-list">
        <a class="nav-item m-v-hide" href="http://gameapefantasyclub.com/" target="_blank">GAFC</a>
        <a class="nav-item m-v-hide" href="https://suigame.gitbook.io/" target="_blank">
          Documentation
        </a>
        <div class="nav-item m-v-hide">
          <span class="trigger">Community</span>
          <div class="dropdown">
            <a class="item twitter" href="https://twitter.com/SuiGame_io" target="_blank">
              Twitter
            </a>
            <a class="item discord" href="https://discord.com/invite/qKBzrQhVqX" target="_blank">
              Discord
            </a>
            <!--
            <a class="item medium" href="https://medium.com/@suigameio" target="_blank"> Medium </a>
            <a class="item telegram" href="https://t.me/SuiGame_io" target="_blank"> Telegram </a>
            -->
          </div>
        </div>
        <a class="nav-item m-v-hide" href="https://suigame.gitbook.io/faq/" target="_blank">FAQ</a>
        <SpottyBtn class="btn-launch" @click="onLaunch">Launch APP</SpottyBtn>
        <a :class="['btn-menu', 'pc-v-hide', menuVisible ? 'close' : '']" @click.stop="onToggle">
          <i class="line line-1"></i>
          <i class="line line-2"></i>
          <i class="line line-3"></i>
        </a>
      </nav>
    </main>
  </header>
  <div class="comp-nav-placeholder"></div>
  <div :class="['comp-nav-menu', 'pc-v-hide', menuVisible ? 'visible' : '']">
    <a class="menu-item" href="http://gameapefantasyclub.com/" target="_blank">GAFC</a>
    <a class="menu-item" href="https://suigame.gitbook.io/" target="_blank">Documentation</a>
    <!-- <a class="menu-item">Community</a> -->
    <a class="menu-item" href="https://suigame.gitbook.io/faq/" target="_blank">FAQ</a>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import SpottyBtn from './SpottyBtn.vue'

const router = useRouter()
function onLaunch() {
  router.push('/minting')
}

const menuVisible = ref(false)

function onToggle() {
  menuVisible.value = !menuVisible.value
}

function hide() {
  menuVisible.value = false
}

onMounted(() => {
  document.addEventListener('click', hide)
})
onUnmounted(() => {
  document.removeEventListener('click', hide)
})
</script>

<style>
:root {
  --nav-height: 3.5rem;
}
@media (max-width: 768.89px) {
  :root {
    --nav-height: 6rem;
  }
}
</style>
<style lang="scss" scoped>
@import '@/common/css/variable.scss';

.comp-nav {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
  font-family: 'Gilroy-Bold';
  background-color: $color-black;
  .nav-main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 56rem;
    padding: 0 2rem;
    margin: 0 auto;
  }
  .nav-home {
    .logo {
      display: block;
      width: 7rem;
      @media (max-width: 768.89px) {
        width: 9rem;
      }
    }
  }
  .nav-list {
    font-size: 0.9rem;
    line-height: var(--nav-height);
    @media (max-width: 768.89px) {
      font-size: 1.2rem;
    }
  }
  .nav-item {
    position: relative;
    display: inline-block;
    margin: 0 1.35vw;
    font-size: inherit;
    color: $color-white;
    cursor: pointer;
    transition: color 0.2s;
    &:hover {
      color: $color-blue;
      .trigger::after {
        vertical-align: 0.1em;
        border-color: $color-blue;
        transform: rotate(135deg) skew(2deg, 2deg);
      }
      .dropdown {
        display: block;
      }
    }
    .trigger {
      &::after {
        display: inline-block;
        width: 0.45em;
        height: 0.45em;
        margin-left: 0.4em;
        vertical-align: -0.15em;
        content: '';
        border-top: 0.15em solid $color-white;
        border-right: 0.15em solid $color-white;
        transition: border-color 0.2s;
        transform: rotate(-45deg) skew(2deg, 2deg);
      }
    }
  }
  .btn-launch {
    margin-left: 1.35vw;
  }
  .btn-menu {
    display: inline-block;
    width: 1.5rem;
    padding: 0.2rem;
    margin-left: 1.5rem;
    font-size: 0;
    vertical-align: middle;
    .line {
      display: block;
      width: inherit;
      height: 0.2rem;
      margin: 0.3rem 0;
      background-color: $color-white;
      border-radius: 0.05rem;
      transition: transform 0.5s, width 0.4s, opacity 0.4s;
      &.line-1 {
        transform-origin: top left;
      }
      &.line-3 {
        transform-origin: bottom left;
      }
    }
    &.close {
      .line {
        width: 1.5rem;
      }
      .line-1 {
        transform: rotate(45deg);
      }
      .line-2 {
        width: 0;
        opacity: 0;
      }
      .line-3 {
        transform: rotate(-45deg);
      }
    }
  }

  .dropdown {
    position: absolute;
    top: 100%;
    z-index: 100;
    display: none;
    padding: 0.1rem 0;
    margin-left: -0.45rem;
    overflow: hidden;
    font-size: 0.9rem;
    line-height: 2.5;
    background-color: $color-black;
    border-radius: 0.5rem;
    .item {
      display: block;
      padding-right: 0.5rem;
      margin: 0 1rem;
      color: $color-white;
      white-space: nowrap;
      border-bottom: 0.05rem solid #282729;
      &:last-child {
        border-bottom: none;
      }
      &:hover {
        color: $color-blue;
      }
      &::before {
        display: inline-block;
        width: 1rem;
        height: 1rem;
        margin-right: 0.6rem;
        vertical-align: -0.2em;
        content: '';
        background: center center / contain no-repeat;
      }
      &.twitter::before {
        background-image: url('@/assets/comp-nav/social-twitter-0.png');
      }
      &.twitter:hover::before {
        background-image: url('@/assets/comp-nav/social-twitter-1.png');
      }
      &.discord::before {
        background-image: url('@/assets/comp-nav/social-discord-0.png');
      }
      &.discord:hover::before {
        background-image: url('@/assets/comp-nav/social-discord-1.png');
      }
      &.medium::before {
        background-image: url('@/assets/comp-nav/social-medium-0.png');
      }
      &.medium:hover::before {
        background-image: url('@/assets/comp-nav/social-medium-1.png');
      }
      &.telegram::before {
        background-image: url('@/assets/comp-nav/social-telegram-0.png');
      }
      &.telegram:hover::before {
        background-image: url('@/assets/comp-nav/social-telegram-1.png');
      }
    }
  }
}
.comp-nav-placeholder {
  height: var(--nav-height);
}
.comp-nav-menu {
  position: absolute;
  top: var(--nav-height);
  right: 0;
  left: 0;
  z-index: 100;
  display: none;
  transition: opacity 0.2s;
  &.visible {
    display: block;
  }
  .menu-item {
    display: block;
    line-height: 3.3;
    color: $color-white;
    text-align: center;
    background-color: $color-black;
    border-top: 0.05rem solid #39353c;
  }
}
</style>

<template>
  <Nav></Nav>
  <main class="page-home">
    <Screen></Screen>
    <SuiGame ref="$suigame"></SuiGame>
    <Ecosystem ref="$ecosystem"></Ecosystem>
    <Games ref="$games"></Games>
    <CryptoNews ref="$cryptonews"></CryptoNews>
    <Partners ref="$partners"></Partners>
    <Footer></Footer>
  </main>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import Nav from '@/modules/Nav.vue'
import Screen from './Screen.vue'
import SuiGame from './SuiGame.vue'
import Ecosystem from './Ecosystem.vue'
import CryptoNews from './CryptoNews.vue'
import Games from './Games.vue'
import Partners from './Partners.vue'
import Footer from './Footer.vue'

const $suigame = ref()
const $ecosystem = ref()
const $cryptonews = ref()
const $games = ref()
const $partners = ref()
onMounted(() => {
  const refs = [$suigame, $ecosystem, $cryptonews, $games, $partners]
  refs.forEach((elemRef) => {
    const elem = elemRef.value?.$el
    if (!elem) return

    const options = {
      threshold: 0.2,
    }
    const callback = (entries) => {
      const entry = entries[0]
      if (entry.isIntersecting && entry.intersectionRatio > 0) {
        elem.classList.add('animate')
        observer.disconnect()
      }
    }
    const observer = new IntersectionObserver(callback, options)
    observer.observe(elem)
  })
})
</script>

<style lang="scss">
@import '@/common/css/variable.scss';
@import './home.common.scss';

.page-home {
  background-color: $color-black;
}
</style>

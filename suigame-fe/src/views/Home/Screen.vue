<template>
  <section class="home-screen">
    <div class="screen-bg">
      <video
        ref="refVideo"
        class="video"
        src="@/assets/page-home/video-header.mp4"
        muted
        loop
        autoplay
      ></video>
    </div>
    <main class="main">
      <div class="content">
        <h1 class="title">
          <span>GameFi</span>
          <span class="color">Industry</span>
        </h1>
        <p class="text">The Web3 STEAM on the SUI NETWORK</p>
        <div class="btns">
          <a class="btn btn-fill" @click="onLaunch">Launch APP</a>
          <a class="btn btn-stroke" href="https://suigame.gitbook.io/" target="_blank">
            Documention
          </a>
        </div>
      </div>
    </main>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const refVideo = ref()
function onVideo() {
  if (refVideo.value.paused) {
    refVideo.value.play()
  }
}

onMounted(() => {
  onVideo()
  document.addEventListener('click', onVideo)
})
onUnmounted(() => {
  document.removeEventListener('click', onVideo)
})

const router = useRouter()
function onLaunch() {
  router.push('/minting')
}
</script>

<style lang="scss" scoped>
@import '@/common/css/variable.scss';

.home-screen {
  position: relative;
  height: calc(100vh - var(--nav-height));
  min-height: 32.5rem;
  font-family: 'Gilroy-Bold';
  .screen-bg {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    .video {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .main {
    position: relative;
    z-index: 1;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width: 54rem;
    height: 80%;
    margin: 0 auto;
    font-size: 1rem;
    line-height: 1.4;
    color: $color-white;
    text-align: left;
    animation: fadeIn 5s 0.2s both;
    @media (max-width: 768.89px) {
      justify-content: center;
      width: auto;
      font-size: 1rem;
    }
  }
  .title {
    font-size: 6rem;
    @media (max-width: 768.89px) {
      font-size: 3.6rem;
    }
  }
  .color {
    margin-left: 0.4em;
  }
  .text {
    margin: 0 0 5rem;
    font-size: 1.5rem;
    color: transparent;
    background-image: linear-gradient(97deg, #0098fd 0%, #00ffeb 100%);
    -webkit-background-clip: text;
  }
  .btns {
    font-size: 1rem;
    @media (max-width: 768.89px) {
      font-size: 1.3rem;
    }
    .btn {
      display: inline-block;
      padding: 0 2em;
      margin-right: 3em;
      font-size: 0.9em;
      line-height: 2.7em;
      color: $color-white;
      cursor: pointer;
      border: 0.05rem solid $color-white;
      border-radius: 0.4em;
      @media (max-width: 768.89px) {
        font-size: 1.2rem;
      }
      &:hover {
        opacity: 0.9;
      }
    }
    .btn-fill {
      background-color: $color-blue;
      border-color: $color-blue;
    }
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>

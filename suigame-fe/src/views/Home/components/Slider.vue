<template>
  <div class="home-slider">
    <a class="btn-prev" @click="onPrev"></a>
    <div class="list" @mouseover="onMouseover" @mouseleave="onMouseleave">
      <div
        :class="['item', item.current ? 'current' : '']"
        v-for="item in list"
        :key="item"
        :style="item.style"
      >
        <img class="image" :src="item.img" />
      </div>
    </div>
    <a class="btn-next" @click="onNext"></a>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { throttle } from '@/common/js/utils'

const banners = [
  {
    img: new URL('@/assets/page-home/banner-1.png', import.meta.url).href,
  },
  {
    img: new URL('@/assets/page-home/banner-2.png', import.meta.url).href,
  },
  {
    img: new URL('@/assets/page-home/banner-3.png', import.meta.url).href,
  },
  {
    img: new URL('@/assets/page-home/banner-4.png', import.meta.url).href,
  },
  {
    img: new URL('@/assets/page-home/banner-5.png', import.meta.url).href,
  },
  {
    img: new URL('@/assets/page-home/banner-6.png', import.meta.url).href,
  },
]
const list = ref(banners)

const onPrev = throttle(() => {
  stop()
  prev()
  auto()
}, 500)
const onNext = throttle(() => {
  stop()
  next()
  auto()
}, 500)

const onMouseover = () => {
  stop()
}
const onMouseleave = () => {
  auto()
}

let current = 0

function slideTo(tIndex) {
  current = tIndex
  const length = list.value.length
  list.value.forEach((item, index) => {
    item.current = false
    if (tIndex === index) {
      item.current = true
      item.style = {
        zIndex: 2,
        opacity: 1,
      }
    } else if ((tIndex + 1) % length === index) {
      item.style = {
        zIndex: 1,
        transform: 'translate(-31%,-50%) scale(0.8)',
        opacity: 0.5,
      }
    } else if ((tIndex - 1 + length) % length === index) {
      item.style = {
        zIndex: 1,
        transform: 'translate(-69%,-50%) scale(0.8)',
        opacity: 0.5,
      }
    } else {
      item.style = {
        opacity: 0,
      }
    }
  })
}

function next() {
  const length = list.value.length
  slideTo((current + 1) % length)
}

function prev() {
  const length = list.value.length
  slideTo((current - 1 + length) % length)
}

let timeout

function stop() {
  clearTimeout(timeout)
}

function auto() {
  clearTimeout(timeout)
  timeout = setTimeout(() => {
    next()
    auto()
  }, 5000)
}

function pageVisibilityChange() {
  // 页面变为不可见时触发
  if (document.visibilityState == 'hidden') {
    stop()
  }
  // 页面变为可见时触发
  if (document.visibilityState == 'visible') {
    auto()
  }
}

onMounted(() => {
  slideTo(0)
  auto()
  document.addEventListener('visibilitychange', pageVisibilityChange)
})
onUnmounted(() => {
  stop()
  document.removeEventListener('visibilitychange', pageVisibilityChange)
})
</script>

<style lang="scss" scoped>
@import '@/common/css/variable.scss';

.home-slider {
  position: relative;
  .btn-prev,
  .btn-next {
    position: absolute;
    top: 50%;
    z-index: 10;
    transform: translateY(-50%);
    display: block;
    width: 3.1rem;
    height: 3.1rem;
    background: url('@/assets/page-home/slider-pointer.png') center center / contain no-repeat;
    cursor: pointer;
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: -1;
      width: 2rem;
      height: 2rem;
      transform: translate(-48%, -52%);
      border-radius: 50%;
      box-shadow: 0 0 1.5rem 0.25rem $color-blue;
      transition: opacity 0.2s;
      opacity: 0;
    }
    &:hover {
      &::before {
        opacity: 1;
      }
    }
  }
  .btn-prev {
    left: 0;
    transform: translateY(-50%);
  }
  .btn-next {
    right: 0;
    transform: translateY(-50%) rotate(180deg);
  }
  .list {
    position: relative;
    margin: 2rem auto;
    height: 30rem;
    @media (max-width: 768.89px) {
      height: 18rem;
    }
  }
  .item {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 45rem;
    transform: translate(-50%, -50%);
    transition: transform 0.5s, opacity 0.5s;
    @media (max-width: 768.89px) {
      width: 28rem;
    }
    .image {
      display: block;
      width: 100%;
      border-radius: 1rem;
    }
    &.current {
      &:hover {
        transform: translate(-50%, -50%) scale(1.05);
      }
    }
  }
}
</style>

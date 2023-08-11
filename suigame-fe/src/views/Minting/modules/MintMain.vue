<template>
  <main class="minting-main">
    <section class="screen">
      <div class="left"></div>
      <div :class="['center', true ? 'empty' : '']">
        <img class="img" :src="nft.img" />
        <div class="btns">
          <Button class="btn-feed">Feed</Button>
          <Button class="btn-boost" @click="onBoost">Boost</Button>
        </div>
      </div>
      <div class="right"></div>
    </section>
    <section :class="['attrs', true ? 'empty' : '']">
      <div class="info">
        <span class="name">{{ info.name }}</span>
        <span class="id">#{{ info.id }}</span>
      </div>
      <div class="progress">
        <div class="label">Progress(by level): {{ progress.level }}/{{ progress.total }}</div>
        <div class="bar">
          <div class="full" :style="{ width: `${(progress.level / progress.total) * 100}%` }"></div>
        </div>
      </div>
      <ul class="attr-list">
        <li class="attr-item" v-for="attr in attrs" :key="attr">
          <img class="icon" :src="attr.icon" />
          <div class="label">{{ attr.label }}</div>
          <div class="value">{{ attr.value }}</div>
        </li>
      </ul>
      <Button class="btn-stake">Stake</Button>
    </section>
  </main>
  <BoostDialog ref="$BoostDialog" />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Button from '@/components/Button.vue'
import BoostDialog from './BoostDialog.vue'

const nft = ref({
  img: new URL('@/assets/page-minting/comp-mintmain/nft-caesar.png', import.meta.url).href,
})

const info = ref({
  name: 'Caesar',
  id: '123456',
})

const progress = ref({
  total: 2,
  level: 1,
})

const attrs = ref([
  {
    icon: new URL('@/assets/page-minting/comp-mintmain/attr-hashrate.png', import.meta.url).href,
    label: 'Hashrate',
    value: 1,
  },
  {
    icon: new URL('@/assets/page-minting/comp-mintmain/attr-hp.png', import.meta.url).href,
    label: 'HP',
    value: 0,
  },
  {
    icon: new URL('@/assets/page-minting/comp-mintmain/attr-str.png', import.meta.url).href,
    label: 'STR',
    value: 0,
  },
  {
    icon: new URL('@/assets/page-minting/comp-mintmain/attr-mag.png', import.meta.url).href,
    label: 'MAG',
    value: 1,
  },
  {
    icon: new URL('@/assets/page-minting/comp-mintmain/attr-int.png', import.meta.url).href,
    label: 'INT',
    value: 1,
  },
  {
    icon: new URL('@/assets/page-minting/comp-mintmain/attr-gold.png', import.meta.url).href,
    label: 'GOLD',
    value: 1,
  },
])

const $BoostDialog = ref()
function onBoost() {
  $BoostDialog.value.show()
}

onMounted(() => {
  // $BoostDialog.value.show()
})
</script>

<style lang="scss" scoped>
.minting-main {
  display: flex;
  margin-bottom: 1.6rem;
  @media (max-width: 768.89px) {
    display: block;
  }
  .screen {
    position: relative;
    flex: 2;
    background: url('@/assets/page-minting/comp-mintmain/bg-screen.png') center center / cover
      no-repeat;
    border-radius: 0.5rem;
    @media (max-width: 768.89px) {
      height: 27rem;
      margin-bottom: 4rem;
    }
    .left {
      position: absolute;
      top: 0;
      left: 0;
      width: 9rem;
      height: 100%;
      @media (max-width: 768.89px) {
        width: 0;
      }
    }
    .center {
      position: relative;
      width: 100%;
      height: 100%;
      &.empty {
        background: url('@/assets/page-minting/comp-mintmain/nft-box.png') center center / auto 100%
          no-repeat;
        > * {
          display: none;
        }
      }
      .img {
        position: absolute;
        top: 42%;
        left: 50%;
        max-width: 63%;
        max-height: 63%;
        transform: translate(-50%, -50%);
        @media (max-width: 768.89px) {
          top: 50%;
        }
      }
      .btns {
        position: absolute;
        bottom: 1rem;
        left: 50%;
        white-space: nowrap;
        transform: translate(-50%, 0);
        @media (max-width: 768.89px) {
          bottom: -3rem;
        }
        .btn-feed,
        .btn-boost {
          width: 12.5rem;
          padding: 0;
          font-family: 'Gilroy-Bold';
          font-size: 1.4rem;
          line-height: 6rem;
          background: center center / contain no-repeat;
        }
        .btn-feed {
          background-image: url('@/assets/page-minting/comp-mintmain/btn-feed.png');
        }
        .btn-boost {
          background-image: url('@/assets/page-minting/comp-mintmain/btn-boost.png');
        }
      }
    }
    .right {
      position: absolute;
      top: 0;
      left: 0;
      width: 10rem;
      height: 100%;
      @media (max-width: 768.89px) {
        width: 0;
      }
    }
  }
  .attrs {
    position: relative;
    box-sizing: border-box;
    flex: 1;
    max-width: 19rem;
    min-height: 27rem;
    padding: 1.8rem 1.6rem;
    margin-left: 2rem;
    background-color: #131686;
    border: 0.15rem solid #abb5ff;
    border-radius: 0.5rem;
    @media (max-width: 768.89px) {
      max-width: none;
      margin-bottom: 4rem;
      margin-left: 0;
    }
    &.empty {
      background: #131686 url('@/assets/page-minting/comp-mintmain/attr-placeholder.png') center
        center / 10rem auto no-repeat;
      > * {
        display: none !important;
      }
    }
    .info {
      .name {
        font-family: 'Gilroy-Bold';
        font-size: 1.8rem;
        color: #4aa3ff;
        @media (max-width: 768.89px) {
          font-size: 2rem;
        }
      }
      .id {
        margin-left: 0.5rem;
        font-size: 0.8rem;
        opacity: 0.6;
        @media (max-width: 768.89px) {
          font-size: 1.2rem;
        }
      }
    }
    .progress {
      margin: 1rem 0 2rem;
      .label {
        font-size: 0.8rem;
        opacity: 0.6;
        @media (max-width: 768.89px) {
          font-size: 1.2rem;
        }
      }
      .bar {
        position: relative;
        height: 0.5rem;
        margin-top: 0.9rem;
        overflow: hidden;
        background-color: rgba(74, 163, 255, 0.3);
        border-radius: 0.5rem;
        @media (max-width: 768.89px) {
          height: 0.8rem;
        }
      }
      .full {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        background-color: #4aa3ff;
      }
    }
    .attr-item {
      display: flex;
      align-items: center;
      margin: 1.2rem 0;
      font-size: 0.9rem;
      @media (max-width: 768.89px) {
        font-size: 1.4rem;
      }
      .icon {
        height: 1.2rem;
        @media (max-width: 768.89px) {
          height: 1.6rem;
        }
      }
      .label {
        flex: 1;
        margin: 0 1rem;
        opacity: 0.6;
      }
      .value {
        opacity: 0.6;
      }
    }
    .btn-stake {
      position: absolute;
      bottom: -3rem;
      left: 50%;
      width: 12.5rem;
      padding: 0;
      font-family: 'Gilroy-Bold';
      font-size: 1.4rem;
      line-height: 6rem;
      background: url('@/assets/page-minting/comp-mintmain/btn-stake.png') center center / contain
        no-repeat;
      transform: translate(-50%, 0);
    }
  }
}
</style>

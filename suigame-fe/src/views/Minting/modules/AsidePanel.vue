<template>
  <section class="minting-aside">
    <section class="fbx-price">
      <div class="price">0.6780</div>
      <div class="text">SUI current price</div>
    </section>
    <section class="announcement">
      <h1 class="title">Announcement</h1>
      <ul class="list">
        <li class="item" v-for="item in list" :key="item">
          <span class="text">{{ item.text }}</span>
        </li>
      </ul>
      <div class="bottom">
        <a class="more">More</a>
      </div>
    </section>
    <section class="infos">
      <div
        class="info-item"
        v-for="info in infos"
        :key="info"
        :style="{
          backgroundImage: `url(${info.background}) `,
        }"
      >
        <img class="icon" :src="info.icon" />
        <div class="content">
          <div class="value">{{ info.value }}</div>
          <div class="text">{{ info.text }}</div>
        </div>
      </div>
    </section>
    <section class="btn-wrap">
      <Button class="btn-claim">Claim Rewards</Button>
    </section>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import Button from '@/components/Button.vue'
import { formatDigits } from '@/common/js/utils'

const list = ref([{ text: 'How to mint Caesar' }])

const infos = ref({
  networkHashrate: {
    icon: new URL('@/assets/page-minting/comp-shareblock/icon-hashrate.png', import.meta.url).href,
    background: new URL('@/assets/page-minting/comp-asidepanel/info-bg1.png', import.meta.url).href,
    value: formatDigits(0),
    text: 'Network Hashrate',
  },
  myHashrate: {
    icon: new URL('@/assets/page-minting/comp-shareblock/icon-hashrate.png', import.meta.url).href,
    background: new URL('@/assets/page-minting/comp-asidepanel/info-bg2.png', import.meta.url).href,
    value: formatDigits(0),
    text: 'My Hashrate',
  },
  earned: {
    icon: new URL('@/assets/page-minting/comp-dashboard/icon-suigame.png', import.meta.url).href,
    background: new URL('@/assets/page-minting/comp-asidepanel/info-bg3.png', import.meta.url).href,
    value: formatDigits(0),
    text: 'Earned',
  },
})
</script>

<style lang="scss" scoped>
@import '@/common/css/variable.scss';

.minting-aside {
  width: 11rem;
  padding: 0 1rem;
  background-image: linear-gradient(180deg, #131739 0%, #0c1b86 100%);
  border: 5px solid #172252;
  @media (max-width: 768.89px) {
    order: 2;
    width: auto;
    margin: 0 1rem;
    border: 0 none;
  }
  .fbx-price {
    padding: 2rem 0;
    border-bottom: 0.05rem solid rgba(255, 255, 255, 0.11);
    .price {
      font-family: 'Gilroy-Bold';
      font-size: 1.7rem;
      @media (max-width: 768.89px) {
        font-size: 3rem;
      }
    }
    .text {
      font-size: 0.7rem;
      color: #606aa7;
      @media (max-width: 768.89px) {
        font-size: 1.4rem;
      }
    }
  }
  .announcement {
    height: 19rem;
    padding: 2rem 0;
    font-size: 0.8rem;
    @media (max-width: 768.89px) {
      font-size: 1.4rem;
    }
    .title {
      margin: 0.5rem 0;
      font-family: 'Gilroy-Bold';
      font-size: 1.1rem;
      @media (max-width: 768.89px) {
        font-size: 1.6rem;
      }
    }
    .list {
      max-height: 15rem;
      overflow-y: auto;
    }
    .item {
      display: flex;
      padding: 0.7rem 0;
      cursor: pointer;
      border-bottom: 0.05rem solid rgba(112, 112, 112, 0.21);
      &::before {
        width: 1rem;
        height: 1rem;
        margin-right: 0.5rem;
        content: '';
        background: url('@/assets/page-minting/comp-asidepanel/icon-link-0.png') 0 0 / 100%
          no-repeat;
        @media (max-width: 768.89px) {
          width: 1.4rem;
          height: 1.4rem;
          margin-right: 1rem;
        }
      }
      &:hover {
        &::before {
          background-image: url('@/assets/page-minting/comp-asidepanel/icon-link-1.png');
        }
      }
      &:last-child {
        border-bottom: none;
      }
    }
    .text {
      flex: 1;
      opacity: 0.6;
      @include ellipsis(1);
    }
    .bottom {
      text-align: right;
    }
    .more {
      display: inline-block;
      padding: 0.5rem;
      cursor: pointer;
      opacity: 0.9;
      &::after {
        display: inline-block;
        width: 0.5rem;
        height: 0.4rem;
        margin-left: 0.3rem;
        content: '';
        background: url('@/assets/page-minting/comp-asidepanel/icon-more.png') center right / auto
          100% no-repeat;
      }
    }
  }
  .infos {
    .info-item {
      display: flex;
      align-items: center;
      width: 70%;
      padding: 0.5rem 1rem;
      margin: 1.25rem auto;
      color: $color-black;
      background: center center / 100% 100% no-repeat;
      @media (max-width: 768.89px) {
        max-width: 20rem;
        padding: 0.5rem 2rem;
      }
    }
    .icon {
      width: 1rem;
      margin-right: 0.5rem;
      @media (max-width: 768.89px) {
        width: 2rem;
        margin-right: 1rem;
      }
    }
    .content {
      flex: 1;
    }
    .value {
      font-family: 'Gilroy-Bold';
      font-size: 0.8rem;
      @media (max-width: 768.89px) {
        font-size: 1.8rem;
      }
    }
    .text {
      font-size: 0.5rem;
      opacity: 0.6;
      @media (max-width: 768.89px) {
        font-size: 1.2rem;
      }
    }
  }
  .btn-wrap {
    padding: 1.25rem 0;
    text-align: center;
    .btn-claim {
      width: 7rem;
      font-family: 'Gilroy-Bold';
      line-height: 2.5rem;
      text-align: center;
      background: linear-gradient(180deg, #f84d9e 0%, #f64e9e 100%);
      border-radius: 0.3rem;
      box-shadow: 0 0 0.3rem 0.1rem #f84d9e;
      @media (max-width: 768.89px) {
        width: 11rem;
        font-size: 1.4rem;
        line-height: 4rem;
      }
    }
  }
}
</style>

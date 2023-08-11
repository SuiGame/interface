<template>
  <section class="home-section home-news" ref="corptonews">
    <div class="inner">
      <h1 class="title">Crypto news</h1>
      <div class="layout">
        <a class="link" v-for="item in list" :key="item" :href="item.link" target="_blank">
          <img class="image" :src="item.img" />
          <div class="info">
            <div class="info-tips" v-if="item.tips" v-html="item.tips"></div>
            <div class="info-title" v-html="item.title"></div>
            <div class="info-desc">{{ item.desc }}</div>
            <div class="info-more">LEARN MORE</div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const news = [
  {
    // eslint-disable-next-line max-len
    link: 'https://coinmarketcap.com/alexandria/article/sui-to-launch-mainnet-and-token-what-you-need-to-know',
    img: new URL('@/assets/page-home/news-1.png', import.meta.url).href,
    tips: 'Sui To Launch Token <br/> and Mainnet:',
    title: 'What You Need To Know',
    // eslint-disable-next-line max-len
    desc: 'Sui, a layer-1 delegated Proof-of-Stake (dPoS) blockchain built on Move, will launch its token on April 23, and mainnet on May 3, 2023.',
  },
  {
    link: 'https://coinmarketcap.com/alexandria/article/blockchain-gaming-pipedream-or-prophesy',
    img: new URL('@/assets/page-home/news-2.png', import.meta.url).href,
    tips: '',
    title: 'Blockchain Gaming: <br/> Pipedream or Prophesy? ',
    // eslint-disable-next-line max-len
    desc: 'CoinMarketCap Alexandria analyzes the state of blockchain gaming in 2023 — and its future potential.',
  },
  {
    // eslint-disable-next-line max-len
    link: 'https://coinmarketcap.com/alexandria/article/the-state-of-crypto-gaming-in-the-bear-market',
    img: new URL('@/assets/page-home/news-3.png', import.meta.url).href,
    tips: '',
    title: 'The State of Crypto <br/> Gaming in the Bear Market',
    // eslint-disable-next-line max-len
    desc: 'CoinMarketCap Alexandria takes a look at how the crypto gaming sector is faring in the current crypto winter.',
  },
  {
    link: 'https://coinmarketcap.com/alexandria/article/move-to-earn-fad-or-the-future',
    img: new URL('@/assets/page-home/news-4.png', import.meta.url).href,
    tips: '',
    title: 'Move to Earn: <br/> Fad or The Future?',
    // eslint-disable-next-line max-len
    desc: 'Does exercising and earning cryptocurrency rewards sound too good to be true? Read on to find out more about the latest trend intersecting between active lifestyle, social and Web3 elements.',
  },
]

const list = ref(news)
</script>

<style lang="scss" scoped>
@import '@/common/css/variable.scss';

.home-news {
  font-size: 1rem;
  @media (max-width: 768.89px) {
    font-size: 1.4rem;
  }
  &.animate {
    .link {
      animation: fadeInUp 1s both;
    }
  }
  .layout {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.2rem;
    margin: 5rem 0 4rem;
    @media (max-width: 768.89px) {
      grid-template-columns: repeat(1, 1fr);
    }
    .link {
      position: relative;
      display: flex;
      padding: 1em;
      overflow: hidden;
      line-height: 1.3;
      color: $color-white;
      cursor: pointer;
      background-color: #1a1919;
      opacity: 0;
      transition: box-shadow 0.15s;
      &:hover {
        box-shadow: 0 0 0 0.1em rgba($color-blue, 0.5);
      }
      &:nth-child(1) {
        animation-delay: 0.3s;
      }
      &:nth-child(2) {
      }
      &:nth-child(3) {
        animation-delay: 1.2s;
      }
      &:nth-child(4) {
        animation-delay: 0.7s;
      }
    }
    .image {
      width: 40%;
      margin-right: 1rem;
    }
    .info {
      display: flex;
      flex: 1;
      flex-direction: column;
      &-tips,
      &-title {
        font-size: 0.8em;
        font-weight: bold;
      }
      &-tips {
        margin-bottom: 0.5em;
        color: #00e6ff;
      }
      &-title {
        margin-bottom: 1em;
      }
      &-desc {
        flex: 1;
        font-size: 0.7em;
      }
      &-more {
        margin-top: 0.5em;
        font-size: 0.7em;
        color: $color-blue;
        &::after {
          display: inline-block;
          width: 1em;
          height: 1em;
          margin-left: 0.3em;
          vertical-align: -0.2em;
          content: '';
          background: url('@/assets/page-home/news-arrow.png') center center / 100% no-repeat;
        }
      }
    }
  }
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }

    to {
      opacity: 1;
      transform: none;
    }
  }
}
</style>

<template>
  <section class="minting-nfts">
    <div class="nfts-main">
      <ul class="list">
        <li :class="['item', true ? 'empty' : '']" v-for="nft in nfts" :key="nft">
          <div class="top">
            <span class="level">LEVEL {{ nft.level }}</span>
            <span class="id"># {{ nft.id }}</span>
          </div>
          <div class="img" :style="{ backgroundImage: `url(${nft.img})` }"></div>
        </li>
      </ul>
      <Button class="btn-mint">
        <img class="icon" src="@/assets/page-minting/comp-mintnfts/icon-mint.png" />
        Mint
      </Button>
    </div>
    <div class="nfts-placeholder"></div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import Button from '@/components/Button.vue'

const nfts = ref([
  {
    level: 1,
    id: 12345,
    img: new URL('@/assets/page-minting/comp-mintnfts/nft-placeholder.png', import.meta.url).href,
  },
  {
    level: 1,
    id: 12345,
    img: new URL('@/assets/page-minting/comp-mintnfts/nft-placeholder.png', import.meta.url).href,
  },
  {
    level: 1,
    id: 12345,
    img: new URL('@/assets/page-minting/comp-mintnfts/nft-placeholder.png', import.meta.url).href,
  },
  {
    level: 1,
    id: 12345,
    img: new URL('@/assets/page-minting/comp-mintnfts/nft-placeholder.png', import.meta.url).href,
  },
])
</script>

<style lang="scss" scoped>
.minting-nfts {
  display: flex;
  @media (max-width: 768.89px) {
    display: block;
  }
  .nfts-main {
    display: flex;
    flex: 2;
    @media (max-width: 768.89px) {
      display: block;
    }
  }
  .list {
    flex: 1;
    width: 0;
    overflow-x: auto;
    white-space: nowrap;
    @media (max-width: 768.89px) {
      width: auto;
    }
  }
  .item {
    display: inline-flex;
    flex-direction: column;
    width: 9rem;
    height: 5rem;
    margin-right: 1rem;
    overflow: hidden;
    background-color: #131686;
    border: 0.05rem solid rgba(222, 230, 255, 0.5);
    border-radius: 0.3rem;
    &:last-child {
      margin-right: 0;
    }
    @media (max-width: 768.89px) {
      width: 13.5rem;
      height: 7.5rem;
    }
    &.empty {
      background: #131686 url('@/assets/page-minting/comp-mintnfts/nft-placeholder.png') center
        center / 3.5rem auto no-repeat;
      > * {
        display: none !important;
      }
    }
    .top {
      overflow: hidden;
      background-color: #0949fc;
      .level {
        display: inline-block;
        padding: 0.2rem 0.2rem 0.4rem 0.3rem;
        font-size: 0.8rem;
        opacity: 0.9;
        @media (max-width: 768.89px) {
          padding: 0.3rem 0.3rem 0.5rem 0.4rem;
          font-size: 1.3rem;
        }
      }
      .id {
        float: right;
        padding: 0 0.5rem;
        font-size: 0.6rem;
        line-height: 1.2rem;
        color: rgba(9, 21, 108, 0.8);
        background-color: rgba(74, 163, 255, 0.3);
        border-bottom-left-radius: 1rem;
        @media (max-width: 768.89px) {
          padding: 0 0.7rem;
          font-size: 1.2rem;
          line-height: 1.8rem;
        }
      }
    }
    .img {
      flex: 1;
      background: center center / auto 85% no-repeat;
    }
  }
  .btn-mint {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 8.5rem;
    height: 3.6rem;
    margin: 0.7rem 0 0.7rem 2rem;
    font-family: 'Gilroy-Bold';
    font-size: 1.3rem;
    background: url('@/assets/page-minting/comp-mintnfts/btn-mint.png') 0 0 no-repeat;
    background-size: 100% 100%;
    border-radius: 0;
    @media (max-width: 768.89px) {
      width: 12.75rem;
      height: 5.4rem;
      margin: 1.5rem auto 1rem;
      font-size: 1.8rem;
    }
    .icon {
      height: 1.8rem;
      margin-right: 0.4rem;
      @media (max-width: 768.89px) {
        height: 2.1rem;
        margin-right: 0.8rem;
      }
    }
  }
  .nfts-placeholder {
    box-sizing: border-box;
    flex: 1;
    max-width: 19rem;
    padding-left: 3.2rem;
    margin-left: 2rem;
    @media (max-width: 768.89px) {
      display: none;
    }
  }
}
</style>

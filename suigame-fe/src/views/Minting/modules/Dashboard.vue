<template>
  <section class="minting-dashboard">
    <main class="main-wrap">
      <div class="dashboard-item" v-for="item in list" :key="item">
        <img class="dashboard-icon" :src="item.icon" />
        <span class="dashboard-text">{{ item.text }}</span>
        <span class="dashboard-value">{{ item.value }}</span>
      </div>
    </main>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { formatDigits } from '@/common/js/utils'

const list = ref([
  {
    icon: new URL('@/assets/page-minting/comp-dashboard/icon-caesar.png', import.meta.url).href,
    text: 'Total Caesar minted',
    value: formatDigits(0),
  },
  {
    icon: new URL('@/assets/page-minting/comp-dashboard/icon-sui.png', import.meta.url).href,
    text: 'SuiGame Foundation',
    value: formatDigits(0),
  },
  {
    icon: new URL('@/assets/page-minting/comp-dashboard/icon-suigame.png', import.meta.url).href,
    text: 'Total SGT PTS',
    value: formatDigits(0),
  },
  {
    icon: new URL('@/assets/page-minting/comp-dashboard/icon-suigame.png', import.meta.url).href,
    text: 'SGT PTS (24H)',
    value: formatDigits(0),
  },
])
</script>

<style lang="scss" scoped>
@import '@/common/css/variable.scss';

.minting-dashboard {
  display: flex;
  height: 4.5rem;
  color: $color-white;
  background: #001933 url('@/assets/page-minting/comp-dashboard/bg.png') right center / auto 100%
    no-repeat;
  @media (max-width: 768.89px) {
    height: auto;
    padding: 1.5rem 0;
    background-image: none;
  }
  .main-wrap {
    display: flex;
    flex: 1;
    gap: 2vw;
    align-items: center;
    max-width: 75rem;
    margin-top: 0;
    margin-bottom: 0;
    color: inherit;
    @media (max-width: 768.89px) {
      flex-wrap: wrap;
    }
  }
  .dashboard {
    &-item {
      display: flex;
      flex: 1;
      align-items: center;
      @media (max-width: 768.89px) {
        flex: auto;
        width: 100%;
      }
      &:first-child {
        .dashboard-icon {
          width: 1.1rem;
          @media (max-width: 768.89px) {
            width: 1.4rem;
          }
        }
      }
    }
    &-icon {
      width: 0.9rem;
      opacity: 0.9;
      @media (max-width: 768.89px) {
        width: 1.4rem;
      }
    }
    &-text {
      margin: 0 0.5rem;
      font-size: 0.75rem;
      white-space: nowrap;
      opacity: 0.6;
      @media (max-width: 768.89px) {
        flex: 1;
        margin: 0 1rem;
        font-size: 1.4rem;
      }
    }
    &-value {
      font-family: 'Gilroy-Bold';
      font-size: 1.2rem;
      font-weight: bold;
      color: #00ecfd;
      @media (max-width: 768.89px) {
        flex: 1;
        font-size: 1.8rem;
      }
    }
  }
}
</style>

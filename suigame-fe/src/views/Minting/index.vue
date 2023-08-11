<template>
  <Nav2 />
  <Dashboard />
  <section class="minting-wrap">
    <AsidePanel />
    <section class="minting-right">
      <ShareBlock />
      <section class="minting-panel">
        <MintInfos />
        <MintMain />
        <MintNfts />
      </section>
    </section>
  </section>
</template>

<script setup>
import Nav2 from '@/modules/Nav2.vue'
import Dashboard from './modules/Dashboard.vue'
import AsidePanel from './modules/AsidePanel.vue'
import ShareBlock from './modules/ShareBlock.vue'
import MintInfos from './modules/MintInfos.vue'
import MintMain from './modules/MintMain.vue'
import MintNfts from './modules/MintNfts.vue'
</script>

<style lang="scss" scoped>
@import '@/common/css/variable.scss';

.minting-wrap {
  display: flex;
  padding-top: 1.8rem;
  font-family: 'Gilroy-Medium';
  color: $color-white;
  background-color: #141621;
  @media (max-width: 768.89px) {
    flex-direction: column;
    padding-bottom: 8rem;
  }
}
.minting-right {
  flex: 1;
  padding: 0 2rem;
  @media (max-width: 768.89px) {
    box-sizing: border-box;
    order: 1;
    width: 100%;
    padding: 0 1rem;
  }
}
.minting-panel {
  padding: 1.5rem 1.5rem;
  margin: 1.8rem 0;
  background: url('@/assets/page-minting/page-index/bg-main.png') 0 0 / 100% 100% no-repeat;
  @media (max-width: 768.89px) {
    background-image: url('@/assets/page-minting/page-index/bg-main-m.png');
  }
}
</style>

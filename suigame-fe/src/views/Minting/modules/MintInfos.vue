<template>
  <header class="minting-infos">
    <section class="infos">
      <div class="item">
        <img class="icon" src="@/assets/page-minting/comp-mintinfos/icon-sui.png" />
        <span>{{ info.sui }}</span>
      </div>
      <div class="item">
        <img class="icon" src="@/assets/page-minting/comp-mintinfos/icon-suigame.png" />
        <span>{{ info.suigame }}</span>
      </div>
      <div class="item">
        <img class="icon" src="@/assets/page-minting/comp-mintinfos/icon-caesar.png" />
        <span>{{ info.nft }}</span>
      </div>
      <a class="btn-daily-bonus">
        <img class="img" src="@/assets/page-minting/comp-mintinfos/btn-daily-bonus.png" />
      </a>
    </section>
    <aside class="aside">
      <a class="btn-aside" @click="onInstructions">
        <img class="icon" src="@/assets/page-minting/comp-mintinfos/icon-tips.png" />
        <span class="text">Tips</span>
      </a>
      <a class="btn-aside">
        <img class="icon" src="@/assets/page-minting/comp-mintinfos/icon-guide.png" />
        <span class="text">Guide</span>
      </a>
    </aside>
    <InstructionsDialog ref="$InstructionsDialog"></InstructionsDialog>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import InstructionsDialog from './InstructionsDialog.vue'

const info = ref({
  sui: 0,
  suigame: 0,
  nft: 0,
})

const $InstructionsDialog = ref()
function onInstructions() {
  $InstructionsDialog.value.show()
}
</script>

<style lang="scss" scoped>
.minting-infos {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  .infos {
    position: relative;
    flex: 2;
    margin-right: 1rem;
    background-color: #161e56;
    border: 0.1rem solid #6758ff;
    border-radius: 0.5rem;
    @media (max-width: 768.89px) {
      margin-right: 0;
    }
  }
  .item {
    display: inline-block;
    padding: 0.6rem 0;
    margin: 0 1.5rem;
    font-size: 1rem;
    @media (max-width: 768.89px) {
      padding: 1rem 0;
      font-size: 1.6rem;
    }
    .icon {
      height: 1rem;
      margin-right: 0.6rem;
      vertical-align: -0.15rem;
      @media (max-width: 768.89px) {
        height: 1.6rem;
        vertical-align: -0.2rem;
      }
    }
  }
  .btn-daily-bonus {
    position: absolute;
    top: -5%;
    right: -1rem;
    height: 114%;
    cursor: pointer;
    @media (max-width: 768.89px) {
      display: none;
    }
    .img {
      display: block;
      height: 100%;
    }
  }
  .aside {
    box-sizing: border-box;
    flex: 1;
    max-width: 19rem;
    padding-left: 3.2rem;
    margin-left: 2rem;
    text-align: right;
    @media (max-width: 768.89px) {
      display: none;
    }
  }
  .btn-aside {
    display: inline-block;
    font-family: 'Gilroy-Bold';
    cursor: pointer;
    &:not(:first-child) {
      margin-left: 2.5rem;
    }
    .icon {
      height: 1.3rem;
      margin-right: 0.6rem;
      vertical-align: middle;
    }
  }
}
</style>

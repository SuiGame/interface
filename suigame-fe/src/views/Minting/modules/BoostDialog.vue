<template>
  <Dialog :visible="visible" class="dialog-boost">
    <main class="boost-main">
      <a class="close" @click="onClose"></a>
      <div class="image"></div>
      <div class="info">
        <h1 class="title">Boost your Caesar now</h1>
        <div class="text-wrap">
          <div class="text">You need</div>
          <div>
            <span>Lv.1</span>
            <span class="text-to">To</span>
            <span>Lv.12</span>
          </div>
        </div>
        <div class="input-wrap">
          <img class="icon" src="@/assets/page-minting/comp-mintinfos/icon-suigame.png" />
          <input class="input" type="text" v-model="value" />
        </div>
        <div class="text-wrap">
          <div class="text">to boost</div>
        </div>
        <div class="btns">
          <Button class="btn-confirm">Confirm</Button>
        </div>
        <p class="desc">
          Boost <span class="color">Caeser #234</span> to the max level and highest hashrate with
          just one click, and enjoy all the benefits of upgrading from Level 1 to Level 12.
        </p>
      </div>
    </main>
  </Dialog>
</template>

<script setup>
import { ref } from 'vue'
import Dialog from '@/components/Dialog.vue'
import Button from '@/components/Button.vue'

const visible = ref(false)
function show() {
  visible.value = true
}
function hide() {
  visible.value = false
}

function onClose() {
  hide()
}

const value = ref(0)

defineExpose({
  show,
  hide,
})
</script>

<style lang="scss" scoped>
@import '@/common/css/variable.scss';

.dialog-boost {
  .boost-main {
    position: relative;
    box-sizing: border-box;
    display: flex;
    width: 52rem;
    height: 25rem;
    padding: 2.5rem;
    margin: 3rem 0;
    background: url('@/assets/page-minting/dialog-boost/bg.png') 0 0 / 100% 100% no-repeat;
    @media (max-width: 768.89px) {
      display: block;
      width: 32.5rem;
      height: 67.9rem;
      padding: 3.8rem 3.2rem;
      background-image: url('@/assets/page-minting/dialog-boost/bg-m.png');
    }
  }
  .close {
    position: absolute;
    top: -2rem;
    right: -2rem;
    display: inline-block;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    background: url('@/assets/page-minting/common/close.png') center center / 2rem auto no-repeat;
  }
  .image {
    width: 21.2rem;
    background: url('@/assets/page-minting/comp-mintmain/nft-caesar.png') center center / 70% auto
      no-repeat;
    @media (max-width: 768.89px) {
      width: 100%;
      height: 25.6rem;
    }
  }
  .info {
    flex: 1;
    padding: 0 1.5rem 0 1rem;
    text-align: left;
    @media (max-width: 768.89px) {
      padding: 1rem 0;
    }
    .title {
      padding: 0.4rem 1.2rem 0.8rem;
      margin-bottom: 1.5rem;
      font-family: 'Gilroy-Bold';
      font-size: 1.5rem;
      border-bottom: 0.05rem solid rgba(255, 255, 255, 0.5);
      @media (max-width: 768.89px) {
        padding: 1rem 0;
        font-size: 1.8rem;
        text-align: center;
        border-bottom: none;
      }
    }
    .text-wrap {
      display: flex;
      margin: 1rem 0;
      font-size: 1rem;
      @media (max-width: 768.89px) {
        font-size: 1.4rem;
      }
      .text {
        flex: 1;
      }
      .text-to {
        margin: 0 0.35rem;
        color: #c8c8c8;
      }
    }
    .input-wrap {
      display: flex;
      align-items: center;
      padding: 0 1.5rem;
      background-color: #1a1d97;
      border-radius: 0.3rem;
      .icon {
        height: 1.5rem;
        margin-right: 1rem;
        @media (max-width: 768.89px) {
          height: 2.5rem;
        }
      }
      .input {
        flex: 1;
        padding: 0;
        font-size: 1rem;
        line-height: 3rem;
        color: inherit;
        background-color: transparent;
        border: none;
        outline: none;
        box-shadow: none;
        @media (max-width: 768.89px) {
          font-size: 1.8rem;
          line-height: 4.5rem;
        }
      }
    }
    .btns {
      margin-top: -1.2rem;
      margin-right: -1rem;
      text-align: right;
      @media (max-width: 768.89px) {
        margin: 0 0 0.5rem 0;
        text-align: center;
      }
      .btn-confirm {
        width: 11.5rem;
        padding: 0;
        font-family: 'Gilroy-Bold';
        font-size: 1.1rem;
        line-height: 5.6rem;
        background: url('@/assets/page-minting/dialog-boost/btn-confirm.png') center center /
          contain no-repeat;
        @media (max-width: 768.89px) {
          width: 16.5rem;
          font-size: 1.5rem;
          line-height: 7.5rem;
        }
      }
    }
    .desc {
      @media (max-width: 768.89px) {
        line-height: 1.5;
      }
      .color {
        color: #949fff;
      }
    }
  }
}
</style>

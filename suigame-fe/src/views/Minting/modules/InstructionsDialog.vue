<template>
  <Dialog :visible="visible" class="dialog-instructions">
    <main class="boost-main">
      <a class="close" @click="onClose"></a>
      <header class="header">
        <h1>Feeding instructions</h1>
      </header>
      <main class="main">
        <p>1. Caesar NFT minting is free of charge, you need SUI tokens to cover the gas fee.</p>
        <p>2. Before feeding your Caesar, please ensure that you have staked it.</p>
        <p>
          3. When you feed Caesar with SUI tokens, not only does it level up, but its hashrate also
          increases. You can feed it once every 12 hours.
        </p>
        <p>
          4. Initially, a Caesar has a hashrate value of 1, which increases by 200 each time you
          feed your Ape.
        </p>
        <p>
          5. The higher the hashrate of your Caesar, the more SGT points you can earn through
          staking and mining. Accumulating more SGT points will result in a higher SGT token airdrop
          in the future upon TGE.
        </p>
        <p>
          6. The Caesar NFT consists of 12 levels. For more detailed information, please refer to
          the table below.
        </p>
      </main>
    </main>
  </Dialog>
</template>

<script setup>
import { ref } from 'vue'
import Dialog from '@/components/Dialog.vue'

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

defineExpose({
  show,
  hide,
})
</script>

<style lang="scss" scoped>
@import '@/common/css/variable.scss';

.dialog-instructions {
  .boost-main {
    position: relative;
    box-sizing: border-box;
    width: 30rem;
    padding: 0 2rem 2rem;
    background-color: #0949fc;
    border: 0.1rem solid #abb5ff;
    border-radius: 1.5rem;
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

  .header {
    line-height: 5rem;
    border-bottom: 0.05rem solid rgba(255, 255, 255, 0.5);
    h1 {
      font-size: 1.3rem;
      @media (max-width: 768.89px) {
        font-size: 1.4rem;
      }
    }
  }
  .main {
    font-size: 0.9rem;
    line-height: 1.5;
    text-align: left;
    @media (max-width: 768.89px) {
      font-size: 1.2rem;
    }
    p {
      margin: 1.5rem 0;
    }
  }
}
</style>

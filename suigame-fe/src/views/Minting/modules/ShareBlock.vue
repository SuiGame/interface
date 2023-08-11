<template>
  <section class="minting-share">
    <div class="item">
      <div class="label">
        <img class="icon" src="@/assets/page-minting/comp-shareblock/icon-hashrate.png" />
        <span class="text">Hashrate received</span>
      </div>
      <div class="value">{{ formatDigits(receivedCount) }}</div>
    </div>
    <div class="item">
      <div class="label">
        <img class="icon" src="@/assets/page-minting/comp-shareblock/icon-inviter.png" />
        <span class="text">Total Invited number</span>
      </div>
      <div class="value">{{ formatDigits(invitedCount) }}</div>
    </div>
    <div class="item flex-1">
      Refer a friend and earn a hashrate bonus! When Sam invites Tom to join the SuiGame Caesar
      feeding game, each time Tom feeds his Caesar, our algorithm automatically provides Sam with
      20% of the hashrate bonus. If Tom invites Alice to participate, the same mechanism applies.
      Additionally, Sam will be rewarded with a 10% bonus each time Alice feeds her Caesar.
    </div>
    <Button class="btn-share" @click="onShare">
      <span>Share link</span>
      <img class="icon-share" src="@/assets/page-minting/comp-shareblock/icon-share.png" />
      <img class="icon-gift" src="@/assets/page-minting/comp-shareblock/icon-gift.png" />
    </Button>
  </section>
  <ShareDialog ref="$shareDialog" />
</template>

<script setup>
import { ref } from 'vue'
import { formatDigits } from '@/common/js/utils'
import Button from '@/components/Button.vue'
import ShareDialog from './ShareDialog.vue'

const receivedCount = ref(0)
const invitedCount = ref(0)

const $shareDialog = ref()
function onShare() {
  $shareDialog.value.show()
}
</script>

<style lang="scss" scoped>
.minting-share {
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  @media (max-width: 768.89px) {
    flex-wrap: wrap;
  }
  .item {
    width: 9rem;
    margin-right: 1rem;
    font-size: 0.7rem;
    @media (max-width: 768.89px) {
      width: 50%;
      margin-right: 0;
      margin-bottom: 1rem;
      font-size: 1.4rem;
      &:nth-child(3) {
        flex: none;
        width: 100%;
        margin-bottom: 2rem;
        font-size: 1.2rem;
      }
    }
    .label {
      margin-bottom: 0.4rem;
      color: #b8c1f9;
    }
    .icon {
      width: 0.8rem;
      margin-right: 0.5rem;
      vertical-align: middle;
      @media (max-width: 768.89px) {
        width: 1.6rem;
        margin-right: 1rem;
      }
    }
    .text {
      vertical-align: middle;
    }
    .value {
      font-family: 'Gilroy-Bold';
      font-size: 1.5rem;
      @media (max-width: 768.89px) {
        font-size: 2.5rem;
      }
    }
  }
  .flex-1 {
    flex: 1;
  }
  .btn-share {
    position: relative;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width: 14rem;
    height: 3.7rem;
    padding: 0 1.5rem;
    font-family: 'Gilroy-Bold';
    font-size: 1.3rem;
    background: url('@/assets/page-minting/comp-shareblock/btn-share.png') top left / 100% 100%
      no-repeat;
    border-radius: 0;
    @media (max-width: 768.89px) {
      width: 21rem;
      height: 5.55rem;
      padding: 0 2rem;
      margin: 0 auto;
      font-size: 1.8rem;
    }
    .icon-share {
      width: 1.3rem;
      margin-left: 0.5rem;
      @media (max-width: 768.89px) {
        width: 2rem;
        margin-left: 1rem;
      }
    }
    .icon-gift {
      position: absolute;
      right: 0.3rem;
      bottom: 0;
      width: 4.5rem;
      @media (max-width: 768.89px) {
        width: 7rem;
      }
    }
  }
}
</style>

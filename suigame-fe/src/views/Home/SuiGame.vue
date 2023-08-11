<template>
  <section class="home-section home-suigame">
    <div class="inner">
      <div class="desc">
        <p class="text">
          An innovative Web3 game<br />
          distribution platform
        </p>
        <p class="small">which redefines the production dynamics within games.</p>
      </div>
      <div class="layout">
        <div class="item">
          <div class="item-desc">
            <p class="text">
              On-chain NFTs<br />
              redefine game assets
            </p>
            <p class="small">enabling authentic ownership of game assets by users</p>
          </div>
        </div>
        <div class="item">
          <div class="item-desc">
            <p class="text">
              Onboard millions of Web2<br />
              players into the Sui Network
            </p>
            <p class="small">enable them to seamlessly acquire NFT assets and ownership</p>
          </div>
        </div>
        <div class="item">
          <div class="item-desc">
            <p class="text">
              Lower the barriers<br />
              for Web2 game<br />
              developers to access<br />
              the Sui Network
            </p>
            <p class="small">assist them in launching blockchain-based games</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
@import '@/common/css/variable.scss';

.home-suigame {
  background: url('@/assets/page-home/comp-suigame/suigame-bg.png') 0 0 / cover no-repeat;
  &.animate {
    .desc {
      animation: fadeInUp 1s both;
    }
    .item {
      animation: fadeInUp 1s both;
    }
  }
  .desc {
    margin-bottom: 5rem;
    text-align: left;
    opacity: 0;
    .text {
      margin-bottom: 1.5rem;
      font-family: 'Gilroy-Bold';
      font-size: 2rem;
      line-height: 1.25;
    }
    .small {
      font-family: 'Gilroy-Light';
      font-size: 1.3rem;
    }
  }
  .layout {
    display: grid;
    grid-template-rows: 48% 48%;
    grid-template-columns: 48.35% 48.35%;
    gap: 4% 3.3%;
    margin: 3.5rem 0 3rem;
    @media (max-width: 768.89px) {
      display: block;
      width: auto;
    }
  }
  .item {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding-top: 77.419%;
    color: $color-white;
    cursor: pointer;
    // opacity: 0;
    @media (max-width: 768.89px) {
      width: auto;
      margin-bottom: 1.5rem;
    }
    &::before {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      content: '';
    }
    &:nth-child(1) {
      animation-delay: 0.1s;
      &::before {
        background: url('@/assets/page-home/comp-suigame/suigame-1.png') 0 0 / 100% auto no-repeat;
      }
    }
    &:nth-child(2) {
      animation-delay: 0.2s;
      &::before {
        background: url('@/assets/page-home/comp-suigame/suigame-2.png') 0 0 / 100% auto no-repeat;
      }
      .item-desc {
        .text {
          margin-bottom: 1rem;
        }
      }
    }
    &:nth-child(3) {
      grid-row-start: 1;
      grid-row-end: 3;
      grid-column-start: 2;
      grid-column-end: 3;
      padding-top: 161.082%;
      animation-delay: 0.3s;
      &::before {
        background: url('@/assets/page-home/comp-suigame/suigame-3.png') 0 0 / 100% auto no-repeat;
      }
      .item-desc {
        top: 5.2rem;
        left: 20%;
      }
    }
    .item-desc {
      position: absolute;
      top: 2.2rem;
      right: 2rem;
      left: 2rem;
      .text {
        margin-bottom: 1.5rem;
        font-family: 'Gilroy-Bold';
        font-size: 1.6rem;
        @media (max-width: 768.89px) {
          font-size: 2.1rem;
        }
      }
      .small {
        font-family: 'Gilroy-Light';
        font-size: 0.65rem;
        color: #b9bbff;
        @media (max-width: 768.89px) {
          font-size: 1.3rem;
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

<template>
  <section class="home-section home-ecosystem">
    <div class="inner">
      <div class="title-wrap">
        <h1 class="title">
          Creating a platform<br />
          that combines Web2 with Web3.
        </h1>
        <p class="desc">
          We're revolutionizing the concept of Steam<br />
          for the Web3 era on the Sui Network
        </p>
      </div>
      <div>
        <img class="img" src="@/assets/page-home/comp-ecosystem/ecosystem-1.png" />
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
@import '@/common/css/variable.scss';

.home-ecosystem {
  background: #000 url('@/assets/page-home/comp-ecosystem/ecosystem-bg.png') center top / 100% auto
    no-repeat;
  &.animate {
    .title-wrap {
      animation: fadeInUp 1s both;
    }
  }
  .title-wrap {
    opacity: 0;
  }
  .title {
    margin-bottom: 1.5rem;
  }
  .desc {
    font-family: 'Gilroy-Light';
    font-size: 1.3rem;
    text-align: center;
  }
  .img {
    width: 100%;
    margin: 6rem 0 2rem;
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

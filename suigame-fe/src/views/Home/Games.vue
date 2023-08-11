<template>
  <section class="home-section home-games">
    <div class="inner">
      <div class="title-wrap">
        <p class="title">
          Aiming to become the Nintendo<br />
          of the Sui blockchain.
        </p>
        <p class="desc">
          SuiGame, positioned as a one-stop service provider for blockchain games, selectively
          releases self-operated and third-party blockchain games in phases
        </p>
      </div>
      <ul class="list">
        <li class="item" v-for="game in games" :key="game" @click="onGame(game)">
          <img class="image" :src="game.image" />
          <div class="info">
            <div class="name">{{ game.name }}</div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const games = ref([
  {
    image: new URL('@/assets/page-home/games-card-1.png', import.meta.url).href,
    name: 'Farm Mania',
  },
  {
    image: new URL('@/assets/page-home/games-card-2.png', import.meta.url).href,
    name: '2nd Game',
  },
  {
    image: new URL('@/assets/page-home/games-card-3.png', import.meta.url).href,
    name: '3rd Game',
  },
])

function onGame(game) {
  if (game.name === 'Farm Mania') {
    alert('Coming soon')
  }
}
</script>

<style lang="scss" scoped>
@import '@/common/css/variable.scss';

.home-games {
  &.animate {
    .title-wrap {
      animation: fadeInUp 1s both;
    }
    .item {
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
  .list {
    display: grid;
    grid-template-rows: 47.415% 47.415%;
    grid-template-columns: 49.862% 48.022%;
    gap: 5.169% 2.116%;
    margin: 4rem 0 3rem;
    @media (max-width: 768.89px) {
      display: block;
      width: auto;
    }
  }
  .item {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    font-size: 2rem;
    color: $color-white;
    cursor: pointer;
    opacity: 0;
    @media (max-width: 768.89px) {
      width: auto;
      margin-bottom: 1.5rem;
      font-size: 3rem;
    }
    &:nth-child(1) {
      grid-row-start: 1;
      grid-row-end: 3;
      animation-delay: 0.1s;
    }
    &:nth-child(2) {
      animation-delay: 0.2s;
    }
    &:nth-child(3) {
      animation-delay: 0.3s;
    }
    &:hover {
      box-shadow: 0 0 2em 0.5em rgba($color-blue, 0.1);
    }
  }
  .image {
    display: block;
    width: 100%;
  }
  .info {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    background-color: rgba($color-black, 0.42);
  }
  .name {
    flex: 1;
    padding: 0 1.5rem;
    font-weight: bold;
    line-height: 1.75;
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

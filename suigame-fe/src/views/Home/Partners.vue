<template>
  <section class="home-section home-partners">
    <div class="inner">
      <h1 class="title">Partners</h1>
      <div class="list">
        <a
          class="item"
          v-for="partner in partners"
          :key="partner"
          :href="partner.url"
          :target="partner.url ? '_blank' : ''"
        >
          <img class="logo" :src="partner.logo" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const partners = ref([
  {
    logo: new URL('@/assets/page-home/comp-partners/partners-1.png', import.meta.url).href,
    url: 'https://suipad.xyz/',
  },
  {
    logo: new URL('@/assets/page-home/comp-partners/partners-2.png', import.meta.url).href,
    url: 'https://suiet.app/',
  },
  {
    logo: new URL('@/assets/page-home/comp-partners/partners-3.png', import.meta.url).href,
    url: 'https://twitter.com/EthosWalletXYZ',
  },
  {
    logo: new URL('@/assets/page-home/comp-partners/partners-4.png', import.meta.url).href,
    url: 'https://taskon.xyz/',
  },
  {
    logo: new URL('@/assets/page-home/comp-partners/partners-5.png', import.meta.url).href,
    url: 'https://souffl3.com/',
  },
  {
    logo: new URL('@/assets/page-home/comp-partners/partners-6.png', import.meta.url).href,
    url: 'https://cgu.io/',
  },
  {
    logo: new URL('@/assets/page-home/comp-partners/partners-7.png', import.meta.url).href,
    url: 'https://mirrorworld.fun/',
  },
  {
    logo: new URL('@/assets/page-home/comp-partners/partners-8.png', import.meta.url).href,
    url: 'https://app.starrynift.art/',
  },
  {
    logo: new URL('@/assets/page-home/comp-partners/partners-9.png', import.meta.url).href,
    url: 'https://www.chillcats.xyz/',
  },
  {
    logo: new URL('@/assets/page-home/comp-partners/partners-10.png', import.meta.url).href,
    url: 'https://twitter.com/suiapepunks',
  },
  {
    logo: new URL('@/assets/page-home/comp-partners/partners-11.png', import.meta.url).href,
    url: 'https://twitter.com/shoshinsquare',
  },
  {
    logo: new URL('@/assets/page-home/comp-partners/partners-12.png', import.meta.url).href,
    url: 'https://twitter.com/Minimars_Sui',
  },
  {
    logo: new URL('@/assets/page-home/comp-partners/partners-13.png', import.meta.url).href,
    url: 'https://twitter.com/SuiDuckz',
  },
  {
    logo: new URL('@/assets/page-home/comp-partners/partners-14.png', import.meta.url).href,
    url: 'https://twitter.com/NinjaGameGuild',
  },
  {
    logo: new URL('@/assets/page-home/comp-partners/partners-15.png', import.meta.url).href,
    url: 'https://twitter.com/SuiGoats',
  },
  {
    logo: new URL('@/assets/page-home/comp-partners/partners-16.png', import.meta.url).href,
    url: 'https://twitter.com/CassavaNetwork',
  },
  {
    logo: new URL('@/assets/page-home/comp-partners/partners-17.png', import.meta.url).href,
    url: 'https://sabaiecoverse.com/',
  },
  {
    logo: new URL('@/assets/page-home/comp-partners/partners-18.png', import.meta.url).href,
    url: 'https://twitter.com/Releap_IO',
  },
  {
    logo: new URL('@/assets/page-home/comp-partners/partners-19.png', import.meta.url).href,
    url: 'https://twitter.com/PixelSoulGG',
  },
  {
    logo: new URL('@/assets/page-home/comp-partners/partners-20.png', import.meta.url).href,
    url: 'https://twitter.com/Sui_start',
  },
  {
    logo: new URL('@/assets/page-home/comp-partners/partners-21.png', import.meta.url).href,
    url: 'https://twitter.com/rhettypete01',
  },
  {
    logo: new URL('@/assets/page-home/comp-partners/partners-22.png', import.meta.url).href,
    url: 'https://twitter.com/KeepSakeMarket',
  },
  {
    logo: new URL('@/assets/page-home/comp-partners/partners-23.png', import.meta.url).href,
    url: 'https://www.atem.io/',
  },
  {
    logo: new URL('@/assets/page-home/comp-partners/partners-24.png', import.meta.url).href,
    url: 'https://twitter.com/dreamgame_8bit',
  },
  {
    logo: new URL('@/assets/page-home/comp-partners/partners-25.png', import.meta.url).href,
    url: 'https://sanr.app/?utm_source=twitter',
  },
  {
    logo: new URL('@/assets/page-home/comp-partners/partners-26.png', import.meta.url).href,
    url: 'https://twitter.com/LegendofArcadia',
  },
])
</script>

<style lang="scss" scoped>
@import '@/common/css/variable.scss';

.home-partners {
  background: url('@/assets/page-home/comp-partners/partners-bg.png') center center / cover
    no-repeat;
  &.animate {
    .item {
      animation: fadeInUp 1s both;
    }
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 1.5rem 0 3rem;
  }
  .item {
    min-width: 7vw;
    margin: 1.5vw 1.2vw;
    line-height: 5rem;
    text-align: center;
    transition: border-color 0.2s;
    @media (max-width: 768.89px) {
      margin: 1.5vw 2.5vw;
    }
    &:nth-child(1) {
      animation-delay: 0.15s;
      .logo {
        height: 1.85rem;
      }
    }
    &:nth-child(2) {
      animation-delay: 0.25s;
    }
    &:nth-child(3) {
      animation-delay: 0.1s;
    }
    &:nth-child(4) {
      animation-delay: 0.45s;
      .logo {
        height: 1.55rem;
      }
    }
    &:nth-child(5) {
      animation-delay: 0.65s;
    }
    &:nth-child(6) {
      animation-delay: 0.55s;
    }
    &:nth-child(7) {
      animation-delay: 0.75s;
      .logo {
        height: 1.4rem;
      }
    }
    &:nth-child(8) {
      animation-delay: 0.5s;
    }
    &:nth-child(9) {
      animation-delay: 0.85s;
    }
    &:nth-child(10) {
      animation-delay: 0.35s;
      .logo {
        height: 2.4rem;
      }
    }
    &:nth-child(11) {
      animation-delay: 0.95s;
      .logo {
        height: 1.9rem;
      }
    }
    &:nth-child(12) {
      animation-delay: 1s;
      .logo {
        height: 2.4rem;
      }
    }
    &:nth-child(13) {
      animation-delay: 1.05s;
      .logo {
        height: 2.4rem;
      }
    }
    &:nth-child(14) {
      animation-delay: 1.25s;
      .logo {
        height: 1.9rem;
      }
    }
    &:nth-child(15) {
      animation-delay: 1.15s;
      .logo {
        height: 2.4rem;
      }
    }
    &:nth-child(16) {
      animation-delay: 1.45s;
      .logo {
        height: 1.4rem;
      }
    }
    &:nth-child(17) {
      animation-delay: 1.6s;
      .logo {
        height: 1.6rem;
      }
    }
    &:nth-child(18) {
      animation-delay: 1.85s;
      .logo {
        height: 1.6rem;
      }
    }
    &:nth-child(19) {
      animation-delay: 1.75s;
      .logo {
        height: 1.9rem;
      }
    }
    &:nth-child(20) {
      animation-delay: 1.95s;
      .logo {
        height: 2.5rem;
      }
    }
    &:nth-child(21) {
      animation-delay: 2.05s;
      .logo {
        height: 1.5rem;
      }
    }
    &:nth-child(22) {
      animation-delay: 2.35s;
      .logo {
        height: 1.45rem;
      }
    }
    &:nth-child(23) {
      animation-delay: 2.15s;
      .logo {
        height: 1.35rem;
      }
    }
    &:nth-child(24) {
      animation-delay: 2.35s;
      .logo {
        height: 2.2rem;
      }
    }
    &:nth-child(25) {
      animation-delay: 2.25s;
      .logo {
        height: 2rem;
      }
    }
    &:nth-child(26) {
      animation-delay: 2.55s;
      .logo {
        height: 2rem;
      }
    }
  }
  .logo {
    height: 2.05rem;
    vertical-align: middle;
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

<template>
  <footer class="home-footer">
    <div class="footer-bg">
      <video
        ref="refVideo"
        class="video"
        src="@/assets/page-home/video-footer.mp4"
        muted
        loop
        autoplay
      ></video>
    </div>
    <main class="main">
      <img class="logo" src="@/assets/common/logo.png" />
      <nav class="nav-links">
        <a class="nav-link twitter" href="https://twitter.com/SuiGame_io" target="_blank"></a>
        <a
          class="nav-link discord"
          href="https://discord.com/invite/qKBzrQhVqX"
          target="_blank"
        ></a>
        <a class="nav-link medium" href="https://medium.com/@suigame" target="_blank"></a>
        <!-- <a class="nav-link telegram" href="https://t.me/SuiGame_io" target="_blank"></a> -->
        <a class="nav-link email" @click="onEmail"></a>
      </nav>
      <aside class="aside">
        <p>
          The content in this article does not constitute a recommendation to sell any security
          tokens and does not constitute an invitation to purchase.
        </p>
        <p>
          Read more in SuiGame
          <a class="link" href="/SuiGame Terms-of-Service.pdf" target="_blank">Terms of Service</a>
        </p>
      </aside>
    </main>
  </footer>
  <EmailDialog ref="emailDialog"></EmailDialog>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import EmailDialog from './components/EmailDialog.vue'

const emailDialog = ref()
function onEmail() {
  emailDialog.value.show()
}

const refVideo = ref()
function onVideo() {
  if (refVideo.value.paused) {
    refVideo.value.play()
  }
}

onMounted(() => {
  onVideo()
  document.addEventListener('click', onVideo)
})
onUnmounted(() => {
  document.removeEventListener('click', onVideo)
})
</script>

<style lang="scss" scoped>
@import '@/common/css/variable.scss';

.home-footer {
  position: relative;
  min-height: 14rem;

  .footer-bg {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    .video {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .main {
    position: relative;
    z-index: 1;
    padding: 2rem 0;
    text-align: center;
    .logo {
      display: block;
      width: 10rem;
      margin: 0.5rem auto 1.8rem;
    }
    .nav-links {
      .nav-link {
        display: inline-block;
        width: 2rem;
        height: 2rem;
        margin: 0 0.8rem;
        cursor: pointer;
        background: center center / 50% auto no-repeat;
        border: 0.05rem solid rgba($color-white, 0.2);
        border-radius: 0.25rem;
        transition: 0.2s;
        @media (max-width: 768.89px) {
          width: 3rem;
          height: 3rem;
        }
        &:hover {
          background-color: $color-blue;
          border-color: $color-blue;
        }
        &.twitter {
          background-image: url('@/assets/comp-nav/social-twitter-1.png');
        }
        &.twitter:hover {
          background-image: url('@/assets/comp-nav/social-twitter-0.png');
        }
        &.discord {
          background-image: url('@/assets/comp-nav/social-discord-1.png');
        }
        &.discord:hover {
          background-image: url('@/assets/comp-nav/social-discord-0.png');
        }
        &.medium {
          background-image: url('@/assets/comp-nav/social-medium-1.png');
        }
        &.medium:hover {
          background-image: url('@/assets/comp-nav/social-medium-0.png');
        }
        &.telegram {
          background-image: url('@/assets/comp-nav/social-telegram-1.png');
        }
        &.telegram:hover {
          background-image: url('@/assets/comp-nav/social-telegram-0.png');
        }
        &.email {
          background-image: url('@/assets/page-home/social-email-1.png');
        }
        &.email:hover {
          background-image: url('@/assets/page-home/social-email-0.png');
        }
      }
    }
    .aside {
      margin-top: 1.8rem;
      font-size: 0.6rem;
      line-height: 2;
      color: $color-white;
      @media (max-width: 768.89px) {
        padding: 0 1rem;
        margin-top: 1.6rem;
        font-size: 1rem;
        line-height: 1.5;
      }
      .link {
        color: $color-blue;
        text-decoration: underline;
        cursor: pointer;
        &:hover {
          opacity: 0.9;
        }
      }
    }
  }
}
</style>

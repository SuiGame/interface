<template>
  <main class="comp-coming-soon">
    <img class="img" src="@/assets/common/coming-soon-text.png" />
  </main>
</template>

<script setup></script>

<style lang="scss" scoped>
.comp-coming-soon {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - var(--nav2-height));
  padding: 4rem 2rem;
  color: #4aa3ff;
  background: #021d87 url('@/assets/common/coming-soon-bg.png') 0 0 / cover no-repeat;
  .img {
    height: 7rem;
    @media (max-width: 768.89px) {
      height: 5rem;
      margin-top: -10rem;
    }
  }
}
</style>

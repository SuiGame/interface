<template>
  <button class="btn" type="button">
    <span class="text"><slot></slot></span>
    <div class="stars-wrap">
      <div class="stars"></div>
    </div>
    <div class="glow">
      <div class="circle"></div>
      <div class="circle"></div>
    </div>
  </button>
</template>

<script setup></script>

<style lang="scss" scoped>
@import '@/common/css/variable.scss';

.btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  height: 1.8em;
  font-size: 1rem;
  font-family: inherit;
  border: double 0.15em transparent;
  border-radius: 5em;
  background-size: 300% 300%;
  background-image: linear-gradient(#212121, #212121),
    linear-gradient(137.48deg, #4aa3ff 10%, #4affc5 45%, #4aa3ff 67%, #4aa3ff 87%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  backdrop-filter: blur(1em);
  transition: 0.5s;
  animation: gradient 5s ease infinite;
  cursor: pointer;
  @media (max-width: 768.89px) {
    font-size: 1.8rem;
  }
  &:hover {
    transform: scale(1.05);
    .stars-wrap {
      z-index: 1;
      background-color: #212121;
    }
  }
  &:active {
    border: double 0.15em #fe53bb;
    background-origin: border-box;
    background-clip: content-box, border-box;
    animation: none;
    .circle {
      background: #fe53bb;
    }
  }
}
.text {
  margin: 0 1.2em;
  z-index: 2;
  font-size: 0.7em;
  letter-spacing: 0.15em;
  color: white;
  text-shadow: 0 0 0.3em white;
}

.stars-wrap {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: 0.5s;
  backdrop-filter: blur(1em);
  border-radius: 5em;
}
.stars {
  position: relative;
  background: transparent;
  width: 200em;
  height: 200em;
  &::after {
    content: '';
    position: absolute;
    top: -10em;
    left: -100em;
    width: 100%;
    height: 100%;
    animation: animStarRotate 90s linear infinite;
    background-image: radial-gradient(white 1px, transparent 1%);
    background-size: 2.5em 2.5em;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -50%;
    width: 170%;
    height: 500%;
    animation: animStar 60s linear infinite;
    background-image: radial-gradient(white 1px, transparent 1%);
    background-size: 2.5em 2.5em;
    opacity: 0.5;
  }
}

.glow {
  position: absolute;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
}
.circle {
  flex: 1;
  height: 100%;
  filter: blur(2em);
  animation: pulse 4s infinite;
  z-index: -1;
  &:nth-of-type(1) {
    background: rgba(254, 83, 186, 0.636);
  }
  &:nth-of-type(2) {
    background: rgba(142, 81, 234, 0.704);
  }
}

@keyframes animStar {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-135em);
  }
}
@keyframes animStarRotate {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0);
  }
}
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@keyframes pulse {
  0% {
    transform: scale(0.75);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }
  100% {
    transform: scale(0.75);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
}
</style>

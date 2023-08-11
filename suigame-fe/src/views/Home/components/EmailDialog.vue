<template>
  <Dialog class="dialog-email" :visible="visible">
    <main class="main">
      <header class="header">
        <h1 class="title">Email</h1>
        <a class="close" @click="onHide"></a>
      </header>
      <section>
        <ul class="emails">
          <li class="row">
            <input id="emailInput1" class="input" type="text" value="support@SuiGame.io" />
            <hr class="line" />
            <Button
              id="emailBtn1"
              class="btn"
              data-clipboard-target="#emailInput1"
              :disabled="0 === copiedIndex"
            >
              {{ getCopyText(0 === copiedIndex) }}
            </Button>
          </li>
          <li class="row">
            <input id="emailInput2" class="input" type="text" value="business@SuiGame.io" />
            <hr class="line" />
            <Button
              id="emailBtn2"
              class="btn"
              data-clipboard-target="#emailInput2"
              :disabled="1 === copiedIndex"
            >
              {{ getCopyText(1 === copiedIndex) }}
            </Button>
          </li>
          <li class="row">
            <input id="emailInput3" class="input" type="text" value="hr@SuiGame.io" />
            <hr class="line" />
            <Button
              id="emailBtn3"
              class="btn"
              data-clipboard-target="#emailInput3"
              :disabled="2 === copiedIndex"
            >
              {{ getCopyText(2 === copiedIndex) }}
            </Button>
          </li>
        </ul>
      </section>
    </main>
  </Dialog>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import Dialog from '@/components/Dialog.vue'
import Button from '@/components/Button.vue'
import Clipboard from 'clipboard'

function onHide() {
  hide()
}

const visible = ref(false)

function show() {
  visible.value = true
}

function hide() {
  visible.value = false
}

defineExpose({
  show,
  hide,
})

const clipboards = []
let copiedIndex = ref(-1)

function getCopyText(hadCopied) {
  return hadCopied ? 'Copied' : 'Copy'
}

onMounted(() => {
  clipboards.push(
    new Clipboard('#emailBtn1'),
    new Clipboard('#emailBtn2'),
    new Clipboard('#emailBtn3')
  )
  clipboards.forEach((clipboard, index) => {
    clipboard.on('success', () => {
      copiedIndex.value = index
    })
  })
})
onUnmounted(() => {
  clipboards.forEach((clipboard) => {
    clipboard && clipboard.destroy()
  })
})
</script>

<style lang="scss" scoped>
@import '@/common/css/variable.scss';

.dialog-email {
  .main {
    box-sizing: border-box;
    width: 21em;
    padding: 0.65em 1em;
    font-family: 'Gilroy-Medium';
    font-size: 1rem;
    color: $color-white;
    text-align: left;
    background: url('@/assets/page-home/dialog-email-bg.png') top left / 100% 100% no-repeat;
    @media (max-width: 768.89px) {
      font-size: 1.4rem;
    }
  }
  .header {
    display: flex;
    align-items: center;
    line-height: 1.2;
    .title {
      flex: 1;
      font-size: 1.3em;
    }
    .close {
      display: block;
      width: 1.6em;
      height: 1.6em;
      margin-right: -0.5em;
      cursor: pointer;
      background: url('@/assets/common/close.png') center center / 0.7em auto no-repeat;
      &:hover {
        opacity: 0.9;
      }
    }
  }
  .emails {
    .row {
      display: flex;
      align-items: center;
      margin: 1em 0;
    }
    .input {
      padding: 0;
      margin: 0;
      font-family: inherit;
      font-size: 0.8em;
      color: inherit;
      background-color: transparent;
      border: none;
      outline: none;
    }
    .line {
      flex: 1;
      margin: 0 1em;
      border-bottom: none;
      opacity: 0.4;
    }
    .btn {
      width: 6em;
      padding: 0;
      font-size: 0.65em;
      line-height: 2;
      text-align: center;
      background-color: $color-blue;
      border-radius: 2em;
    }
  }
}
</style>

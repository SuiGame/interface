<template>
  <div class="cart-modal" v-if="visible" @click="onHide">
    <main class="cart-main" @click.stop="">
      <header class="header">
        <h1 class="title">{{ $t('Market2.YourCart') }}</h1>
        <a class="close" @click="onHide"></a>
      </header>
      <section class="summary">
        <div class="amount">{{ list.length }} Orders</div>
        <a class="delete" @click="onDelete">Delete</a>
      </section>
      <section class="orders">
        <ul class="list">
          <li
            :class="['item', item.checked ? 'checked' : '']"
            v-for="item in list"
            :key="item"
            @click="onToggle(item)"
          >
            <div class="project">
              <img class="icon" src="@/assets/common/token-fbx.png" />
              <span class="name">{{ item.CollectionName }}</span>
            </div>
            <div class="info">
              <img class="img" :src="item.TokenCoverUrl" />
              <div class="name">
                <div class="text">{{ item.TokenName }}</div>
                <div class="lv">
                  {{ item.TokenDegreeName + (item.TokenLevel ? `-${item.TokenLevel}` : '') }}
                </div>
                <div class="tips" v-if="item.disabled">invalid</div>
              </div>
              <div class="num">
                <div class="count">x{{ item.Amount }}</div>
                <div class="price">
                  <img class="icon" src="@/assets/common/token-fbx.png" />
                  <span class="text">{{ item.TotalPrice }}</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </section>
      <footer class="footer">
        <div class="total">
          <span class="label">Total</span>
          <span class="value">{{ total }} FBX</span>
        </div>
        <div class="btns">
          <Button class="btn-buy" :disabled="total <= 0" loader :handler="onBuy">
            <img class="icon" src="@/assets/page-market/btn-buy.png" />
            {{ $t('Market.BuyNow') }}
          </Button>
        </div>
      </footer>
    </main>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'
// import { getCart, rmCart, buyMulti } from '@/models/market.model'
import emitter from '@/common/js/emitter'

export default {
  components: {
    Button,
  },
  data() {
    return {
      visible: false,

      list: [],
    }
  },
  computed: {
    total() {
      let total = 0
      this.list.forEach((item) => {
        if (item.checked && !item.disabled) {
          total += parseFloat(item.TotalPrice)
        }
      })
      return total
    },
  },
  methods: {
    show() {
      this.visible = true

      this._getCart()

      this.$root.connect()
    },
    hide() {
      this.visible = false
    },

    onHide() {
      this.hide()
    },

    async onDelete() {
      if (this._deleting) return

      const swapIds = []
      this.list.forEach((item) => {
        if (item.checked) {
          swapIds.push(item.SwapId)
        }
      })
      if (!swapIds.length) return

      this._deleting = true
      await this._rmCart(swapIds)
      await this._getCart()
      this._deleting = false
    },

    onToggle(item) {
      item.checked = !item.checked
    },

    async onBuy() {
      const swapIds = []
      const orders = []
      this.list.forEach((item) => {
        if (item.checked && !item.disabled) {
          orders.push({
            swapId: item.SwapId,
            erc20Type: item.Erc20Type,
            erc20Addr: item.Erc20Addr,
            quantity: item.TotalPrice,
          })
          swapIds.push(item.SwapId)
        }
      })
      if (!orders.length) return

      try {
        // await buyMulti(orders)
        await this._rmCart(swapIds)
      } catch (err) {
        this.$modal.toast(err.message)
        return
      }

      this.$modal.toast('success')
      emitter.emit('cart-flush')
      await this._getCart()
    },

    async _getCart() {
      // const res = await getCart()
      // if (res.code != 200) {
      //   this.list = []
      //   console.warn(res.msg)
      //   return
      // }
      // this.list = (res.data || []).map((item) => {
      //   item.disabled = item.StateType != 'OPEN'
      //   item.checked = false
      //   return item
      // })
      // this.$emit('change', this.list)
    },
    async _rmCart(swapIds) {
      console.log('---', swapIds)
      // const res = await rmCart(swapIds)
      // if (res.code != 200) {
      //   console.warn(res.msg)
      //   return false
      // }
      // return true
    },
  },
  created() {
    this._getCart()

    emitter.on('cart-update', this._getCart)
  },
  unmounted() {
    emitter.off('cart-update', this._getCart)
  },
}
</script>

<style lang="scss" scoped>
@import '@/common/css/variable.scss';

.cart-modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  background-color: rgba($color-white, 0.8);

  .cart-main {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    width: 24rem;
    font-size: 1.2rem;
    text-align: left;
    background-color: $color-white;
    border-radius: 0.5rem;
    box-shadow: 0 0 0.6rem 0.05rem rgba(91, 92, 97, 0.16);
    @media (max-width: 768.89px) {
      width: 100%;
      font-size: 0.9rem;
    }
  }
  .header {
    display: flex;
    align-items: center;
    padding: 1rem 1.2rem 0.7rem 1.5rem;
    @media (max-width: 768.89px) {
      padding: 0.5rem 0.6rem 0.3rem 0.75rem;
    }
    .title {
      flex: 1;
      font-size: inherit;
      font-weight: 500;
    }
    .close {
      width: 1.6rem;
      height: 1.6rem;
      cursor: pointer;
      background: url('@/assets/common/close.png') center center / 0.9rem no-repeat;
    }
  }
  .summary {
    display: flex;
    align-items: center;
    padding: 0.7rem 1.2rem 1rem 1.5rem;
    font-size: 1rem;
    border-bottom: 0.1rem dashed $color-border;
    @media (max-width: 768.89px) {
      padding: 0.3rem 0.6rem 0.5rem 0.75rem;
      font-size: 0.8rem;
    }
    .amount {
      flex: 1;
    }
    .delete {
      padding: 0 0.6rem;
      font-size: 0.8em;
      line-height: 1.6;
      color: $color-gray;
      cursor: pointer;
      background-color: #f8f8f8;
      border-radius: 1rem;
      &:hover {
        background-color: darken(#f8f8f8, 5);
      }
    }
  }
  .orders {
    flex: 1;
    overflow-y: auto;
    .list {
    }
    .item {
      padding: 0 0.8rem 0.5rem;
      margin: 0.8rem;
      cursor: pointer;
      background-color: $color-white;
      border: 0.05rem solid $color-white;
      border-radius: 0.5rem;
      box-shadow: 0 0 0.6rem 0.05rem rgba(91, 92, 97, 0.16);
      @media (max-width: 768.89px) {
        padding: 0 0.6rem 0.4rem;
      }
      &:hover,
      &.checked {
        background-color: #eff5ff;
        border-color: $color-blue;
      }
      &.disabled {
        background-color: #f7f7f7;
      }
    }
    .project {
      display: flex;
      align-items: center;
      padding: 0.5rem 0;
      @media (max-width: 768.89px) {
        padding: 0.3rem 0;
      }
      .icon {
        display: block;
        width: 1rem;
        height: 1rem;
        margin-right: 0.5rem;
        @media (max-width: 768.89px) {
          width: 0.8rem;
          height: 0.8rem;
        }
      }
      .name {
        flex: 1;
        width: 0;
        font-size: 0.9rem;
        color: $color-gray;
        @include ellipsis(1);
        @media (max-width: 768.89px) {
          font-size: 0.75rem;
        }
      }
    }
    .info {
      display: flex;
      .img {
        display: block;
        width: 5rem;
        height: 5rem;
        @media (max-width: 768.89px) {
          width: 4rem;
          height: 4rem;
        }
      }
      .name {
        flex: 1;
        width: 0;
        padding: 0 0.5rem;
        .text {
          @include ellipsis(1);
        }
        .lv {
          font-size: 0.8rem;
          @media (max-width: 768.89px) {
            font-size: 0.7rem;
          }
        }
        .tips {
          margin-top: 1rem;
          font-size: 0.7rem;
          color: #db6060;
        }
      }
      .num {
        .count {
          text-align: center;
        }
        .price {
          padding: 0 0.5rem;
          line-height: 1.5;
          border: 0.05rem solid $color-border;
          border-radius: 1rem;
          @media (max-width: 768.89px) {
            padding: 0 0.4rem;
            line-height: 1.4;
          }
          .icon {
            width: 1rem;
            height: 1rem;
            margin-right: 0.2rem;
            vertical-align: -0.1rem;
            @media (max-width: 768.89px) {
              width: 0.7rem;
              height: 0.7rem;
            }
          }
          .text {
            font-size: 0.9rem;
            vertical-align: 0.1rem;
            @media (max-width: 768.89px) {
              font-size: 0.7rem;
              vertical-align: middle;
            }
          }
        }
      }
    }
  }
  .footer {
    padding: 0.8rem 0.7rem 1rem 0.7rem;
    box-shadow: 0px 0px 12px 1px rgba(91, 92, 97, 0.16);
    .total {
      display: flex;
      padding: 0 0.8rem;
      line-height: 5rem;
      border: 0.05rem solid #cfd6d9;
      border-radius: 1rem;
      @media (max-width: 768.89px) {
        line-height: 3rem;
        border-radius: 0.5rem;
      }
      .value {
        flex: 1;
        text-align: right;
        &::before {
          display: inline-block;
          width: 1rem;
          height: 1rem;
          margin-right: 0.3rem;
          content: '';
          background: url('@/assets/common/token-fbx.png') 0 0 / 100% no-repeat;
          @media (max-width: 768.89px) {
            width: 0.9rem;
            height: 0.9rem;
            vertical-align: -0.1rem;
          }
        }
      }
    }
    .btns {
      margin-top: 0.8rem;
      .btn-buy {
        @include btn-fill-color();
        box-sizing: border-box;
        width: 100%;
        font-size: 1.2rem;
        line-height: 3rem;
        @media (max-width: 768.89px) {
          font-size: 0.9rem;
          line-height: 2.7rem;
        }
      }
      .icon {
        height: 1.2rem;
        margin-right: 0.2rem;
        vertical-align: -0.15rem;
        @media (max-width: 768.89px) {
          height: 0.9rem;
        }
      }
    }
  }
}
</style>

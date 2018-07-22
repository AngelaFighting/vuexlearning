<template>
  <footer class="goods-footer cui-flex cui-flex-algin">
    <div class="goods-footer-info cui-flex cui-flex-item cui-flex-algin">
      <p class="goods-tatol-price">
        {{ $t("message.total") }}:<b class="price-box">¥ <span class="price-info">{{ totalPrice || 0 }}</span></b></b>
      </p>
      <p class="cui-flex-item goods-delivery-price">
        {{ $t("message.fee") }}:¥ {{ deliveryPrice }}
				</p>
    </div>
    <button type="button" class="goods-submit"
            :class="{'goods-submit-active': totalPrice >= parseFloat(minPrice) }">
      {{ cartStatus }}({{ totalNum }})
    </button>
  </footer>
</template>
<script>
  import {mapState, mapGetters, mapMutations} from "vuex";

  export default{
    name: 'Footer',
    computed: {
      ...mapState(['minPrice', 'deliveryPrice']),
      ...mapGetters(['totalPrice', 'totalNum']),
      cartStatus(){
        let cartStatusInfo = '';
        if (this.totalPrice == 0) {
          cartStatusInfo = `${ this.minPrice}` + this.$t("message.send")
        } else if (parseFloat(this.totalPrice) < this.minPrice && parseFloat(this.totalPrice) > 0) {
          cartStatusInfo = this.$t("message.owe") + `${this.minPrice - this.totalPrice}` + this.$t("message.send");
        } else {
          cartStatusInfo = this.$t("message.pay")
        }
        return cartStatusInfo
      }
    }
  }
</script>
<style>

  .price-box {
    color: #ff0000;
  }

  .price-info {
    font: 18px/1 "仿宋";
    font-weight: bold;
  }

  .goods-footer {
    position: relative;
    height: 45px;
    box-shadow: 0 0 2px rgba(0, 0, 0, .5);
    z-index: 10;
    background: #333;
    color: #fff;
    padding-left: 10px;
  }

  .goods-tatol-price {
    position: relative;
    padding-right: 10px;
    height: 45px;
    margin-right: 10px;
    font: 14px/45px "仿宋";
  }

  .goods-tatol-price:after {
    content: '';
    position: absolute;
    right: 0;
    top: 10px;
    bottom: 10px;
    background: #999;
    width: 2px;
    border-radius: 10px;
  }

  .goods-footer .price-info {
    font-size: 22px;
  }

  .goods-delivery-price {
    color: #666;
  }

  .goods-submit {
    height: 45px;
    min-width: 80px;
    border: none;
    padding: 0 10px;
    font: 16px/1 "仿宋";
    background: #999;
    color: #fff;
  }

  .goods-submit-active {
    background: #008000;
    color: #fff;
  }

  .goods-disable {
    background: #DDD;
    border-color: #ddd;
    cursor: not-allowed;
  }
</style>

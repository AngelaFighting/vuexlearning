<template>
  <li class="goods-item cui-flex">
    <div class="goods-content">
      <img class="goods-view" :src="goodInfo.image"/>
    </div>
    <div class="goods-info cui-flex-item cui-flex">
      <h3 class="goods-info-title">{{ goodInfo.name }}</h3>
      <div class="goods-description cui-flex-item">
        <p class="cui-ellipsis-3">{{ goodInfo.info }}</p>
      </div>
      <div class="goods-info-footer cui-flex cui-flex-algin">
        <div class="goods-price cui-flex-item">
          <p class="new-price">{{ $t("message.curPrice") }}: <b class="price-box">¥ <span
            class="price-info">{{ goodInfo.price }}</span></b>
          </p>
          <p class="old-price">
            <del>{{ $t("message.oldPrice") }}: ¥ {{ goodInfo.oldPrice }}</del>
          </p>
        </div>
        <div class="goods-cart cui-flex">
									<span class="goods-btn reduce-btn"
                        :class="{'goods-disable': goodInfo.num == 0}"
                        @click.stop="onReduce()">-</span>
          <div class="goods-input cui-flex-item">
            <input class="goods-input-view" type="text" v-model="goodInfo.num" readonly="readonly"/>
          </div>
          <span class="goods-btn add-btn" @click.stop="onAdd()">+</span>
        </div>
      </div>
    </div>
  </li>
</template>
<script>
  import {mapState, mapGetters, mapMutations} from "vuex";

  export default{
    name: 'Good',
    props: ['goodInfo', 'index'],
    methods: {
      ...mapMutations(['goodsReduce', 'goodsAdd']),
      onReduce(){
        this.goodsReduce(this.index);
      },
      onAdd(){
        this.goodsAdd(this.index);
      }
    }
  }
</script>
<style>

  .goods-item {
    position: relative;
    padding: 10px;
  }

  .goods-item:not(:last-child):after {
    content: '';
    position: absolute;
    left: 10px;
    right: 10px;
    bottom: 0;
    height: 1px;
    background: #ccc;
    border-radius: 10px;
  }

  .goods-content {
    width: 120px;
    height: 120px;
    margin-right: 10px;
  }

  .goods-info {
    flex-direction: column;
  }

  .goods-view {
    position: relative;
    display: block;
    max-height: 100%;
    max-width: 100%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .goods-info-title {
    margin-bottom: 10px;
    font: 18px/1 "仿宋";
    font-weight: bold;

  }

  .goods-description {
    color: #666;
    font: 13px/1.2 "仿宋";
  }

  .new-price {
    color: #000;
    margin-bottom: 2px;
    font: 12px/1 "仿宋";
  }

  .price-box {
    color: #ff0000;
  }

  .price-info {
    font: 18px/1 "仿宋";
    font-weight: bold;
  }

  .old-price {
    font: 12px/1 "仿宋";
    color: #999;
  }

  .goods-cart {
    width: 80px;
    overflow: hidden;
  }

  .goods-btn {
    display: block;
    width: 25px;
    height: 25px;
    text-align: center;
    line-height: 24px;
    border-radius: 50px;
    cursor: pointer;
    border: 1px solid #2bbbd4;
    color: #fff;
    background: #2bbbd4;
  }

  .goods-input {
    margin: 0
  }

  .goods-input-view {
    width: 100%;
    height: 25px;
    text-align: center;
    border: none;
    color: #ff0000;
    font: 16px/1 "仿宋";
    font-weight: bold;
  }

</style>

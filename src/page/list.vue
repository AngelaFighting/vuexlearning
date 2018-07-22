<template>
  <main class="goods-mian">
    <Scroll>
      <ul class="goods-list">
        <div @click="goDetail(index)"
             v-for="(good,index) in goods"
             :key="good.id">
          <oGood v-bind:goodInfo="good" v-bind:index="index"></oGood>
        </div>
        <div class="show-more" @click="addGood">
          <span>{{$t("message.showMore")}}</span>
        </div>
      </ul>
    </Scroll>
  </main>
</template>
<script>
  import Scroll from "@/components/Scroll.vue";
  import oGood from "@/components/Good.vue";
  import {mapState, mapGetters, mapMutations} from "vuex";

  export default{
    name: 'List',
    props: ['lang'],
    computed: {
      ...mapState(['goods']),
      ...mapGetters(['totalPrice', 'totalNum'])
    },
    components: {
      Scroll,
      oGood
    },
    methods: {
      ...mapMutations(['insertGood']),
      goDetail(index){
        this.$router.push({name: 'detail', params: {lang: this.lang, index: index}})
      },
      addGood(){
        this.$http.get('../static/data/good.json').then((data) => {
//          console.log(data)
//          this.insertGood(data.body);
          var goodData = data.body;
          goodData.id = '000' + this.goods.length;
//          console.log(goodData.id);
          this.$store.dispatch('insertGood', goodData);
        })
      }
    }
  }
</script>
<style>
  .goods-mian {
    height: calc(100vH - 90px);
    overflow: hidden;
  }

  .show-more {
    height: 60px;
    line-height: 60px;
    color: #666;
    text-align: center;
  }
</style>

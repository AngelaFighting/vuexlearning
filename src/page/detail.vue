<template>
  <oGood v-bind:goodInfo="goodInfo" v-bind:index="index"></oGood>
</template>
<script>
  import oGood from "@/components/Good.vue";
  import {mapState, mapGetters, mapMutations} from "vuex";

  export default{
    name: 'Detail',
    computed: {
      goodInfo(){//使用路由参数获取数据
//        console.log(this.$router.currentRoute.params);
//        console.log(this.$store.getters.getGoodById(this.$router.currentRoute.params.index));
        return this.$store.getters.getGoodById(this.$router.currentRoute.params.index);
      },
      index(){
        return this.$router.currentRoute.params.index;
      }
    },
    components: {
      oGood
    },
  }
</script>
<style>
</style>

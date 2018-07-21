<template>
  <div id="app">
    <section id="goods" class="goods-box">
      <oHeader class="goods-header" :title="name" @changeAppLocale="changeAppLocale" v-bind:lang="lang"></oHeader>
      <router-view v-bind:lang="lang"></router-view>
      <oFooter></oFooter>
    </section>
  </div>
</template>

<script>
  import oHeader from "@/components/Header.vue";
  import oFooter from "@/components/Footer.vue";
  import {mapState} from "vuex";

  export default {
    name: 'App',
    data(){
      return {
        lang: '',
      }
    },
    computed: {
      ...mapState(['name']),
    },
    components: {
      oHeader,
      oFooter
    },
    methods: {
      changeLanguage(lang){
        this.$i18n.locale = lang;
        this.lang = lang;
      },
      changeAppLocale(locale){
        this.changeLanguage(locale);
        this.$router.push({name: this.$route.name, params: {lang: this.lang}})
      }
    },
    mounted(){
      this.changeLanguage(this.$route.params.lang);
    }
  }
</script>

<style>

</style>

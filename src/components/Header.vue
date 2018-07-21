<template>
  <header class="app-header">
    <span class="goback" @click="goBack()">&lt;</span>
    <h3 class="app-header-title">{{ title }}</h3>
    <div class="lang-list">
      <a @click="changeLocale('en')">English</a>
      <a @click="changeLocale('zhCHS')">简体中文</a>
      <span>{{ $t("message.curLang") }}: {{lang}}</span>
    </div>
  </header>
</template>
<script>

  export default{
    name: 'Header',
    props: {
      title: String,
      lang: this.lang
    },
    methods: {
      changeLocale(locale){
        this.$emit('changeAppLocale', locale);
      },
      goBack(){
//        console.log('current router name:' + this.$router.currentRoute.name);
        if (this.$router.currentRoute.name !== 'list') {
          this.$router.back();
        }
      },
    },
  }
</script>
<style>
  .app-header {
    position: relative;
    width: 100%;
    height: 45px;
    line-height: 45px;
    padding: 0 10px;
    box-shadow: 2px 0 2px rgba(0, 0, 0, .5);
    z-index: 10;
  }

  .goback {
    position: absolute;
    width: 45px;
    height: 100%;
    left: 0;
    top: 0;
    text-align: center;
    font: 22px/45px '仿宋';
    font-weight: bold;
    cursor: pointer;
    color: #ff0000;
  }

  .app-header-title {
    width: 100%;
    font: 18px/45px '仿宋';
    text-align: center;
    font-weight: bold;
  }

  .lang-list {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
  }

</style>

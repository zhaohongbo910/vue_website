<template>

<div id="app-wrapper">

    <router-view name="navigation"></router-view>

    <div id="page-wrapper" class="gray-bg">
        <router-view name="header"></router-view>
        <router-view name="mainPage"></router-view>
        <router-view name="footer"></router-view>
    </div>
</div>
</template>

<script>
export default {
  name: 'App',  
  data(){
      return {
            massage:'111111111'
      }
  },
  prop:{
       apple:this.massage,
       banane:'11111'
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

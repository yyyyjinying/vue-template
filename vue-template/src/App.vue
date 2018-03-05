<template>
  <div id="app" class="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <div class="nav">
     <router-link :to="{ path: '/'}">Home</router-link>
     <router-link :to="{ path: 'rating' }">ratings</router-link>
     <router-link :to="{ path: 'seller' }">seller</router-link>
     </div>
  </div>
</template>

<script>
import Vue from 'vue'

const ERR_OK = 0

export default {
  components:{

  },
  data(){
    return {
      seller:{}
    }
  },
  methods:{
    
    
  },
  created() {
  },
  mounted(){
  }
  
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "./common/stylus/mixin"
.nav
  row()

</style>

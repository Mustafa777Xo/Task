<template>
  <!-- <Article/> -->
  <!-- <Audio /> -->
  <router-view></router-view>
</template>
<script>
import Article from './views/Article.vue';
import Audio from './views/Audio.vue';

export default {
components:{Article,Audio}
}
</script>
<style >

</style>
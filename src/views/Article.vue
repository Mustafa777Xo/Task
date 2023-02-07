<template>
    <v-container fluid>
        <v-row class="fill-height" align="center" justify="center">
          <v-col>
            <h1 class="text-center fs-2 fw-bold text-white ">Header Text</h1>
            <p class="text-center mt-9 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, impedit unde fuga
              inventore hic ducimus quam</p>
              <br>
              <br>
              <br>
            <div class="mt-9">
              <v-row align="center" justify="space-around">
                <Card :title=titleText :text=bodyText />
                <Card :title=titleText :text=bodyText />
                <Card :title=titleText :text=bodyText />
              </v-row>
            </div>
          </v-col>
        </v-row>
      </v-container>
</template>
<script>
import { ref} from "vue";

import Card from '../components/card.vue';
export default {
    components: { Card },
    setup() {
      let titleText=ref('Header Title')
      let bodyText=ref('sit pellentesque volutpat aliquet ultricies. Risus blandit sit pellentesque volutpat aliquet ultricies. Risus blan')

      return {titleText,bodyText}
    }
}
</script>
<style>
    
</style>
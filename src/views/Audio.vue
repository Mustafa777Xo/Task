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
                <Card :title=titleText :text=bodyText >
                    <div>
                        <v-row>
                            <v-col>
                                <v-row class="py-5 px-5" justify="space-around">
                                    <img src="../assets/play_icon.svg" width="30" />
                                    
                                    <img src="../assets/audio_waves.svg" width="280" />
                                </v-row>
                            </v-col>
                        </v-row>
                        <v-divider class="divider-max-width"></v-divider>
                    </div>
                </Card>
                <Card :title=titleText :text=bodyText >
                    <div>
                        <v-row>
                            <v-col>
                                <v-row class="py-5 px-5" justify="space-around">
                                    <img src="../assets/play_icon.svg" width="30" />
                                    
                                    <img src="../assets/audio_waves.svg" width="280" />
                                </v-row>
                            </v-col>
                        </v-row>
                        <v-divider class="divider-max-width"></v-divider>
                    </div>
                </Card>
                <Card :title=titleText :text=bodyText >
                    <div>
                        <v-row>
                            <v-col>
                                <v-row class="py-5 px-5" justify="space-around">
                                    <img src="../assets/play_icon.svg" width="30" />
                                    
                                    <img src="../assets/audio_waves.svg" width="280" />
                                </v-row>
                            </v-col>
                        </v-row>
                        <v-divider class="divider-max-width"></v-divider>
                    </div>
                </Card>
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
<template>
    <v-card max-width="350">
        <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="300px" width="350px" cover></v-img>
        <v-row align="start">
            <v-col class="pb-8">
                <slot></slot>
                <v-card-title align="start">
                    <h3 class="fw-bold ">
                        {{ title }}
                    </h3>
                </v-card-title>
                <v-card-text>
                    {{ text }}
                </v-card-text>
            </v-col>
        </v-row>
    </v-card>
</template>
<script>
export default {
    props: ['title', 'text'],

}
</script>
<style>

</style>
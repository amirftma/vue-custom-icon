<template>
  <section>
    <h2>Regular Icons</h2>
    <div v-for="size in sizes" :key=size >
      <v-row
          class="mb-6"
          justify="center"
          no-gutters
        >
          <v-col lg="2">
            <v-card
              class="pa-2"
              outlined
              tile
            >
              {{size}}
              <icon-base :width=size :height=size icon-name="moon"><icon-moon /></icon-base>
            </v-card>
          </v-col>
        </v-row>
    </div> 

    <h2>With Vuetify</h2>
    <v-icon x-small>$vuetify.icons.moon</v-icon>
    <v-icon small>$vuetify.icons.moon</v-icon>
    <v-icon large>$vuetify.icons.moon</v-icon>
    <v-icon x-large>$vuetify.icons.moon</v-icon>
  </section>
</template>

<script>
import IconBase from '@/components/IconBase.vue'
import IconMoon from '@/components/Icons/IconMoon.vue'

export default {
  components: {
    IconBase,
    IconMoon,
  },
  data() {
      return {
          sizes: [12, 24, 32, 64],
          size: 2
      }
  },
}
</script>
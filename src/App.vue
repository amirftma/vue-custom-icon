<template>
  <v-app>
    <v-main>
      <v-container class="grey lighten-5" >

      <p>An Icon with the name `moon` is added to vuetify icons and can now 
        can be called every where in a project with 
      </p>
      <p>
        `$vuetify.icons.moon` <icon-example />
      </p>
      <simple-icon />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SimpleIcon from '@/components/SimpleIcon';
import IconExample from "@/components/Icons/IconExample";

export default {
  name: 'App',

  components: {
    SimpleIcon,
    IconExample
  },

  data: () => ({
    //
  }),
};
</script>

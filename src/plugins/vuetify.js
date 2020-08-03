import Vue from 'vue';
import Vuetify from 'vuetify/lib';
// import MoonIcon from "@/components/Icons/IconMoon";
import IconExample from "@/components/Icons/IconExample";


Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        values: {
          moon: {
            component: IconExample, // you can use string here if component is registered globally
            props: { // pass props to your component if needed
              name: 'moon',
            },
          },
        },
      },
    })
import { defineComponent } from "vue";
import { RouterView, RouterLink } from "vue-router";

export const App = defineComponent({
  setup() {
    return () => (
      <>
        <RouterLink to="/">foo</RouterLink>
        <RouterLink to="/bar">bar</RouterLink>
        <RouterView></RouterView>
      </>
    );
  }
});

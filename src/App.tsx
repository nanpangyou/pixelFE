import { defineComponent, ref } from "vue";

export const App = defineComponent({
  setup() {
    const count = ref(0);
    const onClick = () => {
      count.value += 1;
    };
    return () => (
      <>
        <button onClick={onClick}>+1</button>
        <div>{count.value}</div>
      </>
    );
  }
});

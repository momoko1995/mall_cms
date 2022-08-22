import { createStore } from "vuex";

const store = createStore({
  state: () => {
    return {
      name: "momoko"
    };
  }
});

export default store;

<template>
  <div>首页</div>
  <div>{{ $store.state.name }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "App"
});
</script>

<style lang="scss" scoped></style>

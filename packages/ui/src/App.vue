<template>
  <div>
    <main class="flex flex-col gap-y-3 justify-center items-center h-screen">
      <Btn text="click me" bg="#3A56F4" />
      <Btn text="click me" bg="#067E06" />
      <Btn text="click me" bg="#F43A3A" />
      <Btn text="click me" />
    </main>
  </div>
</template>

<script lang="ts">
import { Btn } from "./components/btn";
export default {
  components: {
    Btn,
  },
  props: {},
  data() {
    return {};
  },
  head: {},
  computed: {},
  watch: {},
  mounted() {},
  methods: {},
};
</script>

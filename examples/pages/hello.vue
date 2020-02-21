<template>
  <div class="v-hello">
    321
    <div @click="check">787867887798</div>
    <v-button type="default">默认按钮</v-button>
    <v-button type="primary">主要按钮</v-button>
    <v-button type="warn" @click="check">警告按钮</v-button>
    <v-loading :isLoading="isLoading"></v-loading>
    <v-skeleton :isLoading="isLoading">
      <div class="xxx">3231</div>
      <div class="xxx" v-if="isLoading">骨架屏if</div>
      <div class="xxx" v-else>骨架屏else</div>
    </v-skeleton>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  },
  methods: {
    check() {
      this.$dialog({
        title: "普通 Dialog",
        cancelText: "取消",
        okText: "确定",
        content: "测试 Dialog，测试 Dialog，测试 Dialog~~~",
        onOk: () => {
          // console.log("onOk");
        },
        onCancel: () => {
          // console.log("onCancel");
        }
      });
    }
  }
};
</script>

<style scoped>
.xxx {
  color: red;
}
</style>

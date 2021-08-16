<template>
  <div v-if="index == 0" class="index-container">
    <div class="txt-index">
      <h1 style="font-family:cursive">
        城市碳排分布
	  </h1>
	  <h1 style="margin-top: 10px;font-family:cursive">
		可视化平台
	  </h1>
      <p>
        基于规划方案，将城市碳排放量可视化呈现。
        <br />
        {{ this.$t("localization.hello") }}。
      </p>
      <el-button class="w150" type="primary">新建方案</el-button>
    </div>
   <!-- <div class="bg-index"></div> -->
    <homeTopMenu @change="change" />
  </div>
  <div v-else-if="index == 1" class="index-background">
    <homeTopMenu @change="change" />
    <introduce />
  </div>
  <div v-else-if="index == 2" class="index-background">
    <homeTopMenu @change="change" />
    <funct />
  </div>
  <div v-else-if="index == 3" class="index-background">
    <homeTopMenu @change="change" />
    <About/>
  </div>
</template>

<script>
// @ is an alias to /src
import homeTopMenu from "@/components/home/HomeTopMenu.vue";
import introduce from "@/components/home/introduce.vue";
import funct from "@/components/home/funct.vue";
import About from '@/components/home/About.vue';
export default {
  components: {
    homeTopMenu,
    introduce,
    funct,
    About
  },
  data() {
    return {
      index: 0
    };
  },
  methods: {
    change(index) {
      this.index = index;
    }
  }
};
</script>
<style scoped>
.w150 {
  width: 150px;
}
</style>

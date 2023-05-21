<template>
  <div class="slider mb-40">
    <h2 class="text-white font-black leading-tight mb-10">
      透過<br/>AI工具王的<br/>強大模型<br/>讓您的業務更聰明
    </h2>
    <button class="btn py-5 px-10 rounded-2xl text-white border-2 mb-[100px]">
      開始使用
    </button>
    <div class="flex justify-end">
      <IconSlider/>
      <IconSlider/>
      <IconSlider/>
    </div>
  </div>
</template>

<script>
import IconSlider from '@/components/Icon/IconSlider.vue';

export default {
  components: {
    IconSlider,
  },
};
</script>

<style lang="scss" scoped>
h2 {
  font-size: 6vw;
}
</style>

<template>
  <footer class="container">
    <div class="flex justify-between py-20 border-top">
      <div class="text-white text-4xl md:text-5xl font-black w-40 leading-[48px] md:leading-[80px]">
        首頁定價
      </div>
      <div>
        <IconLogo/>
      </div>
    </div>
    <div class="flex justify-between py-8">
      <div class="flex justify-between flex-wrap sm:flex-nowrap">
        <div class="text-white mr-10 md:mr-[100px]">
          AI工具王 © 2023
        </div>
        <GoTop class="block 2xs:hidden"/>
        <div class="text-white">
          <a href="#" class="mr-2 md:mx-3">Facebook</a>
          <a href="#" class="mr-2 md:mx-3">Twitter</a>
          <a href="#" class="mr-2 md:mx-3">Instagram</a>
        </div>
      </div>
      <GoTop class="hidden 2xs:block"/>
    </div>
  </footer>
</template>

<script>
import IconLogo from '@/components/Icon/IconLogo.vue';
import GoTop from '@/components/GoTop.vue';

export default {
  components: {
    IconLogo,
    GoTop,
  },
};

</script>

<style lang="scss" scoped>
.border-top {
  border-top: 1px solid white;
  border-bottom: 1px solid white;
}
</style>

<template>
  <header class="mx-auto mb-10">
    <div class="container">
      <div class="flex justify-between items-center py-7 md:py-5 text-white mx-auto">
        <IconLogo />
        <div class="menu">
          <div class=" hidden md:block">
            <router-link to="/">
              首頁
            </router-link>
            <router-link to="/Order">
              定價
            </router-link>
          </div>
          <button @click="menu()" class="block md:hidden">
            <span class="material-icons">
              menu
            </span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import IconLogo from '@/components/Icon/IconLogo.vue';

export default {
  components: {
    IconLogo,
  },
};
</script>

<style lang="scss" scoped>
header {
  .container {
    max-width: 1296px;
    border-bottom: 1px solid white;
    font-weight: 700;
  }
  .menu {
    a {
      padding: 0 10px;
    }
  }
}
</style>

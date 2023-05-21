<template>
  <div class="container">
    <Slider/>
    <section class="section mb-40">
      <div class="inline md:flex justify-between mb-20">
        <div class="text-white font-black text-lg md:text-3xl w-8/12">
          我們的服務
        </div>
        <div class="text-white font-black text-3xl md:text-4xl">
          我們相信透過 AI 技術，
          包括圖像識別、自然語言處理和機器翻譯等，讓您更快、更準確地做出決策。
        </div>
      </div>
      <div>
        <ul class="grid md:grid-cols-3 md:gap-3 ">
          <li class="border border-gray-350 rounded-2xl px-10 py-20 mb-3 md:mb-0">
            <IconVetor class=" mb-6"/>
            <h4 class=" text-3xl mb-5 text-white font-black">快速</h4>
            <span class=" text-white text-base leading-6">我們先進的推理基礎設施提供了極短的響應時間，讓你的產品服務不間斷。</span>
          </li>
          <li class="border border-gray-350 rounded-2xl px-10 py-20 mb-3 md:mb-0">
            <IconStars class=" mb-6"/>
            <h4 class="text-3xl mb-5 text-white font-black">靈活</h4>
            <span class=" text-white text-base leading-6">我們的服務可以根據您的需求進行靈活調整，同時還可以滿足不同項目和預算的需求。</span>
          </li>
          <li class="border border-gray-350 rounded-2xl px-10 py-20 mb-3 md:mb-0">
            <IconCopy class=" mb-6"/>
            <h4 class="text-3xl mb-5 text-white font-black">擴充</h4>
            <span class=" text-white text-base leading-6">我們的服務支持多種擴充選項，可以滿足您的不斷增長的 AI 需求。</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- 來自合作的夥伴 -->
    <section class=" mb-40">
      <h3 class="text-white text-xl md:text-3xl">來自合作的夥伴</h3>
      <div></div>
    </section>

    <!-- 推薦  slider-->
    <section class=" py-40">
      <carousel :breakpoints="breakpoints">
        <slide v-for="(item, index) in recommend" :key="index">
          <div class=" mx-[6px] p-10 rounded-2xl" style="background:rgba(255, 255, 255, 0.08)">
            <div class="text-left mb-6">
              <span class="material-icons text-white text-base pr-1" v-for="s in item.star" :key="s">star_rate</span>
            </div>
            <div class="text-left text-white mb-5">{{item.content}}</div>
            <div class="flex text-white">
              <img class=" mr-4" :src="item.image" alt="">
              <div class="text-left">
                <div class=" mb-1">{{item.name}}</div>
                <div>{{item.company}}</div>
              </div>
            </div>
          </div>
        </slide>

        <template #addons>
          <!-- <navigation /> -->
          <pagination />
        </template>
      </carousel>
    </section>
  </div>

  <!-- AIfunction -->
  <AIFunction/>

  <!-- 建立服務 -->
  <div class="container">
    <section class="text-center mx-auto py-20">
      <div class="text-white py-10 text-4xl font-black">
        現在就來建立<br class="block md:hidden" />屬於你的服務吧
      </div>

      <button class="btn text-white border border-white rounded-2xl flex items-center py-5 px-8 mb-8 mx-auto">
        <span class="mr-2 text-lg font-black ">開始使用</span>
        <span class="material-icons text-white"> north_east </span>
      </button>

    </section>
  </div>
</template>

<script>
import Slider from '@/components/Slider.vue';
import IconVetor from '@/components/Icon/IconVetor.vue';
import IconStars from '@/components/Icon/IconStars.vue';
import IconCopy from '@/components/Icon/IconCopy.vue';
import AIFunction from '@/components/AIFunction.vue';
import { ref } from 'vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'vue3-carousel/dist/carousel.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  Carousel, Slide, Pagination,
} from 'vue3-carousel';

export default {
  name: 'Home',
  components: {
    Slider,
    IconVetor,
    IconStars,
    IconCopy,
    AIFunction,
    Carousel,
    Slide,
    Pagination,
  },
  setup() {
    const recommend = ref([
      {
        name: '陳小姐',
        company: 'ABC科技有限公司',
        image: require('@/assets/image/icon-1.png'),
        star: 5,
        content: '非常喜歡 AI工具王 提供的 AI 模型租賃服務，使用起來非常方便，而且效果非常好。對於我們公司的業務來說，這個服務非常重要，因為我們需要大量的數據進行分析和預測，AI工具王 提供的 AI 模型能夠幫助我們節省大量時間和成本，實在是太棒了！',
      },
      {
        name: '劉小姐',
        image: require('@/assets/image/icon-2.png'),
        company: 'XYZ 醫療器材有限公司',
        star: 5,
        content: '作為一家醫療器材公司，我們非常關注人工智能技術的應用，而 AI工具王 提供的 AI 模型租賃服務為我們帶來了很大的幫助。我們使用 AI工具王 的模型進行醫學影像分析和預測，這些模型非常精確，能夠幫助我們更好地診斷病情，提高治療效果。感謝 AI工具王 團隊的辛勤工作！',
      },
      {
        name: '黃先生',
        image: require('@/assets/image/icon-3.png'),
        company: 'EFG 銀行',
        star: 5,
        content: '我們銀行一直在尋找能夠幫助我們提高風險控制和客戶服務的解決方案，而 AI工具王 提供的 AI 模型租賃服務正好滿足了我們的需求。我們使用 AI工具王 的模型進行客戶信用評估和詐騙檢測等任務，這些模型非常準確，能夠幫助我們更好地控制風險，提高客戶滿意度。非常感謝 AI工具王 團隊的支持！',
      },
    ]);
    const breakpoints = {
      700: {
        itemsToShow: 1,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 3,
        snapAlign: 'start',
      },
    };
    return {
      recommend,
      breakpoints,
    };
  },
};
</script>

<style lang="scss" scope>
.carousel__pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  @screen md {
    display: none;
  }
}
.carousel__pagination-button {
  &:after {
    width: 8px;
    height: 8px;
    border-radius: 5px;
    @apply bg-gray-400 transition-all;
  }
  &:hover {
    &:after{
      @apply bg-white transition-all;
    }
  }
  &.carousel__pagination-button--active {
    &:after{
      width: 12px;
      height: 12px;
      @apply bg-white transition-all;
    }
  }
}
</style>

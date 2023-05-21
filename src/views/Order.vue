<template>
  <div class="container">
    <!-- banner -->
    <section class=" mb-40">
      <h4 class="text-white text-lg md:text-3xl font-black mb-20">定價</h4>
      <ul class="grid md:grid-cols-2 md:gap-2 ">
        <li class="border border-gray-350 rounded-2xl mb-3 md:mb-0" v-for="(item, index) in orderPrice" :key="index">
          <div class="py-5 px-8" style="border-bottom: 1px solid gray">
            <IconVetor class=" mb-6"/>
            <h4 class=" text-3xl mb-3 text-white font-black">
              {{item.name}}
            </h4>
            <ul class=" mb-8">
              <li class="text-gray-200" v-for="(a, index) in item.level" :key="index">
                {{a}}
              </li>
            </ul>
          </div>
          <div class="flex justify-between items-center py-5 px-8">
            <div>
              <span class="text-white font-black">{{item.price}}</span>
              <span class="text-gray-200">／{{item.token}}</span>
            </div>
            <button class="flex items-center">
              <span class="text-white mr-3">開始試用</span>
              <span class="text-white material-icons">north_east</span>
            </button>
          </div>
        </li>
      </ul>
    </section>

    <!-- 使用規範 -->
    <section class="py-10 sm:grid grid-cols-3 gap-4 mb-40">
      <h5 class="sm:col-span-1 text-white font-black text-lg md:text-3xl mb-12">使用規範</h5>
      <ul class="sm:col-span-2">
        <li class="border-bottom mb-6" v-for="(item, index) of rules" :key="index">
          <h4 class="text-white font-black text-3xl md:text-4xl mb-6">{{item.title}}</h4>
          <div class="text-white text-base md:text-3xl mb-6">{{item.content}}</div>
        </li>
      </ul>
    </section>
  </div>

  <AIfunction class=" mb-40"/>

  <div class="container">

    <!-- 常見問題 -->
    <section class="py-10 sm:grid grid-cols-3 gap-4 mb-[120px] md:mb-40">
      <h5 class="sm:col-span-1 text-white font-black text-lg md:text-3xl mb-12">常見問題</h5>
      <ul class="sm:col-span-2">
        <li class="border border-gray-400 rounded-2xl py-5 px-11 mb-5" @click="isSelect = index" v-for="(item, index) of questions" :key="index">
          <div class="flex items-center">
            <span class="material-icons text-white mr-6"> add </span>
            <span class="text-white text-lg font-black"> {{item.title}} </span>
          </div>
          <div class="text-white ml-12" v-show="isSelect == index">
            {{item.content}}
          </div>
        </li>
      </ul>

    </section>

  </div>
</template>

<script>
import { ref } from 'vue';
import AIfunction from '@/components/AIFunction.vue';

export default {
  components: {
    AIfunction,
  },
  setup() {
    const questions = [
      {
        title: '如何選擇適合的AI模型？',
        content: '選擇適合的 AI 模型需要考慮您的應用場景、需要解決的問題、可用的資源以及預算等因素。可以通過對比不同模型的性能、準確率、速度等指標，以及與其他用戶的評價與反饋，來選擇最適合的模型。',
      },
      {
        title: '租用模型的費用是如何計算的？',
        content: '租用模型的費用通常會根據模型的性能和使用時間等因素進行計算。具體而言，模型的性能可以根據其精度、速度、暫用資源等指標來評估；而使用時間可以根據租用時間的長短來計算，通常會按小時、天或月來計算。綜合考慮這些因素，系統會自動算出對應的租用費用。',
      },
      {
        title: '如何進行付款？',
        content: '付款方式可以通過網站上提供的宴上支付平台進行支付。具體而言，您可以選擇信用卡、銀行轉帳電子錢包等不同的支付方式進行支付。在支付前，您需要先登錄網站並選擇適合的租用方案，系統會自動計算出對應的租用欸用和支付金額，然後您可以選擇適合的支付方式進行支付。完成支付後，系統會自動向您提供相應的服務。',
      },
      {
        title: '租用模型的期限是多久？',
        content: '租用模型的期限可以根據您的需求進行設置，通常可以選擇幾個小時、幾天或幾個月等不同的時間段。',
      },
      {
        title: '如果在使用過程中遇到問題，應該怎麼處理？',
        content: '如果在使用過程中遇到問題，您可以聯繫惡扶或技術支持人員進行諮詢或報告問題。您也可以。您也可以通過網站上的幫助中心或社區論壇尋找相關的解決方案和回答。',
      },
    ];
    const rules = [
      {
        title: '守法',
        content: '請遵守相關的法規和政策，不得進行任何違法違規的活動。',
      },
      {
        title: '資訊安全',
        content: '請務必保護好自己的帳號和密碼，不得將其透露給他人。',
      },
      {
        title: '守密',
        content: '需對使用過程中產生的數據負責，不得擅自泄露數據。',
      },
    ];
    const orderPrice = [
      {
        name: '琪琪',
        level: ['初級', '速度最快'],
        price: 'NT$5',
        token: '1k tokens',
      },
      {
        name: '昊昊',
        level: ['中級'],
        price: 'NT$5',
        token: '1k tokens',
      },
      {
        name: '卡卡',
        level: ['卡卡'],
        price: 'NT$5',
        token: '1k tokens',
      },
      {
        name: '杰杰',
        level: ['最高級', '資訊最完善'],
        price: 'NT$5',
        token: '1k tokens',
      },
    ];
    const isSelect = ref(0);
    return {
      questions,
      orderPrice,
      rules,
      isSelect,
    };
  },
};
</script>

<style lang="scss" scoped>
.active {
  display: block;
}

.border-bottom {
  border-bottom: 1px solid#525252;
}
</style>

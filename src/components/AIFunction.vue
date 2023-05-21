<template>
  <section class="ai-function bg-white py-20">
    <!-- text-3xl md:text-4xl 2xl:text-5xl -->
    <h2 class=" mb-8 md:mb-20 text-black font-black text-center ">
      這些超酷的應用，都來自 AI工具王
    </h2>
    <div class="container">

      <!-- search-->
      <div class="bg-gray-100 rounded-2xl py-5 px-6 flex items-center mb-6">
        <div class="material-icons text-gray-300 mr-3">search</div>
        <input class="bg-gray-100 text-gray-300 w-full outline-none" type="text" placeholder="輸入關鍵字搜尋"/>
      </div>

      <!-- function -->
      <div class=" pt-1 pb-4 flex items-center justify-between flex-wrap sm:flex-nowrap">
        <button class="btn btn-filter order-1 sm:order-1">
          <span class="mr-2">篩選</span>
          <span class="material-icons"> filter_alt </span>
        </button>
        <div class="tag-box order-3 sm:order-2 my-4">
          <div class="tag-group my-4">
            <span class="tag active mx-2" v-for="(tag, index) in tags" :key="index">{{ tag }}</span>
          </div>
        </div>
        <button class="btn btn-old order-2 sm:order-3">
          <span class="mr-2">新到舊</span>
          <span class="material-icons"> expand_more </span>
        </button>
      </div>

      <!-- card -->
      <ul class='flex flex-wrap justify-center md:justify-between'>
        <li class='card-list rounded overflow-hidden mb-6' v-for='(item, index) in card' :key="index">

          <div class='card-pic'>
            <img :src="item.imageUrl" alt="img">
          </div>

          <div class='border-bottom py-5 px-8'>
            <h3 class=" text-lg font-black m-0"> {{item.title}} </h3>
            <p class="text-wrap text-sm text-gray-400 mb-0">
              {{item.description}}
            </p>
          </div>

          <div class='flex justify-between border-bottom py-5 px-8'>
            <h4 class=" font-normal m-0 text-base"> {{item.subTitle}} </h4>
            <span class='font-normal text-base'> {{item.auth}} </span>
          </div>

          <div class='flex justify-between items-center py-5 px-8'>
            <a href="#" class='text-base text-black'> {{item.tag}} </a>
            <a href="#" class='text-base text-black'>
              <span class="material-icons">share</span>
            </a>
          </div>
        </li>
      </ul>

    <!-- 頁碼 -->
    <ul class="pagenation">
      <li class="page">
        1
      </li>
    </ul>
  </div>

  </section>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const tags = ref(['全部', '聊天', '影像辨識', '翻譯', '行銷', '客服', '生產力']);
    const card = ref([
      {
        imageUrl: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/tool1.png?raw=true',
        title: 'Chatbot Builder',
        description: '建立智能化的聊天機器人，解答常見問題、提供客戶支援、收集反饋等。建立智能化的聊天機器人，解答常見問題、提供客戶支援、收集反饋等。',
        subTitle: 'AI 模型',
        auth: '卡卡',
        tag: '#聊天',
      },
      {
        imageUrl: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/tool2.png?raw=true',
        title: 'Image Recognition Platform',
        description: '專業的圖像識別平台，識別圖像、分類、標記等。',
        subTitle: 'AI 模型',
        auth: '杰杰',
        tag: '#影像辨識',
      },
      {
        imageUrl: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/tool3.png?raw=true',
        title: 'Language Translation API',
        description: '專業的語言翻譯 API，實現文本翻譯功能，支援多種格式的文本。',
        subTitle: 'AI 模型',
        auth: '琪琪',
        tag: '#翻譯',
      },
      {
        imageUrl: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/tool4.png?raw=true',
        title: 'Sentiment Analysis API',
        description: '自動識別文本中的情感傾向，包括正向、負向和中性等。適用於情感分析、社交媒體監控、市場調查等。',
        subTitle: 'AI 模型',
        auth: '昊昊',
        tag: '#行銷',
      },
      {
        imageUrl: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/tool5.png?raw=true',
        title: 'Fraud Detection Platform',
        description: '預防詐騙活動，適用於銀行、金融、電商等。',
        subTitle: 'AI 模型',
        auth: '卡卡',
        tag: '#客服',
      },
      {
        imageUrl: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/tool6.png?raw=true',
        title: 'Voice Assistant SDK',
        description: '通過語音控制應用程式、設備，實現多種功能，例如播放音樂、查詢天氣、發送信息等。',
        subTitle: 'AI 模型',
        auth: '杰杰',
        tag: '#生產力',
      },
    ]);
    return {
      tags,
      card,
    };
  },
};
</script>

<style lang="scss" >
.ai-function {
  border-radius: 20px;
  padding: 80px 12px;
  @screen md {
    border-radius: 160px;
    padding: 80px;
  }
  @screen 2xl {
    border-radius: 160px;
    padding: 160px;
  }
  h2 {
    margin-left: 9vw;
    margin-right: 9vw;
    font-size: 9vw;
    line-height: 9vw;
    @screen md {
      margin: 0 auto;
      font-size: 4vw;
    }
  }
  .container {
    max-width: 1300px;
    padding: 0;
  }
  .tag-box {
    overflow-y: hidden;
    overflow-x: auto;
    padding: 0 10px;
    .tag-group {
      min-width: 620px;
      line-height: 45px;
    }
  }
  .btn {
    @apply border rounded-2xl flex justify-center items-center transition-all;
    @apply py-4;
    @apply text-base;
    @screen xl {
      @apply py-5;
    }
    &:hover{
      @apply bg-black text-white transition-all;
    }
    &-filter{
      width: 132px;
    }
    &-old {
      width: 164px;
    }
  }
  .tag-group {
    .tag {
      &.active {
        @apply py-2 px-4 rounded-2xl bg-gray-100;
      }
    }
  }
  .text-wrap {
    // height: 42px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
  }
  .card-list {
    border: 1px solid #F2F2F2;
    transition: .3s;
    width: 100%;

    @screen xs {
      width: calc(100% / 2 - 24px);
      margin-right: 24px;
    }

    @screen lg {
      width: calc(100% / 3 - 24px);
      margin-right: 24px;
      &:nth-child(n - 3) {
        margin-right: 0px;
      }
    }

    .border-bottom {
      border-bottom: 1px solid #F2F2F2;
    }
    .card-pic {
      overflow: hidden;
      img {
        transition: .3s;
        transform: scale(1.1);
        width: 100%;
      }
    }
    &:hover{
      .card-pic {
        img {
          transition: .3s;
          transform: scale(1.3)
        }
      }
    }
  }
  .pagenation {
    .page {
      @apply bg-white text-black rounded-2xl;
      &:hover, .active {
        @apply bg-black text-white;
      }
    }

  }
}
</style>

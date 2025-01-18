<script setup>
import { ref } from 'vue';
import Tab1 from './Tab1.vue';
import Tab2 from './Tab2.vue';
import Tab3 from './Tab3.vue';
import Tab4 from './Tab4.vue';

const tabs = ref([
  {
    title: '尋求意見',
    label: 'click-lungcancercare-tab-opinion',
  },
  {
    title: '進行腫瘤基因檢測',
    label: 'click-lungcancercare-tab-testing',
  },
  {
    title: '治療策略圖解',
    label: 'click-lungcancercare-tab-strategy',
  },
  {
    title: '標靶藥物健保給付標準',
    label: 'click-lungcancercare-tab-coverage',
  },
]);


const activeTab = ref(tabs.value[0].title);

const changeTab = (tabName) => {
  activeTab.value = tabName;
}

// 根據 activeTab 顯示對應的子元件
const tabComponents = {
  '尋求意見': Tab1,
  '進行腫瘤基因檢測': Tab2,
  '治療策略圖解': Tab3,
  '標靶藥物健保給付標準': Tab4,
};

</script>

<template lang="pug">
div.bg-blue-50
  .container.max-w-4xl
    .tabs-plan.flex.justify-center(class="space-x-1 md:space-x-8")
      div.click_event(v-for='(tab, index) in tabs' :key='index' @click='changeTab(tab.title)' :class="{ 'active': activeTab === tab.title }", data-title="lungcancercare", :data-label="tab.label")
        span.font-openhuninn {{ tab.title }}
        span.icon.text-white ▾

    .tabs-plan-content.pt-4
      //- activeTab 顯示對應的子元件
      //- component 動態渲染元件的特殊標籤
      component(:is="tabComponents[activeTab]")

</template>

<style lang="sass">
.tabs-plan
  counter-reset: paragraph-counter
  div:nth-child(2)
    padding: 0 1.5rem
    @media screen and (max-width: 768px)
      padding: 0 .75rem
    @media screen and (max-width: 430px)
      padding: 0 .25rem
  div:nth-child(3)
    padding: 0 1.5rem
    @media screen and (max-width: 768px)
      padding: 0 1rem
    @media screen and (max-width: 430px)
      padding: 0 .5rem
  div:nth-child(4)
    padding: 0 1rem
    @media screen and (max-width: 768px)
      padding: 0 .25rem
  div
    @apply bg-blue-400 font-genjyuu-bold text-center leading-7
    font-size: 1.35rem
    width: 150px
    height: 150px
    color: white
    display: flex
    justify-content: center
    align-items: center
    border-radius: 100%
    counter-increment: paragraph-counter
    cursor: pointer
    user-select: none
    position: relative
    @media screen and (max-width: 768px)
      width: 120px
      height: 120px
      border-radius: 1rem
      font-size: 1.25rem
    @media screen and (max-width: 480px)
      width: 96%
      height: 80px
      font-size: 1rem
      line-height: 1.35rem
    &::before
      content: counter(paragraph-counter, decimal-leading-zero)
      background-color: #52abce
      color: white
      font-size: 1.25rem
      border-radius: 50%
      width: 40px
      height: 40px
      display: flex
      justify-content: center
      align-items: center
      position: absolute
      top: 0
      left: 0
      @media screen and (max-width: 768px)
        width: 35px
        height: 35px
        font-size: 1.15rem
        top: -.5rem
      @media screen and (max-width: 480px)
        top: -1.25rem
        width: 30px
        height: 30px
    .icon
      position: absolute
      bottom: 0
    &.active
      @apply bg-orange-400

</style>

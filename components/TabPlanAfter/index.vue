<script setup>
import { ref } from 'vue';
import Tab1 from './Tab1.vue';
import Tab2 from './Tab2.vue';
import Tab3 from './Tab3.vue';
import Tab4 from './Tab4.vue';

const tabs = ref([
  {
    title: '生活照護盤點',
    label: 'click-lungcancercare-tab-care',
  },
  {
    title: '心理調適盤點',
    label: 'click-lungcancercare-tab-mental',
  },
  {
    title: '經濟問題盤點',
    label: 'click-lungcancercare-tab-finance',
  },
  {
    title: '病程追蹤盤點',
    label: 'click-lungcancercare-tab-tracking',
  },
]);

const activeTab = ref(tabs.value[0].title);

const changeTab = (tabName) => {
  activeTab.value = tabName;
}

// 根據 activeTab 顯示對應的子元件
const tabComponents = {
  '生活照護盤點': Tab1,
  '心理調適盤點': Tab2,
  '經濟問題盤點': Tab3,
  '病程追蹤盤點': Tab4,
};

</script>

<template lang="pug">
div.bg-yellow-50
  .container.max-w-4xl
    .hidden(class="md:block")
      img.pic(src="/assets/img/planAfter-1.svg" class="absolute w-36 left-10 -top-28")
      img.pic(src="/assets/img/planAfter-2.svg" class="absolute w-20 right-2 -top-28")
    .tabs-check.flex.justify-center(class="space-x-1 md:space-x-8")
      div.click_event(v-for='(tab, index) in tabs' :key='index' @click='changeTab(tab.title)' :class="{ 'active': activeTab === tab.title }", data-title="lungcancercare", :data-label="tab.label")
        span.font-openhuninn {{ tab.title }}
        span.icon.text-white ▾

    .tabs-check-content.mt-10
      //- activeTab 顯示對應的子元件
      //- component 動態渲染元件的特殊標籤
      component(:is="tabComponents[activeTab]")

</template>

<style lang="sass">
.tabs-check
  counter-reset: paragraph-counter
  div
    @apply font-genjyuu-bold text-center leading-7
    background-color: #b7deea
    font-size: 1.35rem
    width: 150px
    height: 150px
    color: #4b4c4e
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
      color: white

</style>

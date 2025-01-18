<script setup>
import { ref } from 'vue';
import Tab1 from './Tab1.vue';
import Tab2 from './Tab2.vue';
import Tab3 from './Tab3.vue';
import Tab4 from './Tab4.vue';
import Tab5 from './Tab5.vue';
import Tab6 from './Tab6.vue';
import Tab7 from './Tab7.vue';
import Tab8 from './Tab8.vue';
import Tab9 from './Tab9.vue';

const tabs = ref([
  {
    title: '肺癌種類',
    label: 'click-lungcancercare-tab-type',
  },
  {
    title: '肺癌分期',
    label: 'click-lungcancercare-tab-stage',
  },
  {
    title: '基因突變類型',
    label: 'click-lungcancercare-tab-mutation',
  },
  {
    title: '轉移部位',
    label: 'click-lungcancercare-tab-metastasis',
  },
  {
    title: '整體存活期',
    label: 'click-lungcancercare-tab-os',
  },
  {
    title: '疾病無惡化存活期',
    label: 'click-lungcancercare-tab-pfs',
  },
  {
    title: '腫瘤反應率',
    label: 'click-lungcancercare-tab-orr',
  },
  {
    title: '一線、二線、三線用藥',
    label: 'click-lungcancercare-tab-line',
  },
  {
    title: '一代、二代、三代標靶藥物',
    label: 'click-lungcancercare-tab-gen',
  },
]);


const activeTab = ref(tabs.value[0].title);

const changeTab = (tabName) => {
  activeTab.value = tabName;
}

// 根據 activeTab 顯示對應的子元件
const tabComponents = {
  '肺癌種類': Tab1,
  '肺癌分期': Tab2,
  '基因突變類型': Tab3,
  '轉移部位': Tab4,
  '整體存活期': Tab5,
  '疾病無惡化存活期': Tab6,
  '腫瘤反應率': Tab7,
  '一線、二線、三線用藥': Tab8,
  '一代、二代、三代標靶藥物': Tab9,
};

</script>

<template lang="pug">
div#bg-3
  .container.max-w-5xl
    .tabs.grid.grid-cols-3(class="gap-x-0 md:gap-x-2 gap-y-2 md:gap-y-2")
      div.click_event(v-for='(tab, index) in tabs' :key='index' @click='changeTab(tab.title)' :class="{ 'active': activeTab === tab.title }", data-title="lungcancercare", :data-label="tab.label")
        span.font-openhuninn.flex-1.ml-1(class="text-lg lg:text-xl xl:text-xl ml-0 md:ml-1 py-0 md:py-1 leading-5 md:leading-8") {{ tab.title }}
        span.icon.text-orange-500(class="pr-0 md:pr-2") ▾

    .tab-content
      //- activeTab 顯示對應的子元件
      //- component 動態渲染元件的特殊標籤
      component(:is="tabComponents[activeTab]")

</template>

<style lang="sass">
#bg-3
  background: url(/assets/img/bg-3.png) no-repeat
  background-size: 100% auto
  background-position: center bottom

.tabs
  counter-reset: paragraph-counter
  div
    counter-increment: paragraph-counter
    cursor: pointer
    display: flex
    align-items: center
    border: 3px solid #FFCEAB
    border-radius: 2rem
    user-select: none
    @media screen and (max-width: 768px)
      flex-direction: column
      border-radius: .5rem
      border: 2px solid #FFCEAB
    &::before
      content: counter(paragraph-counter, decimal-leading-zero)
      background-color: #FF6D04
      color: white
      font-size: 1.25rem
      border-radius: 50%
      width: 40px
      height: 40px
      display: flex
      justify-content: center
      align-items: center
      @media screen and (max-width: 768px)
        display: none
    .icon
      @media screen and (max-width: 768px)
        margin-top: -.5rem
        margin-bottom: -.65rem
    &.active
      background-color: #fef9cb
.tab-content
  margin-top: 2rem
  border: 3px solid #1F89BD
  padding: 2rem
  border-radius: 2rem
  @media screen and (max-width: 768px)
    padding: 1rem
</style>

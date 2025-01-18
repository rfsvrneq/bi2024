<script setup>

import TabTable from '@/components/TabTable/index.vue';

</script>

<template lang="pug">
div
  h3.my-4
    img.inline.w-10(src="/assets/img/tab-plan/tabs-plan-4.png")
    .inline.font-genjyuu-bold.align-bottom.pl-1(class="text-2xl md:text-3xl") 標靶藥物健保給付標準

  .tabs-plan-style
    img.pic(src="/assets/img/tab-plan/tabs-plan-3-2.svg")
    .flex.mb-5(class="px-6 pt-8 md:px-0 md:pt-0")
      img(src="/assets/img/tab-plan/tabs-plan-2-3.svg" class="w-10 md:w-20")
      p.ml-5.text-xl.pr-4
        span 晚期肺癌的治療是依照「有無腫瘤基因突變」來決定用藥，若有可與醫師詢問是否相對應標靶藥物；若無基因突變，健保只給付化學治療。
        span.block.text-sm.mt-4 （免疫治療目前並無健保給付）

    TabTable
  
</template>

<style scoped lang="sass">
.tabs-plan-style  
  @apply border-4 border-gray-600 text-gray-600 text-xl bg-white
  position: relative
  border-radius: 35px
  padding: 2.5rem
  @media screen and (max-width: 768px)
    padding: 1rem 0rem
  .pic
    position: absolute
    width: 140px
    right: -31px
    top: -92px
</style>

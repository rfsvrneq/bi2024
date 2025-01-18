<script setup></script>

<template lang="pug">
div
  h3.my-4
    img.inline.w-10(src="/assets/img/tab-plan/tabs-plan-2.png")
    .inline.font-genjyuu-bold.align-bottom.pl-1(class="text-2xl md:text-3xl") 進行腫瘤基因檢測

  .tabs-plan-style
    img.pic(src="/assets/img/tab-plan/tabs-plan-2-2.svg")
    .flex.mb-5
      img(src="/assets/img/tab-plan/tabs-plan-2-3.svg" class="w-10 md:w-32")
      p.ml-5.text-xl(class="mr-10 md:mr-0")
        span.text-2xl.font-bold 透過基因檢測 制定治療策略
        span.block.mt-2 晚期肺癌確診後建議同時進行EGFR及ALK基因檢測
    img(src="/assets/img/tab-plan/tabs-plan-2-4.png" class="w-12/12 md:w-10/12 mx-auto")
  
</template>

<style scoped lang="sass">
.tabs-plan-style  
  @apply border-4 border-gray-600 text-gray-600 text-xl bg-white
  position: relative
  border-radius: 35px
  padding: 2.5rem
  @media screen and (max-width: 768px)
    padding: 3rem 2rem 2rem 2rem
  @media screen and (max-width: 430px)
    padding: 3rem 1rem 2rem 1rem
  .pic
    position: absolute
    width: 190px
    right: -73px
    top: -87px
</style>

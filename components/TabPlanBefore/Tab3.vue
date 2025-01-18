<script setup></script>

<template lang="pug">
div
  h3.my-4
    img.inline.w-10(src="/assets/img/tab-plan/tabs-plan-3.png")
    .inline.font-genjyuu-bold.align-bottom.pl-1(class="text-2xl md:text-3xl") 治療策略圖解

  .tabs-plan-style
    img.pic(src="/assets/img/tab-plan/tabs-plan-3-2.svg")
    .flex.mb-5
      img(src="/assets/img/tab-plan/tabs-plan-2-3.svg" class="w-10 md:w-20")
      p.ml-5.text-xl(class="mr-10 md:mr-0")
        span.text-2xl.font-bold 以最佳存活期和抗藥性評估治療策略
    img(src="/assets/img/tab-plan/tabs-plan-3-3.png" class="w-12/12 md:w-10/12 mx-auto")
  
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
    width: 140px
    right: -31px
    top: -92px
</style>

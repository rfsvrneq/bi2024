<script setup></script>

<template lang="pug">
div
  .img-ttl.relative.pb-20.mb-5.border-b-1.border-blue-400
    img.absolute.top-0.left-0(src="/assets/img/tab/tab1-1.svg", class="w-[280px]")
    h3.font-genjyuu-bold.text-3xl.relative(class="pl-32 pt-4") 肺癌種類

  .tab-style
    p.mb-8 肺癌的種類與發生位置有關，大致可分成：

  .flex.justify-around(class="flex-col-reverse items-center md:flex-row")
    .text-xl.font-openhuninn(class="w-12/12 md:w-7/12 mt-4 md:mt-0")
      p.mb-3(class="text-xl sm:text-2xl") 非小細胞肺癌 ⎯⎯ 佔
        span.text-orange-500.px-1(class="text-3xl sm:text-4xl") 93%
      .flex.items-start(class="ml-5 sm:ml-10")
        img(src="/assets/img/tab/tab1-5.svg", class="w-[20px] inline mr-2 pt-2")
        p
          span 經常長在肺部周圍支氣管及肺泡上的
          span.text-2xl.px-1.text-orange-500 肺腺癌
          span.underline 發生比率較高
      .flex.items-start(class="ml-5 sm:ml-10")
        img(src="/assets/img/tab/tab1-4.svg", class="w-[20px] inline mr-2 pt-1")
        p
          span 常長在肺部中央或左右支氣管的鱗狀細胞肺癌
      .flex.items-start(class="ml-5 sm:ml-10")
        img(src="/assets/img/tab/tab1-3.svg", class="w-[20px] inline mr-2 pt-1")
        p
          span 長在肺臟表面的大細胞肺癌

      p.mb-3.mt-5(class="text-xl sm:text-2xl") 小細胞肺癌 ⎯⎯ 佔
        span.text-orange-500.px-1(class="text-3xl sm:text-4xl") 7%
      .flex.items-start(class="ml-5 sm:ml-10")
        img(src="/assets/img/tab/tab1-6.svg", class="w-[20px] inline mr-2 pt-1")
        p
          span 常發生在粗支氣管，是最危險的肺癌類型，
          span.block 治療方式及預後也與其他肺癌不相同

    img(src="/assets/img/tab/tab1-2.svg" class="w-[220px] sm:w-[300px] flex-none")
</template>

<style scoped lang="sass">
.tab-style
  @apply text-xl font-openhuninn leading-8 text-justify lg:text-2xl lg:leading-10
</style>

<script setup></script>

<template lang="pug">
div
  .img-ttl.relative.pb-16.mb-5.border-b-1.border-blue-400
    img.absolute.top-0.left-0(src="/assets/img/tab/tab4-1.svg", class="w-[280px]")
    h3.font-genjyuu-bold.text-3xl.relative(class="pl-[120px] pt-2") 轉移部位

  .tab-style
    p 晚期肺癌常出現的轉移部位包括：

    .flex(class="flex-col items-center md:justify-center md:items-start md:flex-row")
      img(src="/assets/img/tab/tab4-2.svg" class="w-[360px] mt-5 md:mt-0")
      p(class="md:w-[260px] mt-5 md:mt-0 ml-0 md:ml-10") 在初確診肺癌時，會安排詳細檢查如電腦斷層、骨骼掃描等，以擬定不同的治療策略！

  p.text-base.bg-orange-400.inline-block.text-white.px-2.rounded.mt-10 延伸閱讀
  a.block.text-sm.underline.text-blue-400.mt-1(href="https://event.commonhealth.com.tw/2022lungcancer/#genetic" target="_blank") 【肺癌標靶治療新解 | 找出腫瘤基因突變 精準用藥 - 康健雜誌】

</template>

<style scoped lang="sass">
.tab-style
  @apply text-xl font-openhuninn text-justify leading-8 lg:text-2xl lg:leading-10
</style>

<script setup></script>

<template lang="pug">
div
  .img-ttl.relative.pb-20.mb-5.border-b-1.border-blue-400
    img.absolute.top-0.left-0(src="/assets/img/tab/tab8-1.svg", class="w-[450px]")
    h3.font-genjyuu-bold.relative(class="pl-[80px] xs:pl-[95px] sm:pl-[120px] pt-2 xs:pt-3 sm:pt-4 text-xl xs:text-2xl sm:text-3xl") 一線、二線、三線用藥

  .tab-style
    p 一般從確定診斷開始所使用的標準治療方式就是第一線治療用藥，等到腫瘤對藥物產生抗藥性，或效果不如預期像是惡化、轉移時，就會延伸使用第二線甚至第三線用藥。

    .flex(class="flex-col md:flex-row")
      p(class="-mr-0 md:-mr-20") 這個順序是醫療團隊依據病人條件、細胞類型、基因型態等來選擇勝算較高的方式做建議，所以並非適用所有人，且不同的治療方式與用藥順序，療效與全民健保給付條件不盡相同，可與醫師共同討論最適合的治療選項。
      img(src="/assets/img/tab/tab8-2.svg" class="w-[280px] md:w-[400px] mr-10 block ml-auto mt-5")

</template>

<style scoped lang="sass">
.tab-style
  @apply text-xl font-openhuninn text-justify leading-8 lg:text-2xl lg:leading-10
</style>

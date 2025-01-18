<script setup></script>

<template lang="pug">
div
  .img-ttl.relative.pb-20.mb-5.border-b-1.border-blue-400
    img.absolute.top-0.left-0(src="/assets/img/tab/tab3-1.svg", class="w-[320px]")
    h3.font-genjyuu-bold.relative(class="pl-[118px] pt-3 text-2xl xs:text-3xl") 基因突變類型
    img.absolute.top-0.right-2(src="/assets/img/tab/tab3-3.svg", class="w-[120px] hidden md:block")

  .tab-style
    p 肺癌治療藥物發展快速，對於晚期肺癌病人可使用基因檢測的方式來找到相對應的基因突變，而不同基因突變，就可選擇相對應的標靶藥物，這就是所謂的精準治療。以非小細胞肺癌中佔比最高的肺腺癌為例，目前已知的基因突變就以 EGFR 為亞洲人最常見的基因突變類型(約佔45-55%)
      span.text-orange-500.pl-1 ¹
      | ，其次有 KRAS(8-10%)、ALK、MET、HER2、ROS1、NTRK 等基因突變，且目前也已有相對應的標靶藥物可治療，因此會建議晚期肺腺癌應該接受基因檢測。

  

  .flex.justify-between.items-end
    .mt-10
      p.text-base.bg-orange-400.inline-block.text-white.px-2.rounded 延伸閱讀
      a.block.text-sm.underline.text-blue-400.mt-1(href="https://event.commonhealth.com.tw/2022lungcancer/#genetic" target="_blank") 【肺癌標靶治療新解 | 找出腫瘤基因突變 精準用藥 - 康健雜誌】
      p.text-xs.mt-8
        span.text-orange-500.text-sm.pr-1 1
        | Transl Lung Cancer Res 2015;4(2):156-164

    img(src="/assets/img/tab/tab3-2.svg" class="w-[360px]")

</template>

<style scoped lang="sass">
.tab-style
  @apply text-xl font-openhuninn text-justify leading-8 lg:text-2xl lg:leading-10
</style>

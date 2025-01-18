<script setup></script>

<template lang="pug">
div
  .img-ttl.relative.pb-20.mb-5.border-b-1.border-blue-400
    img.absolute.top-0.left-0(src="/assets/img/tab/tab9-1.svg", class="w-[520px]")
    h3.font-genjyuu-bold.relative(class="pl-[75px] xs:pl-[90px] sm:pl-[120px] pt-2 xs:pt-3 sm:pt-4 text-[17px] xs:text-xl sm:text-3xl") 一代、二代、三代標靶藥物

  .tab-style
    p 一代、二代、三代標靶藥物的分別是以藥物開發問世的前後來排序，每一代藥物多半是為了解決前一代藥物的治療瓶頸；以治療晚期 EGFR 基因突變的標靶藥物為例：

    .flex(class="flex-col md:flex-row")
      .-mr-0(class="lg:-mr-20")
        p.text-orange-500.mt-5 第二代標靶藥物
        p 可抑制較多罕見及複合式基因突變，以延長標靶藥物療效，同時也提供較高純度的 T790M 腫瘤微環境。
        p.text-orange-500 第三代標靶藥物
        p 針對克服 T790M 突變抗藥性所發展出來的藥物。
        p 因此，為了爭取最長存活期，建議初確診晚期肺癌的病患應謹慎選擇第一線的治療藥物，建議可在開始治療之前，先充分了解每一代標靶藥物的強弱項開始著手，與醫師討論評估使用順序。
      img(src="/assets/img/tab/tab9-2.svg" class="w-[300px] block ml-auto mt-0 md:mt-16")

    //- 延伸閱讀
    p.text-base.bg-orange-400.inline-block.text-white.px-2.rounded.mt-10 延伸閱讀
    a.block.text-sm.underline.text-blue-400.mt-1(href="https://event.commonhealth.com.tw/2022lungcancer/#therapy" target="_blank") 【肺癌標靶治療新解 | 找出腫瘤基因突變 精準用藥 - 康健雜誌】

</template>

<style scoped lang="sass">
.tab-style
  @apply text-xl font-openhuninn text-justify leading-8 lg:text-2xl lg:leading-10
</style>

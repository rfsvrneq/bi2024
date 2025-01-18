<script setup>

const dialog = useDialog();

const openDialog = (dialogId) => {
  dialog.open(dialogId); // 根据传递的 dialogId 打开对应的 dialog
};
</script>

<template lang="pug">
div
  h3.my-4
    img.inline.w-8(src="/assets/img/tab-plan/tabs-plan-3.png")
    .inline.text-3xl.font-genjyuu-bold.align-bottom.pl-1 經濟問題盤點

  .tabs-check-style
    img.pic(src="/assets/img/tab-check/tabs-check-2-1.svg")
    p.bg-orange-500.text-white.inline-block.text-2xl.font-openhuninn.px-4.py-2.rounded-full 商業保險詢問

    img(src="/assets/img/tab-check/tabs-check-3-2.svg" class="w-5/12 sm:w-3/12 mx-auto my-5")
    p.text-left 癌症醫療費用往往可能造成家庭的重大負擔，尤其是有些自費的藥物，總能讓人掙扎到底該不該繼續治療？建議在一發現罹癌時，就先做資源盤點，先與主治醫師討論治療的方向及費用，並與家人商量是否要調整生活及消費方式；接著洽詢自己的保險公司了解所規劃的保險給付條件，若真的還有不足的差額，在找資源協助。

    //- 延伸閱讀
    .text-left.my-10
      p.text-base.bg-orange-400.inline-block.text-white.px-2.rounded 延伸閱讀
      a.text-sm.underline.text-blue-400.mt-1.ml-5(href="https://cancer.commonhealth.com.tw/article/187" target="_blank") 【罹癌後才發現花費比想像中的多，該怎麼辦？】

    p.bg-orange-500.text-white.inline-block.text-2xl.font-openhuninn.px-4.py-2.rounded-full 參加臨床試驗
    img(src="/assets/img/tab-check/tabs-check-3-1.svg" class="w-7/12 sm:w-4/12 mx-auto my-5")

    p.text-left 如果有經濟能力，使用藥物當然最新的最好，但多數癌友並不富有，或者不知道自己的保險能給付到什麼程度時，或許還有一個選擇，就是參加臨床試驗，病人可以不用付錢，也有機會得到新的治療。不過，通常臨床試驗會有一定的收錄篩選標準，病人必須符合該試驗的篩選標準才能參與，可與主治醫師詢問並請其評估是否適合再做決定。

    //- 延伸閱讀
    .text-left.my-10
      p.text-base.bg-orange-400.inline-block.text-white.px-2.rounded 延伸閱讀
      a.text-sm.underline.text-blue-400.mt-1.ml-2(href="https://cancer.commonhealth.com.tw/article/147" target="_blank") 【該不該參加臨床試驗？醫師這樣說......】

</template>

<style scoped lang="sass">
.tabs-check-style  
  @apply border-4 border-gray-600 text-gray-600 text-lg text-center bg-white
  position: relative
  border-radius: 35px
  padding: 3rem 2rem
  .pic
    position: absolute
    width: 120px
    right: -4px
    top: -3px
  .side-link
    @apply font-genjyuu-bold text-xl leading-5 transition-all
    cursor: pointer
    span
      @apply text-orange-300 text-xl pl-1
    img
      @apply p-6 -mt-4
      @media screen and (max-width: 480px)
        @apply p-2 -mt-2
    &:hover, &:focus
      transform: scale(1.05)
      @apply transition-all
      span
        @apply text-orange-500
  .people-pop
    background: url(/assets/img/tab-check/tabs-check-1-8.svg) no-repeat
    background-position: center
    width: 80%
    height: 400px
    display: block
    margin: 0 auto
    position: relative
    margin-top: 2rem
    .side-link
      display: block
      position: absolute
      padding: .25rem .5rem
      border-bottom: 2px solid #333333
      @media screen and (max-width: 480px)
        font-size: 1rem
        padding: .25rem .25rem
        border-bottom: none
        span
          font-size: 1rem
    .side-link:nth-child(1)
      top: 2%
      right: 20%
      @media screen and (max-width: 768px)
        right: 15%
      @media screen and (max-width: 480px)
        right: 0%
    .side-link:nth-child(2)
      top: 15%
      right: 65%
      @media screen and (max-width: 480px)
        left: -10%
        right: auto
        width: 100px
    .side-link:nth-child(3)
      top: 24%
      right: 20%
      @media screen and (max-width: 768px)
        right: 10%
      @media screen and (max-width: 480px)
        right: -5%
    .side-link:nth-child(4)
      top: 50%
      right: 65%
      @media screen and (max-width: 480px)
        left: -10%
        right: auto
    .side-link:nth-child(5)
      top: 60%
      right: 20%
      @media screen and (max-width: 768px)
        right: 10%
      @media screen and (max-width: 480px)
        right: -5%

</style>

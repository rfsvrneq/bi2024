<script setup>

const dialog = useDialog();

const openDialog = (dialogId) => {
  dialog.open(dialogId); // 根据传递的 dialogId 打开对应的 dialog
};
</script>

<template lang="pug">
div
  h3.my-4
    img.inline.w-8(src="/assets/img/tab-plan/tabs-plan-2.png")
    .inline.text-3xl.font-genjyuu-bold.align-bottom.pl-1 心理調適盤點

  .tabs-check-style
    img.pic(src="/assets/img/tab-check/tabs-check-2-1.svg")
    p.bg-orange-500.text-white.inline-block.text-2xl.font-openhuninn.px-4.py-2.rounded-full 醫療團隊幫幫我？

    img(src="/assets/img/tab-check/tabs-check-2-2.svg" class="w-8/12 xs:w-6/12 mx-auto my-5")
    p.text-left 近十年來，部分癌症治療機構與防治醫院皆有配置心理師，可以依據癌症病人的需求，提供心理照護服務，通常只要是通過「癌症診療品質認證」的醫院，至少會有一名心理師負責癌友的心理照護服務，如果想知道有哪些醫院通過該認證，可以上國民健康署的網站查詢。
    p.text-left.my-4 至於在醫院內要如何找到癌症心理師的幫忙？一般醫護團隊會依照病人的狀況給予情緒壓力篩檢，當病人在診斷、檢查或治療過程中出現明顯的情緒壓力或有心理上的調適問題，便會通過照會或會診機制，安排心理師與病人或家屬進行會晤，以解決困擾或者有些醫院也有設立自費的心理諮商及治療門診，病人或家屬可自行掛號，進行心理諮商。

    //- 延伸閱讀
    .text-left.my-10
      p.text-base.bg-orange-400.inline-block.text-white.px-2.rounded 延伸閱讀
      a.block.text-sm.underline.text-blue-400.mt-1(href="https://cancer.commonhealth.com.tw/article/861" target="_blank") 【需要心理協助，如何找到癌症心理師？2途徑、2注意、壓力檢測一次看】

    p.bg-orange-500.text-white.inline-block.text-2xl.font-openhuninn.px-4.py-2.rounded-full 外部支援幫幫我？
    img(src="/assets/img/tab-check/tabs-check-2-3.svg" class="w-8/12 xs:w-5/12 mx-auto my-5")

    p.text-left 國民健康署與癌症希望基金會共同推動的癌症資源中心，能提供病友與家屬提供所需的資訊、支持及資源，協助取得完善的照護資訊，以解除不安，幫助度過人生中的難關，可搜尋台灣癌症資源網
      a.text-blue-400.underline(href="https://www.crm.org.tw/" target="_blank") 搜尋台灣癌症資源網
      | ，取得相關訊息。

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

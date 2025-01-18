<script setup>

const dialog = useDialog();

const openDialog = (dialogId) => {
  dialog.open(dialogId); // 根据传递的 dialogId 打开对应的 dialog
};
</script>

<template lang="pug">
div
  h3.my-4
    img.inline.w-8(src="/assets/img/tab-plan/tabs-plan-4.png")
    .inline.text-3xl.font-genjyuu-bold.align-bottom.pl-1 病程追蹤盤點

  .tabs-check-style
    img.pic(src="/assets/img/tab-check/tabs-check-2-1.svg")

    img(src="/assets/img/tab-check/tabs-check-4-1.svg" class="w-6/12 sm:w-5/12 mx-auto my-5")
    p.text-left 當治療療程結束後，仍然要定期回診追蹤，並且要遠離環境中可以導致復發的危險因子，若在尚未回診前發現有新的病灶，也需立刻聯繫並回診進一步確認。

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

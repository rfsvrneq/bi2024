<script setup>
  import { useDialog, dataDialog } from "@/composables/useDialog";
  const dialog = useDialog();
  
</script>

<template lang="pug">
div
  //- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
  //- 使用 showModal() 或 close() 方法），則需要使用 ref
  dialog#dialog(ref="dialog")
    button.cancel(@click="dialog.close") {{ dataDialog.cancel.btnName }}
    main
      //- 根據 dataDialog.contentComponent 的值來決定渲染哪個組件
      component(:is="dataDialog.contentComponent")
</template>

<style scoped lang="sass">

#dialog
  border: none
  width: 90%
  // height: auto
  max-width: 840px
  position: fixed
  overflow: hidden
  @media screen and (max-width: 768px)
    height: auto
    max-height: 90vh

dialog::backdrop
  background-color: rgba(#000, 0.5)

main
  overflow-y: auto
  max-height: 100%
  padding: 3rem
  
.cancel
  width: 50px
  height: 50px
  border: 0
  outline: none
  border-radius: 100%
  font-size: 1.5rem
  color: #000
  cursor: pointer
  position: absolute
  user-select: none
  top: .5rem
  right: .5rem
  z-index: 1

</style>

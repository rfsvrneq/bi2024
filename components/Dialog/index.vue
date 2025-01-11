<script setup>
  import { useDialog, dataDialogs } from "@/composables/useDialog";
  const { close, register } = useDialog();
  const id = "dialog1"; // 設置對應的 dialog ID
</script>

<template lang="pug">
div
  //- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
  dialog(ref="dialog", @mount="register(id, $refs.dialog)")
    button.cancel(@click="close")
      | {{ dataDialogs.dialogs[id]?.cancel?.btnName }}
    main.container
      component(v-if="dataDialogs.dialogs[id]?.content", :is="dataDialogs.dialogs[id]?.content")

</template>

<style scoped lang="sass">

#dialog
  border: none
  width: 90%
  height: 600px
  max-width: 800px
  max-height: 90vh
  position: fixed
  overflow: hidden

dialog::backdrop
  background-color: rgba(#000, 0.5)

main
  overflow-y: auto
  max-height: 100%
  padding: 5rem 2rem 2rem 2rem
  
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
  top: .5rem
  right: .5rem
  z-index: 1

</style>

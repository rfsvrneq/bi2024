<script setup></script>

<template lang="pug">
div
  table.table-fixed
    thead
      tr
        th(class="w-2/12") 變異基因
        th(class="w-2/12") 藥物名稱
        th(class="w-2/12") 健保 / 自費
        th(class="w-1/12") 
        th(class="w-5/12 text-left") 說明
    tbody.leading-6
      
      //- 洛滿舒
      tr.text-center
        td KARS
        td 洛滿舒
          span.block Sotorasib,
          span.block Lumakras
        td 自費
        td 
        td.text-left(rowspan="3") 口服藥，
          br
          | 適用於治療曾接受過至少一次全身性療法，且帶有 KRAS G12C 突變之局部晚期或轉移性非小細胞肺癌成年病患。

</template>

<style scoped lang="sass">

</style>

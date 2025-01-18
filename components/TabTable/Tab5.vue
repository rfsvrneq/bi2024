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
      
      //- 德邁特
      tr.text-center
        td(rowspan="2") MET
        td 德邁特
          span.block Tepotinib,
          span.block Tepmetko
        td 自費
        td 
        td.text-left 口服藥，
          br
          | 適用於治療帶有導致間質上皮轉化因子外顯子 14 跳躍式突變的轉移性非小細胞肺癌成年病患。

      tr.text-center
        td 泰芮塔
          span.block Capmatinib,
          span.block Tabrecta
        td 自費
        td 
        td.text-left 口服藥，
          br
          | 單一療法，適用於治療帶有導致間質上皮轉化因子外顯子 14 跳躍式突變的轉移性非小細胞肺癌成年病患。

</template>

<style scoped lang="sass">
</style>
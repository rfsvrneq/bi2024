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
      
      //- 截剋瘤
      tr.text-center
        td(rowspan="2") ROS1
        td 截剋瘤
          span.block crizotinib, Xalkori
        td.icon 健保
          span.block.text-sm (第一線)
        td 
        td.text-left(rowspan="3") 口服藥，
          br
          | 捷克瘤與羅斯克僅能擇一使用，
          br
          | 除因病人使用後，發生嚴重不良反應或耐受不良情形外，不得互換。

      tr.text-center
        td 羅思克
          span.block entrectinib, Rozlytrek
        td.icon 健保
          span.block.text-sm (第一線)
          br
          | (第一線，適用於ROS-1 基因陽性之局部晚期或轉移性非小細胞癌)
        td 


</template>

<style scoped lang="sass">

</style>

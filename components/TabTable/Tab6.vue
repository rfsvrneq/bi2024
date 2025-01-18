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
      
      tr.text-center
        td(rowspan="2") Anti-VEGF
          br
          | 血管新生抑制劑
        td 癌思停
          span.block Bevacizumab,
          span.block Avastin
        td 自費
        td 
        td.text-left 靜脈注射
          br
          | 第一線：合併標靶藥物使用在 EGFR 突變
          br
          | 第二線：與化療藥物並用之晚期麟狀非小細胞肺癌

      tr.text-center
        td 欣銳擇
          span.block Ramucirumab,
          span.block Cyramza
        td 自費
        td 
        td.text-left 靜脈注射
          br
          | 第一線：合併標靶藥物使用在 EGFR 突變
          br
          | 第二線：合併歐洲紫杉醇在接受含鉑化療仍惡化之局部晚期或轉移性非小細胞癌

</template>

<style scoped lang="sass">
</style>
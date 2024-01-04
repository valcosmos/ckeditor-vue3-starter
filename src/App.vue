<script setup lang="ts">
import { ref } from 'vue'
import editor from './components/editor.vue'

const data = ref('# 标题<table class="ck-table-resized"><colgroup><col style="width:11.99%;"><col style="width:8.99%;"><col style="width:11.48%;"><col style="width:6.9%;"><col style="width:18.42%;"><col style="width:18.74%;"><col style="width:23.48%;"></colgroup><tbody><tr><td>标题1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td rowspan="2">&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></tbody></table> \n ### 二级标题 \n 这里是正文 \n #### 三级标题 \n 这里是正文')
</script>

<template>
  <div h-screen flex space-x-2>
    <editor v-model="data" w="50%" />
    <editor v-model="data" w="50%" preview />
  </div>
</template>

<style scoped>

</style>

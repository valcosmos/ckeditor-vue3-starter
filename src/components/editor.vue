<script setup lang="ts">
import { computed } from 'vue'

import CKEditor from '@ckeditor/ckeditor5-vue'
import '@ckeditor/ckeditor5-build-classic/build/translations/zh-cn'

// import type { EditorConfig } from '@ckeditor/ckeditor5-core'

import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic'

import { Autoformat } from '@ckeditor/ckeditor5-autoformat'
import { Bold, Italic } from '@ckeditor/ckeditor5-basic-styles'
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote'
import type { EditorConfig } from '@ckeditor/ckeditor5-core'
import { Essentials } from '@ckeditor/ckeditor5-essentials'
import { Heading } from '@ckeditor/ckeditor5-heading'
import {
  Image,
  ImageCaption,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
} from '@ckeditor/ckeditor5-image'
import { Indent } from '@ckeditor/ckeditor5-indent'
import { Link } from '@ckeditor/ckeditor5-link'
import { List } from '@ckeditor/ckeditor5-list'
import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed'
import { Paragraph } from '@ckeditor/ckeditor5-paragraph'
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office'
import {
  Table,
  TableCaption,
  TableCellProperties,
  TableColumnResize,
  TableProperties,
  TableToolbar,
} from '@ckeditor/ckeditor5-table'
import { TextTransformation } from '@ckeditor/ckeditor5-typing'
import { Undo } from '@ckeditor/ckeditor5-undo'
import FullScreen from '@pikulinpw/ckeditor5-fullscreen'

const props = withDefaults(defineProps<{ preview?: boolean }>(), { preview: false })

const editorData = defineModel({ required: true, default: '<p>Content of the editor.</p>' })
const toolbar = computed(() => {
  if (props.preview)
    return {}

  return {
    items: [
      'bold',
      'italic',
      'link',
      'bulletedList',
      'numberedList',
      '|',
      'outdent',
      'indent',
      '|',
      'imageUpload',
      'blockQuote',
      'insertTable',
      'mediaEmbed',
      'undo',
      'redo',
      'heading',
      'fullScreen',
    ],
  }
})
const editorConfig: EditorConfig = {
  plugins: [Autoformat, BlockQuote, Bold, Essentials, Heading, Image, ImageCaption, ImageResize, ImageStyle, ImageToolbar, ImageUpload, Indent, Italic, Link, List, MediaEmbed, Paragraph, PasteFromOffice, Table, TableCaption, TableCellProperties, TableColumnResize, TableProperties, TableToolbar, TextTransformation, Undo, FullScreen],
  toolbar: toolbar.value,

  link: {
    // Automatically add target="_blank" and rel="noopener noreferrer" to all external links.
    addTargetToExternalLinks: true,

    // Let the users control the "download" attribute of each link.
    // decorators: [
    //   {
    //     mode: 'manual',
    //     label: 'Downloadable',
    //     attributes: {
    //       download: 'download',
    //     },
    //   },
    // ],
  },
  language: 'zh-cn',
  image: {
    toolbar: [
     	'imageTextAlternative',
      'toggleImageCaption',
      'imageStyle:inline',
      'imageStyle:block',
      'imageStyle:side',
    ],
  },
  table: {
    contentToolbar: [
      'tableColumn',
      'tableRow',
      'mergeTableCells',
      'tableCellProperties',
      'tableProperties',
    ],
  },
}

function onEditorReady() {}
function onEditorFocus() {}
function onEditorBlur() {}
function onEditorInput() {}
function onEditorDestroy() {}
</script>

<template>
  <div>
    <CKEditor.component
      v-model="editorData"
      :disabled="preview"
      :editor="ClassicEditor"
      :config="editorConfig"
      @ready="onEditorReady"
      @focus="onEditorFocus"
      @blur="onEditorBlur"
      @input="onEditorInput"
      @destroy="onEditorDestroy"
    />
  </div>
</template>

<style scoped>

</style>

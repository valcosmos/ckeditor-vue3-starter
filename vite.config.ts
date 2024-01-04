import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import ckeditor5 from '@ckeditor/vite-plugin-ckeditor5';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), UnoCSS(), ckeditor5({ theme: require.resolve( '@ckeditor/ckeditor5-theme-lark' )})],
})

// fullscreen.js

import Plugin from '@ckeditor/ckeditor5-core/src/plugin'
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview'

import './style.css'

export default class FullScreen extends Plugin {
  init() {
    const editor: any = this.editor
    const fullScreenIcon = '<svg width="800px" height="800px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="0" fill="none" width="20" height="20"/><g><path d="M7 2H2v5l1.8-1.8L6.5 8 8 6.5 5.2 3.8 7 2zm6 0l1.8 1.8L12 6.5 13.5 8l2.7-2.7L18 7V2h-5zm.5 10L12 13.5l2.7 2.7L13 18h5v-5l-1.8 1.8-2.7-2.8zm-7 0l-2.7 2.7L2 13v5h5l-1.8-1.8L8 13.5 6.5 12z"/></g></svg>'
    const exitFullScreenIcon = '<svg width="800px" height="800px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="0" fill="none" width="20" height="20"/><g><path d="M3.4 2L2 3.4l2.8 2.8L3 8h5V3L6.2 4.8 3.4 2zm11.8 4.2L18 3.4 16.6 2l-2.8 2.8L12 3v5h5l-1.8-1.8zM4.8 13.8L2 16.6 3.4 18l2.8-2.8L8 17v-5H3l1.8 1.8zM17 12h-5v5l1.8-1.8 2.8 2.8 1.4-1.4-2.8-2.8L17 12z"/></g></svg>'

    editor.ui.componentFactory.add('fullScreen', (locale: any) => {
      const view = new ButtonView(locale)
      let state = 0
      view.set({
        label: 'Full Screen',
        icon: fullScreenIcon,
        // withText: true,
        // tooltip: true,
        tooltip: true,
        isToggleable: true,
      })

      view.on('execute', () => {
        if (state === 1) {
          editor.sourceElement.nextElementSibling.removeAttribute('id')
          document.body.removeAttribute('id')
          view.set({
            label: 'Full Screen',
            icon: fullScreenIcon,
            // withText: true,
            // tooltip: true,
            tooltip: true,
            isToggleable: true,
          })
          state = 0
        }
        else {
          editor.sourceElement.nextElementSibling.setAttribute(
            'id',
            'fullscreeneditor',
          )
          document.body.setAttribute('id', 'fullscreenoverlay')
          view.set({
            label: 'Exit Full Screen',
            icon: exitFullScreenIcon,
            tooltip: true,
            isToggleable: true,
            // withText: true,
            // tooltip: true,
          })
          state = 1
        }
      })

      return view
    })
  }
}

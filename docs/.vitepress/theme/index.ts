import DefaultTheme from 'vitepress/theme'
import { AntDesignContainer, ElementPlusContainer, NaiveUIContainer } from '@vitepress-demo-preview/component'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import '@vitepress-demo-preview/component/dist/style.css'
import '@/style/index.css'
import './custom.css'

library.add(fas)

export default {
    extends: DefaultTheme,
    enhanceApp(ctx) {
      ctx.app.component('demo-preview', AntDesignContainer)
    }
  }
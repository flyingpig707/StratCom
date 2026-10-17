import DefaultTheme from 'vitepress/theme'
import StratComHome from './StratComHome.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('StratComHome', StratComHome)
  },
}

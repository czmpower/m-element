// 导入样式文件
import './style/index.css'

// 导入Vue
import { createApp } from 'vue'
import App from './App.vue'

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

// 创建Vue应用
createApp(App).mount('#app')

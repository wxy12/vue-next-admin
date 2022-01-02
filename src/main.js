import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { store } from './store';
import { directive } from '/@/utils/directive';
import other from '/@/utils/other';

import ElementPlus from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import 'element-plus/dist/index.css';
import '/@/theme/index.scss';
import mitt from 'mitt';

const app = createApp(App);

directive(app);
other.elSvg(app);

app.use(router).use(store).use(ElementPlus, { size: other.globalComponentSize, locale: zhCn }).mount('#app');

app.config.globalProperties.mittBus = mitt();
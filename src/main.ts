import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import Button from './components/Button.vue';
import ButtonsTest from './components/ButtonsTest.vue';

const app = createApp(App);

app.component('Button', Button)
	.component('ButtonsTest', ButtonsTest)
	.mount('#app');

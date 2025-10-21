import './assets/css/style.css'
import router from './router'
import { createApp } from 'vue'
import App from './App.vue'
import navigation from './components/Framework/navigation.vue'
import './assets/css/forms.css'
import FontAwesomeIcon from './plugins/fontawesome.js'
import 'bootstrap-icons/font/bootstrap-icons.css';4
// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

// import Vue3EasyDataTable from "vue3-easy-data-table";
// import VueAwesomePaginate from "vue-awesome-paginate";
// import VueSweetalert2 from 'vue-sweetalert2';
// import 'sweetalert2/dist/sweetalert2.min.css';


const app = createApp(App)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('navigationBar', navigation)
app.mount('#app')
app.use(vue)
// app.use(VueSweetalert2)
// app.component("font-awesome-icon", FontAwesomeIcon)
// app.component("EasyDataTable", Vue3EasyDataTable)
// app.use(VueAwesomePaginate)



import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from './components/HomeComponent.vue'
import SumaCheckbox from './components/SumaCheckbox.vue'
import PadreNumero from './components/PadreNumero.vue'
import ComicsComponent from './components/ComicsComponent.vue'
import SeleccionMultiple from './components/SeleccionMultiple.vue'
import NumeroDoble from './components/NumeroDoble.vue'

const myRoutes = [
    {
        path: "/", component: HomeComponent
    },
    {
        path: "/checkboxes", component: SumaCheckbox
    },
    {
        path: "/padreNumero", component: PadreNumero
    },
    {
        path: "/comics", component: ComicsComponent
    },
    {
        path: "/seleccionMultiple", component: SeleccionMultiple
    },
    {
        path: "/numeroDoble/:numero?", component: NumeroDoble
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router
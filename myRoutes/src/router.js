import HomeComponent from './components/HomeComponent'
import ProductsComponent from './components/ProductsComponent'
import TasksComponent from './components/TasksComponent'
import Error404Component from './components/Error404Component'

export default [
    {path: '/', component: HomeComponent},
    {path: '/products', component: ProductsComponent, name: 'products'},
    {path: '/tasks', component: TasksComponent},
    {path: '/task/:id', component: TasksComponent, name: 'task', props: true},
    {path: '/redirect', redirect: 'products'},
    {path: '*', component: Error404Component}
]
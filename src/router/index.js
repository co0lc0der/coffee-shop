import Vue from 'vue'
import VueRouter from "vue-router"

import HeroView from '../views/HeroView.vue'
import OurCoffeeView from '@/views/OurCoffeeView.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		component: HeroView
	},
	{
		path: '/our-coffee',
		component: OurCoffeeView
	},
]

const router = new VueRouter({
	mode: 'history',
	routes
})

export default router

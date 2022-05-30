import Vue from 'vue'
import VueRouter from "vue-router"

import HeroView from '@/views/HeroView.vue'
import OurCoffeeView from '@/views/OurCoffeeView.vue'
import GoodsPageView from '@/views/GoodsPageView.vue'
// import ItemPageView from '@/views/ItemPageView.vue'
import ContactsView from '@/views/ContactsView.vue'
import ThanksView from '@/views/ThanksView.vue'

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
	{
		path: '/goods-page',
		component: GoodsPageView
	},
	{
		path: '/contacts',
		component: ContactsView
	},
	{
		path: '/thanks',
		component: ThanksView
	},
]

const router = new VueRouter({
	mode: 'history',
	routes
})

export default router

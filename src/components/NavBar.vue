<template>
	<header>
		<ul class="header d-flex justify-content-center justify-content-md-start flex-wrap">
			<li class="header__item">
				<router-link :to="links[0].link">
					<img :src="require(`@/assets/logo/${links[0].icon}`)" :alt="links[0].icon">
				</router-link>
			</li>
			<nav-link
				:link="links[1].link"
				:text="links[1].text"
			/>
			<nav-link
				:link="links[2].link"
				:text="links[2].text"
			/>
			<nav-link
				:link="links[3].link"
				:text="links[3].text"
			/>
		</ul>
	</header>
</template>

<script>
import NavLink from '@/components/NavLink.vue'

export default {
	data() {
		return {
			links: [
				{
					id: 0,
					link: '/',
					icon: 'Logo.svg'
				},
				{
					id: 1,
					link: '/our-coffee',
					text: 'Our coffee',
				},
				{
					id: 2,
					link: '/goods-page',
					text: 'For your pleasure',
				},
				{
					id: 3,
					link: '/contacts',
					text: 'Contact us',
				},
			]
		}
	},
	components: {
		NavLink
	},
}
</script>

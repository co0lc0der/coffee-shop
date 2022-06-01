<template>
	<header>
		<ul class="header d-flex justify-content-center justify-content-md-start flex-wrap">
			<nav-link :link="links.header.link">
				<img
					:src="require(`@/assets/logo/${links.header.icon}`)"
					:alt="links.header.icon"
				/>
			</nav-link>

			<nav-link
				v-for="link in links.other"
				:key="link.id"
				:link="link.link"
				:text="link.text"
			/>
		</ul>
	</header>
</template>

<script>
import NavLink from '@/components/NavLink.vue'

export default {
	data() {
		return {
			links: {
				header: {
					id: 0,
					link: '/',
					icon: 'Logo.svg'
				},
				other: [
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
		}
	},
	components: {
		NavLink
	},
}
</script>

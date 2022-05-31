<template>
	<footer>
		<div class="container">
			<div class="row">
				<div class="col-lg-6 offset-lg-3">
					<ul class="footer d-flex flex-wrap">
						<li class="footer__item">
							<router-link :to="links[0].link">
								<img :src="require(`@/assets/logo/${links[0].icon}`)" :alt="links[0].icon">
							</router-link>
						</li>
						<nav-link
							classItem="footer__item"
							:link="links[1].link"
							:text="links[1].text"
						/>
						<nav-link
							classItem="footer__item"
							:link="links[2].link"
							:text="links[2].text"
						/>
						<nav-link
							classItem="footer__item"
							:link="links[3].link"
							:text="links[3].text"
						/>
					</ul>
				</div>
			</div>
			<img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo">
		</div>
	</footer>
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
					icon: 'Logo_black.svg'
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

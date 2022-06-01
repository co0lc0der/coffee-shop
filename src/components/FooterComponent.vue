<template>
	<footer>
		<div class="container">
			<div class="row">
				<div class="col-lg-6 offset-lg-3">
					<ul class="footer d-flex flex-wrap">
						<nav-link :link="links.footer.link" classItem="footer__item">
							<img
								:src="require(`@/assets/logo/${links.footer.icon}`)"
								:alt="links.footer.icon"
							/>
						</nav-link>

						<nav-link
							v-for="link in links.other"
							:key="link.id"
							:link="link.link"
							:text="link.text"
							classItem="footer__item"
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

import { v4 as uuidv4 } from 'uuid';

export default {
	data() {
		return {
			links: {
				footer: {
					id: uuidv4(),
					link: '/',
					icon: 'Logo_black.svg'
				},
				other: [
					{
						id: uuidv4(),
						link: '/our-coffee',
						text: 'Our coffee',
					},
					{
						id: uuidv4(),
						link: '/goods-page',
						text: 'For your pleasure',
					},
					{
						id: uuidv4(),
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

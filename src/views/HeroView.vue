<template>
	<main>
		<div class="preview">
			<div class="container">
				<div class="row">
					<div class="col">
						<nav-bar />
					</div>
				</div>
				<div class="row">
					<div class="col-lg-10 offset-lg-1">
						<header-title title="Everything You Love About Coffee" />
						<img class="beanslogo" src="@/assets/logo/Beans_logo.svg" alt="Beans logo">
						<div class="preview__subtitle">We makes every day full of energy and taste</div>
						<div class="preview__subtitle">Want to try our beans?</div>
						<a href="#" class="preview__btn" @click.prevent="smoothScroll">More</a>
					</div>
				</div>
			</div>
		</div>

		<section class="about" id="about" ref="about">
			<div class="container">
				<div class="row">
					<div class="col-lg-6 offset-lg-3">
						<div class="title">About Us</div>
						<img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo">
						<div class="about__text">
							Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
							Afraid at highly months do things on at. Situation recommend objection do intention
							so questions. As greatly removed calling pleased improve an. Last ask him cold feel
							met spot shy want. Children me laughing we prospect answered followed. At it went
							is song that held help face.<br><br>

							Now residence dashwoods she excellent you. Shade being under his bed her, Much
							read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
							horrible but confined day end marriage. Eagerness furniture set preserved far
							recommend. Did even but nor are most gave hope. Secure active living depend son
							repair day ladies now.
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="best">
			<div class="container">
				<div class="title" ref="ourBest">Our best</div>
				<div class="row">
					<div class="col-lg-10 offset-lg-1">
						<div class="best__wrapper">
							<product-card
								v-for="product in products"
								:key="product.id"
								:title="product.title"
								:price="product.price"
								:image="product.image"
								classItem="best__item"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>

<script>
import NavBar from '@/components/NavBar'
import ProductCard from '@/components/ProductCard'
import HeaderTitle from '@/components/HeaderTitle'

import { scrollIntoView } from "seamless-scroll-polyfill";
import { v4 as uuidv4 } from 'uuid';

export default {
	data() {
		return {
			products: [
				{
					id: uuidv4(),
					image: 'coffee-1.jpg',
					title: 'Solimo Coffee Beans 2kg',
					price: 10.73,
				},
				{
					id: uuidv4(),
					image: 'coffee-2.jpg',
					title: 'Presto Coffee Beans 1kg',
					price: 15.99,
				},
				{
					id: uuidv4(),
					image: 'coffee-3.jpg',
					title: 'AROMISTICO Coffee 1kg',
					price: 6.99,
				},
			]
		}
	},
	components: {
		NavBar,
		ProductCard,
		HeaderTitle
	},
	methods: {
		smoothScroll() {
			scrollIntoView(this.$refs.ourBest, {
				behavior: "smooth",
				block: "start",
			});
		},
	}
}
</script>

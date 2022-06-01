<template>
	<main>
		<div class="banner goodspage-banner">
			<div class="container">
				<div class="row">
					<div class="col-lg-6">
						<nav-bar />
					</div>
				</div>
				<header-title title="For your pleasure" />
			</div>
		</div>

		<section class="shop">
			<div class="container">
				<div class="row">
					<div class="col-lg-4 offset-2">
						<img class="shop__girl" src="@/assets/img/coffee_goods.jpg" alt="girl">
					</div>
					<div class="col-lg-4">
						<div class="title">About our beans</div>
						<img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo">
						<div class="shop__text">
							Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
							<br><br>
							Afraid at highly months do things on at. Situation recommend objection do intention<br>
							so questions. <br>
							As greatly removed calling pleased improve an. Last ask him cold feel<br>
							met spot shy want. Children me laughing we prospect answered followed. At it went<br>
							is song that held help face.
						</div>
					</div>
				</div>
	
				<div class="line"></div>
	
				<div class="row">
					<div class="col-lg-10 offset-lg-1">
						<div class="shop__wrapper">
							<product-card
								v-for="product in products"
								:key="product.id"
								:title="product.title"
								:price="product.price"
								:image="product.image"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>

<script>
import HeaderTitle from '@/components/HeaderTitle'
import NavBar from '@/components/NavBar'
import ProductCard from '@/components/ProductCard'

import { v4 as uuidv4 } from 'uuid';

export default {
	data() {
		return {
			products: [
				{
					id: uuidv4(),
					image: 'coffee-1.jpg',
					title: 'Solimo Coffee Beans 3kg',
					country: 'Brazil',
					price: 16.73,
				},
				{
					id: uuidv4(),
					image: 'coffee-2.jpg',
					title: 'Presto Coffee Beans 2kg',
					country: 'Brazil',
					price: 12.99,
				},
				{
					id: uuidv4(),
					image: 'good-1.jpg',
					title: 'Solimo Coffee Beans 2kg',
					country: 'Brazil',
					price: 10.73,
				},
				{
					id: uuidv4(),
					image: 'coffee-2.jpg',
					title: 'Presto Coffee Beans 1kg',
					country: 'Brazil',
					price: 15.99,
				},
				{
					id: uuidv4(),
					image: 'coffee-3.jpg',
					title: 'AROMISTICO Coffee 1kg',
					country: 'Brazil',
					price: 6.99,
				},
				{
					id: uuidv4(),
					image: 'coffee-3.jpg',
					title: 'AROMISTICO Coffee 2kg',
					country: 'Brazil',
					price: 9.99,
				},
			]
		}
	},
	components: {
		NavBar,
		ProductCard,
		HeaderTitle
	}
}
</script>

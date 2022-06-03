<template>
	<main>
		<div class="banner coffepage-banner">
			<div class="container">
				<div class="row">
					<div class="col-lg-6">
						<nav-bar />
					</div>
				</div>
				<header-title />
			</div>
		</div>
		<section class="shop">
			<div class="container">
				<div class="row">
					<div class="col-lg-4 offset-2">
						<img class="shop__girl" src="@/assets/img/coffee_girl.jpg" alt="girl">
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
					<div class="col-lg-4 offset-2">
						<form action="#" class="shop__search">
							<label class="shop__search-label" for="filter">Looking for</label>
							<input id="filter" type="text" placeholder="start typing here..." class="shop__search-input">
						</form>
					</div>
					<div class="col-lg-4">
						<div class="shop__filter">
							<div class="shop__filter-label">
								Or filter
							</div>
							<div class="shop__filter-group">
								<filter-button
									v-for="country in countries"
									:key="country.id"
									:text="country.country"
								/>
							</div>
						</div>
					</div>
				</div>
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
import NavBar from '@/components/NavBar'
import ProductCard from '@/components/ProductCard'
import HeaderTitle from '@/components/HeaderTitle'
import FilterButton from '@/components/FilterButton'

import { v4 as uuidv4 } from 'uuid';

export default {
	data() {
		return {
			countries: [
				{
					id: uuidv4(),
					country: 'Columbia',
				},
				{
					id: uuidv4(),
					country: 'Brazil',
				},
				{
					id: uuidv4(),
					country: 'Kenya',
				},
			]
		}
	},
	components: {
		NavBar,
		ProductCard,
		HeaderTitle,
		FilterButton
	},
	computed: {
		products() {
			return this.$store.getters["getProducts"]
		}
	}
}
</script>

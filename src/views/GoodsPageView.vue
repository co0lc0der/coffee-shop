<template>
	<main>
		<div class="banner goodspage-banner">
			<div class="container">
				<div class="row">
					<div class="col-lg-6">
						<nav-bar-component />
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
							<product-card-component
								:title="products[0].title"
								:price="products[0].price"
								:image="products[0].image"
							/>
							<product-card-component
								:title="products[1].title"
								:price="products[1].price"
								:image="products[1].image"
							/>
							<product-card-component
								:title="products[2].title"
								:price="products[2].price"
								:image="products[2].image"
							/>
							<product-card-component
								:title="products[3].title"
								:price="products[3].price"
								:image="products[3].image"
							/>
							<product-card-component
								:title="products[4].title"
								:price="products[4].price"
								:image="products[4].image"
							/>
							<product-card-component
								:title="products[5].title"
								:price="products[5].price"
								:image="products[5].image"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>

<script>
import HeaderTitle from '@/components/HeaderTitle.vue'
import NavBarComponent from '@/components/NavBarComponent.vue'
import ProductCardComponent from '@/components/ProductCardComponent.vue'

export default {
	data() {
		return {
			products: [
				{
					id: 0,
					image: 'good-1.jpg',
					title: 'Solimo Coffee Beans 2kg',
					country: 'Brazil',
					price: 10.73,
				},
				{
					id: 1,
					image: 'coffee-2.jpg',
					title: 'Presto Coffee Beans 1kg',
					country: 'Brazil',
					price: 15.99,
				},
				{
					id: 2,
					image: 'coffee-3.jpg',
					title: 'AROMISTICO Coffee 1kg',
					country: 'Brazil',
					price: 6.99,
				},
				{
					id: 3,
					image: 'coffee-1.jpg',
					title: 'Solimo Coffee Beans 3kg',
					country: 'Brazil',
					price: 16.73,
				},
				{
					id: 4,
					image: 'coffee-2.jpg',
					title: 'Presto Coffee Beans 2kg',
					country: 'Brazil',
					price: 12.99,
				},
				{
					id: 5,
					image: 'coffee-3.jpg',
					title: 'AROMISTICO Coffee 2kg',
					country: 'Brazil',
					price: 9.99,
				},
			]
		}
	},
	components: {
		NavBarComponent,
		ProductCardComponent,
		HeaderTitle
	}
}
</script>

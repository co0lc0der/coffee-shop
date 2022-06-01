<template>
	<main>
		<div class="banner itempage-banner">
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
					<div class="col-lg-5 offset-1">
						<img class="shop__girl" src="@/assets/img/coffee_item.jpg" alt="coffee_item">
					</div>
					<div class="col-lg-4">
						<div class="title">About it</div>
						<img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo">
						<div class="shop__point">
							<span>Country:</span>
							Brazil
						</div>
						<div class="shop__point">
							<span>Description:</span>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua.
							Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat.
						</div>
						<div class="shop__point">
							<span>Price:</span>
							<span class="shop__point-price">16.99$</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>

<script>
import NavBar from '@/components/NavBar'
import HeaderTitle from '@/components/HeaderTitle'

export default {
	components: {
		NavBar,
		HeaderTitle
	}
}
</script>

<template>
	<footer>
		<div class="container">
			<div class="row">
				<div class="col-lg-6 offset-lg-3">
					<ul class="footer d-flex flex-wrap">
						<li class=" footer__item">
							<router-link to="/">
								<img src="@/assets/logo/Logo_black.svg" alt="logo">
							</router-link>
						</li>
						<li class="footer__item">
							<router-link to="/our-coffee">Our coffee</router-link>
						</li>
						<li class="footer__item">
							<router-link to="/goods-page">For your pleasure</router-link>
						</li>
						<li class="footer__item">
							<router-link to="/contacts">Contact us</router-link>
						</li>
					</ul>
				</div>
			</div>
			<img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo">
		</div>
	</footer>
</template>

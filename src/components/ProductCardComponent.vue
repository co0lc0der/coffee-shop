<template>
	<div :class="classItem">
		<img
			:src="require(`@/assets/img/${image}`)"
			:alt="image"
		/>
		<div class="best__item-title">
			{{title}}
		</div>
		<div class="best__item-price">{{price}}$</div>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
		classItem: {
			type: String,
			required: false,
			default: "shop__item"
		}
	}
}
</script>

<template>
	<li :class="classItem">
		<router-link :to="link">{{ text }}</router-link>
	</li>
</template>

<script>
export default {
	props: {
		link: {
			type: String,
			default: "/",
			required: false,
		},
		text: {
			type: String,
			default: "",
			required: false,
		},
		classItem: {
			type: String,
			default: "header__item",
			required: false,
		},
	},
}
</script>

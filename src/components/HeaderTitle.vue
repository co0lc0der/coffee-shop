<template>
	<h1 class="title-big">{{title}}</h1>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: "Our Coffee",
			required: false,
		},
	},
}
</script>

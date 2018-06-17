<template>
	<div class="comp">
		<h1>{{ title }}</h1>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				title: '#Test Component'
			}
		}
	}
</script>

<style scoped>
	p{
		color: red
	}
	.comp {
		border: 1px solid green;
		margin: 5px;
		padding: 5px;
	}
</style>


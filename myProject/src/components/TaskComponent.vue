<template>
	<div class="comp">
		<h1>{{ title }}</h1>
		<table>
			<thead>
				<tr>
					<th>Nome</th>
					<th>Completado</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(task, index) in tasks" :key="index">
					<td>{{ task.name }}</td>
					<td>{{ task.completed ? 'Sim' : 'Não' }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				title: '#Task Component',
				tasks: [
					{name: 'Lavar louca', completed: true},
					{name: 'Cortar grama', completed: true},
					{name: 'Lavar carro', completed: true},
					{name: 'Lavar roupas', completed: true},
					{name: 'Lavar piso', completed: true}
				]
			}
		}
	}
</script>

<style scoped>
	.comp {
		border: 1px solid red;
		margin: 5px;
		padding: 5px;
	}
</style>
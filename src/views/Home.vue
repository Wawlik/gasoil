<template>
	<div class="home">
		<!-- <main-list msg="Welcome to Your Vue.js App"/> -->
		<search/>
		<div class="tables">
			<result/>
			<table-saved/>
		</div>
	</div>
</template>

<script>
// import mainList from '@/components/mainList.vue'
import Search from '@/components/Search.vue'
import Result from '@/components/Result.vue'
import tableSaved from '@/components/tableSaved.vue'

export default {
	name: 'Home',
	components: {
		// mainList,
		Search,
		Result,
		tableSaved
	}
}
</script>
<style>
	.tables{
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
	}
</style>

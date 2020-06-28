<template>
	<div class="tableSaved">
		<div class="Item" v-for="(item, index) in saved" :key="'result-'+index">
			<div class="Item__info">12321
				<a :href="item.url" class="Item__title">{{ item.title }}</a>
				<div class="Item__url">{{ item.url }}</div>
				<div class="Item__snippet" v-html="item.snippet"></div>
			</div>
			<div class="Item__rm" @click="rmFromRight(item, index)">
				<span>-</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'tableSaved',
		data() {
			return {
			}
		},
		methods:{
			rmFromRight(it, ind){
				this.$store.dispatch('rmFromRight', {item: it, index: ind});
			}
		},
		computed: {
			saved() {
				return this.$store.getters.saved;
			}
        }
	}
</script>

<style>

.tableSaved {
	padding: 10px 0 30px 0;
}

.Item__rm {
	display: flex;
	flex-flow: row nowrap;
	justify-content: middle;
}
.Item__rm >span{
	margin: auto;
	font-size: 21px;
	margin-left: 15px;
	cursor: pointer;
}
</style>
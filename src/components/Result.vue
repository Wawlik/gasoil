<template>
	<div class="Results">
		<div class="Item" v-for="(item, index) in results" :key="'result-'+index">
			<div class="Item__info">
				<a :href="item.url" class="Item__title">{{ item.title }}</a>
				<div class="Item__url">{{ item.url }}</div>
				<div class="Item__snippet" v-html="item.snippet"></div>
			</div>
			<div class="Item__add" @click="addToRight(item, index)">
				<span>+</span>
			</div>
			<!-- <span>{{item.wordcount}}</span> -->
		</div>
	</div>
</template>
<script>
	export default {
		name: 'result',
		data() {
			return {
			}
		},
		methods:{
			addToRight(it, ind){
				this.$store.dispatch('addToRight', {item: it, index: ind});
			}
		},
		computed: {
			results() {
				return this.$store.getters.results
			}
		}
	}
</script>
<style>

.Results {
	padding: 10px 0 30px 0;
}

.Item {
	padding: 10px;
	width: 590px;
	display: flex;
	justify-content: space-between;
}

.Item__title {
font-size: 16px;
color: #331cb5;
text-decoration: none;
}

.Item__title:hover {
text-decoration: underline;
}

.Item__url {
font-size: 14px;
color: #006621;
}

.Item__title, .Item__url {
margin-bottom: 2px;
}

.Item__snippet {
font-size: 13px;
color: #6a6a6a;
}

.Item__snippet .searchmatch {
font-weight: bold;
}
.Item__add {
	display: flex;
	flex-flow: row nowrap;
	justify-content: middle;
}
.Item__add >span{
	margin: auto;
	font-size: 21px;
	margin-left: 15px;
	cursor: pointer;
}
</style>
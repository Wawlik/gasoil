<template>
	<div class="History">
		<div v-if="history && history.length">
			<div class="History__list" v-for="(item, index) in history" :key="'result-' + index">
				<div class="History__info">
					<a :href="item.url" class="History__title">title: {{item.title}}</a>
					<div class="History__url">mode: {{item.mode}}</div>
					<div class="History__snippet">date: {{item.date}}</div>
				</div>
			</div>
		</div>
		<div v-else class="History__nolist">
			В истории пока что нет записей...
		</div>
	</div>
</template>
<script>
	export default {
		name: 'History',
		data() {
			return {
			}
		},
		methods:{
		},
		mounted(){
			console.log(this.$route.query.mode);
		},
		computed: {
			history() {
				let mode = this.$route.query.mode;
				let history = this.$store.getters.history;
				let result = mode ? history.filter(one => one.mode === mode) : null;
				return result || history;
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

.History__title {
font-size: 16px;
color: #331cb5;
text-decoration: none;
}

.History__title:hover {
text-decoration: underline;
}

.History__url {
font-size: 14px;
color: #006621;
}

.History__title, .History__url {
margin-bottom: 2px;
}

.History__snippet {
font-size: 13px;
color: #6a6a6a;
}

.History__snippet .searchmatch {
font-weight: bold;
}
.History__add {
	display: flex;
	flex-flow: row nowrap;
	justify-content: middle;
}
.History__add >span{
	margin: auto;
	font-size: 21px;
	margin-left: 15px;
	cursor: pointer;
}
.History__nolist{
	text-align: center;
	font-size: 24px;
	margin-top: 50px;
}
</style>
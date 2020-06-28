<template>
	<div class="History">
		<div v-if="history && history.length">
			<div class="History__item" v-for="(item, index) in history" :key="'result-' + index">
				<div class="History__info">
					<a :href="item.url" class="History__title">Название: {{item.title}}</a>
					<div :class="'History__mode ' + (item.mode === 'rm' ? 'History__mode__rm':'History__mode__add')">
						{{(item.mode === 'rm' ? 'Удаление' : 'Добавление')}}</div>
					<div class="History__snippet">Дата: {{item.date}}</div>
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


.History__title {
font-size: 16px;
color: #331cb5;
text-decoration: none;
}

.History__title:hover {
	text-decoration: underline;
}

.History__title{
	margin-bottom: 2px;
}

.History__snippet {
	font-size: 13px;
	color: #6a6a6a;
}

.History__snippet .searchmatch {
	font-weight: bold;
}
.History__nolist{
	text-align: center;
	font-size: 24px;
	margin-top: 50px;
}
.History__mode__add{
	color: #09f;
}
.History__mode__rm{
	color: red;
}
.History__item{
	margin-top: 15px;
}
</style>
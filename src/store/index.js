import Vue from 'vue'
import Vuex from 'vuex'
import jsonp from 'jsonp'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		results: [],
		saved: [],
		history: []
	},
	getters: {
		results(state) {
			return state.results.map(item => {
				item.url = 'https://ru.wikipedia.org/wiki/' + item.title;
				return item;
			})
		},
		saved(state) {
			return state.saved;
		},
		history(state) {
			return state.history;
		}
	},
	mutations: {
		set(state, { type, items }){
			state[type] = items;
		}
	},
	actions: {
		search({ commit }, query) {
			const url ='https://ru.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=' + query;
			jsonp(url, (error, response)=> {
				if(error) {
					throw error;
				}
				const results = response.query.search.map((item,index)=> {
					item.id = index;
					return item;
				}).sort((one, two) =>{
					// sort by wordcount
					if(one.wordcount > two.wordcount){
						return 1;
					}
					if(one.wordcount < two.wordcount){
						return -1;
					}
					return 0;
				})
				commit('set', { type: 'results', items: results});
			})
		},
		addToRight({commit}, query){
			let saved = this.state.saved;
			commit('set', { type: 'saved', items: saved});
			let obj = query.item;
			obj.id = query.index;
			saved.splice(0, 0, obj);
			// remove element from results
			let results = this.state.results;
			results.splice(query.index, 1);
			commit('set', { type: 'results', items: results});
			//history save
			let toHist = {
				title: query.title,
				date: new Date(),
				mode: 'add'
			};
			let history = this.state.history;
			history.push(toHist);
			commit('set', { type: 'history', items: history});
		},
		rmFromRight({commit}, query){
			let saved = this.state.saved;
			saved.splice(query.index, 1);
			commit('set', { type: 'saved', items: saved});
			let results = this.state.results;
			let obj = query.item;
			// move to results
			results.splice(0, 0, obj);
			commit('set', { type: 'results', items: results});

			//history save
			let toHist = {
				title: query.title,
				date: new Date(),
				mode: 'rm'
			};
			let history = this.state.history;
			history.push(toHist);
			commit('set', { type: 'history', items: history});
		}
	}
})

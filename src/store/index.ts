import Vue from "vue";
import Vuex from "vuex";
import client from "api-client";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		games: []
	},

	mutations: {
		setGames(state, games) {
			state.games = games;
		}
	},

	actions: {
		fetchGames({ commit }) {
			return client.fetchGames().then((games: Object) => commit("setGames", games));
		}
	}
});

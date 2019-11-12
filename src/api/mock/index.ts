import games from "./data/games.json";

const fetch = (mockData: Array<any>, time = 0) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(mockData);
		}, time);
	});
};

export default {
	fetchGames() {
		return fetch(games, 1000); // wait 1s before returning posts
	}
};

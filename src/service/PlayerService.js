export default class PlayerService {

    getPlayers() {
        return fetch('demo/data/players.json').then(res => res.json())
            .then(d => d.root);
    }

}

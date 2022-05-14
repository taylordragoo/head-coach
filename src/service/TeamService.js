export default class TeamService {

    getTeams() {
        return fetch('demo/data/products.json').then(res => res.json()).then(d => d.data);
    }
}

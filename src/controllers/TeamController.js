import Team from '@/models/Team';
import { PlayerController } from '@/controllers/index';

export default class TeamController {
    create() {
        const teams = this.getTeamsDefault();
        const playerController = new PlayerController;

        for(let i = 0; i < teams.length; i++) {
            let team = Team.insert({
                data: {
                    id: teams[i].tid,
                    tid: teams[i].tid,
                    cid: teams[i].cid,
                    did: teams[i].did,
                    region: teams[i].region,
                    name: teams[i].name,
                    abbrev: teams[i].abbrev,
                    pop: teams[i].pop,
                    lid: 0
                }
            })

            playerController.create(i)
        }
    }

    read(obj) {

    }

    update(obj) {

    }

    delete(obj) {

    }

    getTeamsDefault() {
        const teams = [
            {tid: 0, cid: 1, did: 6, region: "Atlanta", name: "Gold Club", abbrev: "ATL", pop: 4.3},
            {tid: 1, cid: 0, did: 2, region: "Baltimore", name: "Crabs", abbrev: "BAL", pop: 2.2},
            {tid: 2, cid: 0, did: 0, region: "Boston", name: "Massacre", abbrev: "BOS", pop: 4.4},
            {tid: 3, cid: 0, did: 1, region: "Chicago", name: "Whirlwinds", abbrev: "CHI", pop: 8.8},
            {tid: 4, cid: 1, did: 6, region: "Cincinnati", name: "Riots", abbrev: "CIN", pop: 1.6},
            {tid: 5, cid: 0, did: 1, region: "Cleveland", name: "Curses", abbrev: "CLE", pop: 1.9},
            {tid: 6, cid: 0, did: 3, region: "Dallas", name: "Snipers", abbrev: "DAL", pop: 4.7},
            {tid: 7, cid: 1, did: 5, region: "Denver", name: "High", abbrev: "DEN", pop: 2.2},
            {tid: 8, cid: 0, did: 1, region: "Detroit", name: "Muscle", abbrev: "DET", pop: 4.0},
            {tid: 9, cid: 0, did: 3, region: "Houston", name: "Apollos", abbrev: "HOU", pop: 4.3},
            {tid: 10, cid: 1, did: 7, region: "Las Vegas", name: "Blue Chips", abbrev: "LV", pop: 1.7},
            {tid: 11, cid: 1, did: 7, region: "Los Angeles", name: "Earthquakes", abbrev: "LA", pop: 12.3},
            {tid: 12, cid: 0, did: 3, region: "Mexico City", name: "Aztecs", abbrev: "MXC", pop: 19.4},
            {tid: 13, cid: 0, did: 2, region: "Miami", name: "Cyclones", abbrev: "MIA", pop: 5.4},
            {tid: 14, cid: 1, did: 4, region: "Minneapolis", name: "Blizzards", abbrev: "MIN", pop: 2.6},
            {tid: 15, cid: 0, did: 0, region: "Montreal", name: "Mounties", abbrev: "MON", pop: 4.0},
            {tid: 16, cid: 0, did: 0, region: "New York", name: "Bankers", abbrev: "NYC", pop: 18.7},
            {tid: 17, cid: 1, did: 5, region: "Philadelphia", name: "Cheesesteaks", abbrev: "PHI", pop: 5.4},
            {tid: 18, cid: 1, did: 6, region: "Phoenix", name: "Vultures", abbrev: "PHO", pop: 3.4},
            {tid: 19, cid: 0, did: 1, region: "Pittsburgh", name: "Rivers", abbrev: "PIT", pop: 1.8},
            {tid: 20, cid: 1, did: 4, region: "Portland", name: "Roses", abbrev: "POR", pop: 1.8},
            {tid: 21, cid: 1, did: 5, region: "Sacramento", name: "Gold Rush", abbrev: "SAC", pop: 1.6},
            {tid: 22, cid: 1, did: 7, region: "San Diego", name: "Pandas", abbrev: "SD", pop: 2.9},
            {tid: 23, cid: 1, did: 5, region: "San Francisco", name: "Venture Capitalists", abbrev: "SF", pop: 3.4},
            {tid: 24, cid: 1, did: 4, region: "Seattle", name: "Symphony", abbrev: "SEA", pop: 3.0},
            {tid: 25, cid: 0, did: 3, region: "St. Louis", name: "Spirits", abbrev: "STL", pop: 2.2},
            {tid: 26, cid: 0, did: 2, region: "Tampa", name: "Turtles", abbrev: "TPA", pop: 2.2},
            {tid: 27, cid: 0, did: 0, region: "Toronto", name: "Beavers", abbrev: "TOR", pop: 6.3},
            {tid: 28, cid: 1, did: 4, region: "Vancouver", name: "Whalers", abbrev: "VAN", pop: 2.3},
            {tid: 29, cid: 0, did: 2, region: "Washington", name: "Monuments", abbrev: "WAS", pop: 4.2},
            {tid: 30, cid: 1, did: 6, region: "Kansas City", name: "Grillers", abbrev: "KAN", pop: 1.4},
            {tid: 31, cid: 1, did: 7, region: "San Antonio", name: "Defenders", abbrev: "SAN", pop: 1.4}
        ];

        return teams;
    }
}

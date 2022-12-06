import _ from 'lodash';
import { universities } from '@/data/colleges';
import { address, internet, name } from 'faker';

export default function createPlayers(database, position, amount, tid) {
    let db = database.backendDB();
    let team = tid;
    let size = amount
    let pos = position
    let players = []
    new Array(size).fill().forEach(() => {
        let player = {
            pos: pos,
            college: _.sample(universities),
            born: {
                year: _.random(1981, 2000),
                loc: address.cityName()
            },
            weight: _.random(200,300),
            height: _.random(60,80),
            tid: team,
            imgURL: internet.avatar(),
            draft: {
                tid: team,
                round: _.random(1,7),
                pick: _.random(1,32),
                year: 2018,
                traits: [],
                pot: _.random(50,100),
                ovr: _.random(50,80)
            },
            ratings: {
                strength: _.random(1,20),
                speed: _.random(1,20),
                agility: _.random(1,20),
                injury: _.random(1,20),
                stamina: _.random(1,20),
                awareness: _.random(1,20),
                acceleration: _.random(1,20),
                carry: _.random(1,20),
                catch: _.random(1,20),
                thpow: _.random(1,20),
                thacc: _.random(1,20),
                pblock: _.random(1,20),
                rblock: _.random(1,20),
                tackle: _.random(1,20),
                btackle: _.random(1,20),
                kpow: _.random(1,20),
                kacc: _.random(1,20),
                season: 2021,
                pos: pos,
                fuzz: 1.163364711073866,
                skills: [
                    "3"
                ],
                ovr: 40,
                pot: 55
            },
            firstName: name.firstName(),
            lastName: name.lastName()
        }

        database.players.add(player);
        players.push(player)
    })

    return players
}

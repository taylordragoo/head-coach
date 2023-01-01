import Player from '@/models/Player';
import { name } from 'faker';
import _ from 'lodash';
import { PLAYERS, POSITIONS } from '@/data/constants'

export default class PlayerController {
    create() {
        // const team_id = tid
        const positions = this.getPlayerPosDefaults()
        const p = PLAYERS
        for(let i = 0; i < p.length; i++) {
            let pAge = _.random(21, 39)
            let pExp = pAge - 21;

            let player = Player.insert({
                data: {
                    first: name.firstName(),
                    last: name.lastName(),
                    ptid: p[i].tid,
                    born: {
                        year: p[i].born.year,
                        location: p[i].born.loc
                    },
                    contract: {
                        amount: p[i].contract.amount,
                        expires: p[i].contract.exp
                    },
                    injury: {
                        type: p[i].injury.type,
                        daysRemaining: p[i].injury.gamesRemaining
                    }
                }
            })
            console.log("Player Created");
        }
    }

    read(obj) {

    }

    update(obj) {

    }

    delete(obj) {

    }

    getPlayerPosDefaults() {
        let positions = [
            'QB',
            'QB',
            'QB',
            'RB',
            'RB',
            'RB',
            'RB',
            'FB',
            'WR',
            'WR',
            'WR',
            'WR',
            'WR',
            'WR',
            'TE',
            'TE',
            'TE',
            'LT',
            'LT',
            'LG',
            'LG',
            'C',
            'C',
            'RG',
            'RG',
            'RT',
            'RT',
            'LE',
            'LE',
            'RE',
            'RE',
            'DT',
            'DT',
            'DT',
            'LOLB',
            'LOLB',
            'LOLB',
            'MLB',
            'MLB',
            'MLB',
            'ROLB',
            'ROLB',
            'CB',
            'CB',
            'CB',
            'CB',
            'CB',
            'FS',
            'FS',
            'SS',
            'SS',
            'K',
            'P'
        ]

        return positions
    }
}

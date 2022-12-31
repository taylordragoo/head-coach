import Player from '@/models/Player';
import { name } from 'faker';
import _ from 'lodash';

export default class PlayerController {
    create(tid) {
        const team_id = tid
        const positions = this.getPlayerPosDefaults()

        for(let i = 0; i < positions.length; i++) {
            let pAge = _.random(21, 39)
            let pExp = pAge - 21;

            let player = Player.insert({
                data: {
                    first: name.firstName(),
                    last: name.lastName(),
                    age: pAge,
                    exp: pExp,
                    ptid: tid,
                    pos: positions[i]
                }
            })
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

import Player from '@/models/Player';
import { name } from 'faker';
import _ from 'lodash';
import { PLAYERS, POSITIONS } from '@/data/constants'

export default class PlayerController {
    create() {
        const p = PLAYERS
        for(let i = 0; i < p.length; i++) {
            let player = Player.insert({
                data: {
                    first: p[i].firstName,
                    last: p[i].lastName,
                    ptid: p[i].tid,
                    age: 2022 - p[i].born.year,
                    exp: 2022 - p[i].draft.year,
                    pos: p[i].ratings[0].pos,
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
                    },
                    draft: {
                        round: p[i].draft.round,
                        pick: p[i].draft.pick,
                        tid: p[i].draft.tid,
                        year: p[i].draft.year,
                        pot: p[i].draft.pot,
                        ovr: p[i].draft.ovr
                    },
                    salaries: p[i].salaries,
                    stats: {
                        season: 2022,
                        tid: p[i].tid,
                    },
                    attributes: {
                        strength: this.convert(p[i].ratings[0].stre),
                        jump: this.convert(p[i].ratings[0].hgt),
                        speed: this.convert(p[i].ratings[0].spd),
                        stamina: this.convert(p[i].ratings[0].endu),
                        throw_power: this.convert(p[i].ratings[0].thp),
                        throw_acc: this.convert(p[i].ratings[0].tha),
                        ball_sec: this.convert(p[i].ratings[0].bsc),
                        elusiveness: this.convert(p[i].ratings[0].elu),
                        route_run: this.convert(p[i].ratings[0].rtr),
                        catching: this.convert(p[i].ratings[0].hnd),
                        run_block: this.convert(p[i].ratings[0].rbk),
                        pass_block: this.convert(p[i].ratings[0].pbk),
                        pass_cov: this.convert(p[i].ratings[0].pcv),
                        tackling: this.convert(p[i].ratings[0].tck),
                        pass_rush: this.convert(p[i].ratings[0].prs),
                        run_stop: this.convert(p[i].ratings[0].rns),
                        kick_power: this.convert(p[i].ratings[0].kpw),
                        kick_acc: this.convert(p[i].ratings[0].kac),
                        punt_power: this.convert(p[i].ratings[0].ppw),
                        punt_acc: this.convert(p[i].ratings[0].pac),
                        overall: this.convert(p[i].ratings[0].ovr),
                        potential: this.convert(p[i].ratings[0].pot),
                    },
                    overalls: {
                        QB: this.convert(p[i].ratings[0].ovrs.QB),
                        RB: this.convert(p[i].ratings[0].ovrs.RB),
                        WR: this.convert(p[i].ratings[0].ovrs.WR),
                        TE: this.convert(p[i].ratings[0].ovrs.TE),
                        OL: this.convert(p[i].ratings[0].ovrs.OL),
                        DL: this.convert(p[i].ratings[0].ovrs.DL),
                        LB: this.convert(p[i].ratings[0].ovrs.LB),
                        CB: this.convert(p[i].ratings[0].ovrs.CB),
                        S: this.convert(p[i].ratings[0].ovrs.S),
                        K: this.convert(p[i].ratings[0].ovrs.K),
                        P: this.convert(p[i].ratings[0].ovrs.P),
                        KR: this.convert(p[i].ratings[0].ovrs.KR),
                        PR: this.convert(p[i].ratings[0].ovrs.PR),
                    },
                    potentials: {
                        QB: this.convert(p[i].ratings[0].pots.QB),
                        RB: this.convert(p[i].ratings[0].pots.RB),
                        WR: this.convert(p[i].ratings[0].pots.WR),
                        TE: this.convert(p[i].ratings[0].pots.TE),
                        OL: this.convert(p[i].ratings[0].pots.OL),
                        DL: this.convert(p[i].ratings[0].pots.DL),
                        LB: this.convert(p[i].ratings[0].pots.LB),
                        CB: this.convert(p[i].ratings[0].pots.CB),
                        S: this.convert(p[i].ratings[0].pots.S),
                        K: this.convert(p[i].ratings[0].pots.K),
                        P: this.convert(p[i].ratings[0].pots.P),
                        KR: this.convert(p[i].ratings[0].pots.KR),
                        PR: this.convert(p[i].ratings[0].pots.PR),
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

    convert(value){
        const val = value
        switch (true) {
            case (val >= 0 && val <= 5):
                return 1
                break;
            case (val > 5 && val <= 10):
                return 2
                break;
            case (val > 10 && val <= 15):
                return 3
                break;
            case (val > 15 && val <= 20):
                return 4
                break;
            case (val > 20 && val <= 25):
                return 5
                break;
            case (val > 25 && val <= 30):
                return 6
                break;
            case (val > 30 && val <= 35):
                return 7
                break;
            case (val > 35 && val <= 40):
                return 8
                break;
            case (val > 40 && val <= 45):
                return 9
                break;
            case (val > 45 && val <= 50):
                return 10
                break;
            case (val > 50 && val <= 55):
                return 11
                break;
            case (val > 55 && val <= 60):
                return 12
                break;
            case (val > 60 && val <= 65):
                return 13
                break;
            case (val > 65 && val <= 70):
                return 14
                break;
            case (val > 70 && val <= 75):
                return 15
                break;
            case (val > 75 && val <= 80):
                return 16
                break;
            case (val > 80 && val <= 85):
                return 17
                break;
            case (val > 85 && val <= 90):
                return 18
                break;
            case (val > 90 && val <= 95):
                return 19
                break;
            case (val > 95 && val <= 100):
                return 20
                break;
        }
    }
}

import League from '@/models/League';
import { TeamController } from '@/controllers/index';
import Conference from '@/models/Conference';
import Division from '@/models/Division';
import { DEFAULT_CONFS, DEFAULT_DIVS } from '@/data/constants'

export default class LeagueController {
    create() {
        const teamController = new TeamController()

        League.insert({
            data: {
                id: 0,
                name: "NFL",
                wid: 0,
                phase: 0
            }
        })

        const p = DEFAULT_CONFS
        for(let i = 0; i < p.length; i++) {
            Conference.insert({
                data: {
                    lid: 0,
                    cid: p[i].cid,
                    name: p[i].name
                }
            })
        }

        const k = DEFAULT_DIVS
        for(let i = 0; i < k.length; i++) {
            Division.insert({
                data: {
                    lid: 0,
                    did: k[i].did,
                    cid: k[i].cid,
                    name: k[i].name
                }
            })
        }

        console.log("League Created");
        teamController.create()
    }

    read(obj) {

    }

    update(obj) {

    }

    delete(obj) {

    }
}

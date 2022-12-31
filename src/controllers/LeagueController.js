import League from '@/models/League';
import { TeamController } from '@/controllers/index';

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

        teamController.create()
    }

    read(obj) {

    }

    update(obj) {

    }

    delete(obj) {

    }
}

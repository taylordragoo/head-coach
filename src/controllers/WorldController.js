import World from '@/models/World';
import { LeagueController } from '@/controllers/index';

export default class WorldController {
    create() {
        const leagueController = new LeagueController()
        World.insert({
            data: {
                id: 0,
                user_id: 0,
                date: '07/01/2022',
                phase: 1,
                season: 2022
            }
        })
        console.log("World Created");
        leagueController.create()
    }

    read(obj) {

    }

    update(obj) {

    }

    delete(obj) {

    }
}

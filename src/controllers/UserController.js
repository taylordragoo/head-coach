import User from '@/models/User';
import { WorldController } from '@/controllers/index';

export default class UserController {

    create(obj) {
        const worldController = new WorldController()

        User.insert({
            data: {
                id: 0,
                first: obj.first,
                last: obj.last,
                age: obj.age,
                exp: obj.exp,
                skill: obj.skill,
                team_id: obj.team_id
            }
        })

        worldController.create()
    }

    read(obj) {

    }

    update(obj) {

    }

    delete(obj) {

    }
}

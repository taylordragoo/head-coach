import PlayerService from '@/service/PlayerService';
import StoreService from '../service/StoreService';

export default class PlayerController {

    constructor() {
        this.playerService = new PlayerService()
    }

    create() {
        this.playerService.handleCreatePlayers()
    }

    read(obj) {

    }

    update(obj) {

    }

    delete(obj) {

    }

}

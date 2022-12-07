import { Model } from '@vuex-orm/core'
import Team from '@/models/Team';

export default class Player extends Model {
    static entity = 'player'
    static fields () {
        return {
            id: this.uid(),
            first: this.string(''),
            last: this.string(''),
            age: this.number(0),
            exp: this.string(''),
            ptid: this.attr(null)
        }
    }
}

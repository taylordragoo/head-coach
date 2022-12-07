import { Model } from '@vuex-orm/core'
import User from '@/models/User';

export default class World extends Model {
    static entity = 'world'
    static fields () {
        return {
            id: this.attr(null),
            date: this.attr(''),
            phase: this.number(1),
            season: this.number(1),
            user: this.hasOne(User, 'wid')
        }
    }
}

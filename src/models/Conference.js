import { Model } from '@vuex-orm/core'
import Division from '@/models/Division';

export default class Conference extends Model {
    static entity = 'conference'
    static fields () {
        return {
            id: this.attr(null),
            lid: this.number(null),
            cid: this.number(null),
            divisions: this.hasMany(Division, 'cid'),
            name: this.attr('')
        }
    }
}

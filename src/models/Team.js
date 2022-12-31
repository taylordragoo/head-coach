import { Model } from '@vuex-orm/core'
import User from '@/models/User';
import Player from '@/models/Player';

export default class Team extends Model {
    static entity = 'team'
    static fields () {
        return {
            id: this.attr(null),
            tid: this.attr(null),
            cid: this.attr(null),
            did: this.attr(null),
            region: this.attr(''),
            name: this.attr(''),
            abbrev: this.attr(''),
            pop: this.attr(null),
            lid: this.attr(''),
            players: this.hasMany(Player, 'ptid')
        }
    }

    get full_name () {
        return `${this.region} ${this.name}`
    }
}

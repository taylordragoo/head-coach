import { Model } from '@vuex-orm/core'
import User from '@/models/User';
import Player from '@/models/Player';

export default class Team extends Model {
    static entity = 'team'
    static fields () {
        return {
            id: this.attr(null),
            name: this.attr(''),
            lid: this.attr(''),
            user_id: this.attr(''),
            user: this.belongsTo(User, 'user_id'),
            players: this.hasMany(Player, 'ptid')
        }
    }
}

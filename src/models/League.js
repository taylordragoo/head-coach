import { Model } from '@vuex-orm/core'
import Team from '@/models/Team';

export default class League extends Model {
    static entity = 'league'
    static fields () {
        return {
            id: this.attr(null),
            name: this.attr(''),
            teams: this.hasMany(Team, 'lid')
        }
    }
}

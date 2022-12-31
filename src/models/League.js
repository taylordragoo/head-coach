import { Model } from '@vuex-orm/core'
import Team from '@/models/Team';

export default class League extends Model {
    static entity = 'league'
    static fields () {
        return {
            id: this.attr(null),
            name: this.attr(''),
            wid: this.attr(null),
            teams: this.hasMany(Team, 'lid'),
            phase: this.number(0)
        }
    }
}

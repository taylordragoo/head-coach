import { Model } from '@vuex-orm/core'
import Team from '@/models/Team';
import Conference from '@/models/Conference';
import Division from '@/models/Division';

export default class League extends Model {
    static entity = 'league'
    static fields () {
        return {
            id: this.attr(null),
            name: this.attr(''),
            wid: this.attr(null),
            teams: this.hasMany(Team, 'lid'),
            conferences: this.hasMany(Conference, 'lid'),
            divisions: this.hasMany(Division, 'lid'),
            phase: this.number(0)
        }
    }
}

import { Model } from '@vuex-orm/core'
import Team from '@/models/Team'

export default class User extends Model {
    static entity = 'user'

    static fields () {
        return {
            id: this.attr(''),
            first: this.string(''),
            last: this.string(''),
            age: this.number(0),
            exp: this.string(''),
            team: this.belongsTo(Team, 'team_id'),
            team_id: this.attr(''),
            wid: this.attr('')
        }
    }
}

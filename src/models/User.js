import { Model } from '@vuex-orm/core'
import Team from './Team'

export default class User extends Model {
    static entity = 'user'

    static fields () {
        return {
            id: this.uid(),
            first: this.string(''),
            last: this.string(''),
            age: this.number(0),
            exp: this.string(''),
            ptid: this.belongsTo(Team, 'team_id')
        }
    }
}
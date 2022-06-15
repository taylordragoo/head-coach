import { Model } from '@vuex-orm/core'

export default class Player extends Model {
    static entity = 'players'
    static fields () {
        return {
            id: this.uid(),
            firstName: this.string(''),
            lastName: this.string(''),
            age: this.number(0),
            exp: this.string(''),
            ptid: this.belongsTo(Team, 'team_id')
        }
    }
}
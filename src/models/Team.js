import { Model } from '@vuex-orm/core'

export default class Team extends Model {
    static entity = 'teams'
    static fields () {
        return {
            id: this.attr(null),
            name: this.attr('')
        }
    }
}
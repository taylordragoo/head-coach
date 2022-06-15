import { Model } from '@vuex-orm/core'

export default class World extends Model {
    static entity = 'world'
    static fields () {
        return {
            id: this.attr(null),
            date: this.attr('')
        }
    }
}
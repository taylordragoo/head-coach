import { Model } from '@vuex-orm/core'

export default class Division extends Model {
    static entity = 'division'
    static fields () {
        return {
            id: this.attr(null),
            lid: this.number(null),
            did: this.number(null),
            cid: this.number(null),
            name: this.attr('')
        }
    }
}

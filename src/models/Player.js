import { Model } from '@vuex-orm/core'
import Born from '@/models/Born';
import Contract from '@/models/Contract';
import Injury from '@/models/Injury';
import Draft from '@/models/Draft';
import Salaries from '@/models/Salaries';
import Stats from '@/models/Stats';

export default class Player extends Model {
    static entity = 'player'
    static fields () {
        return {
            id: this.uid(),
            first: this.string(''),
            last: this.string(''),
            age: this.number(0),
            exp: this.string(''),
            pos: this.string(''),
            ptid: this.number(null),
            born: this.hasOne(Born, 'pid'),
            contract: this.hasOne(Contract, 'pid'),
            salaries: this.hasMany(Salaries, 'pid'),
            injury: this.hasOne(Injury, 'pid'),
            draft: this.hasOne(Draft, 'pid'),
            stats: this.hasMany(Stats, 'pid')
        }
    }
}

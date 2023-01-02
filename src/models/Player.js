import { Model } from '@vuex-orm/core'
import Born from '@/models/Born';
import Contract from '@/models/Contract';
import Injury from '@/models/Injury';
import Draft from '@/models/Draft';
import Salaries from '@/models/Salaries';
import Stats from '@/models/Stats';
import Attributes from '@/models/Attributes';
import Overalls from '@/models/Overalls';
import Potentials from '@/models/Potentials';

export default class Player extends Model {
    static entity = 'player'
    static fields () {
        return {
            id: this.uid(),
            first: this.string(''),
            last: this.string(''),
            age: this.number(null),
            exp: this.number(null),
            pos: this.string(''),
            ptid: this.number(null),
            born: this.hasOne(Born, 'pid'),
            contract: this.hasOne(Contract, 'pid'),
            injury: this.hasOne(Injury, 'pid'),
            draft: this.hasOne(Draft, 'pid'),
            salaries: this.hasMany(Salaries, 'pid'),
            stats: this.hasMany(Stats, 'pid'),
            attributes: this.hasOne(Attributes, 'pid'),
            overalls: this.hasOne(Overalls, 'pid'),
            potentials: this.hasOne(Potentials, 'pid'),
        }
    }
}

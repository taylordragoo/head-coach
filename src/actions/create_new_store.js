// eslint-disable-next-line no-unused-vars
import VuexORM from '@vuex-orm/core';
import Vuex from 'vuex';

import User from '@/models/User'
import Team from '@/models/Team'
import Player from '@/models/Player';
import World from '@/models/World';
import League from '@/models/League';
import Contract from '@/models/Contract';
import Born from '@/models/Born';
import Draft from '@/models/Draft';
import Injury from '@/models/Injury';

export function createNewStore() {
    const database = new VuexORM.Database()
    database.register(User);
    database.register(World);
    database.register(League);
    database.register(Team);
    database.register(Player);
    database.register(Contract);
    database.register(Born);
    database.register(Draft);
    database.register(Injury);

    let store = new Vuex.Store({
        actions: {
            resetState({ commit }) {
                commit('RESET_STATE')
            }
        },
        mutations: {
            RESET_STATE() {
                this.dispatch('entities/deleteAll')
            }
        },
        plugins: [VuexORM.install(database)]
    })

    return store
}

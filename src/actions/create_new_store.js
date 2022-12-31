// eslint-disable-next-line no-unused-vars
import VuexORM from '@vuex-orm/core';
import Vuex from 'vuex';

import User from '@/models/User'
import Team from '@/models/Team'
import Player from '@/models/Player';
import World from '@/models/World';
import League from '@/models/League';

export function createNewStore() {
    const database = new VuexORM.Database()
    database.register(User);
    database.register(World);
    database.register(League);
    database.register(Team);
    database.register(Player);

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

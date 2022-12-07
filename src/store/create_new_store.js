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
    database.register(Team);
    database.register(Player);
    database.register(World);
    database.register(League);
    let store = new Vuex.Store({
        state: {
            sTeams: [],
            sPlayers: [],
            sUser: {},
            sWorld: {}
        },
        actions: {
            resetState({ commit }) {
                commit('RESET_STATE')
            }
        },
        mutations: {
            RESET_STATE(state) {
                Object.assign(state, getDefaultState())
            },
            updateTeams(state, payload) {
                state.sTeams = payload
            },
            updatePlayers(state, payload) {
                state.sPlayers = payload
            },
            updateUser(state, payload) {
                state.sUser = payload
            },
            updateWorld(state, payload) {
                state.world = payload
            }
        },
        plugins: [VuexORM.install(database)]
    })

    return store
}

function getDefaultState () {
    return {
        sTeams: [],
        sPlayers: [],
        sUser: {},
        sWorld: {}
    }
}

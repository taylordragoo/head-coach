import Vuex from 'vuex';
import VuexORM from '@vuex-orm/core'
import User from '@/models/User'
import Player from '@/models/Player'
import Team from '@/models/Team'
import World from '@/models/World'

function getDefaultState () {
    return {
        sTeams: [],
        sPlayers: [],
        sUser: {},
        sWorld: {}
    }
}

// eslint-disable-next-line no-unused-vars
export function createNewStore() {
    const database = new VuexORM.Database()
    // database.register(User)
    // database.register(Player)
    // database.register(Team)
    // database.register(World)
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
                state.sWorld = payload
            }
        },
        plugins: [VuexORM.install(database, { namespace: 'database' })]
    })

    return store
}

// eslint-disable-next-line no-unused-vars
import VuexORM from '@vuex-orm/core';
import Vuex from 'vuex';

export function createNewStore() {
    const database = new VuexORM.Database()
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
        }
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

import Vuex from 'vuex';

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
    // eslint-disable-next-line no-unused-vars
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
    })

    return store
}

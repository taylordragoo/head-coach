import { createStore } from 'vuex'
import { app } from '../main.js'

// Create a new store instance.
const store = createStore({
    state () {
        return {
            count: 0
        }
    },
    mutations: {
        increment (state) {
            state.count++
        }
    }
})

// Install the store instance as a plugin
app.use(store)
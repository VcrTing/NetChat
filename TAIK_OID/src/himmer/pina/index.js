
import { defineStore } from "pinia"

import state from "./_state"
import aii from "./_getter_action"
import persist from "./_persist"

export default defineStore('pina', { state, getters: aii.getters, actions: {
        ...aii.actions
    },
    persist })
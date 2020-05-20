import Vue from 'vue'
import Vuex from 'vuex'
import { configure } from '@storybook/vue'
import VueMaterial from 'vue-material'

// Imports for side effects only
import 'vue-material/dist/vue-material.min.css'
import './theme.scss'

Vue.use(Vuex)
Vue.use(VueMaterial)

configure(require.context('./stories', true, /\.stories\.ts$/), module)

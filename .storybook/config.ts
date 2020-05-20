import Vue from 'vue'
import Vuex from 'vuex'
import { configure, addDecorator } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
import VueMaterial from 'vue-material'

// Imports for side effects only
import 'vue-material/dist/vue-material.min.css'
import '@/styles/theme.scss'

Vue.use(Vuex)
Vue.use(VueMaterial)

addDecorator(withKnobs)

configure(require.context('./stories', true, /\.stories\.ts$/), module)

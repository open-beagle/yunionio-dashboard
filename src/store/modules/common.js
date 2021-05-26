import Vue from 'vue'
import storage from '@/utils/storage'
import { getCurrency, setCookieVal } from '@/utils/common/cookie'
import { Manager } from '@/utils/manager'

export default {
  state: {
    recentMenus: storage.get('__oc_recent_menus__') || [],
    topAlert: {},
    bill: {
      currency: getCurrency() || '',
      currencyOpts: [],
    },
    k8s: {
      cluster: undefined,
      namespace: undefined,
    },
    lbRedirected: {},
    // 菜单栏
    sidebar: {},
    jsonschema: {
      sku: {},
    },
    globalConfig: {},
    openCloudShell: false,
  },
  mutations: {
    UPDATE_OBJECT (state, { name, data }) {
      if (!state[name]) Vue.set(state, name, {})
      Vue.set(state, name, { ...state[name], ...data })
    },
    DELETE_OBJECT (state, { name, key }) {
      Vue.delete(state[name], key)
    },
    SET_BILL_CURRENCY (state, payload) {
      setCookieVal('currency', payload)
      state.bill.currency = payload
    },
    SET_BILL_CURRENCYOPTS (state, payload) {
      state.bill.currencyOpts = payload
    },
    SET_K8S_CLUSTER (state, payload) {
      state.k8s.cluster = payload
    },
    SET_K8S_NAMESPACE (state, payload) {
      state.k8s.namespace = payload
    },
    REST_BILL_CURRENCY (state) {
      state.bill.currencyOpts = []
    },
    SET_GLOBAL_CONFIG (state, payload) {
      state.globalConfig = payload
    },
    SET_OPEN_CLOUDSHELL (state, payload) {
      state.openCloudShell = payload
    },
  },
  actions: {
    updateObject ({ commit }, payload) {
      commit('UPDATE_OBJECT', payload)
    },
    deleteObject ({ commit }, payload) {
      commit('DELETE_OBJECT', payload)
    },
    async fetchCurrency ({ commit, state, ...ret }, payload = {}) {
      try {
        const params = {
          query_type: 'currency',
          ...payload,
        }
        const { data: { data = [] } } = await new Manager('bill_conditions', 'v1').list({ params })
        commit('SET_BILL_CURRENCYOPTS', data)
        if (data && data.length > 0) {
          const isExsit = data.find(v => v.item_id === state.bill.currency)
          commit('SET_BILL_CURRENCY', isExsit ? state.bill.currency : data[0].item_id)
        }
      } catch (error) {
        throw error
      }
    },
    async fetchGlobalConfig ({ commit }) {
      let manager = new Manager('services', 'v1')
      try {
        const response = await manager.list({
          params: {
            type: ['common'],
          },
        })
        const id = (response.data.data && response.data.data.length && response.data.data[0].id) || ''
        if (id) {
          const configResponse = await manager.getSpecific({
            id,
            spec: 'config',
          })
          const config = (configResponse.data.config && configResponse.data.config.default) || {}
          commit('SET_GLOBAL_CONFIG', config)
        }
      } catch (error) {
        throw error
      } finally {
        manager = null
      }
    },
  },
}

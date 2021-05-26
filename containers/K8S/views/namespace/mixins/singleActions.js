import i18n from '@/locales'
export default {
  created () {
    this.singleActions = [
      {
        label: i18n.t('k8s.text_201'),
        permission: 'k8s_namespaces_delete',
        action: (obj) => {
          this.createDialog('DeleteResDialog', {
            vm: this,
            data: [obj],
            columns: this.columns,
            title: i18n.t('k8s.text_284'),
            name: i18n.t('k8s.text_23'),
            onManager: this.onManager,
            requestData: {
              cluster: obj.clusterID,
            },
            requestParams: {
              id: obj.id,
            },
            success: () => {
              this.destroySidePages()
            },
          })
        },
      },
      {
        label: i18n.t('k8s.text_215'),
        permission: 'k8s_namespaces_update',
        action: async obj => {
          const manager = new this.$Manager('namespaces', 'v1')
          async function fetchData () {
            const { cluster, namespace } = obj
            const { data } = await manager.getSpecific({ id: obj.id, spec: 'rawdata', params: { cluster, namespace } })
            return data
          }
          const configText = await fetchData()
          this.createDialog('K8SEditYamlDialog', {
            data: [obj],
            manager,
            refresh: this.refresh,
            configText,
          })
        },
      },
    ]
  },
}

import i18n from '@/locales'
export default {
  created () {
    this.singleActions = [
      // {
      //   label: i18n.t('network.text_130'),
      //   permission: 'lb_loadbalancerlistenerrules_update',
      //   action: (obj) => {
      //     this.createDialog('LoadbalancerlistenerruleUpdateDialog', {
      //       lbListenerData: this.data,
      //       data: [obj],
      //       columns: this.columns,
      //       onManager: this.onManager,
      //     })
      //   },
      //   meta: obj => this.$getDeleteResult(obj),
      // },
      {
        label: i18n.t('network.text_131'),
        permission: 'lb_loadbalancerlistenerrules_delete',
        action: (obj) => {
          this.createDialog('DeleteResDialog', {
            vm: this,
            title: i18n.t('network.text_131'),
            name: i18n.t('network.text_141'),
            data: [obj],
            columns: this.columns,
            onManager: this.onManager,
          })
        },
        meta: obj => this.$getDeleteResult(obj),
      },
    ]
  },
}

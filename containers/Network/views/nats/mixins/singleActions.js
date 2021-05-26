import { mapGetters } from 'vuex'
import { disableDeleteAction } from '@/utils/common/tableActions'
import i18n from '@/locales'

export default {
  created () {
    this.singleActions = [
      {
        label: i18n.t('network.text_201'),
        // permission: 'natgateways_perform_syncstatus',
        action: obj => {
          this.onManager('performAction', {
            steadyStatus: ['available'],
            id: obj.id,
            managerArgs: {
              action: 'syncstatus',
            },
          })
        },
        meta: (obj) => {
          if (!this.isOwner(obj)) {
            return {
              validate: false,
              tooltip: i18n.t('network.text_627'),
            }
          }
          return {
            validate: true,
          }
        },
      },
      {
        label: i18n.t('network.text_129'),
        actions: (obj) => {
          const { status } = obj
          const isAvailable = status.toLowerCase() === 'available'
          const notAvailableTip = !isAvailable ? i18n.t('network.not.available.tooltip') : null
          return [
            {
              label: i18n.t('network.expired_release'),
              permission: 'natgateway_perform_postpaid_expire',
              action: () => {
                this.createDialog('SetDurationDialog', {
                  data: [obj],
                  columns: this.columns,
                  onManager: this.onManager,
                  name: this.$t('dictionary.nat'),
                  refresh: this.refresh,
                })
              },
              meta: () => {
                const ret = {
                  validate: true,
                  tooltip: null,
                }
                if (obj.billing_type === 'prepaid') {
                  ret.validate = false
                  ret.tooltip = i18n.t('network.nat.prepaid.unsupported')
                  return ret
                }
                if (!this.isOwner(obj)) {
                  return {
                    validate: false,
                    tooltip: i18n.t('network.text_627'),
                  }
                }
                return ret
              },
            },
            {
              label: i18n.t('network.renew'),
              action: () => {
                this.createDialog('RenewDialog', {
                  name: this.$t('dictionary.nat'),
                  data: [obj],
                  columns: this.columns,
                  onManager: this.onManager,
                  refresh: this.refresh,
                })
              },
              meta: () => {
                const ret = {
                  validate: true,
                  tooltip: null,
                }
                if (obj.billing_type === 'postpaid') {
                  ret.validate = false
                  ret.tooltip = i18n.t('network.nat.postpaid.unsupported')
                  return ret
                }
                if (!this.isOwner(obj)) {
                  return {
                    validate: false,
                    tooltip: i18n.t('network.text_627'),
                  }
                }
                return ret
              },
            },
            {
              label: i18n.t('network.auto.renew'),
              action: () => {
                this.createDialog('AutoRenewDialog', {
                  name: i18n.t('dictionary.nat'),
                  data: [obj],
                  columns: this.columns,
                  onManager: this.onManager,
                  refresh: this.refresh,
                })
              },
              meta: () => {
                const isPrepaid = obj.billing_type === 'prepaid'
                const validate = (isAvailable && isPrepaid)
                if (!this.isOwner(obj)) {
                  return {
                    validate: false,
                    tooltip: i18n.t('network.text_627'),
                  }
                }
                return {
                  validate: validate,
                  tooltip: notAvailableTip || (!isPrepaid ? i18n.t('network.nat.postpaid.unsupported') : null),
                }
              },
            },
            disableDeleteAction(this, {
              name: this.$t('dictionary.nat'),
              hidden: () => {
                if (!this.isOwner(obj)) {
                  return {
                    validate: false,
                    tooltip: i18n.t('network.text_627'),
                  }
                }
              },
            }),
            {
              label: i18n.t('network.text_131'),
              permission: 'natgateway_delete',
              action: () => {
                this.createDialog('DeleteResDialog', {
                  vm: this,
                  title: i18n.t('network.text_131'),
                  name: this.$t('dictionary.nat'),
                  data: [obj],
                  columns: this.columns,
                  onManager: this.onManager,
                  requestData: { force: true },
                  refresh: this.refresh,
                })
              },
              meta: () => {
                if (!this.isOwner(obj)) {
                  return {
                    validate: false,
                    tooltip: i18n.t('network.text_627'),
                  }
                }
                return this.$getDeleteResult(obj)
              },
            },
          ]
        },
      },
    ]
  },
  computed: {
    ...mapGetters(['isAdminMode', 'isDomainMode', 'userInfo']),
  },
  methods: {
    isOwner (obj) {
      if (this.isAdminMode) return true
      if (this.isDomainMode) return obj.domain_id === this.userInfo.projectDomainId
      return false
    },
  },
}

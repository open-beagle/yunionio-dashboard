import { mapGetters } from 'vuex'
import { changeToArr } from '@/utils/utils'
import expectStatus from '@/constants/expectStatus'
import i18n from '@/locales'

const steadyStatus = Object.values(expectStatus.cloudaccount).flat()

export default {
  computed: {
    ...mapGetters(['l3PermissionEnable']),
  },
  created () {
    const ownerDomain = obj => this.$store.getters.isAdminMode || obj.domain_id === this.$store.getters.userInfo.projectDomainId
    const isAccountDomain = data => data.share_mode === 'account_domain'
    this.singleActions = [
      {
        label: this.$t('cloudenv.text_294', [this.$t('dictionary.project')]),
        action: obj => {
          if (isAccountDomain(this.data)) {
            this.createDialog('ChangeProjectDialog', {
              name: this.$t('dictionary.cloudprovider'),
              data: [obj],
              columns: this.columns,
              onManager: this.onManager,
              projectLabel: this.$t('cloudenv.text_294', [this.$t('dictionary.project')]),
              formItemLayout: {
                wrapperCol: {
                  span: 19,
                },
                labelCol: {
                  span: 5,
                },
              },
            })
          } else {
            this.createDialog('ChangeOwenrDialog', {
              name: this.$t('dictionary.cloudprovider'),
              data: [obj],
              columns: this.columns,
              onManager: this.onManager,
              action: 'change-project',
              projectLabel: this.$t('cloudenv.text_294', [this.$t('dictionary.project')]),
              alertMessage: this.$t('cloudenv.text_336', [this.$t('dictionary.project'), this.$t('dictionary.domain'), this.$t('dictionary.domain')]),
              formItemLayout: {
                wrapperCol: {
                  span: 19,
                },
                labelCol: {
                  span: 5,
                },
              },
              resource: 'cloudproviders',
            })
          }
        },
        meta: obj => {
          let tooltip
          if (!obj.enabled) tooltip = i18n.t('cloudenv.text_357')
          return {
            validate: obj.enabled && ownerDomain(obj),
            tooltip,
          }
        },
      },
      {
        label: i18n.t('cloudenv.text_105'),
        action: obj => {
          this.onManager('performAction', {
            id: obj.id,
            steadyStatus: {
              status: steadyStatus,
              sync_status: ['idle'],
            },
            managerArgs: {
              action: 'sync',
              params: {
                full_sync: true,
                force: true,
              },
            },
          }).then(() => {
            // 订阅同步后，云账号也要同步
            this.cloudaccountListRefresh && this.cloudaccountListRefresh()
          })
        },
        meta: obj => {
          let tooltip
          let validate = true
          if (!ownerDomain(obj)) {
            tooltip = i18n.t('cloudenv.text_358')
            validate = false
          }
          if (!obj.enabled) {
            tooltip = i18n.t('cloudenv.text_357')
            validate = false
          }
          if (this.data.enable_auto_sync) {
            tooltip = i18n.t('cloudenv.text_313')
            validate = false
          }
          return {
            tooltip,
            validate,
          }
        },
      },
      {
        label: i18n.t('cloudenv.text_311'),
        actions: obj => {
          return [
            {
              label: i18n.t('cloudenv.text_334'),
              action: () => {
                this.onManager('performAction', {
                  id: obj.id,
                  managerArgs: {
                    action: 'enable',
                  },
                })
              },
              meta: () => {
                return {
                  validate: !obj.enabled && ownerDomain(obj),
                }
              },
            },
            {
              label: i18n.t('cloudenv.text_335'),
              action: () => {
                this.onManager('performAction', {
                  id: obj.id,
                  managerArgs: {
                    action: 'disable',
                  },
                })
              },
              meta: () => {
                return {
                  validate: obj.enabled && ownerDomain(obj),
                }
              },
            },
          ]
        },
      },
    ]
  },
  methods: {
    syncPolicy (item, ownerDomain) {
      let tooltip
      const items = changeToArr(item)
      if (!items.length) return { validate: false }
      const enabledValid = items.every(obj => {
        if (!obj.enabled) {
          tooltip = i18n.t('cloudenv.text_312')
          return false
        }
        return true
      })
      const autoSyncValid = items.every(obj => {
        if (obj.enable_auto_sync) {
          tooltip = i18n.t('cloudenv.text_313')
          return false
        }
        return true
      })
      return {
        validate: enabledValid && autoSyncValid && ownerDomain,
        tooltip,
      }
    },
    setAutoSyncPolicy (item, ownerDomain) {
      let tooltip
      const items = changeToArr(item)
      if (!items.length) return { validate: false }
      const enabledValid = items.every(obj => {
        if (!obj.enabled) {
          tooltip = i18n.t('cloudenv.text_312')
          return false
        }
        return true
      })
      return {
        validate: enabledValid && ownerDomain,
        tooltip,
      }
    },
  },
}

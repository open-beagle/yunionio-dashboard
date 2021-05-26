import { getCopyWithContentTableColumn, getTimeTableColumn } from '@/utils/common/tableColumn'
import i18n from '@/locales'

export default {
  created () {
    this.columns = [
      getCopyWithContentTableColumn({
        field: 'ip_addr',
        title: i18n.t('network.text_213'),
      }),
      {
        field: 'notes',
        title: i18n.t('network.text_668'),
        minWidth: 100,
        slots: {
          default: ({ row }, h) => {
            return [
              h('list-body-cell-wrap', {
                props: {
                  formRules: [
                    { required: true, message: i18n.t('network.text_671') },
                  ],
                  row,
                  edit: true,
                  copy: true,
                  onManager: this.onManager,
                  field: 'notes',
                },
              }),
            ]
          },
        },
      },
      getTimeTableColumn(),
    ]
  },
}

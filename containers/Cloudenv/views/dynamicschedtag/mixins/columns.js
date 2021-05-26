import { getNameDescriptionTableColumn, getEnabledTableColumn, getCopyWithContentTableColumn } from '@/utils/common/tableColumn'
import i18n from '@/locales'

export default {
  created () {
    this.columns = [
      getNameDescriptionTableColumn({
        onManager: this.onManager,
        hideField: true,
        slotCallback: row => {
          return (
            <side-page-trigger onTrigger={() => this.handleOpenSidepage(row)}>{ row.name }</side-page-trigger>
          )
        },
      }),
      getEnabledTableColumn(),
      getCopyWithContentTableColumn({
        field: 'schedtag',
        title: i18n.t('cloudenv.text_18'),
      }),
      getCopyWithContentTableColumn({
        field: 'condition',
        title: i18n.t('cloudenv.text_22'),
      }),
    ]
  },
}

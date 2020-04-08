import { getNameDescriptionTableColumn } from '@/utils/common/tableColumn'

export default {
  created () {
    this.columns = [
      getNameDescriptionTableColumn({
        onManager: this.onManager,
        hideField: true,
        edit: false,
        showDesc: false,
        slotCallback: row => {
          return (
            <side-page-trigger onTrigger={() => this.handleOpenSidepage(row)}>{ row.name }</side-page-trigger>
          )
        },
      }),
      {
        field: 'namespace',
        title: '命名空间',
        width: 120,
      },
      {
        field: 'endpoints',
        title: '端点',
        slots: {
          default: ({ row }) => {
            return row.endpoints.filter(v => v.host).map(v => {
              let value = '-'
              if (v.host && v.ports) value = `${v.host}:${v.ports}`
              if (v.host && !v.ports) value = v.host
              return <a-tag>{ value }</a-tag>
            })
          },
        },
      },
      {
        field: 'creationTimestamp',
        title: '创建于',
        width: 80,
        formatter: ({ row }) => {
          return this.$moment(row.creationTimestamp).fromNow()
        },
      },
    ]
  },
}

import i18n from '@/locales'
export const LB_SCHEDULER_MAP = {
  rr: {
    text: i18n.t('network.text_6'),
    desc: i18n.t('network.text_7'),
  },
  wrr: {
    text: i18n.t('network.text_8'),
    desc: i18n.t('network.text_9'),
  },
  wlc: {
    text: i18n.t('network.text_10'),
    desc: i18n.t('network.text_11'),
  },
  sch: {
    text: i18n.t('network.text_12'),
    desc: i18n.t('network.text_13'),
  },
  tch: {
    text: i18n.t('network.text_14'),
    desc: i18n.t('network.text_15'),
  },
}

export const healcheckDiff = {
  aliyun: {
    disabled: { // 以下情况健康检查禁用
      listener_type: ['tcp', 'udp'],
    },
    alwaysOn: { // 以下情况健康检查须开启
      listener_type: ['tcp', 'udp'],
    },
  },
  aws: { // aws 不允许关闭健康检查
    disabled: { // 以下情况健康检查禁用
      listener_type: ['tcp', 'udp', 'http', 'https'],
    },
  },
}

// 没有声明的表示支持该操作
export const LB_LISTENEER_ACTION_POLICIES = {
  aliyun: {
    disableHealthCheck (row) {
      return !['tcp', 'udp'].includes(row.listener_type)
    },
  },
  qcloud: {
    enable: false,
    disable: false,
    aclUpdate: false,
  },
  huawei: {
    enable: false,
    disable: false,
  },
  aws: {
    enable: false,
    disable: false,
    aclUpdate: false,
    enableHealthCheck: false,
    disableHealthCheck: false,
  },
}

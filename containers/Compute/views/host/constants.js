// import { metricItems } from '@Compute/views/node-alert/constants'
import i18n from '@/locales'

export const GAUGEMSG = [
  {
    label: i18n.t('compute.text_517'),
    sql: {
      key: 'load1_pcore',
      db: 'system',
    },
    option: 'system',
    max: 4, // 最大长度
  },
  {
    label: i18n.t('compute.text_518'),
    option: 'mem',
    sql: {
      key: 'used_percent',
      db: 'mem',
    },
  },
  {
    label: i18n.t('compute.text_519'),
    option: 'diskio',
    sql: {
      key: 'ioutil',
      db: 'diskio',
    },
  },
  {
    label: i18n.t('compute.text_520'),
    option: 'disk',
    sql: {
      key: 'used_percent',
      db: 'disk',
    },
  },
  {
    label: i18n.t('compute.text_521'),
    option: 'net_in',
    sql: {
      key: 'if_in_percent',
      db: 'net',
    },
  },
  {
    label: i18n.t('compute.text_522'),
    option: 'net_out',
    sql: {
      key: 'if_out_percent',
      db: 'net',
    },
  },
]

export const HOST_TOP5 = {
  isKvm: [
    {
      name: 'cpu',
      label: i18n.t('compute.text_523'),
      seleteItem: 'cpu_usage_pcore',
      fromItem: 'vm_cpu',
      unit: '%',
    },
    {
      name: 'netio',
      label: i18n.t('compute.text_524'),
      seleteItem: 'bps_recv',
      fromItem: 'vm_netio',
      unit: 'bps',
    },
    {
      name: 'netio',
      label: i18n.t('compute.text_525'),
      seleteItem: 'bps_sent',
      fromItem: 'vm_netio',
      unit: 'bps',
    },
    {
      name: 'diskio',
      label: i18n.t('compute.text_526'),
      seleteItem: 'read_bps',
      fromItem: 'vm_diskio',
      unit: 'bps',
    },
    {
      name: 'diskio',
      label: i18n.t('compute.text_527'),
      seleteItem: 'write_bps',
      fromItem: 'vm_diskio',
      unit: 'bps',
    },
  ],
  noKvm: [
    {
      name: 'cpu',
      label: i18n.t('compute.text_523'),
      seleteItem: 'usage_active',
      fromItem: 'vm_cpu',
    },
    {
      name: 'netio',
      label: i18n.t('compute.text_524'),
      seleteItem: 'bps_recv',
      fromItem: 'vm_netio',
      unit: 'bps',
    },
    {
      name: 'netio',
      label: i18n.t('compute.text_525'),
      seleteItem: 'bps_sent',
      fromItem: 'vm_netio',
      unit: 'bps',
    },
    {
      name: 'diskio',
      label: i18n.t('compute.text_526'),
      seleteItem: 'read_bps',
      fromItem: 'vm_diskio',
      unit: 'bps',
    },
    {
      name: 'diskio',
      label: i18n.t('compute.text_527'),
      seleteItem: 'write_bps',
      fromItem: 'vm_diskio',
      unit: 'bps',
    },
  ],
}

// kvm 型宿主机监控数据
export const KVM_MONITOR_OPTS = [
  {
    name: 'cpu',
    label: i18n.t('compute.text_523'),
    seleteItem: 'usage_active,usage_idle,usage_user,usage_system,usage_iowait',
    fromItem: 'cpu',
    as: i18n.t('compute.text_528'),
    unit: '%',
    transfer: 1,
    // metric: metricItems['usage_active,usage_idle,usage_user,usage_system,usage_iowait'].key, // 报警指标
  },
  {
    name: 'system',
    label: i18n.t('compute.text_529'),
    seleteItem: 'load1,load5,load15,load1_pcore,load5_pcore,load15_pcore',
    as: i18n.t('compute.text_530'),
    fromItem: 'system',
    unit: '',
    transfer: 1,
    // metric: metricItems['load1,load5,load15,load1_pcore,load5_pcore,load15_pcore'].key, // 报警指标
  },
  {
    name: 'mem',
    label: i18n.t('compute.text_518'),
    seleteItem: 'used_percent',
    as: i18n.t('compute.text_518'),
    fromItem: 'mem',
    unit: '%',
    transfer: 1,
    // metric: metricItems['used_percent'].key, // 报警指标
  },
  {
    name: 'memCondition',
    label: i18n.t('compute.text_531'),
    seleteItem: 'used,free,total',
    as: i18n.t('compute.text_532'),
    fromItem: 'mem',
    unit: 'B',
    transfer: 1024,
    // metric: metricItems['used,free,total'].key, // 报警指标
  },
  {
    name: 'disk',
    label: i18n.t('compute.text_533'),
    seleteItem: 'used_percent',
    as: i18n.t('compute.text_533'),
    fromItem: 'disk',
    unit: '%',
    transfer: 1,
    // metric: metricItems['used_percent'].key, // 报警指标
  },
  {
    name: 'diskCondition',
    label: i18n.t('compute.text_534'),
    seleteItem: 'used,free,total',
    as: i18n.t('compute.text_535'),
    fromItem: 'disk',
    unit: 'B',
    transfer: 1024,
    // metric: metricItems['used,free,total'].key, // 报警指标
  },
  {
    name: 'disk',
    label: i18n.t('compute.text_519'),
    seleteItem: 'ioutil',
    as: i18n.t('compute.text_519'),
    fromItem: 'diskio',
    unit: '%',
    transfer: 1,
    // metric: metricItems['ioutil'].key, // 报警指标
  },
  {
    name: 'disk',
    label: i18n.t('compute.text_536'),
    seleteItem: 'read_iops,write_iops',
    as: i18n.t('compute.text_537'),
    fromItem: 'diskio',
    unit: 'iops',
    transfer: 1,
    // metric: metricItems['read_iops,write_iops'].key, // 报警指标
  },
  {
    name: 'bps_recv',
    label: i18n.t('compute.text_524'),
    seleteItem: 'bps_recv',
    as: i18n.t('compute.text_524'),
    fromItem: 'net',
    unit: 'bps',
    transfer: 1024,
    // metric: metricItems['bps_recv'].key, // 报警指标
  },
  {
    name: 'bps_sent',
    label: i18n.t('compute.text_525'),
    seleteItem: 'bps_sent',
    as: i18n.t('compute.text_525'),
    fromItem: 'net',
    unit: 'bps',
    transfer: 1024,
    // metric: metricItems['bps_sent'].key, // 报警指标
  },
]

// vmware 型宿主机监控数据
export const VMWARE_MONITOR_OPTS = [
  {
    name: 'cpu',
    label: i18n.t('compute.text_523'),
    as: i18n.t('compute.text_523'),
    seleteItem: 'usage_active',
    fromItem: 'cpu',
    unit: '%',
    transfer: 1,
    // metric: metricItems['usage_active'].key, // 报警指标
  },
  {
    name: 'mem',
    label: i18n.t('compute.text_518'),
    as: i18n.t('compute.text_518'),
    seleteItem: 'used_percent',
    fromItem: 'mem',
    unit: '%',
    transfer: 1,
    // metric: metricItems['used_percent'].key, // 报警指标
  },
  {
    name: 'read_bps',
    label: i18n.t('compute.text_538'),
    as: i18n.t('compute.text_538'),
    seleteItem: 'read_bps',
    fromItem: 'diskio',
    unit: 'bps',
    transfer: 1024,
    // metric: metricItems['read_bps'].key, // 报警指标
  },
  {
    name: 'write_bps',
    label: i18n.t('compute.text_539'),
    as: i18n.t('compute.text_539'),
    seleteItem: 'write_bps',
    fromItem: 'diskio',
    unit: 'bps',
    transfer: 1024,
    // metric: metricItems['write_bps'].key, // 报警指标
  },
  {
    name: 'bps_recv',
    label: i18n.t('compute.text_524'),
    as: i18n.t('compute.text_524'),
    seleteItem: 'bps_recv',
    fromItem: 'net',
    unit: 'bps',
    transfer: 1024,
    // metric: metricItems['bps_recv'].key, // 报警指标
  },
  {
    name: 'bps_sent',
    label: i18n.t('compute.text_525'),
    as: i18n.t('compute.text_525'),
    seleteItem: 'bps_sent',
    fromItem: 'net',
    unit: 'bps',
    transfer: 1024,
    // metric: metricItems['bps_sent'].key, // 报警指标
  },
]

import { sizestrWithUnit, getDocsUrl } from '@/utils/utils'
import i18n from '@/locales'
import { SCOPES_MAP, CLOUD_ENVS } from '@/constants'

// 不定单位使用formatter，固定单位使用unit
// 磁盘（disk）、内存（memory） 容量单位为：formatter: val => sizestrWithUnit(val, 'M', 1024)
// 虚拟机（server）、宿主机（host）、物理机（baremetal） 单位为：台
// CPU 单位为：核
// GPU（isolated_device） 单位为：块
// nics 和 ports 的区别：ports是所有的IP，nics是被占用的IP，ports包含nics。nics和ports的单位都是个。
export const USAGE_CONFIG = {
  'all.bucket_bytes': {
    formatter: val => sizestrWithUnit(val, 'B', 1024),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'all.bucket_objects': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'all.buckets': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'all.cpu_commit_rate.running': {
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private],
  },
  'all.disks': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'all.disks.mounted': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'all.disks.unmounted': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'all.disks.unready': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'all.eip': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'all.eip.floating_ip': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'all.eip.floating_ip.used': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'all.eip.public_ip': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'all.eip.used': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'all.memory_commit_rate.running': {
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private],
  },
  'all.nics': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'all.nics.guest': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'all.nics.host': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private],
  },
  'all.nics.lb': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'all.nics.reserve': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'all.nics.guest.pending_delete': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'all.nics.netif': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'all.nics.eip': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private],
  },
  'all.nics.db': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.public],
  },
  'all.pending_delete_servers': {
    unit: i18n.t('dashboard.text_2'),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'all.pending_delete_servers.cpu': {
    unit: i18n.t('dashboard.text_3'),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'all.pending_delete_servers.disk': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'all.pending_delete_servers.ha': {
    unit: i18n.t('dashboard.text_2'),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  'all.pending_delete_servers.ha.cpu': {
    unit: i18n.t('dashboard.text_3'),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  'all.pending_delete_servers.ha.disk': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  'all.pending_delete_servers.ha.memory': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  'all.pending_delete_servers.isolated_devices': {
    unit: i18n.t('dashboard.text_4'),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  'all.pending_delete_servers.memory': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'all.ports': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'all.ports.eip': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private],
  },
  'all.ports_exit': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'all.ports_exit.eip': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private],
  },
  'all.ready_servers': {
    unit: i18n.t('dashboard.text_2'),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'all.ready_servers.cpu': {
    unit: i18n.t('dashboard.text_3'),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'all.ready_servers.disk': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'all.ready_servers.ha': {
    unit: i18n.t('dashboard.text_2'),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  'all.ready_servers.ha.cpu': {
    unit: i18n.t('dashboard.text_3'),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  'all.ready_servers.ha.disk': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  'all.ready_servers.ha.memory': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  'all.ready_servers.isolated_devices': {
    unit: i18n.t('dashboard.text_4'),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  'all.ready_servers.memory': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'all.running_servers': {
    unit: i18n.t('dashboard.text_2'),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'all.running_servers.cpu': {
    unit: i18n.t('dashboard.text_3'),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'all.running_servers.disk': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'all.running_servers.ha': {
    unit: i18n.t('dashboard.text_2'),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  'all.running_servers.ha.cpu': {
    unit: i18n.t('dashboard.text_3'),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  'all.running_servers.ha.disk': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  'all.running_servers.ha.memory': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  'all.running_servers.isolated_devices': {
    unit: i18n.t('dashboard.text_4'),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  'all.running_servers.memory': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'all.servers': {
    unit: i18n.t('dashboard.text_2'),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'all.servers.cpu': {
    unit: i18n.t('dashboard.text_3'),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'all.servers.disk': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'all.servers.ha': {
    unit: i18n.t('dashboard.text_2'),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  'all.servers.ha.cpu': {
    unit: i18n.t('dashboard.text_3'),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  'all.servers.ha.disk': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  'all.servers.ha.memory': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  'all.servers.isolated_devices': {
    unit: i18n.t('dashboard.text_4'),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  'all.servers.memory': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'all.snapshot': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'all.servers.system': {
    unit: i18n.t('dashboard.text_2'),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'all.disks.system': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'all.servers.system.cpu': {
    unit: i18n.t('dashboard.text_3'),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'all.servers.system.memory': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  baremetals: {
    unit: i18n.t('dashboard.text_2'),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  'baremetals.cpu': {
    unit: i18n.t('dashboard.text_3'),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  'baremetals.memory': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  bucket_bytes: {
    formatter: val => sizestrWithUnit(val, 'B', 1024),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  bucket_objects: {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  buckets: {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  disks: {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'disks.mounted': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'disks.unmounted': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'disks.unready': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  eip: {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'eip.floating_ip': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'eip.floating_ip.used': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'eip.public_ip': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'eip.used': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  enabled_hosts: {
    unit: i18n.t('dashboard.text_2'),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private],
  },
  'enabled_hosts.cpu': {
    unit: i18n.t('dashboard.text_3'),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private],
  },
  'enabled_hosts.cpu.virtual': {
    unit: i18n.t('dashboard.text_3'),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private],
  },
  'enabled_hosts.memory': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private],
  },
  'enabled_hosts.memory.virtual': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private],
  },
  hosts: {
    unit: i18n.t('dashboard.text_2'),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private],
  },
  'hosts.cpu': {
    unit: i18n.t('dashboard.text_3'),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private],
  },
  'hosts.cpu.total': {
    unit: i18n.t('dashboard.text_3'),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private],
  },
  'hosts.cpu.virtual': {
    unit: i18n.t('dashboard.text_3'),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private],
  },
  'hosts.memory': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private],
  },
  'hosts.memory.total': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private],
  },
  'hosts.memory.virtual': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private],
  },
  isolated_devices: {
    unit: i18n.t('dashboard.text_4'),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  networks: {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'domain.nics': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'domain.nics.guest': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'domain.nics.host': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private],
  },
  'domain.nics.lb': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'domain.nics.reserve': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'domain.nics.guest.pending_delete': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'domain.nics.netif': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'domain.nics.eip': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private],
  },
  'domain.nics.db': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  nics: {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'nics.guest': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'nics.lb': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'nics.reserve': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'nics.guest.pending_delete': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'nics.eip': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private],
  },
  'nics.db': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  pending_delete_servers: {
    unit: i18n.t('dashboard.text_2'),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'pending_delete_servers.cpu': {
    unit: i18n.t('dashboard.text_3'),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'pending_delete_servers.disk': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'pending_delete_servers.ha': {
    unit: i18n.t('dashboard.text_2'),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  'pending_delete_servers.ha.cpu': {
    unit: i18n.t('dashboard.text_3'),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  'pending_delete_servers.ha.disk': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  'pending_delete_servers.ha.memory': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  'pending_delete_servers.isolated_devices': {
    unit: i18n.t('dashboard.text_4'),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  'pending_delete_servers.memory': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  ports: {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'ports.eip': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private],
  },
  ports_exit: {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'ports_exit.eip': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private],
  },
  ready_servers: {
    unit: i18n.t('dashboard.text_2'),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'ready_servers.cpu': {
    unit: i18n.t('dashboard.text_3'),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'ready_servers.disk': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'ready_servers.ha': {
    unit: i18n.t('dashboard.text_2'),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  'ready_servers.ha.cpu': {
    unit: i18n.t('dashboard.text_3'),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  'ready_servers.ha.disk': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  'ready_servers.ha.memory': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  'ready_servers.isolated_devices': {
    unit: i18n.t('dashboard.text_4'),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  'ready_servers.memory': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  regions: {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  running_servers: {
    unit: i18n.t('dashboard.text_2'),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'running_servers.cpu': {
    unit: i18n.t('dashboard.text_3'),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'running_servers.disk': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'running_servers.ha': {
    unit: i18n.t('dashboard.text_2'),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  'running_servers.ha.cpu': {
    unit: i18n.t('dashboard.text_3'),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  'running_servers.ha.disk': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  'running_servers.ha.memory': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  'running_servers.isolated_devices': {
    unit: i18n.t('dashboard.text_4'),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  'running_servers.memory': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  servers: {
    unit: i18n.t('dashboard.text_2'),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'servers.cpu': {
    unit: i18n.t('dashboard.text_3'),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'servers.disk': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'servers.ha': {
    unit: i18n.t('dashboard.text_2'),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  'servers.ha.cpu': {
    unit: i18n.t('dashboard.text_3'),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  'servers.ha.disk': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  'servers.ha.memory': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  'servers.isolated_devices': {
    unit: i18n.t('dashboard.text_4'),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  'servers.memory': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  snapshot: {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  storages: {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private],
  },
  'storages.commit_rate': {
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private],
  },
  'storages.virtual': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private],
  },
  vpcs: {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  wires: {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private],
  },
  zones: {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'all.disks.count': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'all.disks.mounted.count': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'all.disks.unmounted.count': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'all.disks.unready.count': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'all.loadbalancer': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'all.cache': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'all.rds': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  cache: {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'disks.count': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'disks.mounted.count': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'disks.unmounted.count': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'disks.unready.count': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  loadbalancer: {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  rds: {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'domain.baremetals': {
    unit: i18n.t('dashboard.text_2'),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  'domain.baremetals.cpu': {
    unit: i18n.t('dashboard.text_3'),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  'domain.baremetals.memory': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  'domain.bucket_bytes': {
    formatter: val => sizestrWithUnit(val, 'B', 1024),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'domain.bucket_objects': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'domain.buckets': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'domain.cache': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'domain.cpu_commit_rate.running': {
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private],
  },
  'domain.disks': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'domain.disks.mounted': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'domain.disks.mounted.count': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'domain.disks.count': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'domain.disks.unmounted': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'domain.disks.unmounted.count': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'domain.disks.unready': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'domain.disks.unready.count': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'domain.eip': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'domain.eip.floating_ip': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'domain.eip.floating_ip.used': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'domain.eip.public_ip': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'domain.eip.used': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'domain.enabled_hosts': {
    unit: i18n.t('dashboard.text_2'),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private],
  },
  'domain.enabled_hosts.cpu': {
    unit: i18n.t('dashboard.text_3'),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private],
  },
  'domain.enabled_hosts.cpu.virtual': {
    unit: i18n.t('dashboard.text_3'),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private],
  },
  'domain.enabled_hosts.memory': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private],
  },
  'domain.enabled_hosts.memory.virtual': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private],
  },
  'domain.hosts': {
    unit: i18n.t('dashboard.text_2'),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private],
  },
  'domain.hosts.cpu': {
    unit: i18n.t('dashboard.text_3'),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private],
  },
  'domain.hosts.cpu.virtual': {
    unit: i18n.t('dashboard.text_3'),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private],
  },
  'domain.hosts.memory': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private],
  },
  'domain.hosts.memory.virtual': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private],
  },
  'domain.loadbalancer': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'domain.memory_commit_rate.running': {
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private],
  },
  'domain.pending_delete_servers': {
    unit: i18n.t('dashboard.text_2'),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'domain.pending_delete_servers.cpu': {
    unit: i18n.t('dashboard.text_3'),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'domain.pending_delete_servers.disk': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'domain.pending_delete_servers.ha': {
    unit: i18n.t('dashboard.text_2'),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  'domain.pending_delete_servers.ha.cpu': {
    unit: i18n.t('dashboard.text_3'),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  'domain.pending_delete_servers.ha.disk': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  'domain.pending_delete_servers.ha.memory': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  'domain.pending_delete_servers.isolated_devices': {
    unit: i18n.t('dashboard.text_4'),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  'domain.pending_delete_servers.memory': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'domain.ports': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'domain.ports.eip': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private],
  },
  'domain.ports_exit': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'domain.ports_exit.eip': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private],
  },
  'domain.rds': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'domain.ready_servers': {
    unit: i18n.t('dashboard.text_2'),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'domain.ready_servers.cpu': {
    unit: i18n.t('dashboard.text_3'),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'domain.ready_servers.disk': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'domain.ready_servers.ha': {
    unit: i18n.t('dashboard.text_2'),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  'domain.ready_servers.ha.cpu': {
    unit: i18n.t('dashboard.text_3'),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  'domain.ready_servers.ha.disk': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  'domain.ready_servers.ha.memory': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  'domain.ready_servers.isolated_devices': {
    unit: i18n.t('dashboard.text_4'),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  'domain.ready_servers.memory': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'domain.running_servers': {
    unit: i18n.t('dashboard.text_2'),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'domain.running_servers.cpu': {
    unit: i18n.t('dashboard.text_3'),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'domain.running_servers.disk': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'domain.running_servers.ha': {
    unit: i18n.t('dashboard.text_2'),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  'domain.running_servers.ha.cpu': {
    unit: i18n.t('dashboard.text_3'),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  'domain.running_servers.ha.disk': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  'domain.running_servers.ha.memory': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  'domain.running_servers.isolated_devices': {
    unit: i18n.t('dashboard.text_4'),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  'domain.running_servers.memory': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'domain.servers': {
    unit: i18n.t('dashboard.text_2'),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'domain.servers.cpu': {
    unit: i18n.t('dashboard.text_3'),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'domain.servers.disk': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'domain.servers.ha': {
    unit: i18n.t('dashboard.text_2'),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  'domain.servers.ha.cpu': {
    unit: i18n.t('dashboard.text_3'),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  'domain.servers.ha.disk': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  'domain.servers.ha.memory': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  'domain.servers.isolated_devices': {
    unit: i18n.t('dashboard.text_4'),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise],
  },
  'domain.servers.memory': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'domain.snapshot': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'domain.storages': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private],
  },
  'domain.storages.commit_rate': {
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private],
  },
  'domain.storages.virtual': {
    formatter: val => sizestrWithUnit(val, 'M', 1024),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private],
  },
  'domain.vpcs': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'all.img.total.size': {
    formatter: val => sizestrWithUnit(val, 'B', 1000),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'domain.img.total.size': {
    formatter: val => sizestrWithUnit(val, 'B', 1000),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'img.total.size': {
    formatter: val => sizestrWithUnit(val, 'B', 1000),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'all.iso.total.size': {
    formatter: val => sizestrWithUnit(val, 'B', 1000),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'domain.iso.total.size': {
    formatter: val => sizestrWithUnit(val, 'B', 1000),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'iso.total.size': {
    formatter: val => sizestrWithUnit(val, 'B', 1000),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'all.imgiso.total.size': {
    formatter: val => sizestrWithUnit(val, 'B', 1000),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'domain.imgiso.total.size': {
    formatter: val => sizestrWithUnit(val, 'B', 1000),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'imgiso.total.size': {
    formatter: val => sizestrWithUnit(val, 'B', 1000),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'all.servers.last_week': {
    unit: i18n.t('dashboard.text_2'),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'domain.servers.last_week': {
    unit: i18n.t('dashboard.text_2'),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'servers.last_week': {
    unit: i18n.t('dashboard.text_2'),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'all.pending_delete_servers.last_week': {
    unit: i18n.t('dashboard.text_2'),
    scope: SCOPES_MAP.system.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'domain.pending_delete_servers.last_week': {
    unit: i18n.t('dashboard.text_2'),
    scope: SCOPES_MAP.domain.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
  'pending_delete_servers.last_week': {
    unit: i18n.t('dashboard.text_2'),
    scope: SCOPES_MAP.project.key,
    clouds: [CLOUD_ENVS.onpremise, CLOUD_ENVS.private, CLOUD_ENVS.public],
  },
}

export const K8S_USAGE_CONFIG = {
  'all.cluster.count': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.system.key,
  },
  'all.cluster.node.count': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.system.key,
  },
  'all.cluster.node.not_ready_count': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.system.key,
  },
  'all.cluster.node.ready_count': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.system.key,
  },
  'all.cluster.node.pod.capacity': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.system.key,
  },
  'all.cluster.node.pod.count': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.system.key,
  },
  'all.cluster.node.cpu.capacity': {
    unit: i18n.t('dashboard.text_3'),
    scope: SCOPES_MAP.system.key,
  },
  'all.cluster.node.cpu.limit': {
    unit: i18n.t('dashboard.text_3'),
    scope: SCOPES_MAP.system.key,
  },
  'all.cluster.node.cpu.request': {
    unit: i18n.t('dashboard.text_3'),
    scope: SCOPES_MAP.system.key,
  },
  'all.cluster.node.memory.capacity': {
    formatter: val => sizestrWithUnit(val, 'B', 1024),
    scope: SCOPES_MAP.system.key,
  },
  'all.cluster.node.memory.limit': {
    formatter: val => sizestrWithUnit(val, 'B', 1024),
    scope: SCOPES_MAP.system.key,
  },
  'all.cluster.node.memory.request': {
    formatter: val => sizestrWithUnit(val, 'B', 1024),
    scope: SCOPES_MAP.system.key,
  },
  'domain.cluster.count': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.domain.key,
  },
  'domain.cluster.node.count': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.domain.key,
  },
  'domain.cluster.node.not_ready_count': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.domain.key,
  },
  'domain.cluster.node.ready_count': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.domain.key,
  },
  'domain.cluster.node.pod.capacity': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.domain.key,
  },
  'domain.cluster.node.pod.count': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.domain.key,
  },
  'domain.cluster.node.cpu.capacity': {
    unit: i18n.t('dashboard.text_3'),
    scope: SCOPES_MAP.domain.key,
  },
  'domain.cluster.node.cpu.limit': {
    unit: i18n.t('dashboard.text_3'),
    scope: SCOPES_MAP.domain.key,
  },
  'domain.cluster.node.cpu.request': {
    unit: i18n.t('dashboard.text_3'),
    scope: SCOPES_MAP.domain.key,
  },
  'domain.cluster.node.memory.capacity': {
    formatter: val => sizestrWithUnit(val, 'B', 1024),
    scope: SCOPES_MAP.domain.key,
  },
  'domain.cluster.node.memory.limit': {
    formatter: val => sizestrWithUnit(val, 'B', 1024),
    scope: SCOPES_MAP.domain.key,
  },
  'domain.cluster.node.memory.request': {
    formatter: val => sizestrWithUnit(val, 'B', 1024),
    scope: SCOPES_MAP.domain.key,
  },
  'project.cluster.count': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.project.key,
  },
  'project.cluster.node.count': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.project.key,
  },
  'project.cluster.node.not_ready_count': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.project.key,
  },
  'project.cluster.node.ready_count': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.project.key,
  },
  'project.cluster.node.pod.capacity': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.project.key,
  },
  'project.cluster.node.pod.count': {
    unit: i18n.t('dashboard.text_1'),
    scope: SCOPES_MAP.project.key,
  },
  'project.cluster.node.cpu.capacity': {
    unit: i18n.t('dashboard.text_3'),
    scope: SCOPES_MAP.project.key,
  },
  'project.cluster.node.cpu.limit': {
    unit: i18n.t('dashboard.text_3'),
    scope: SCOPES_MAP.project.key,
  },
  'project.cluster.node.cpu.request': {
    unit: i18n.t('dashboard.text_3'),
    scope: SCOPES_MAP.project.key,
  },
  'project.cluster.node.memory.capacity': {
    formatter: val => sizestrWithUnit(val, 'B', 1024),
    scope: SCOPES_MAP.project.key,
  },
  'project.cluster.node.memory.limit': {
    formatter: val => sizestrWithUnit(val, 'B', 1024),
    scope: SCOPES_MAP.project.key,
  },
  'project.cluster.node.memory.request': {
    formatter: val => sizestrWithUnit(val, 'B', 1024),
    scope: SCOPES_MAP.project.key,
  },
}

export const PROJECT_QUOTA_CONFIG = {
  'project-quota-common': {
    cpu: {
      unit: i18n.t('dashboard.text_3'),
    },
    'usage.cpu': {
      unit: i18n.t('dashboard.text_3'),
    },
    memory: {
      formatter: val => sizestrWithUnit(val, 'M', 1024),
    },
    'usage.memory': {
      formatter: val => sizestrWithUnit(val, 'M', 1024),
    },
    storage: {
      formatter: val => sizestrWithUnit(val, 'M', 1024),
    },
    'usage.storage': {
      formatter: val => sizestrWithUnit(val, 'M', 1024),
    },
    isolated_device: {
      unit: i18n.t('dashboard.text_4'),
    },
    'usage.isolated_device': {
      unit: i18n.t('dashboard.text_4'),
    },
  },
  'project-quota-image': {
    image: {
      unit: i18n.t('dashboard.text_1'),
    },
    'usage.image': {
      unit: i18n.t('dashboard.text_1'),
    },
  },
  'project-quota-region': {
    eip: {
      unit: i18n.t('dashboard.text_1'),
    },
    'usage.eip': {
      unit: i18n.t('dashboard.text_1'),
    },
    port: {
      unit: i18n.t('dashboard.text_1'),
    },
    'usage.port': {
      unit: i18n.t('dashboard.text_1'),
    },
    snapshot: {
      unit: i18n.t('dashboard.text_1'),
    },
    'usage.snapshot': {
      unit: i18n.t('dashboard.text_1'),
    },
  },
}

export function getMetricDocs (scope) {
  const docsUrl = `${getDocsUrl(scope)}user/dashboard/`
  return docsUrl + i18n.t('dashboard.text_184')
}
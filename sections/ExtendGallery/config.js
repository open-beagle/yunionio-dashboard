import i18n from '@/locales'
const options = [
  {
    label: i18n.t('dashboard.text_78'),
    desc: i18n.t('dashboard.text_79'),
    icon: 'dashboard-number',
    h: 2,
    w: 5,
    component: 'NumberCard',
  },
  {
    label: i18n.t('dashboard.text_80'),
    desc: i18n.t('dashboard.text_81'),
    icon: 'dashboard-usage',
    h: 3,
    w: 5,
    component: 'Ring',
  },
  {
    label: i18n.t('dashboard.text_54'),
    desc: i18n.t('dashboard.text_82'),
    icon: 'dashboard-usage',
    h: 4,
    w: 4,
    component: 'SuggestsysAlertsOverview',
  },
  {
    label: i18n.t('dashboard.text_47'),
    desc: i18n.t('dashboard.text_83'),
    icon: 'dashboard-usage',
    h: 4,
    w: 6,
    component: 'SuggestsysAlertsDetail',
  },
  {
    label: i18n.t('dashboard.text_19'),
    desc: i18n.t('dashboard.text_84'),
    icon: 'dashboard-notice',
    h: 4,
    w: 5,
    component: 'Notify',
  },
  {
    label: 'TOP5',
    desc: i18n.t('dashboard.text_85'),
    icon: 'dashboard-top5',
    h: 5,
    w: 4,
    component: 'Top5',
  },
  {
    label: i18n.t('dashboard.text_17'),
    desc: i18n.t('dashboard.text_86'),
    icon: 'dashboard-log',
    h: 5,
    w: 4,
    component: 'Log',
  },
  {
    label: i18n.t('dashboard.text_87'),
    desc: i18n.t('dashboard.text_88'),
    icon: 'dashboard-fee',
    h: 5,
    w: 10,
    component: 'BillHistoryLine',
  },
  {
    label: i18n.t('dashboard.text_89'),
    desc: i18n.t('dashboard.text_90'),
    icon: 'dashboard-resource',
    h: 5,
    w: 10,
    component: 'ResourceHistoryLine',
  },
  {
    label: i18n.t('dashboard.text_91'),
    desc: i18n.t('dashboard.text_92'),
    icon: 'dashboard-quota',
    h: 7,
    w: 5,
    scope: ['domain', 'system'],
    component: 'Quota',
  },
]

export default options

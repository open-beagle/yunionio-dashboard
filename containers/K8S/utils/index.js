import * as R from 'ramda'
import { RESTART_POLICY_OPTS } from '@K8S/constants'
import store from '@/store'
import i18n from '@/locales'

const validateValidPath = (rule, value, callback) => {
  if (value.startsWith('/')) {
    if (value === '/') {
      callback(new Error(i18n.t('k8s.text_130')))
    } else {
      callback()
    }
  } else {
    callback(new Error(i18n.t('k8s.text_131')))
  }
}

export const getSpecContainerParams = (fd, tabs) => {
  const tabKeys = tabs.map(val => val.key)
  const containers = tabKeys.map(val => {
    const env = []
    const volumeMounts = []
    const resources = {
      requests: {},
    }
    if (fd.containerEnvNames && R.is(Object, fd.containerEnvNames[val]) && !R.isEmpty(fd.containerEnvNames[val])) {
      Object.keys(fd.containerEnvNames[val]).forEach(key => {
        env.push({ name: fd.containerEnvNames[val][key], value: fd.containerEnvValues[val][key] })
      })
    }
    if (fd.containerVolumeMountNames && R.is(Object, fd.containerVolumeMountNames[val]) && !R.isEmpty(fd.containerVolumeMountNames[val])) {
      Object.keys(fd.containerVolumeMountNames[val]).forEach(key => {
        volumeMounts.push({ name: fd.containerVolumeMountNames[val][key], mountPath: fd.containerVolumeMountPaths[val][key] })
      })
    }
    const p = {
      name: fd.containerNames[val],
      image: fd.containerimages[val],
      securityContext: {
        privileged: fd.containerPrivilegeds[val],
      },
    }
    if (volumeMounts.length) p.volumeMounts = volumeMounts
    if (env.length) p.env = env
    if (fd.containerCommands[val]) {
      p.command = fd.containerCommands[val].split(' ')
    }
    if (fd.containerArgs[val]) {
      p.args = fd.containerArgs[val].split(' ')
    }
    if (fd.containerCpus[val]) resources.requests.cpu = fd.containerCpus[val] + 'm'
    if (fd.containerMemorys[val]) resources.requests.memory = fd.containerMemorys[val] + 'Mi'
    return p
  })
  const params = {
    containers,
  }
  const volumesSum = params.containers.reduce((prev, next) => prev.concat(next.volumeMounts), []).filter(v => !!v)
  const volumesUnion = R.uniqBy(R.prop('name'), volumesSum) // 根据 name 去重
  const volumes = volumesUnion.map(val => ({
    name: val.name,
    persistentVolumeClaim: {
      claimName: val.name,
    },
  }))
  if (volumes && volumes.length) {
    params.volumes = volumes
  }
  return params
}

export const getLabels = (fd, key, value) => {
  const obj = {}
  if (R.is(Object, fd[key])) {
    const keys = Object.keys(fd[key])
    keys.forEach(k => {
      obj[fd[key][k]] = fd[value][k]
    })
  }
  return obj
}

export function getCreateDecorators (resource) {
  return {
    name: [
      'name',
      {
        validateFirst: true,
        rules: [
          { required: true, message: i18n.t('k8s.text_60') },
          { min: 2, max: 24, message: i18n.t('k8s.text_132'), trigger: 'blur' },
          { validator: this.$validate('k8sName') },
        ],
      },
    ],
    cluster: [
      'cluster',
      {
        initialValue: store.state.common.k8s.cluster,
        rules: [
          { required: true, message: i18n.t('k8s.text_30'), trigger: 'blur' },
        ],
      },
    ],
    namespace: [
      'namespace',
      {
        initialValue: store.state.common.k8s.namespace,
        rules: [
          { required: true, message: i18n.t('k8s.text_61'), trigger: 'blur' },
        ],
      },
    ],
    replicas: [
      'replicas',
      {
        initialValue: 1,
      },
    ],
    imageSecrets: {
      secretType: [
        'secretType',
        {
          initialValue: 'none',
        },
      ],
      imagePullSecrets: [
        'imagePullSecrets',
        {
          rules: [
            { required: true, message: i18n.t('k8s.text_133') },
          ],
        },
      ],
    },
    portMappings: {
      serviceType: [
        'serviceType',
        {
          initialValue: 'none',
        },
      ],
      loadBalancerNetwork: [
        'loadBalancerNetwork',
      ],
      loadBalancerCluster: [
        'loadBalancerCluster',
      ],
      ports: {
        port: i => [
          `ports[${i}]`,
          {
            initialValue: 1,
            rules: [
              { required: true, message: i18n.t('k8s.text_134') },
            ],
          },
        ],
        targetPort: i => [
          `targetPorts[${i}]`,
          {
            initialValue: 1,
            rules: [
              { required: true, message: i18n.t('k8s.text_135') },
            ],
          },
        ],
        protocol: i => [
          `protocols[${i}]`,
          {
            initialValue: 'TCP',
            rules: [
              { required: true, message: i18n.t('k8s.text_136') },
            ],
          },
        ],
      },
    },
    restartPolicy: [
      'restartPolicy',
      {
        initialValue: RESTART_POLICY_OPTS[resource][0].key,
      },
    ],
    schedule: [
      'schedule',
      {
        rules: [
          { required: true, message: i18n.t('k8s.text_137') },
        ],
      },
    ],
    labels: {
      key: i => [
        `labelKeys[${i}]`,
        {
          rules: [
            { required: true, message: i18n.t('k8s.text_138') },
            { validator: this.$validate('k8sLabel') },
          ],
        },
      ],
      value: i => [
        `labelValues[${i}]`,
        {
          rules: [
            { required: true, message: i18n.t('k8s.text_139') },
            { validator: this.$validate('k8sLabel') },
          ],
        },
      ],
    },
    annotations: {
      key: i => [
        `annotationsKeys[${i}]`,
        {
          rules: [
            { required: true, message: i18n.t('k8s.text_138') },
            { validator: this.$validate('k8sLabel') },
          ],
        },
      ],
      value: i => [
        `annotationsValues[${i}]`,
        {
          rules: [
            { required: true, message: i18n.t('k8s.text_139') },
            { validator: this.$validate('k8sLabel') },
          ],
        },
      ],
    },
    containers: {
      name: i => [
        `containerNames[${i}]`,
        {
          rules: [
            { required: true, message: i18n.t('k8s.text_60') },
            { validator: this.$validate('k8sLabel') },
          ],
        },
      ],
      image: i => [
        `containerimages[${i}]`,
        {
          rules: [
            { required: true, message: i18n.t('k8s.text_67') },
          ],
        },
      ],
      cpu: i => [
        `containerCpus[${i}]`,
      ],
      memory: i => [
        `containerMemorys[${i}]`,
      ],
      command: i => [
        `containerCommands[${i}]`,
      ],
      arg: i => [
        `containerArgs[${i}]`,
      ],
      volumeMount: i => ({
        key: j => [
          `containerVolumeMountNames[${i}][${j}]`,
          {
            rules: [
              { required: true, message: i18n.t('k8s.text_77') },
            ],
          },
        ],
        value: j => [
          `containerVolumeMountPaths[${i}][${j}]`,
          {
            rules: [
              { required: true, message: i18n.t('k8s.text_140') },
              { validator: validateValidPath, trigger: 'blur' },
            ],
          },
        ],
      }),
      env: i => ({
        key: j => [
          `containerEnvNames[${i}][${j}]`,
          {
            rules: [
              { required: true, message: i18n.t('k8s.text_140') },
            ],
          },
        ],
        value: j => [
          `containerEnvValues[${i}][${j}]`,
          {
            rules: [
              { required: true, message: i18n.t('k8s.text_140') },
            ],
          },
        ],
      }),
      privileged: i => [
        `containerPrivilegeds[${i}]`,
        {
          valuePropName: 'checked',
          initialValue: false,
        },
      ],
    },
  }
}

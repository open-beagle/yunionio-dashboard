/**
 * author: houjiazong <houjiazong@gmail.com>
 * date: 2019/11/21
 * Workflow Mixin
 */

import { mapGetters } from 'vuex'
import { WORKFLOW_TYPES } from '@/constants/workflow'

export default {
  data () {
    return {
      WORKFLOW_TYPES: { ...WORKFLOW_TYPES },
    }
  },
  computed: {
    ...mapGetters(['workflow']),
    workflowStatistics () {
      return this.workflow.statistics
    },
    workflowEnabledKeys () {
      return this.workflow.enabledKeys
    },
  },
  methods: {
    checkWorkflowEnabled (key) {
      return this.workflowEnabledKeys.includes(key)
    },
    async createWorkflow (variables) {
      if (!this.$appConfig.isPrivate) return Promise.reject(new Error('no workflow'))
      try {
        const response = new this.$Manager('process-instances', 'v1').create({
          data: {
            variables,
          },
        })
        this.$store.dispatch('app/fetchWorkflowStatistics')
        return response
      } catch (error) {
        return error
      }
    },
  },
}

<template>
  <v-jsoneditor
    :class="desc.class"
    :style="desc.style"
    v-bind="attrs"
    v-model="newValue"
    v-on="onEvents"
  />
</template>

<script>
import VJsoneditor from 'v-jsoneditor/src/index'
import formMixin from 'vue-ele-form/lib/mixins/formMixin'
import { debounce } from 'throttle-debounce'

export default {
  name: 'json-editor',
  mixins: [formMixin],
  props: {
    value: [Array, Object]
  },
  data() {
    return {
      defaultAttrs: {
        plus: false,
        options: {
          mode: 'code'
        },
        height: '400px'
      }
    }
  },
  components: {
    VJsoneditor
  },
  methods: {
    handleChange(val) {
      if (!this.emitData) {
        this.emitData = debounce(400, value => {
          this.$emit('input', value)
        })
      }
      this.emitData(val)
    }
  }
}
</script>

<style>
.jsoneditor-container.min-box {
  min-width: auto !important;
}
</style>

<template>
  <v-jsoneditor
    :class="desc.class"
    :style="desc.style"
    @input="handleChange"
    v-bind="attrs"
    v-model="newValue"
    v-on="desc.on"
  />
</template>

<script>
import VJsoneditor from 'v-jsoneditor/src/index'
import formMixin from 'vue-ele-form/lib/mixins/formMixin'

export default {
  name: 'ele-form-json',
  mixins: [formMixin],
  props: {
    value: [Array, Object]
  },
  data () {
    return {
      defaultAttrs: {
        plus: false,
        height: '400px'
      }
    }
  },
  components: {
    VJsoneditor
  }
}
</script>

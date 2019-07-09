import EleFormJsonEditor from './EleFormJsonEditor'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(EleFormJsonEditor.name, EleFormJsonEditor)
}

export default EleFormJsonEditor

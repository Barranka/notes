<template>
  <div class="rewrite-input">
    <input
      type="text"
      v-model="val"
      @keyup.enter="newVal"
      @keyup.esc="$emit('close')"
      @blur="$emit('close')"
    />
  </div>
</template>

<script>
export default {
  props: {
    editing: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      val: this.editing.value
    }
  },
  methods: {
    newVal () {
      this.$store.dispatch("changeNote", {
        value: this.val, index: this.editing.index, valTitle: this.editing.values.title, valDescr: this.editing.values.descr
      })
      this.$emit('close')
    }
  }
}
</script>


<style lang="scss" scoped>
input {
  margin-bottom: 15px;
  border-radius: 40px;
  color: #909399;
  font-size: 16px;
  min-width: 100px;
  height: auto;
}
</style>
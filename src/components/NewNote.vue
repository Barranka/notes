<template>
  <div class="new-note">
    <label>Titel</label>
    <message v-if="message" :message="message" />
    <input v-model="note.title" type="text" />

    <label>Note importance</label>
    <select v-model="note.selected">
      <option v-for="option in priorites" :value="option.value" :key="option.index">{{ option.text }}</option>
    </select>

    <label>Description</label>
    <textarea v-model="note.descr"></textarea>

    <button class="btn btnPrimary" @click="addNote">New note</button>
  </div>
</template>

<script>
import message from "@/components/Message.vue"
export default {
  components: { message },
  data () {
    return {
      note: {
        title: "",
        descr: "",
        selected: "base",
        titleEdit: false, //для редактирования
        descrEdit: false,
      },
      message: null,
      priorites: [
        { text: 'Base', value: 'base' },
        { text: 'Important', value: 'important' },
        { text: 'Very Impotant', value: 'veryImportant' }
      ],
    }
  },
  methods: {
    addNote() {
      let { title, descr, selected } = this.note
      if (title === "") {
        this.message = "Title can`t be blank!"
        return false
      }

      let note = {
        title,
        descr,
        date: new Date(Date.now()).toLocaleString(),
        selected,
        titleEdit: false,
        descrEdit: false,
      }
      console.log(selected)

      this.$store.dispatch('addNote', note)
      .then(()=> {
        this.message = null
        this.note.title = ""
        this.note.descr = ""
        this.note.selected = "base"
      })
      .catch(e => console.log(this.message))


    }
  }
}

</script>

<style lang="scss">
.new-note {
  text-align: center;
}
textarea {
  font-family: Arial;
}
input {
  color: #101010;
}
option {
  font-size: 100%;
}
</style>
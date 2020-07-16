<template>
  <div class="notes">
    <div class="note" v-for="(note, index) in notes" :class="[{full: !grid}, note.selected]" :key="index">
      <div class="note-header" :class="{full: !grid}">
        <!-- Changed title -->
        <rewriteVal
          v-if="note.titleEdit"
          :editing='editing'
          @close="resetValues(note, 'title')"/>
        <p class="note-header note-header__item" v-else @click="[changeVal(note.title, index), editing.values.title = true, note.titleEdit = true]">{{ note.title }}</p>
        <div class="note-header__icons">
          <p class="note-header__edit"><img src="@/assets/edit.png" alt="edit.png" style="max-width: 20px;"></p>
          <p class="note-header__cursor" style="cursor: pointer;" @click="cancelNote(index)">x</p>
        </div>
      </div>

      <div class="note-body">
        <!-- Changed descr-->
        <rewriteVal
          v-if="note.descrEdit"
          :editing='editing'
          @close="resetValues(note, 'descr')"/>
        <p class="note-body__item" v-else @click="[changeVal(note.descr, index), editing.values.descr = true, note.descrEdit = true]">{{ note.descr }}</p>
        <span>{{ note.date }}</span>

      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import rewriteVal from "@/components/RewriteVal.vue"

export default {
  components: {
    rewriteVal
  },
  props: {
    notes: {
      type: Array,
      required: true
    },
    grid: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      editing: {
        value: '',
        values: {title: false, descr: false},
        index: ''
      },
    }
  },
  methods: {
    ...mapActions([
      'cancelNote'
    ]),
    changeVal (val, index) {
      this.editing.value = val
      this.editing.index = index
    },
    resetValues(note, type) {
      if (type == 'title')
      note.titleEdit = false
      this.editing.values.title = false

      if (type == 'descr')
      note.descrEdit = false
      this.editing.values.descr = false
    }
  }
}
</script>

<style lang="scss">
.notes {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 40px 0;
}
.note {
  width: 48%;
  padding: 18px 20px;
  margin-bottom: 20px;
  background-color: #ffffff;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.41, 1);
  box-shadow: 0 30px 30px rgba(0, 0, 0, 0.02);
  &:hover {
    box-shadow: 0 30px 30px rgba(0, 0, 0, 0.04);
    transform: translate(0, -6px);
    transition-delay: 0s !important;
  }
  &.full {
    width: 100%;
    text-align: center;
  }
}
.note:hover {
    .note-header__item, .note-body__item {
      background: #efefff;
    }
}
.note-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
  &__icons {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  &__cursor, &__edit {
    padding: 10px;
  }
  h1 {
    font-size: 32px;
  }
  p {
    font-size: 22px;
    color: #402caf;
  }
  svg {
    margin-right: 12px;
    color: #999999;
    &.active {
      color: #402caf;
    }
    &:last-child {
      margin-right: 0;
    }
  }
  &.full {
    display: flex;
    justify-content: center;
    p {
      padding-right: 20px;
      &:last-child {
        padding: 0 0 10px 20px;
        margin-right: 0;
      }
    }
  }

}
.note-body {
  p {
    margin: 20px 0;
  }
  span {
    font-style: 14px;
    color: #999999;
  }
}
.note-header__item, .note-body__item {
  cursor: pointer;
}
.base {
  background-color: #fff;
}
.important {
  background-color: #f7efad87;
}
.veryImportant {
  background-color: #eeb6b682;
}
</style>
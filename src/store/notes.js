export default {
	state: {
		notes: [
			{
			  title: "First Note",
			  descr: "Description for first note",
			  date: new Date(Date.now()).toLocaleString(),
			  titleEdit: false,
			  descrEdit: false,
			},
			{
			  title: "Second Note",
			  descr: "Description for second note",
			  date: new Date(Date.now()).toLocaleString(),
			  titleEdit: false,
			  descrEdit: false,
			},
			{
			  title: "Third Note",
			  descr: "Description for third note",
			  date: new Date(Date.now()).toLocaleString(),
			  titleEdit: false,
			  descrEdit: false,
			}
		]
	},
	mutations: {
		addNote (state, note) {
			state.notes.push(note)
		},
		changedNote (state, note) {
			let index =  note.index,
				noteEdit = state.notes[index]

			//тут я определяю где были изменения в title or descr
			if (note.valTitle) noteEdit.title = note.value
			if (note.valDescr) noteEdit.descr = note.value
			state.notes.splice(index, 1, noteEdit)
		},
		cancelNote (state, note) {
			state.notes.splice(note, 1)
		}
	},
	actions: {
		addNote ({commit}, note) {
			commit('addNote', note)
		},
		changeNote ({commit}, note) {
			commit('changedNote', note)
		},
		cancelNote ({commit}, note) {
			commit('cancelNote', note)
		}
	},
	//I used methods stateMap in App.vue, this getters isn't worker
	// getters: {
	// 	getNotes (state) {
	// 		return state.notes
	// 	}
	// }
}
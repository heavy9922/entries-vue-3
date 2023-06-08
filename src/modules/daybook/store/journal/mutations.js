export const setEntries = (state, entries) => {
  state.entries = [...state.entries, ...entries]
  state.isloding = false
}
export const updateEntry = (state, entry) => {
  const idx = state.entries.map((entry) => entry.id).indexOf(entry.id)
  state.entries[idx] = entry
}
export const addEntry = (state, entry) => {
  state.entries = [entry, ...state.entries]
}

export const removeEntry = (state, id) => {
  state.entries = state.entries.filter((entry) => entry.id !== id)
}

export const clearEntries = (state, id) => {
  state.entries = []
}

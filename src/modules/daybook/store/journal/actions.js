import journalApi from '@/api/journalApi'

export const loadEntries = async ({ commit }) => {
  const { data } = await journalApi.get('/entries.json')
  if (!data) {
    commit('setEntries', [])
    return
  }
  const entries = []
  for (let id of Object.keys(data)) {
    entries.push({
      id,
      ...data[id],
    })
  }
  commit('setEntries', entries)
}
export const updateEntry = async ({ commit }, entry) => {
  const { date, text, picture } = entry
  const body = {
    date,
    text,
    picture,
  }
  const resp = await journalApi.put(`/entries/${entry.id}.json`, body)
  commit('updateEntry', { ...entry })
}
export const createEntry = async ({ commit }, entry) => {
  const resp = await journalApi.post('/entries.json', entry)
  if (resp) {
    entry = {
      id: resp.data.name,
      ...entry,
    }
  }
  commit('addEntry', entry)
  return { code: 200, id: entry.id }
}

export const deleteEntry = async ({ commit }, id) => {
  await journalApi.delete(`/entries/${id}.json`)
  commit('removeEntry', id)
}

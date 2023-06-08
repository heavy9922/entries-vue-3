// export const myGetter =  (state) => {}
export const getName =  (state, getters, rootState) => {
    return state.user.name || 'Daybook'
}

export const currentState =  (state, getters, rootState) => {
  return state.status
}
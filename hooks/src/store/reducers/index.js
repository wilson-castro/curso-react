export default function reducer(state, action) {
  switch (action.type) {
    case 'multiplyFor7':
      return { ...state, number: (state.number) * 7 }
    case 'divideBy25':
      return { ...state, number: (state.number) / 25 }
    case 'parseToInt':
      return { ...state, number: parseInt(state.number) }
    case 'addNNumber':
      return { ...state, number: action.payload }
    default:
      return state
  }
}

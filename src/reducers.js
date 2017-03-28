export const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

export const nameReducer = (state = '', action) => {
  if (action.type === 'SET_NAME') {
    return action.payload
  }
  return state
}

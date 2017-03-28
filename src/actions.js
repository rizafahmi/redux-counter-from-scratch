export const getIncrementAction = () => {
  return {
    type: 'INCREMENT'
  }
}

export const getDecrementAction = () => {
  return {
    type: 'DECREMENT'
  }
}

export const setNameAction = (name) => {
  return {
    type: 'SET_NAME',
    payload: name
  }
}

/* global localStorage */
export const loadState = () => {
  try {
    const data = localStorage.getItem('state')
    if (data === null) { return undefined }
    return JSON.parse(data)
  } catch (err) {
    return undefined
  }
}

export const saveState = (state) => {
  try {
    const data = JSON.stringify(state)
    localStorage.setItem('state', data)
  } catch (err) {
    // ignore
  }
}

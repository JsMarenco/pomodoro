/**
 * Saves the provided object in the browser's local storage using the specified key.
 * @param {string} key - The name under which the object will be saved.
 * @param {*} obj - The object or other supported types to be saved.
 */
export const saveInLocalStorage = (key: string, obj: unknown) => {
  localStorage.setItem(key, JSON.stringify(obj))
}

/**
 * Retrieves the object stored in the browser's local storage using the specified key.
 * @param {string} key - The name of the object to retrieve.
 * @returns {*} - The retrieved object, or null if the key is not found.
 */
export const getFromLocalStorage = (key: string) => {
  const item = localStorage.getItem(key)

  if (item) {
    return JSON.parse(item)
  }

  return null
}

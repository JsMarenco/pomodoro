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
  if (typeof window !== 'undefined') {
    const item = localStorage.getItem(key)

    if (item) {
      return JSON.parse(item)
    }
  }

  return null
}

/**
 * Retrieves a value from local storage based on the provided key.
 * If the value is not found in local storage, returns the default value.
 *
 * @param {string} key - The key to look up in local storage.
 * @param {unknown} defaultValue - The default value to return if the key is not found.
 * @returns {unknown} The value from local storage or the default value.
 */
export const getValueFromLocalStorage = (
  key: string,
  defaultValue: unknown
) => {
  const storedValue = getFromLocalStorage(key)?.value
  return storedValue || defaultValue
}

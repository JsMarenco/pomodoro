import appRoutes from '@/constants/routes/app'
import { v4 as uuidv4 } from 'uuid'

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

/**
 * Generates a unique invitation link for a room using UUID.
 * @returns {string} The unique room invitation link.
 */
export const generateRoomInvitationLink = (): string => {
  const roomId = uuidv4()

  return appRoutes.room.join(roomId)
}

/**
 * Copy text to clipboard.
 * @param {string} text - The text to copy.
 */
export const copyToClipboard = (text: string) => {
  try {
    navigator.clipboard.writeText(text)
  } catch (err) {
    console.error('Failed to copy text to clipboard:', err)
  }
}

/**
 * Extracts the video ID from a YouTube URL.
 * @param {string} url - The YouTube URL.
 */
export const extractYouTubeVideoId = (url: string): { videoId: string, success: boolean } => {
  let videoId = ''
  let success = false

  const embedRegex = /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/
  const shortUrlRegex = /^(?:https?:\/\/)?youtu\.be\/([a-zA-Z0-9_-]{11})/
  const watchRegex = /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/

  const embedMatch = url.match(embedRegex)
  const shortUrlMatch = url.match(shortUrlRegex)
  const watchMatch = url.match(watchRegex)

  if (embedMatch) {
    videoId = embedMatch[1]
    success = true
  } else if (shortUrlMatch) {
    videoId = shortUrlMatch[1]
    success = true
  } else if (watchMatch) {
    videoId = watchMatch[1]
    success = true
  }

  return { videoId, success }
}

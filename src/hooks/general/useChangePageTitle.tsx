import { useEffect, useCallback } from 'react'

/**
 * A custom React hook that changes the document title
 * @param {string} title - The title to be set as document title
 */
export default function useChangePageTitle(title: string) {
  const changeTitle = useCallback((newTitle: string) => {
    document.title = newTitle
  }, [])

  useEffect(() => {
    changeTitle(title)
  }, [title, changeTitle])
}

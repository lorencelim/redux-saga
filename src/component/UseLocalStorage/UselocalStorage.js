import { useState, useEffect } from 'react'

const useLocalStorage = (key, defaultUserValue) => {
  const [userValue, setUserValue] = useState(() => {
    let currentUserValue

    try {
      currentUserValue = JSON.parse(
        localStorage.getItem(key) || String(defaultUserValue)
      )
    } catch (error) {
      currentUserValue = defaultUserValue
    }

    return currentUserValue
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(userValue))
  }, [userValue, key])

  return [userValue, setUserValue]
}

export default useLocalStorage
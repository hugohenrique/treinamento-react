import { useState, useEffect, useCallback } from 'react'

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    // Cria um timer que será executado após o delay
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    // Cleanup: cancela o timer se o valor mudar antes do delay
    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}

// Hook para debounce de função
export function useDebouncedCallback<T extends (...args: any[]) => any>(
  callback: T,
  delay: number
): T {
  const [timeoutId, setTimeoutId] = useState<ReturnType<typeof setTimeout> | null>(
    null
  )

  const debouncedCallback = useCallback(
    (...args: Parameters<T>) => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }

      const newTimeoutId = setTimeout(() => {
        callback(...args)
      }, delay)

      setTimeoutId(newTimeoutId)
    },
    [callback, delay, timeoutId]
  ) as T

  // Cleanup no unmount
  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [timeoutId])

  return debouncedCallback
}

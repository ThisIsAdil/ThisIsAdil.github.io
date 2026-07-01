import { useEffect, useRef, useState } from 'react'

/**
 * Fires once when the element scrolls into view. Used for scroll reveals.
 * Falls back to "in view" immediately if IntersectionObserver is unavailable.
 */
export function useInView<T extends HTMLElement>(
  options?: IntersectionObserverInit,
) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          setInView(true)
          obs.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px', ...options },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [options])

  return { ref, inView }
}

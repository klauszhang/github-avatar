import { MutableRefObject, useEffect, useRef } from 'react'

type useInfiniteScrollType = (
  ref: MutableRefObject<HTMLElement | null>,
  callback: () => void
) => void

const useInfiniteScroll: useInfiniteScrollType = (ref, callback) => {
  const observer = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect()
    }

    observer.current = new IntersectionObserver((entries) => {
      const first = entries[0]
      if (first.isIntersecting) {
        callback()
      }
    })

    if (ref.current) {
      observer.current.observe(ref.current)
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect()
      }
    }
  }, [ref, callback])
}

export default useInfiniteScroll

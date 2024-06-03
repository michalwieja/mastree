import { useState, useEffect } from 'react'

function useMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const setMobileStatus = () => {
      setIsMobile(window.innerWidth <= 600)
    }

    setMobileStatus()

    window.addEventListener('resize', setMobileStatus)

    return () => {
      window.removeEventListener('resize', setMobileStatus)
    }
  }, [])

  return isMobile
}

export default useMobile

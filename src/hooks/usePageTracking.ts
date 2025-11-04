import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js',
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void
  }
}

/**
 * Hook to track page views in Google Analytics 4
 * Automatically sends page_view events when the route changes
 */
export const usePageTracking = () => {
  const location = useLocation()

  useEffect(() => {
    // Only track if gtag is available (production)
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
        page_location: window.location.href,
        page_title: document.title,
      })
    }
  }, [location])
}

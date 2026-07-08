import { useSyncExternalStore } from 'react'

const MOBILE_BREAKPOINT = 768
const MOBILE_MEDIA_QUERY = `(max-width: ${MOBILE_BREAKPOINT - 1}px)`

function subscribe(onStoreChange: () => void) {
	const mediaQueryList = window.matchMedia(MOBILE_MEDIA_QUERY)
	mediaQueryList.addEventListener('change', onStoreChange)
	return () => mediaQueryList.removeEventListener('change', onStoreChange)
}

function getSnapshot() {
	return window.matchMedia(MOBILE_MEDIA_QUERY).matches
}

function getServerSnapshot() {
	return false
}

export function useIsMobile() {
	return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}

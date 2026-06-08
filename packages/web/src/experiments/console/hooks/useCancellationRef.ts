import { useEffect, useRef, type MutableRefObject } from 'react';

/**
 * Returns a ref that is `false` while mounted and flips to `true` on unmount.
 * Guards async callbacks (setState after unmount, dangling post-fetch writes).
 */
export function useCancellationRef(): MutableRefObject<boolean> {
  const cancelledRef = useRef(false);
  useEffect(() => {
    cancelledRef.current = false;
    return (): void => {
      cancelledRef.current = true;
    };
  }, []);
  return cancelledRef;
}

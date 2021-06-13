// TODO: Refactor this
import * as React from 'react';

const useEnhancedEffect =
  typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

export function NoSSR({
  children,
  defer,
  fallback = null,
}: {
  children: JSX.Element;
  defer?: boolean;
  fallback?: JSX.Element;
}): JSX.Element {
  const [isMounted, setMountedState] = React.useState(false);

  useEnhancedEffect(() => {
    if (!defer) setMountedState(true);
  }, [defer]);

  React.useEffect(() => {
    if (defer) setMountedState(true);
  }, [defer]);

  return isMounted ? children : fallback;
}

import { ReactLenis } from 'lenis/react';

export default function SmoothScroller({ children }) {
  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.3, smoothTouch: true }}>
      {children}
    </ReactLenis>
  );
}
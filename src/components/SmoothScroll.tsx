'use client';

import { ReactLenis } from 'lenis/react';
import { ReactNode } from 'react';

export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis 
      root 
      options={{ 
        lerp: 0.08, // Ağırlık efekti (0-1 arası, ne kadar düşükse o kadar yavaş/ağır akar)
        duration: 1.5, // Kaydırma süresi
        smoothWheel: true,
        wheelMultiplier: 0.8, // Mouse tekerleği hassasiyeti (daha yavaş olması için düşürdük)
        touchMultiplier: 1.5,
      }}
    >
      {children}
    </ReactLenis>
  );
}

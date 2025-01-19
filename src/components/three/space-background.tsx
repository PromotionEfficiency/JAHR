"use client";

import dynamic from 'next/dynamic'

// Choose one:
//const Scene = dynamic(() => import('./three-scene'), { ssr: false })
const Scene = dynamic(() => import('./vanta-halo'), { ssr: false })

export default function SpaceBackground() {
  return (
    <div className="absolute inset-0 ">
        
      <Scene />
      <div className="absolute inset-0 bg-gradient-to-br from-jbrown-900/50 to-jbrown-700/50 dark:from-jgreen-900/50 dark:to-jgreen-700/50" />
    </div>
  );
} 
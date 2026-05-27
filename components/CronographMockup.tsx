'use client';

import React from 'react';
import Image from 'next/image';

export default function CronographMockup() {
  return (
    <div
      className="w-full h-full rounded-lg overflow-hidden border border-zinc-800/80"
      id="cronograph-mock-container"
    >
      <Image
        src="/cronoImg2.jpg"
        alt="Cronograph — Quantitative Analysis Platform"
        width={986}
        height={613}
        className="w-full h-full object-cover"
        priority
      />
    </div>
  );
}

'use client';

import React from 'react';
import Image from 'next/image';

export default function InvoiceReaderMockup() {
  return (
    <div
      className="relative w-full h-full bg-zinc-950 border border-zinc-800/80 rounded-lg overflow-hidden flex items-center justify-center"
      id="invoice-reader-mock-container"
    >
      <Image
        src="/invoice.jpg"
        alt="Invoice Reader - OCR extraction example"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}

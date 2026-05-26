'use client';

import React from 'react';
import { CheckCircle2, FileText, Scan, Layers, Check } from 'lucide-react';

export default function InvoiceReaderMockup() {
  return (
    <div 
      className="w-full h-full bg-zinc-950 text-[10px] text-zinc-400 font-sans border border-zinc-800/80 rounded-lg overflow-hidden flex p-2.5 gap-2.5"
      id="invoice-reader-mock-container"
    >
      {/* Left Column: Input OCR Document with scan lines and bounding boxes */}
      <div className="w-1/2 bg-zinc-900 border border-zinc-800/80 rounded-md p-1.5 flex flex-col justify-between relative overflow-hidden" id="ocr-doc-side">
        {/* Glow laser vertical scan bar simulating active extraction */}
        <div className="absolute left-0 right-0 h-[1.5px] bg-sky-500/80 shadow-[0_0_8px_rgba(56,189,248,0.8)] animate-bounce top-1/4 z-10" />

        {/* Header inside mocked invoice */}
        <div className="flex justify-between items-start border-b border-zinc-800 pb-1 mb-1 bg-zinc-950/40 p-1 rounded-sm">
          <div>
            <div className="flex items-center gap-0.5">
              <Scan className="w-2.5 h-2.5 text-sky-400 animate-pulse" />
              <span className="font-bold text-[8px] text-zinc-200 uppercase tracking-wider">Acme Corp</span>
            </div>
            <span className="text-[5px] text-zinc-500 leading-none">128 Technology Way, CA</span>
          </div>
          <div className="text-right">
            <span className="font-extrabold text-[8px] text-zinc-400">INVOICE</span>
            <div className="text-[5px] text-zinc-500 leading-none">#INV-2024-0012</div>
          </div>
        </div>

        {/* Invoice Item Rows represent OCR bounding boxes */}
        <div className="space-y-1 my-1" id="mock-ocr-bounding-boxes">
          {/* Bill to with green bounding box */}
          <div className="border border-sky-500/40 bg-sky-500/5 p-0.5 rounded flex flex-col">
            <span className="text-[4px] text-sky-400 font-mono tracking-tighter leading-none block">vendor (99% confidence)</span>
            <span className="text-[7px] text-zinc-300 font-medium">Acme Corporation</span>
          </div>

          <div className="border border-dashed border-zinc-800 p-0.5 rounded bg-zinc-950/20">
            <span className="text-[5px] text-zinc-500 block">Bill to: Google LLC</span>
          </div>

          {/* Table item row */}
          <div className="grid grid-cols-4 gap-0.5 text-[5px] text-zinc-500 font-mono border-t border-zinc-800 pt-1">
            <span className="col-span-2">Description</span>
            <span>Qty</span>
            <span className="text-right">Total</span>
          </div>

          <div className="grid grid-cols-4 gap-0.5 text-[5px] text-zinc-400 font-mono">
            <span className="col-span-2 truncate">Agent Systems consult</span>
            <span>1</span>
            <span className="text-right">$3,200.00</span>
          </div>

          <div className="grid grid-cols-4 gap-0.5 text-[5px] text-zinc-400 font-mono">
            <span className="col-span-2 truncate">API Cloud ingestion</span>
            <span>1</span>
            <span className="text-right">$584.50</span>
          </div>

          {/* Amount Box highlighted with emerald border */}
          <div className="border border-emerald-500/40 bg-emerald-500/5 p-0.5 rounded flex items-center justify-between mt-1">
            <span className="text-[4px] text-emerald-400 font-mono leading-none">total_amount (99.8%)</span>
            <span className="text-[7px] font-bold text-zinc-100">$3,784.50</span>
          </div>
        </div>

        {/* Micro file label */}
        <div className="flex items-center gap-1 text-[5px] text-zinc-500 bg-zinc-950/60 p-0.5 rounded border border-zinc-800/30">
          <FileText className="w-2 h-2 text-zinc-500" />
          <span className="truncate">raw_scan_invoice_491.pdf</span>
        </div>
      </div>

      {/* Right Column: Extracted Digital JSON Data Cards */}
      <div className="w-1/2 flex flex-col justify-between" id="extr-data-side">
        <div>
          <div className="flex items-center justify-between border-b border-zinc-800 pb-1 mb-1">
            <span className="font-bold text-zinc-200 text-[9px] tracking-tight">Extracted Data</span>
            <div className="flex items-center gap-0.5 text-emerald-400 text-[6px] font-mono leading-none bg-emerald-500/10 px-1 py-0.5 rounded">
              <Check className="w-2 h-2" />
              <span>Parsed</span>
            </div>
          </div>

          <div className="space-y-1.5" id="extracted-keypairs">
            <div>
              <span className="text-[6px] text-zinc-500 uppercase tracking-wider font-semibold block leading-none">Vendor</span>
              <span className="text-zinc-200 font-semibold text-[8px]">Acme Corporation</span>
            </div>
            <div>
              <span className="text-[6px] text-zinc-500 uppercase tracking-wider font-semibold block leading-none">Invoice ID</span>
              <span className="text-zinc-300 font-mono text-[7px]">INV-2024-0012</span>
            </div>
            <div>
              <span className="text-[6px] text-zinc-500 uppercase tracking-wider font-semibold block leading-none">Date</span>
              <span className="text-zinc-300 text-[7px]">Apr 12, 2024</span>
            </div>
            <div>
              <span className="text-[6px] text-emerald-400 uppercase tracking-wider font-extrabold block leading-none">Total Amount</span>
              <span className="text-emerald-400 font-extrabold text-[9px]">$3,784.50</span>
            </div>
            <div>
              <span className="text-[6px] text-zinc-500 uppercase tracking-wider font-semibold block leading-none">Currency</span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-zinc-300 font-mono text-[7px]">USD</span>
                <span className="text-[6px] text-zinc-500 leading-none">Detected via OCR</span>
              </div>
            </div>
          </div>
        </div>

        {/* Verified Status */}
        <div className="bg-zinc-900 border border-emerald-950 text-emerald-300 px-1 py-0.5 rounded flex items-center justify-between text-[7px]">
          <span className="flex items-center gap-0.5 font-medium">
            <CheckCircle2 className="w-2 h-2 text-emerald-400" /> Reviewed
          </span>
          <span className="text-zinc-500 text-[6px]">100% Correct</span>
        </div>
      </div>
    </div>
  );
}

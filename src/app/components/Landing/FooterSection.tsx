import React from 'react';
import { Stethoscope } from 'lucide-react';

export default function FooterSection() {
  return (
    <footer className="bg-white border-t border-slate-100 py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <div className="flex items-center justify-center gap-2">
          <span className="font-bold text-xl text-slate-900">Mugdho</span>
          <Stethoscope className="w-5 h-5 text-blue-600" />
        </div>
        <p className="text-slate-500">
          A medical student&apos;s journey, shared with hope and honesty
        </p>
        <p className="text-slate-400 text-sm pt-4">
          © 2026 Mugdho. This story is still being written.
        </p>
      </div>
    </footer>
  );
}

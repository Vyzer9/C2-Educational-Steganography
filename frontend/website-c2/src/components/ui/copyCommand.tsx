'use client';

import { useState } from 'react';
import { ClipboardCopy, Check } from 'lucide-react';

const CopyCommand = () => {
  const [copied, setCopied] = useState(false);
  const command = 'uvicorn api.main:app --reload';

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative bg-slate-800 text-slate-100 rounded-md px-4 py-3 font-mono text-sm mt-2 shadow-sm">
      <pre className="overflow-x-auto whitespace-nowrap m-0">{command}</pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 flex items-center gap-1 text-green-400 border border-green-500 hover:bg-green-500 hover:text-black transition px-2 py-1 rounded text-xs"
        aria-label="Copiar comando"
      >
        {copied ? (
          <>
            <Check className="w-4 h-4" />
            Copiado
          </>
        ) : (
          <>
            <ClipboardCopy className="w-4 h-4" />
            Copiar
          </>
        )}
      </button>
    </div>
  );
};

export default CopyCommand;

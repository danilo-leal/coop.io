import React from 'react';
import Link from 'next/link';

export default function Button() {
  return (
    <div className="w-full flex justify-center items-center">
      <Link href="/demo">
        <button className="btn-primary">
          <p className="font-semibold text-white">Começar</p>
        </button>
      </Link>
    </div>
  );
}

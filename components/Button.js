import React from 'react';

export default function Button() {
  return (
    <div className="w-full flex justify-center items-center">
      <button className="btn-primary">
        <a href="/demo">
          <p className="font-semibold text-white">Começar</p>
        </a>
      </button>
    </div>
  );
}

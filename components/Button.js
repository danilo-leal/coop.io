import React from 'react';

export default function Button() {
  return (
    <div className="w-full flex justify-center items-center">
      <button className="btn-primary">
        <p className="text-sm font-semibold text-white">Criar conta</p>
        <svg
          className="w-5 h-5 stroke-current text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          ></path>
        </svg>
      </button>
    </div>
  );
}

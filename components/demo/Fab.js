import React from 'react';
import Link from 'next/link';

export default function Fab() {
  return (
    <Link href="">
      <div className="w-16 h-16 bg-blue-500 rounded-full p-3 flex items-center justify-center shadow-lg hover:bg-blue-700 hover:shadow-xl cursor-pointer transition-all fixed sm:bottom-8 sm:right-8 bottom-4 right-4">
        <svg
          className="w-6 h-6 stroke-current text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          ></path>
        </svg>
      </div>
    </Link>
  );
}

import React from 'react';
import Link from 'next/link';

export default function IconLogo() {
  return (
    <Link href="/">
      <div className="p-3 hover:bg-gray-100 dark:hover:bg-blackish2 transition-all rounded-full">
        <svg
          className="w-5 h-5 stroke-current text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      </div>
    </Link>
  );
}

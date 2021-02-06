import React from 'react';
import Link from 'next/link';

export default function GPlayButton() {
  return (
    <div className="rounded-full p-2 hover:bg-gray-100 transition-all w-full sm:w-2/5 flex flex-col items-center dark:hover:bg-blackish2">
      <Link href="">
        <a className="flex space-x-2 items-center">
          <svg
            className="w-3 h-3 fill-current text-gray-400"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Google icon</title>
            <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" />
          </svg>
          <p className="text-sm text-gray-500 font-semibold">
            Disponível também na Google Play
          </p>
        </a>
      </Link>
    </div>
  );
}

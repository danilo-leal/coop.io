import React from 'react';

export default function EarningsEntry() {
  return (
    <div className="flex flex-col space-y-4 pt-4">
      <div className="flex justify-between">
        <div className="flex space-x-3 items-center">
          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
          <p className="text-sm text-blue-500 font-semibold">Estrutural (1)</p>
        </div>
        <div className="cursor-pointer p-3 hover:bg-gray-100 dark:hover:bg-blackish2 transition-all rounded-full">
          <svg
            className="h-5 w-5 stroke-current text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 15l7-7 7 7"
            ></path>
          </svg>
        </div>
      </div>
      <div className="flex space-y-4 flex-col">
        <p className="text-gray-900 dark:text-white text-lg">Aluguel</p>
        <div className="flex justify-between">
          <div className="flex sm:space-x-16 space-x-8">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Espero gastar
              </p>
              <p className="text-gray-900 dark:text-white sm:text-lg font-semibold">
                R$ 1.200,00
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Gastei</p>
              <p className="text-gray-900 dark:text-white sm:text-lg font-semibold">
                R$ 1.200,00
              </p>
            </div>
          </div>
          <a
            href=""
            className="text-blue-500 font-semibold hover:text-blue-700 hover:dark:text-blue-300 cursor-pointer transition-all"
          >
            editar
          </a>
        </div>
      </div>
    </div>
  );
}

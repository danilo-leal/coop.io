import React from 'react';

export default function ChangeLogFilter() {
  return (
    <div className="w-full inline-flex overflow-x-auto space-x-2 py-4 bg-white dark:bg-blackish sm:overflow-visible sm:flex sm:flex-col sm:space-x-0 sm:py-0">
      <div className="p-3 w-full hover:bg-gray-100 dark:hover:bg-blackish2 transition-all rounded-full min-w-max">
        <div className="flex space-x-4 items-center">
          <div className="w-2 h-2 rounded-full bg-gray-700 dark:bg-gray-500"></div>
          <p className="tracking-wide text-sm font-semibold text-gray-700 dark:text-gray-500">
            Todas categorias
          </p>
        </div>
      </div>
      <div className="p-3 w-full hover:bg-gray-100 dark:hover:bg-blackish2 transition-all rounded-full min-w-max">
        <div className="flex space-x-4 items-center">
          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
          <p className="tracking-wide text-sm font-semibold text-blue-500">
            Novidades
          </p>
        </div>
      </div>
      <div className="p-3 w-full hover:bg-gray-100 dark:hover:bg-blackish2 transition-all rounded-full min-w-max">
        <div className="flex space-x-4 items-center">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <p className="tracking-wide text-sm font-semibold text-green-500">
            Refinamentos
          </p>
        </div>
      </div>
      <div className="p-3 w-full hover:bg-gray-100 dark:hover:bg-blackish2 transition-all rounded-full min-w-max">
        <div className="flex space-x-4 items-center">
          <div className="w-2 h-2 rounded-full bg-red-500"></div>
          <p className="tracking-wide text-sm font-semibold text-red-500">
            Bugs
          </p>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import HeroCover from './HeroCover';

export default function ChangeLogContent() {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex space-x-4 items-center">
          <div className="bg-blue-500 rounded-md p-1">
            <p className="text-tiny font-semibold uppercase tracking-wide text-white">
              Novidades
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-blackish2 rounded-md p-1">
            <p className="text-tiny font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-100">
              Web
            </p>
          </div>
        </div>
        <p className="p text-left text-sm">20/10/2020</p>
      </div>
      <HeroCover />
      <h2 className="h2">Super melhoria do Lochetti</h2>
      <p className="p text-left">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  );
}

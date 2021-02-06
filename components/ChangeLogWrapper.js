import React from 'react';
import ChangeLogContent from './ChangeLogContent';
import ChangeLogFilter from './ChangeLogFilter';

export default function ChangeLogWrapper() {
  return (
    <div className="relative sm:grid sm:grid-cols-3 sm:gap-8">
      <div className="sticky top-0">
        <ChangeLogFilter />
      </div>
      <div className="col-span-2 flex flex-col space-y-8">
        <ChangeLogContent />
        <ChangeLogContent />
        <ChangeLogContent />
      </div>
    </div>
  );
}

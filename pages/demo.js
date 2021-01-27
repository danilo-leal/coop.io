import React from 'react';
import AppBar from '../components/demo/AppBar';
import EarningsEntry from '../components/demo/EarningsEntry';
import Header from '../components/demo/Header';
import Fab from '../components/demo/Fab';
import data from '../components/demo/data';

export default function Demo() {
  return (
    <div className="bg-gray-50 dark:bg-black">
      <div className="large-container bg-white dark:bg-blackish sm:border-l-4 sm:border-r-4 border-gray-100 dark:border-blackish2 overflow-hidden relative">
        <Fab />
        <div className="flex flex-col space-y-8 sm:p-8 p-3">
          <AppBar />
          <Header />
        </div>
        <div className="w-full h-1 bg-gray-100 dark:bg-blackish2"></div>
        <div className="flex flex-col space-y-8 sm:px-8 px-3 sm:pt-4 pt-3 sm:pb-8 pb-4 divide-solid divide-y-2 divide-gray-100 dark:divide-blackish2">
          {data.map((expenses) => (
            <EarningsEntry
              key={expenses.name}
              name={expenses.name}
              category={expenses.category}
              expectation={expenses.expectation}
              reality={expenses.reality}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

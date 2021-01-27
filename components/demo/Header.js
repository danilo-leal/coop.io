import React from 'react';

export default function Header() {
  return (
    <div>
      <div className="flex flex-col space-y-3">
        <p className="text-gray-500">Quanto gastei esse mês:</p>
        <h1 className="text-2xl text-gray-900 dark:text-white font-bold">
          R$ 4.290,20
        </h1>
        <div className="w-full h-2 bg-gray-100 dark:bg-blackish2 rounded-full overflow-hidden flex flex-row">
          <div className="w-1/4 h-full bg-blue-500"></div>
          <div className="w-1/5 h-full bg-red-500"></div>
          <div className="w-1/6 h-full bg-yellow-500"></div>
          <div className="w-1/5 h-full bg-green-500"></div>
        </div>
        <p className="text-gray-500">
          Tá tudo bem por enquanto. Estão sobrando
          <span className="ml-1.5 text-blue-500 font-semibold">
            R$1.010,00.
          </span>
        </p>
      </div>
    </div>
  );
}

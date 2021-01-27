import React from 'react';
import { useTheme } from 'next-themes';

export default function HeroCover() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="sm:h-96 h-64 bg-gray-100 dark:bg-blackish2 rounded-lg w-full flex items-start justify-center pt-12 overflow-hidden">
      {theme === 'dark' ? (
        <img
          src="/static/dark-full-app.png"
          alt=""
          className="sm:w-4/12 w-3/5 shadow-lg rounded-lg"
        />
      ) : (
        <img
          src="/static/light-full-app.png"
          alt=""
          className="sm:w-4/12 w-3/5 shadow-lg rounded-lg"
        />
      )}
    </div>
  );
}

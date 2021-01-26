import React from 'react';
import { useTheme } from 'next-themes';

export default function HeroCover() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="h-96 bg-gray-100 dark:bg-blackish2 rounded-lg w-full flex items-start justify-center pt-12 overflow-hidden">
      {theme === 'dark' ? (
        <img
          src="/static/dark-full-app.png"
          alt=""
          className="w-4/12 shadow-lg rounded-lg"
        />
      ) : (
        <img
          src="/static/light-full-app.png"
          alt=""
          className="w-4/12 shadow-lg rounded-lg"
        />
      )}
    </div>
  );
}

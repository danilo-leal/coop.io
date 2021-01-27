import React from 'react';
import { useTheme } from 'next-themes';

export default function FeaturesGrid(props) {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex flex-col sm:flex-row sm:gap-1 gap-4 items-center">
      <div className="flex flex-col space-y-4 flex-grow">
        <div>
          <h2 className="h2">{props.title}</h2>
          <p className="p text-left sm:w-4/5">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

// {theme === 'dark' ? (
//   <img
//     src={props.imgDark}
//     alt=""
//     className="w-4/12 border border-gray-200 dark:border-blackish rounded-lg"
//   />
// ) : (
//   <img
//     src={props.imgLight}
//     alt=""
//     className="w-4/12 border border-gray-200 dark:border-blackish rounded-lg"
//   />
// )}

{
  /* <div className="rounded-full bg-blue-500 h-5 w-5 p-2 flex items-center justify-center">
<p className="text-tiny font-bold text-white">{props.index}</p>
</div> */
}

import React from 'react';
import Image from 'next/image';

export default function FeaturesGrid(props) {
  return (
    <div className="flex flex-col sm:flex-row sm:gap-2 gap-4 items-center">
      <div className="flex flex-col space-y-4">
        <div className="rounded-full bg-blue-500 h-5 w-5 p-2 flex items-center justify-center">
          <p className="text-tiny font-bold text-white">{props.index}</p>
        </div>
        <div>
          <h2 className="h2">{props.title}</h2>
          <p className="p text-left sm:w-4/5">{props.description}</p>
        </div>
      </div>
      <img src={props.img} alt="" className="sm:w-5/12 w-full" />
    </div>
  );
}

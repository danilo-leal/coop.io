import React from 'react';
import Image from 'next/image';
import Logo from '../components/Logo';
import DarkModeButton from '../components/DarkModeButton';
import GPlayButton from './GPlayButton';

export default function Hero() {
  return (
    <div>
      <div className="flex justify-between">
        <Logo />
        <DarkModeButton />
      </div>
      <div className="flex flex-col space-y-4 items-center pt-8 sm:pt-20">
        <Image
          src="/static/hero.png"
          alt="Screenshot of the Coop app in a gray background"
          className=""
          width={800}
          height={400}
          priority
        />
        <GPlayButton />
        <h1 className="h1">
          Simplesmente, organize seu dinheiro. <br />
          Sem mais surpresas.
        </h1>
        <p className="p">
          Coop te ajuda a gerir sua realidade financeira. Você registra quanto
          de fato gastou em algo em comparação ao que esperava gastar.
        </p>
        <div className="flex sm:space-x-4 sm:flex-row sm:space-y-0 space-y-4 flex-col justify-center w-full">
          <button className="btn-primary">
            <p className="text-sm font-semibold text-white">Criar conta</p>
            <svg
              className="w-5 h-5 stroke-current text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

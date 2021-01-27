import React from 'react';
import GPlayButton from './GPlayButton';
import HeroCover from './HeroCover';
import Navbar from './Navbar';
import Button from './Button';

export default function Hero() {
  return (
    <div className="large-container sm:px-6 sm:pt-6 sm:pb-24 px-4 pt-4 pb-16">
      <Navbar />
      <div className="flex flex-col space-y-6 items-center">
        <HeroCover />
        <GPlayButton />
        <div className="flex flex-col space-y-2">
          <h1 className="h1">
            Simplesmente, organize seu dinheiro. <br />
            Sem mais surpresas.
          </h1>
          <p className="p">
            Coop te ajuda a gerir sua realidade financeira. Você registra quanto
            de fato gastou em algo em comparação ao que esperava gastar.
          </p>
        </div>
        <Button />
      </div>
    </div>
  );
}

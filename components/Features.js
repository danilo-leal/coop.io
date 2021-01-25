import React from 'react';
import FeaturesGrid from './FeaturesGrid';

export default function Features() {
  return (
    <div className="w-full flex flex-col space-y-16">
      <div className="">
        <p className="uppercase tracking-wide text-sm text-blue-500 font-semibold mb-2">
          Propósito
        </p>
        <p className="p text-left">
          Criamos o Coop porque acreditamos que prosperidade e controle
          financeiro é você saber exatamente quanto (e porque) sobrou o que
          sobrou no fim do mês. É um exercício de auto-organização que te faz
          dono da sua realidade financeira.
        </p>
      </div>
      <FeaturesGrid
        index="1"
        title="Sem surpresas."
        description="Uma visão holística sobre sua situação financeira, relativa ao seu orçamento."
        img="/static/app1.png"
      />
      <FeaturesGrid
        index="2"
        title="Sem bagunça."
        description="Categorize seus gastos, organizando o que e quanto você gasta em cada item."
        img="/static/app2.png"
      />
      <FeaturesGrid
        index="3"
        title="Do seu jeito."
        description="Componha como você quiser sua estrutura de gastos."
        img="/static/app3.png"
      />
    </div>
  );
}

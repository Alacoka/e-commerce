import React from 'react';
import { Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 mb-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Descubra Tecnologia Incrível
            </h1>
            <p className="text-lg text-blue-100 mb-6">
              Compre os últimos dispositivos e acessórios com preços imbatíveis
            </p>
            <div className="flex items-center gap-2 text-sm bg-white/10 w-fit px-4 py-2 rounded-full">
              <Sparkles className="h-4 w-4" />
              <span>Frete grátis para pedidos acima de $50</span>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1624823183493-ed5832f48f18?w=500"
              alt="Tecnologia em Destaque"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
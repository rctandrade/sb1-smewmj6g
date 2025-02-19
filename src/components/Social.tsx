import React from 'react';
import { Heart, Leaf, Users, HandHeart } from 'lucide-react';

const Social = () => {
  return (
    <section id="social" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-brand-gray sm:text-4xl">
            Responsabilidade Social
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-brand-gray-light">
            Compromisso com a Comunidade
          </p>
        </div>

        <div className="mt-12 text-lg text-brand-gray-light text-center max-w-4xl mx-auto">
          <p>
            Acreditamos que o sucesso empresarial deve caminhar lado a lado com o bem-estar social. Estamos de portas abertas para promover iniciativas que beneficiem nossa comunidade e cidade, contribuindo ativamente para um futuro mais justo, solidário e inspirador.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="text-center">
            <div className="flex justify-center">
              <div className="rounded-lg inline-flex p-4 bg-brand-gold-light text-brand-gold">
                <Heart className="h-8 w-8" />
              </div>
            </div>
            <h3 className="mt-4 text-lg font-medium text-brand-gray">Solidariedade</h3>
            <p className="mt-2 text-sm text-brand-gray-light">
              Apoio a projetos sociais e iniciativas comunitárias
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center">
              <div className="rounded-lg inline-flex p-4 bg-brand-gold-light text-brand-gold">
                <Leaf className="h-8 w-8" />
              </div>
            </div>
            <h3 className="mt-4 text-lg font-medium text-brand-gray">Sustentabilidade</h3>
            <p className="mt-2 text-sm text-brand-gray-light">
              Compromisso com práticas ambientalmente responsáveis
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center">
              <div className="rounded-lg inline-flex p-4 bg-brand-gold-light text-brand-gold">
                <Users className="h-8 w-8" />
              </div>
            </div>
            <h3 className="mt-4 text-lg font-medium text-brand-gray">Inclusão</h3>
            <p className="mt-2 text-sm text-brand-gray-light">
              Promoção da diversidade e igualdade de oportunidades
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center">
              <div className="rounded-lg inline-flex p-4 bg-brand-gold-light text-brand-gold">
                <HandHeart className="h-8 w-8" />
              </div>
            </div>
            <h3 className="mt-4 text-lg font-medium text-brand-gray">Voluntariado</h3>
            <p className="mt-2 text-sm text-brand-gray-light">
              Incentivo a ações voluntárias e engajamento social
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Social;
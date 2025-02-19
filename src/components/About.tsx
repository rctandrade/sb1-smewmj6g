import React from 'react';
import { Target, Lightbulb, Shield, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-brand-gray sm:text-4xl">
            Sobre Nós
          </h2>
        </div>

        <div className="mt-12 text-lg text-brand-gray-light text-center max-w-4xl mx-auto">
          <p className="mb-8">
            Somos uma empresa jovem, mas com uma bagagem sólida e abrangente, fruto da experiência acumulada em diversos setores. Nosso diferencial está na entrega que vai além do esperado: proporcionamos praticidade, segurança e soluções criadas sob medida para cada cliente.
          </p>
          <p>
            Aqui, seu sucesso é a nossa missão, e trabalhamos com dedicação para construir parcerias de confiança e resultados extraordinários.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="text-center">
            <div className="flex justify-center">
              <div className="rounded-lg inline-flex p-4 bg-brand-gold-light text-brand-gold">
                <Target className="h-8 w-8" />
              </div>
            </div>
            <h3 className="mt-4 text-lg font-medium text-brand-gray">Missão</h3>
            <p className="mt-2 text-sm text-brand-gray-light">
              Entregar soluções personalizadas que impulsionem o sucesso dos nossos clientes
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center">
              <div className="rounded-lg inline-flex p-4 bg-brand-gold-light text-brand-gold">
                <Lightbulb className="h-8 w-8" />
              </div>
            </div>
            <h3 className="mt-4 text-lg font-medium text-brand-gray">Visão</h3>
            <p className="mt-2 text-sm text-brand-gray-light">
              Ser referência em consultoria empresarial, reconhecida pela excelência e inovação
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center">
              <div className="rounded-lg inline-flex p-4 bg-brand-gold-light text-brand-gold">
                <Shield className="h-8 w-8" />
              </div>
            </div>
            <h3 className="mt-4 text-lg font-medium text-brand-gray">Valores</h3>
            <p className="mt-2 text-sm text-brand-gray-light">
              Ética, transparência, comprometimento e busca constante pela excelência
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center">
              <div className="rounded-lg inline-flex p-4 bg-brand-gold-light text-brand-gold">
                <TrendingUp className="h-8 w-8" />
              </div>
            </div>
            <h3 className="mt-4 text-lg font-medium text-brand-gray">Resultados</h3>
            <p className="mt-2 text-sm text-brand-gray-light">
              Foco em soluções efetivas e crescimento sustentável dos nossos clientes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
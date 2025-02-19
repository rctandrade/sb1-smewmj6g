import React from 'react';
import { Scale, Calculator, HardHat, LineChart } from 'lucide-react';

const Team = () => {
  return (
    <section id="profissionais" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-brand-gray sm:text-4xl">
            Equipe Multidisciplinar
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-brand-gray-light">
            Profissionais altamente qualificados para atender todas as suas necessidades
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
            <div className="flex justify-center mb-4">
              <div className="rounded-lg inline-flex p-4 bg-brand-gold-light text-brand-gold">
                <Scale className="h-8 w-8" />
              </div>
            </div>
            <h3 className="text-lg font-medium text-brand-gray text-center mb-3">Advogados</h3>
            <ul className="text-sm text-brand-gray-light space-y-2">
              <li>• Consultoria jurídica empresarial</li>
              <li>• Elaboração e revisão de contratos</li>
              <li>• Assessoria em direito tributário</li>
              <li>• Direito cível e trabalhista</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
            <div className="flex justify-center mb-4">
              <div className="rounded-lg inline-flex p-4 bg-brand-gold-light text-brand-gold">
                <Calculator className="h-8 w-8" />
              </div>
            </div>
            <h3 className="text-lg font-medium text-brand-gray text-center mb-3">Contadores</h3>
            <ul className="text-sm text-brand-gray-light space-y-2">
              <li>• Planejamento financeiro estratégico</li>
              <li>• Contabilidade fiscal</li>
              <li>• Relatórios gerenciais</li>
              <li>• Folha de pagamento</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
            <div className="flex justify-center mb-4">
              <div className="rounded-lg inline-flex p-4 bg-brand-gold-light text-brand-gold">
                <HardHat className="h-8 w-8" />
              </div>
            </div>
            <h3 className="text-lg font-medium text-brand-gray text-center mb-3">Engenheiros</h3>
            <ul className="text-sm text-brand-gray-light space-y-2">
              <li>• Projetos de infraestrutura</li>
              <li>• Laudos ambientais</li>
              <li>• Segurança do trabalho</li>
              <li>• Consultorias industriais</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
            <div className="flex justify-center mb-4">
              <div className="rounded-lg inline-flex p-4 bg-brand-gold-light text-brand-gold">
                <LineChart className="h-8 w-8" />
              </div>
            </div>
            <h3 className="text-lg font-medium text-brand-gray text-center mb-3">Consultores</h3>
            <ul className="text-sm text-brand-gray-light space-y-2">
              <li>• Estratégias de gestão</li>
              <li>• Marketing e vendas</li>
              <li>• Otimização de processos</li>
              <li>• Gestão de resultados</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
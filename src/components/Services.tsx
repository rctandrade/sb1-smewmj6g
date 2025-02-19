import React from 'react';
import { 
  Calculator, 
  FileText, 
  BarChart, 
  Building,
  HardHat,
  FileCheck
} from 'lucide-react';

const services = [
  {
    title: 'Consultoria Tributária',
    description: 'Orientação especializada em planejamento tributário e compliance fiscal.',
    icon: Calculator,
    whatsapp: '+5592984071430'
  },
  {
    title: 'Auditoria',
    description: 'Auditoria contábil, fiscal e operacional com foco em resultados.',
    icon: FileText,
    whatsapp: '+5592984071430'
  },
  {
    title: 'Contabilidade',
    description: 'Serviços contábeis completos para empresas de todos os portes.',
    icon: BarChart,
    whatsapp: '+5592984071430'
  },
  {
    title: 'Consultoria Empresarial',
    description: 'Assessoria estratégica para otimização de processos e resultados.',
    icon: Building,
    whatsapp: '+5592984071430'
  },
  {
    title: 'Projetos de Engenharia',
    description: 'Desenvolvimento de projetos técnicos, estruturais e de instalações para obras e reformas.',
    icon: HardHat,
    whatsapp: '+5592994340022'
  },
  {
    title: 'Licenciamentos e Regularização',
    description: 'Regularização de obras, alvarás, habite-se e licenças ambientais para projetos de engenharia.',
    icon: FileCheck,
    whatsapp: '+5592994340022'
  }
];

const Services = () => {
  return (
    <section id="areas" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-brand-gray sm:text-4xl">
            Áreas de Atuação
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-brand-gray-light">
            Oferecemos soluções completas e integradas para sua empresa
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-brand-gold rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
              >
                <div>
                  <span className="rounded-lg inline-flex p-3 bg-brand-gold-light text-brand-gold ring-4 ring-white">
                    <IconComponent className="h-6 w-6" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-medium text-brand-gray">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-brand-gray-light">
                    {service.description}
                  </p>
                  <a
                    href={`https://wa.me/${service.whatsapp.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-brand-gold hover:bg-brand-gold-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-gold transition-colors duration-200"
                  >
                    Solicitar Serviço
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
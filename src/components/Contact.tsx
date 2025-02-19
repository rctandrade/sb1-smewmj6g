import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Entre em Contato
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Estamos prontos para atender sua empresa
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-gold-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Endereço</h3>
                  <p className="mt-1 text-gray-500">
                    Rua Violeta Bayma, nº 1268, Loja: nº 1, 2º andar<br />
                    CEP: 69086-000<br />
                    Manaus/AM
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-6 w-6 text-gold-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Telefones</h3>
                  <p className="mt-1 text-gray-500">
                    Consultoria e Contabilidade:<br />
                    <a href="https://wa.me/5592984071430" className="text-gold-600 hover:text-gold-700">
                      +55 (92) 98407-1430
                    </a>
                    <br />
                    Projetos e Licenciamentos:<br />
                    <a href="https://wa.me/5592994340022" className="text-gold-600 hover:text-gold-700">
                      +55 (92) 99434-0022
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-96 rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.0176087721087!2d-60.02746788524531!3d-3.0901899977537937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c1bc9125407c7%3A0x2b8d4e7d5e4c5f0a!2sR.%20Violeta%20Bayma%2C%201268%20-%20Cidade%20Nova%2C%20Manaus%20-%20AM%2C%2069097-134!5e0!3m2!1spt-BR!2sbr!4v1647984071430!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
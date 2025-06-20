
import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark border-t border-brand-teal/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-brand-teal">Branding Brothers</h3>
            <p className="text-gray-300 text-sm">
              Transformamos ideas en marcas poderosas. Expertos en diseño, desarrollo y estrategias digitales.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-teal transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-teal transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-teal transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-teal transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-brand-teal transition-colors text-sm">Diseño de Marca</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-teal transition-colors text-sm">Desarrollo Web</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-teal transition-colors text-sm">Marketing Digital</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-teal transition-colors text-sm">Fotografía</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-teal transition-colors text-sm">SEO & SEM</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-brand-teal transition-colors text-sm">Sobre Nosotros</a></li>
              <li><a href="#portfolio" className="text-gray-300 hover:text-brand-teal transition-colors text-sm">Portfolio</a></li>
              <li><a href="#blog" className="text-gray-300 hover:text-brand-teal transition-colors text-sm">Blog</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-brand-teal transition-colors text-sm">Contacto</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-teal transition-colors text-sm">Trabajar con nosotros</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="text-brand-teal" size={16} />
                <span className="text-gray-300 text-sm">hola@brandingbrothers.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-brand-teal" size={16} />
                <span className="text-gray-300 text-sm">+34 912 345 678</span>
              </div>
              <div className="text-gray-300 text-sm">
                Calle Gran Vía, 45<br />
                28013 Madrid, España
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Branding Brothers. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-brand-teal transition-colors text-sm">
              Política de Privacidad
            </a>
            <a href="#" className="text-gray-400 hover:text-brand-teal transition-colors text-sm">
              Términos de Uso
            </a>
            <a href="#" className="text-gray-400 hover:text-brand-teal transition-colors text-sm">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

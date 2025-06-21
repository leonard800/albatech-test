import React from 'react';
import { Monitor, Smartphone, Palette, Wrench, FileText, CreditCard } from 'lucide-react';

const Packages = () => {
  const services = [
    {
      icon: <Monitor className="w-12 h-12 text-gray-400" />,
      title: "Website development",
      description: "High-performance web applications that grow with your business"
    },
    {
      icon: <Smartphone className="w-12 h-12 text-gray-400" />,
      title: "Mobile apps development",
      description: "Mobile app also become central role in the day-to-day operations of the business."
    },
    {
      icon: <Palette className="w-12 h-12 text-gray-400" />,
      title: "Digital product design",
      description: "Complete digital product creations from UX prototyping to final UI designs"
    },
    {
      icon: <Wrench className="w-12 h-12 text-gray-400" />,
      title: "Maintenance",
      description: "Maintaining a scalable and secure architecture"
    },
    {
      icon: <FileText className="w-12 h-12 text-gray-400" />,
      title: "CMS development",
      description: "Developing a resilient software architecture centered on scalability"
    },
    {
      icon: <CreditCard className="w-12 h-12 text-gray-400" />,
      title: "Integrated Payment Gateway",
      description: "Simplify the payment system with just one step"
    }
  ];

  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-gray-400 text-sm font-medium mb-4 tracking-wide uppercase">
            Complete Package
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 max-w-4xl mx-auto">
            From product design to software continuous delivery
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:border-yellow-400 group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-yellow-500 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;
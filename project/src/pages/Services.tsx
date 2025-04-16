import React from 'react';
import { Users, PersonStanding, Home, Camera, Shield, Award, Target, Sun as Gun, UserCheck, BadgeCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div className="pt-16">
      {/* Personal Protection Hero Section */}
      <div className="relative py-20 bg-black text-white">
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Personal Protection</h1>
          <p className="text-2xl mb-8">Live Fearlessly</p>
          <Link 
            to="mailto:Shakti.s.Service2014@gmail.com"
            className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105"
          >
            Get Free Quote
          </Link>
        </div>
      </div>

      {/* PSO Features */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">THE MOST EXPERIENCED, MOST TRUSTED PSOs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: UserCheck,
                title: "Ex-Service Personnel",
                desc: "10-15 years experience from ARMY, NSG, SPG, PARA commandos, CRPF"
              },
              {
                icon: BadgeCheck,
                title: "Licensed Arms",
                desc: "All India gun license for pistol, revolver or rifle"
              },
              {
                icon: Target,
                title: "Height Requirements",
                desc: "Minimum height 5.9 to 6.6 feet"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-8 rounded-lg shadow-lg text-center transform transition-all duration-300 hover:scale-105"
              >
                <feature.icon className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Regular Services Section */}
      <div className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Hamare Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: PersonStanding, 
                title: "Personal Security Officers", 
                desc: "Experienced bodyguards for VIP protection 24x7, including specially trained lady security officers for women's protection" 
              },
              { 
                icon: Shield, 
                title: "Event Security", 
                desc: "Best bouncers for events, marriages, clubs, and functions" 
              },
              { 
                icon: Users, 
                title: "Corporate Security", 
                desc: "Office aur Staff ki Complete Protection" 
              },
              { 
                icon: Home, 
                title: "Residential Security", 
                desc: "Ghar ki Suraksha, Poore Vishwas ke Saath" 
              },
              { 
                icon: Camera, 
                title: "CCTV Monitoring", 
                desc: "High-Tech Security Solutions" 
              },
              { 
                icon: Award, 
                title: "Training", 
                desc: "Security Guards ki Professional Training" 
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <service.icon className="w-12 h-12 mx-auto mb-4 text-red-600 animate-bounce-slow" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <div className="mb-6">
              <p className="text-xl font-semibold">R. K. Tripathi</p>
              <p className="text-gray-600">Director</p>
              <p className="text-gray-600">Shakti Security Services</p>
            </div>
            <div className="space-y-2 mb-8">
              <p className="text-gray-600">All India Service</p>
              <p>
                <a href="mailto:Shakti.s.Service2014@gmail.com" className="text-red-600 hover:text-red-700">
                  Shakti.s.Service2014@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:+918077355358" className="text-red-600 hover:text-red-700">
                  +91 8077355358
                </a>
                {', '}
                <a href="tel:+918449015875" className="text-red-600 hover:text-red-700">
                  +91 8449015875
                </a>
              </p>
            </div>
            <Link 
              to="mailto:Shakti.s.Service2014@gmail.com"
              className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>

      <div className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-16">Hum Kyu Best Hai?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "500+", text: "Khush Clients" },
              { number: "24/7", text: "Service Available" },
              { number: "1000+", text: "Trained Guards" },
              { number: "15+", text: "Years Experience" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-red-50"
              >
                <div className="text-4xl font-bold text-red-600 mb-2 animate-count-up">{stat.number}</div>
                <div className="text-gray-600">{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { MapPin, Phone, Mail, Merge as Tiger } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = 'mailto:Shakti.security.service@gmail.com';
  };

  return (
    <div className="pt-16">
      <div className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <h3 className="text-2xl text-red-600">Get in Touch</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="transform transition-all duration-300 hover:scale-105">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="email@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="Enter your mobile number"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    rows={4}
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-2xl">
                <div className="flex items-center justify-center mb-6">
                  <Tiger className="w-16 h-16 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-6">Shakti Security Services & Manpower Services</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <p className="font-semibold mb-2">Contact Person:</p>
                    <p>R.K. Tripathi</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                      <div>
                        <p>Badrinath Colony Phase-2, Rajpur Chungi, Agra, Uttar Pradesh (India)</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-red-600 mr-3" />
                      <a href="tel:+918077355358" className="hover:text-red-600 transition-colors">
                        +91 8077355358
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-red-600 mr-3" />
                      <a href="mailto:Shakti.security.service@gmail.com" className="hover:text-red-600 transition-colors">
                        Shakti.security.service@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-64 bg-gray-200 rounded-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl">
                {/* Google Maps iframe would go here */}
                <div className="w-full h-full rounded-lg bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-600">Google Maps Integration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
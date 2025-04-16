import React from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  Clock,
  Bell,
  Key,
  Users,
  Star,
  ChevronRight,
  Facebook,
  Phone,
  Mail,
  MapPin,
  Merge as Tiger,
  CheckCircle2,
  Award,
  Briefcase,
  Building,
  MessageCircle
} from 'lucide-react';

export default function Home() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = 'mailto:Shakti.security.service@gmail.com';
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1582879304171-8041c73224b7?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/50"></div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 animate-bounce-slow">
            <Shield className="w-16 h-16 text-red-500/30" />
          </div>
          <div className="absolute bottom-20 right-10 animate-bounce-slow delay-200">
            <Bell className="w-12 h-12 text-red-500/30" />
          </div>
          <div className="absolute top-40 right-20 animate-bounce-slow delay-300">
            <Key className="w-10 h-10 text-red-500/30" />
          </div>
        </div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl">
            {/* Logo and Company Name */}
            <div className="flex items-center mb-8 animate-slide-right">
              <Tiger className="w-16 h-16 text-red-600 mr-4 animate-pulse-glow" />
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Shakti Security Services
              </h2>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white animate-slide-up">
              Protecting What
              <span className="block text-red-600">Matters Most</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-slide-up delay-100">
              Advanced Security Solutions for Your Home and Business
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 animate-fade-in delay-200">
              {[
                "24/7 Professional Security",
                "Trained & Certified Guards",
                "Modern Security Systems",
                "Quick Emergency Response"
              ].map((feature, index) => (
                <div key={index} className="flex items-center text-white">
                  <CheckCircle2 className="w-5 h-5 text-red-600 mr-2" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-scale-in delay-300">
              <Link
                to="/contact"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full inline-flex items-center justify-center transition-all transform hover:scale-105 hover:shadow-lg group"
              >
                Get Free Quote
                <ChevronRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-full inline-flex items-center justify-center transition-all transform hover:scale-105 group"
              >
                Learn More
                <ChevronRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in delay-300">
              {[
                { number: "15+", text: "Years Experience" },
                { number: "1000+", text: "Guards Deployed" },
                { number: "24/7", text: "Support" },
                { number: "500+", text: "Happy Clients" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-red-600">{stat.number}</div>
                  <div className="text-sm text-gray-300">{stat.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security Guard Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6">Our Elite Security Personnel</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Professionally trained, experienced, and dedicated security guards ready to protect your assets and ensure your peace of mind.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Security Guard Images */}
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="https://omsecurityguards.com/wp-content/uploads/2021/03/WhatsApp-Image-2021-03-30-at-14.20.52-1-682x1024.jpeg"
                alt="Professional Security Guard"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white">Corporate Security</h3>
                <p className="text-gray-300">Protecting businesses with vigilance and professionalism</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmnMcUku7xaNmSjPW9Bze_kJjvGl2dxcw0IA&s"
                alt="Event Security Personnel"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white">Event Security</h3>
                <p className="text-gray-300">Ensuring safety at public gatherings and private functions</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&q=80&w=800"
                alt="Personal Security Officer"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white">Personal Protection</h3>
                <p className="text-gray-300">Dedicated bodyguards for VIP and executive protection</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Image */}
      <section className="py-20 bg-white" id="about">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-600/20 rounded-full"></div>
              <img
                src="https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&q=80&w=800"
                alt="Security Professional"
                className="rounded-lg shadow-xl relative z-10"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-red-600/10 rounded-full"></div>
            </div>
            <div>
              <Shield className="w-12 h-12 text-red-600 mb-6" />
              <h2 className="text-4xl font-bold mb-6">About Shakti Security</h2>
              <p className="text-lg text-gray-600 mb-6">
                With over 15 years of experience in providing comprehensive security solutions,
                Shakti Security has established itself as a trusted name in the industry.
                Our mission is to deliver unparalleled security services that protect what matters
                most to our clients, whether it's their homes, businesses, or loved ones.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our team consists of highly trained professionals, many with backgrounds in military
                and law enforcement, ensuring the highest standards of security and protection.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold group"
              >
                Learn more about our company
                <ChevronRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Enhanced Details */}
      <section className="py-20 bg-gray-50" id="services">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6">Our Comprehensive Services</h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            From personal protection to corporate security, we offer a wide range of specialized security services tailored to your specific needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Personal Security Officers",
                description: "Highly trained bodyguards for VIP protection, including ex-military personnel with 10-15 years of experience from ARMY, NSG, SPG, PARA commandos, and CRPF.",
                image: "https://www.s4sdetective.com/images/services/security-guard.jpg"
              },
              {
                icon: Bell,
                title: "Event Security",
                description: "Professional bouncers and security personnel for events, marriages, clubs, and functions, ensuring smooth operations and guest safety.",
                image: "https://i.pinimg.com/474x/15/3d/6d/153d6dfe634b1624e690842dd012f73d.jpg"
              },
              {
                icon: Building,
                title: "Corporate Security",
                description: "Comprehensive security solutions for offices, industrial facilities, and corporate environments, including access control and surveillance.",
                image: "https://d91ztqmtx7u1k.cloudfront.net/ClientContent/Images/ExtraLarge/male-corporate-bank-security-g-20240501160233875.jpg"
              },
              {
                icon: Clock,
                title: "24/7 Surveillance",
                description: "Round-the-clock monitoring services with advanced technology and trained personnel for complete peace of mind.",
                image: "data:image/jpeg;base64,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"
              },
              {
                icon: Key,
                title: "Access Control",
                description: "Smart access control solutions for enhanced security, including biometric systems and electronic verification.",
                image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=400"
              },
              {
                icon: Briefcase,
                title: "Lady Security Officers",
                description: "Specially trained female security officers for women's protection and gender-sensitive security requirements.",
                image: "https://5.imimg.com/data5/BN/SO/MY-15340430/personal-security-guard-services.jpg"
              }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <service.icon className="w-8 h-8 text-red-600 mr-3" />
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    to="/services"
                    className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold group"
                  >
                    Learn more
                    <ChevronRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6">Why Choose Shakti Security</h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            We stand out from the competition with our commitment to excellence, professionalism, and customer satisfaction.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Experienced Personnel",
                description: "Our security officers have extensive backgrounds in military, law enforcement, and private security."
              },
              {
                icon: Shield,
                title: "Licensed & Armed",
                description: "Our ex-servicemen have all-India gun licenses for pistols, revolvers, or rifles when required."
              },
              {
                icon: Users,
                title: "Rigorous Training",
                description: "All personnel undergo comprehensive training in security protocols, emergency response, and customer service."
              },
              {
                icon: Clock,
                title: "24/7 Availability",
                description: "Our services are available around the clock, ensuring you're protected at all times."
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-lg shadow-lg text-center transform transition-all duration-300 hover:scale-105 hover:bg-red-50"
              >
                <feature.icon className="w-12 h-12 text-red-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section with Enhanced Design */}
      <section className="py-20 bg-gray-50" id="testimonials">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our security services.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                role: "Business Owner",
                text: "Shakti Security has provided exceptional service for our retail locations. Their professionalism and attention to detail are outstanding. The guards are always punctual, vigilant, and courteous to our customers."
              },
              {
                name: "Priya Sharma",
                role: "Residential Client",
                text: "We feel much safer with Shakti Security's monitoring system. Their response time is impressive and the staff is always helpful. The security officers are well-trained and maintain a perfect balance between vigilance and approachability."
              },
              {
                name: "Amit Patel",
                role: "Hotel Manager",
                text: "The security personnel from Shakti are well-trained and professional. They've become an integral part of our hotel operations. Their ability to handle various situations while maintaining a hospitable environment has been invaluable to our business."
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-red-100 text-red-600 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">{testimonial.name}</p>
                    <p className="text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <div className="mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 inline-block" />
                  ))}
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with Enhanced Design */}
      <section className="py-20 bg-white" id="contact">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6">Get in Touch</h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Contact us today to discuss your security needs and how we can help protect what matters most to you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="Your phone number"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Service Interested In</label>
                  <select className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600">
                    <option>Personal Security Officer</option>
                    <option>Corporate Security</option>
                    <option>Event Security</option>
                    <option>Residential Security</option>
                    <option>CCTV & Surveillance</option>
                    <option>Other Services</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Message</label>
                  <textarea
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    rows={4}
                    placeholder="Tell us about your security requirements..."
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

            <div className="space-y-8">
              <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-red-600 mr-4 mt-1" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a href="tel:+918077355358" className="text-gray-600 hover:text-red-600 block">
                        +91 8077355358
                      </a>
                      <a href="tel:+918449015875" className="text-gray-600 hover:text-red-600 block">
                        +91 8449015875
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-red-600 mr-4 mt-1" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:Shakti.security.service@gmail.com" className="text-gray-600 hover:text-red-600 break-all">
                        Shakti.security.service@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-red-600 mr-4 mt-1" />
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="text-gray-600">
                        Badrinath Colony Phase-2, Rajpur Chungi,<br />
                        Agra, Uttar Pradesh (India)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Operating Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sunday:</span>
                    <span>Closed (Emergency Services Available)</span>
                  </div>
                  <div className="pt-4 text-red-600 font-medium">
                    24/7 Emergency Response Available
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Tiger className="w-10 h-10 text-red-600 mr-3" />
                <h3 className="text-xl font-bold">Shakti Security</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Providing professional security services since 2008. Your safety is our priority.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/share/18XtGsxw8o/" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="https://wa.me/919936047997" className="text-gray-400 hover:text-white transition-colors">
                  <MessageCircle className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
                <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Our Services</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">Personal Security Officers</li>
                <li className="text-gray-400">Corporate Security</li>
                <li className="text-gray-400">Event Security</li>
                <li className="text-gray-400">Residential Security</li>
                <li className="text-gray-400">CCTV & Surveillance</li>
                <li className="text-gray-400">Access Control Systems</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Phone className="w-5 h-5 text-red-600 mr-3 mt-1" />
                  <span className="text-gray-400">+91 8077355358, +91 8449015875</span>
                </li>
                <li className="flex items-start">
                  <Mail className="w-5 h-5 text-red-600 mr-3 mt-1" />
                  <span className="text-gray-400 break-all">Shakti.security.service@gmail.com</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-red-600 mr-3 mt-1" />
                  <span className="text-gray-400">Badrinath Colony Phase-2, Rajpur Chungi, Agra, Uttar Pradesh</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Shakti Security Services & Manpower Services. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
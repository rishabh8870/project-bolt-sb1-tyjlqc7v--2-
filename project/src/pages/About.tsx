import React from 'react';
import { ChevronRight, Shield, Users, Award, Target, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="pt-16">
      <div className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">शक्ति सिक्योरिटी सर्विसेस एंड मैनपावर सर्विसेज</h1>
            <h2 className="text-2xl text-red-600 mb-2">Shakti Security Services & Manpower Services</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto"></div>
          </div>

          {/* Introduction Section */}
          <div className="prose prose-lg max-w-none mb-16">
            <p className="text-gray-700 leading-relaxed mb-6">
              शक्ति सिक्योरिटी सर्विसेस एंड मैनपावर सर्विसेज नाम ही उद्योगों जैसे सरकारी प्रतिष्ठानों, हाउसिंग सोसाइटियों और राष्ट्रीय औद्योगिक क्षेत्रों, उद्योग विहारों, फार्म हाउस और विशाल औद्योगिक क्षेत्रों की सेवा के लिए प्रभावी और गतिशील सुरक्षा सेवा प्रतिष्ठानों के प्रावधान का प्रवेश द्वार है।
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              समूह को मजबूत, बुद्धिमान, शिक्षित, ईमानदार और ईमानदार सुरक्षा कर्मियों को प्रदान करने के लिए संगठित किया गया है जो हमेशा स्मार्ट तरीके से काम करते हैं। हमारे लोग प्रभावी सुरक्षा और सुरक्षा की भावना के साथ शीर्ष श्रेणी की सुरक्षा सेवाएं प्रदान करते हैं।
            </p>
          </div>

          {/* Key Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: Shield,
                title: "प्रोफेशनल सुरक्षा",
                subtitle: "Professional Security",
                description: "शीर्ष श्रेणी की सुरक्षा सेवाएं"
              },
              {
                icon: Users,
                title: "अनुभवी टीम",
                subtitle: "Experienced Team",
                description: "सेवानिवृत्त सैन्य और पुलिस कर्मी"
              },
              {
                icon: Award,
                title: "प्रमाणित गार्ड्स",
                subtitle: "Certified Guards",
                description: "पूर्ण रूप से प्रशिक्षित सुरक्षा कर्मी"
              },
              {
                icon: Clock,
                title: "24/7 सेवा",
                subtitle: "24/7 Service",
                description: "चौबीसों घंटे उपलब्ध"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-all duration-300 hover:scale-105"
              >
                <feature.icon className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{feature.subtitle}</p>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Detailed Sections */}
          <div className="space-y-12">
            {/* Personnel Section */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">कार्मिकों की भर्ती</h3>
              <p className="text-gray-700 mb-4">
                हमारे पास अनुभवी वरिष्ठ कर्मचारी हैं जो सशस्त्र और अर्धसैनिक बलों के सेवानिवृत्ति व सिविलियन मौजूद हैं। जो विज्ञापन एवं अन्य माध्यमों से लिए जाते है। अधिकृत पुलिस स्रोतों के माध्यम से चरित्र पूर्ववृत्त सत्यापित किए जाते हैं। भर्ती किए गए कर्मियों को व्यापक प्रशिक्षण दिया जाता है और केवल उन्हें ही ड्यूटी पर तैनात किया जाता है।
              </p>
            </div>

            {/* Communication System */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">संचार प्रणाली</h3>
              <p className="text-gray-700 mb-4">
                शक्ति सिक्योरिटी सर्विसेस एकमात्र सुरक्षा कंपनी हैं, जिसके पास अपना स्वयं का कम्प्यूटरीकृत नियंत्रण कक्ष है, जो वर्ष में 365 दिन, सप्ताह में 7 दिन और दिन में 24 घंटे काम करता है।
              </p>
            </div>

            {/* Security Vision System */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">सुरक्षा विजन प्रणाली</h3>
              <p className="text-gray-700 mb-4">
                हाल ही में हमने ध्वनिरोधी सुरक्षा व्यवस्था बनाए रखने के लिए सुरक्षा प्रणाली प्रदान करने के क्षेत्र में खुद को पेश किया है। हमारे पास CCTV, वीडियो डोर फोन, फायर डिटेक्शन सिस्टम, और घुसपैठ अलार्म सिस्टम, मेटल डिटेक्टर, इलेक्ट्रॉनिक डोरफ्रेम और बहुत कुछ है।
              </p>
            </div>

            {/* Duties Section */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">कर्तव्यों का चरित्र</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>मुख्य द्वार पर, परिसर के पीछे और परिधि पर गश्ती कर्तव्य</li>
                <li>आगंतुकों का विवरण दर्ज करना और स्क्रीनिंग</li>
                <li>कर्मचारियों और श्रमिकों की उपस्थिति दर्ज करना</li>
                <li>गेट पास और चालान का उचित रिकॉर्ड</li>
                <li>चाबियों के जारी होने और प्राप्ति का रिकॉर्ड</li>
                <li>नियमित अग्निशमन अभ्यास</li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <Link 
              to="/contact"
              className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              संपर्क करें
              <ChevronRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
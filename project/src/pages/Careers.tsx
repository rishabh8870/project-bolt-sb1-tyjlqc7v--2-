import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function Careers() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = 'mailto:Shakti.security.service@gmail.com';
  };

  return (
    <div className="pt-16">
      <div className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Career Opportunities</h2>
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold mb-6">Security Guard Vacancy</h3>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <label className="block text-gray-700 mb-2">Age</label>
                <input
                  type="number"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="Enter your age"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Experience</label>
                <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600">
                  <option>0-1 Year</option>
                  <option>1-3 Years</option>
                  <option>3+ Years</option>
                </select>
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
              <div className="md:col-span-2">
                <label className="block text-gray-700 mb-2">Previous Experience Details</label>
                <textarea
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  rows={4}
                  placeholder="Tell us about your previous experience..."
                  required
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                >
                  Submit Application <ChevronRight className="inline-block ml-2" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
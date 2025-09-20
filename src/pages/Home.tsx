import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Clock, Award, MessageCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      <section
        className="relative min-h-[80vh] bg-cover bg-top bg-no-repeat"
        style={{ backgroundImage: 'url("/wallpaperflare.com_wallpaper copy copy.jpg")' }}
      >
        {/* dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* content centered vertically & horizontally */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-6">
              Learn German with <span className="text-white">ease</span> and <span className="text-white">confidence</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto font-medium">
              Start your journey today!
            </p>
            <p className="text-lg text-white mb-10 max-w-2xl mx-auto">
              Master the German language with our fun, beginner-friendly, and flexible approach. 
              Learn at your own pace with personalized guidance from Daniel.
            </p>
            <Link
              to="/courses"
              className="inline-flex items-center space-x-2 bg-yellow-400 text-blue-900 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-yellow-300 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <span>Explore Courses</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Deutsch with Daniel?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience a unique approach to learning German that's designed for real-world success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors duration-200">
              <div className="bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Beginner-Friendly</h3>
              <p className="text-gray-600">
                Start from zero or build on existing knowledge. Our courses are designed to welcome learners at every level.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-yellow-50 hover:bg-yellow-100 transition-colors duration-200">
              <div className="bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Flexible Learning</h3>
              <p className="text-gray-600">
                Learn at your own pace, on your schedule. Access courses anytime, anywhere, and progress at your comfort level.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors duration-200">
              <div className="bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Fun & Engaging</h3>
              <p className="text-gray-600">
                Learn through interactive lessons, practical exercises, and real-world scenarios that make German enjoyable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url("/wallpaperflare.com_wallpaper (1) (1).jpg")'}}>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your German Journey?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Join thousands of students who have successfully learned German with Daniel
          </p>
          <Link
            to="/courses"
            className="inline-flex items-center space-x-2 bg-yellow-400 text-blue-900 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-yellow-300 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <span>View All Courses</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Have questions? Want to chat about your German learning goals? We're here to help!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Chat on WhatsApp</span>
            </a>
            
            <a
              href="https://t.me/deutschwithdaniel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-200"
            >
              <Users className="h-5 w-5" />
              <span>Join Community</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
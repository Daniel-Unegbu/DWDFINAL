import React from 'react';
import CourseCard from '../components/CourseCard';

export default function Courses() {
  const courses = [
    {
      title: 'Beginner German',
      level: 'A1',
      description: 'Perfect for complete beginners. Learn basic vocabulary, essential phrases, and fundamental grammar to start your German journey.',
      price: '€99',
      duration: '8 weeks',
      features: [
        'Basic vocabulary (500+ words)',
        'Essential grammar foundations',
        'Pronunciation guide',
        'Interactive exercises',
        'Progress tracking'
      ]
    },
    {
      title: 'Elementary German',
      level: 'A2',
      description: 'Build on your basics with expanded vocabulary, past tenses, and everyday conversation skills for real-world interactions.',
      price: '€120',
      duration: '10 weeks',
      features: [
        'Extended vocabulary (1000+ words)',
        'Past and future tenses',
        'Conversation practice',
        'Cultural insights',
        'Writing exercises'
      ]
    },
    {
      title: 'Intermediate German',
      level: 'B1',
      description: 'Develop fluency with complex grammar structures, professional vocabulary, and confident communication skills.',
      price: '€150',
      duration: '12 weeks',
      features: [
        'Advanced grammar structures',
        'Professional vocabulary',
        'Reading comprehension',
        'Listening skills',
        'Speaking practice sessions'
      ]
    },
    {
      title: 'Advanced German',
      level: 'B2',
      description: 'Master sophisticated German with nuanced expressions, business language, and near-native communication abilities.',
      price: '€180',
      duration: '14 weeks',
      features: [
        'Sophisticated expressions',
        'Business German',
        'Advanced writing skills',
        'Cultural nuances',
        'Exam preparation (optional)'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="relative py-16 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url("/wallpaperflare.com_wallpaper (4) copy.jpg")'}}>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our German Courses
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Choose the perfect course for your German learning journey. From complete beginner to advanced fluency, 
              we have a program designed just for you.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="relative py-16 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url("/wallpaperflare.com_wallpaper (3).jpg")'}}>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 relative z-10">
            What's Included in Every Course
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center relative z-10">
              <div className="bg-white bg-opacity-90 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Comprehensive Materials</h3>
              <p className="text-gray-200">Detailed lessons, exercises, and resources</p>
            </div>
            <div className="text-center relative z-10">
              <div className="bg-white bg-opacity-90 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Personal Support</h3>
              <p className="text-gray-200">Direct access to Daniel for questions and guidance</p>
            </div>
            <div className="text-center relative z-10">
              <div className="bg-white bg-opacity-90 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Certificate</h3>
              <p className="text-gray-200">Completion certificate for each level</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
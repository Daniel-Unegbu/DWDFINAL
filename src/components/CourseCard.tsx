import React from 'react';
import { BookOpen, Clock, Star } from 'lucide-react';

interface CourseCardProps {
  title: string;
  level: string;
  description: string;
  price: string;
  duration: string;
  features: string[];
}

export default function CourseCard({ title, level, description, price, duration, features }: CourseCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="bg-blue-100 p-2 rounded-lg">
            <BookOpen className="h-6 w-6 text-blue-900" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            <span className="inline-block bg-yellow-200 text-yellow-800 text-sm px-2 py-1 rounded-full font-medium">
              {level}
            </span>
          </div>
        </div>
      </div>

      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>

      <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
        <div className="flex items-center space-x-1">
          <Clock className="h-4 w-4" />
          <span>{duration}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Star className="h-4 w-4 fill-current text-yellow-400" />
          <span>4.9/5</span>
        </div>
      </div>

      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
            <div className="w-1.5 h-1.5 bg-blue-900 rounded-full"></div>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-900">{price}</div>
        <button className="bg-blue-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-800 transition-colors duration-200 flex items-center space-x-2">
          <span>Enroll Now</span>
        </button>
      </div>
    </div>
  );
}
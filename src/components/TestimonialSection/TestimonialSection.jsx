import React, { useState, useEffect } from 'react';
import { testimonials } from '../../constants/Testimonial';

const TestimonialSection = () => {

  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(startIndex + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <section className="bg-gradient-to-r from-blue-200 to-blue-50 py-16 px-6">
      <h2 className="text-4xl font-extrabold mb-10 text-center text-blue-900">What Our Students Say</h2>
      <div className="flex justify-center overflow-hidden">
        <div className="flex transition-transform duration-1000 ease-in-out space-x-6">
          {getVisibleTestimonials().map((testimonial) => (
            <div
              key={testimonial.id}
              className="border bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 min-w-[300px] max-w-sm"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={`${testimonial.name} avatar`}
                  className="w-16 h-16 rounded-full mr-4 border-2 border-blue-200"
                />
                <p className="text-xl font-semibold text-gray-900">{testimonial.name}</p>
              </div>
              <p className="text-gray-700 italic">&ldquo;{testimonial.text}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

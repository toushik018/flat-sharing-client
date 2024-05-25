// components/Testimonials.tsx
"use client";

import { InfiniteMovingCards } from "./TestimonialCard/Testimonialcard";

const testimonials = [
  {
    quote:
      "I found my perfect flat-mate through this website. The process was smooth and efficient.",
    name: "John Doe",
    title: "Satisfied User",
  },
  {
    quote:
      "Thanks to this platform, I was able to find a great roommate within a week!",
    name: "Jane Smith",
    title: "Happy User",
  },
  {
    quote:
      "A fantastic service that made finding a flat-mate easy and stress-free.",
    name: "Sam Wilson",
    title: "Grateful User",
  },
  {
    quote:
      "I was skeptical at first, but this site really helped me find a great living situation.",
    name: "Alice Johnson",
    title: "Content User",
  },
  {
    quote:
      "The best platform for finding a roommate quickly and efficiently. Highly recommend!",
    name: "Robert Brown",
    title: "Impressed User",
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-gray-100 items-center justify-center relative overflow-hidden">
      <h1 className="text-2xl text-center mb-2">Success Stories</h1>
      <h2 className="text-lg text-center mb-10 text-gray-600">
        Hear from our happy users who found their perfect flat-mates through us
      </h2>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
        className=""
      />
    </div>
  );
};

export default Testimonials;

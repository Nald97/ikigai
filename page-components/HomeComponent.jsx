import React from "react";
import { StarIcon } from "@heroicons/react/solid";

const features = [
  {
    name: "Feature 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Feature 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Feature 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const testimonials = [
  {
    name: "Person 1",
    role: "Role 1",
    image: "https://picsum.photos/200/300/?blur=2",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Person 2",
    role: "Role 2",
    image: "https://picsum.photos/seed/picsum/200/300",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

function Hero() {
  return (
    <div className="bg-blue-400 py-16">
      <div className="container mx-auto max-w-screen-xl px-4">
        <h1 className="text-4xl font-bold text-center">
          Welcome to Littlefish Foundation
        </h1>
        <p className="text-xl text-center mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8 mx-auto block">
          Join Us
        </button>
      </div>
    </div>
  );
}

function Features() {
  return (
    <div className="bg-blue-400 py-16">
      <div className="container mx-auto max-w-screen-xl px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="bg-white opacity-0.8 rounded-lg p-6 shadow-md"
            >
              <h3 className="text-2xl font-semibold mb-4">{feature.name}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <div className="py-16">
      <div className="container mx-auto max-w-screen-xl px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-lg p-6 shadow-md opacity-100"
            >
              <img
                className="h-16 w-16 rounded-full mx-auto mb-4"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{testimonial.role}</p>
              <p className="text-base italic mb-4">"{testimonial.quote}"</p>
              <div className="flex justify-center">
                <StarIcon className="h-5 w-5 text-yellow-400" />
                <StarIcon className="h-5 w-5 text-yellow-400" />
                <StarIcon className="h-5 w-5 text-yellow-400" />
                <StarIcon className="h-5 w-5 text-yellow-400" />
                <StarIcon className="h-5 w-5 text-yellow-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HomeComponent() {
  return (
    <div>
      <Hero />
      <Features />
      <Testimonials />
    </div>
  );
}

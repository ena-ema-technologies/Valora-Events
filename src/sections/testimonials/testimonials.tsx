"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    text: "Velora Events made our corporate retreat a huge success. Their professionalism and attention to detail was amazing. Highly recommended.",
    name: "Michael Lee",
    role: "Founder, Awesomemux Technology",
    image: "https://i.pravatar.cc/100?img=1",
  },
  {
    id: 2,
    text: "The team went above and beyond for our event. We couldn’t be happier!",
    name: "Sarah Johnson",
    role: "CEO, BrightFuture Ltd.",
    image: "https://i.pravatar.cc/100?img=2",
  },
  {
    id: 3,
    text: "Absolutely fantastic service. They handled everything perfectly.",
    name: "David Kim",
    role: "CTO, InnovateX",
    image: "https://i.pravatar.cc/100?img=3",
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  // Detect screen size
  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Slide percentage
  const slidePercentage = windowWidth < 768 ? 100 : 60;

  return (
    <div className="min-h-screen max-w-full md:px-12 px-4 my-18 pt-12 md:pt-0">
      {/* Heading */}
      <div className="space-y-3 text-center">
        <p className="t-5 font-montserrat">Testimonials</p>
        <p className="t-2">
          From experience to professionalism, everything you need to create the
          next event successful
        </p>
      </div>

      {/* Carousel */}
      <div className="relative h-[80vh] flex items-center justify-center mt-8">
        <Image
          src="/6_testimonials/objects.png"
          alt="background"
          fill
          className="object-cover"
        />

        <div className="w-full flex justify-center items-center py-10 bg-inherit">
          <div className="absolute top-0 left-0 w-full h-full" />

          {/* SLIDES */}
          <div className="overflow-hidden w-full relative z-10 flex justify-center">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(calc(-${current * slidePercentage}% + ${
                  windowWidth < 768 ? "0px" : "20%"
                }))`,
              }}
            >
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className="min-w-full md:min-w-[60%] mx-2
                    bg-white/30 backdrop-blur-md
                    rounded-3xl shadow-2xl p-6 md:p-10 text-center relative"
                >
                  {/* Left Button */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-2 top-1/2 -translate-y-1/2 text-white p-2 rounded-full shadow-md z-10 md:left-4"
                  >
                    <Image
                      height={25}
                      width={25}
                      src="/6_testimonials/left-arrow.png"
                      alt="prev"
                    />
                  </button>

                  {/* Right Button */}
                  <button
                    onClick={nextSlide}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-white p-2 rounded-full shadow-md z-10 md:right-4"
                  >
                    <Image
                      height={25}
                      width={25}
                      src="/6_testimonials/right-arrow.png"
                      alt="next"
                    />
                  </button>

                  {/* Text */}
                  <p className="carousel-desc leading-relaxed">{t.text}</p>

                  {/* User Info */}
                  <div className="mt-6 flex flex-col items-center">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-blue-500"
                    />
                    <h3 className="mt-3 carousel-name">{t.name}</h3>
                    <p className="text-[#6E6C83] text-[18px] font-[300]">
                      {t.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

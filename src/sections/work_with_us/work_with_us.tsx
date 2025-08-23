"use client";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { eventStories } from "../../utils/extra/work_with_us";

const Work_With_Us = () => {
  return (
    <section className="bg-white pb-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-12 space-y-3 md:space-y-2">
          <h2 className="t-5 font-montserrat md:text-left text-center">
            What it’s like to work with us
          </h2>
          <p className="text-[#0D141C] md:text-left text-center">
            Read some of our event stories that left our clients with memories,
            entertainment and a lasting impression
          </p>
        </div>
        {/* Carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            pagination={{
              el: ".swiper-pagination-custom",
              clickable: true,
              bulletClass: "swiper-pagination-bullet-custom",
              bulletActiveClass: "swiper-pagination-bullet-active-custom",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: {
                slidesPerView: 1.2,
              },
              1024: {
                slidesPerView: 1.5,
              },
              1280: {
                slidesPerView: 2,
              },
            }}
            className="pb-16"
          >
            {eventStories.map((story) => (
              <SwiperSlide key={story.id}>
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="relative z-0 min-h-[550px] lg:h-80 p-3">
                    <Image
                      src={story.image || "/placeholder.svg"}
                      alt={story.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <button className="bg-white/90 hover:bg-white p-2 rounded-xl shadow-md transition-colors">
                        <ArrowUpRight className="w-5 h-5 text-gray-700" />
                      </button>
                    </div>
                    {/* Inside content */}
                    <div className="absolute z-10 p-4 lg:p-6 max-w-1/2 bg-white/50 backdrop-blur-sm rounded-xl">
                      <span className="rounded-full px-2 py-1 text-primary bg-transparent text-xs border border-primary inline-block mb-2">
                        Event Story
                      </span>
                      <h3 className="text-base lg:text-lg font-bold font-montserrat text-gray-900 mb-4 leading-tight">
                        {story.title}
                      </h3>

                      <p className="text-sm font-normal text-[#000000] mb-6 leading-relaxed">
                        {story.description}
                      </p>

                      <button className="text-primary hover:text-blue-700 text-xs font-bold mb-6 transition-colors">
                        Read more...
                      </button>

                      <div>
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                          <Image
                            src={story.clientAvatar || "/placeholder.svg"}
                            alt={story.client}
                            width={48}
                            height={48}
                            className="object-cover"
                          />
                        </div>
                        <blockquote className="text-xs font-normal text-gray-700 italic mb-4 leading-relaxed">
                          "{story.testimonial}"
                        </blockquote>

                        <div className="flex items-center gap-3">
                          <div>
                            <p className="font-semibold text-gray-900">
                              – {story.client}
                            </p>
                            <p className="text-sm text-gray-600">
                              {story.clientTitle}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <div className="flex items-center justify-between mt-8">
            <div className="swiper-pagination-custom flex gap-2"></div>

            <div className="flex gap-2">
              <button className="swiper-button-prev-custom bg-white hover:bg-gray-50 border border-gray-200 rounded-full p-3 shadow-sm transition-colors">
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button className="swiper-button-next-custom bg-white hover:bg-gray-50 border border-gray-200 rounded-full p-3 shadow-sm transition-colors">
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work_With_Us;

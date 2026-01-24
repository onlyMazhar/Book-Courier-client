import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonials = () => {
  const reviews = [
    { name: "Ariful Islam", role: "Avid Reader", text: "The 24-hour delivery is real! I ordered a book at night and it was at my door by noon.", img: "https://i.pravatar.cc/150?u=1" },
    { name: "Sarah Khan", role: "Student", text: "As a student, finding rare books in local libraries used to be hard. Book Courier fixed that.", img: "https://i.pravatar.cc/150?u=2" },
    { name: "Nabil Ahmed", role: "Librarian", text: "Earning while sharing my personal collection has been a great experience. Very smooth platform.", img: "https://i.pravatar.cc/150?u=3" },
    { name: "Rakib Hosein", role: "Writer", text: "The interface is so clean. I love how easy it is to track my borrowed books.", img: "https://i.pravatar.cc/150?u=4" },
    { name: "Jannatun Naeem", role: "Researcher", text: "A life-saver for finding academic journals and out-of-print editions.", img: "https://i.pravatar.cc/150?u=5" },
  ];

  return (
    <div className="py-24 bg-base-10">
      <div className="  mx-auto px-4">
        {/* Header  */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl font-black text-base-content mb-4">What Our Community Says</h2>
            <p className="text-slate-500">Trusted by thousands of book lovers across the city.</p>
          </div>

          {/* Custom Navigation Buttons */}
          <div className="flex gap-2">
            <button className="prev-btn btn btn-circle btn-outline btn-sm">←</button>
            <button className="next-btn btn btn-circle btn-primary btn-sm">→</button>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          navigation={{
            prevEl: ".prev-btn",
            nextEl: ".next-btn",
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-14" // Padding for pagination bullets
        >
          {reviews.map((rev, i) => (
            <SwiperSlide key={i}>
              <div className="bg-base-200 backdrop-blur-sm rounded-3xl border border-base-300 hover:bg-base-300 p-8 my-5 mx-2 h-full shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="flex gap-1 text-orange-400 mb-4">
                  {[...Array(5)].map((_, starIdx) => (
                    <span key={starIdx}>★</span>
                  ))}
                </div>

                <p className="text-slate-600 italic mb-8 grow">"{rev.text}"</p>

                <div className="flex items-center gap-4">
                  <img src={rev.img} className="w-12 h-12 rounded-full object-cover border-2 border-primary/10" alt={rev.name} />
                  <div>
                    <h5 className="font-bold text-slate-900">{rev.name}</h5>
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">{rev.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';
import img7 from '../assets/img7.png';
const Kontakt = () => {
  return (
    <div className="w-full">

      <div className="bg-blue-400 py-10 text-center mb-15">
        <h3 className="text-yellow-200 font-medium text-[20px]">КОНТАКТЫ</h3>
        <h1 className="text-white font-semibold text-4xl mt-2">ШОУ РУМ TRUE В ТАШКЕНТЕ</h1>
        <h2 className="text-white font-medium text-2xl max-w-[1000px] mx-auto mt-2">
          ПОСЕТИТЕ НАШ ВЫСТАВОЧНЫЙ ЗАЛ В ТАШКЕНТ СИТИ, BOULEVARD
        </h2>
      </div>


      <div className="max-w-[100%] w-[90%] m-auto bg-white">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          loop={true}
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="w-[100%] h-[90]"
        >
          {[img1, img2, img3, img4, img5, img6, img7].map((img, i) => (
            <SwiperSlide key={i}>
              <div className="w-full h-[90vh] flex justify-center items-center bg-white">
                <img
                  src={img}
                  alt={`slide-${i}`}
                  className="w-[1200px]   shadow-2xl"
                />
              </div>
            </SwiperSlide>
          ))}

          <div className="custom-prev absolute left-5 top-1/2 transform -translate-y-1/2 z-10 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg cursor-pointer">
            <FaChevronLeft size={20} />
          </div>
          <div className="custom-next absolute right-5 top-1/2 transform -translate-y-1/2 z-10 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg cursor-pointer">
            <FaChevronRight size={20} />
          </div>
        </Swiper>
      </div>



     

    </div>




  );
};

export default Kontakt;

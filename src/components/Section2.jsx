import React from "react";
import { FaHeadphones, FaCogs, FaCubes, FaTools, FaTruck, FaStore } from "react-icons/fa";
import Run from '../assets/run.png'; 

const services = [
  {
    icon: <FaHeadphones className="text-4xl text-cyan-500" />,
    title: "КОНСАЛТИНГ",
    desc: "Помогаем в разработке концепции клуба, зонировании, оснащении и расчете финансовых показателей.",
  },
  {
    icon: <FaCogs className="text-4xl text-cyan-500" />,
    title: "МОНТАЖ И СЕРВИСНОЕ ОБСЛУЖИВАНИЕ",
    desc: "Полный цикл пуско-наладочных работ, а также сервисного обслуживания тренажеров.",
  },
  {
    icon: <FaCubes className="text-4xl text-cyan-500" />,
    title: "ПОДБОР ОБОРУДОВАНИЯ И 3D ПРОЕКТ",
    desc: "Помогаем подобрать оборудование, сделать расстановку на плане и показать 3D визуализацию вашего будущего проекта.",
  },
  {
    icon: <FaStore className="text-4xl text-cyan-500" />,
    title: "ФИРМЕННЫЙ SHOW-ROOM",
    desc: "Пройдите тест-драйв оборудования перед приобретением.",
  },
  {
    icon: <FaTools className="text-4xl text-cyan-500" />,
    title: "ПОСТАВКА ЗАПЧАСТЕЙ",
    desc: "Поставка как гарантийных, так и постгарантийных запчастей.",
  },
  {
    icon: <FaTruck className="text-4xl text-cyan-500" />,
    title: "ДОСТАВКА ПО ВСЕМУ УЗБЕКИСТАНУ",
    desc: "Мы доставляем оборудование по всему Узбекистану.",
  },
];

const Section2 = () => {
  return (
    <div className="flex flex-col md:flex-row bg-[#EEEEEE] min-h-screen">
      {/* Левая часть */}
      <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
        
        <h1 className="text-3xl text-[#01AEE7] font-bold uppercase mb-8">
        МЫ ПРЕДЛАГАЕМ <br /> ПОЛНЫЙ КОМПЛЕКС УСЛУГ
        </h1>
        {/* Сделал сетку из 2 колонок */}
        <div className="grid grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div key={index} className="flex items-start space-x-4 mt-[120px]">
              <div>{service.icon}</div>
              <div>
                <h3 className="font-bold uppercase text-sm ">{service.title}</h3>
                <p className="text-sm text-gray-700">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Правая часть с изображением */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <img
          src={Run}
          alt="Тренажёр"
          className="w-full max-w-md h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Section2;

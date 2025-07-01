import React from "react";
import Zal from '../assets/zal.png';
const Section3 = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat py-20 px-4 flex items-center justify-center"
      style={{ backgroundImage: `url(${Zal})` }}

    >
      <div className="bg-white p-8 md:p-10 rounded-md shadow-lg max-w-md w-full">
        <h2 className="text-xl font-bold uppercase mb-2 leading-tight">
          ПОЛУЧИТЕ ЭКСКЛЮЗИВНОЕ<br />
          ПРЕДЛОЖЕНИЕ НА ТРЕНАЖЕРЫ<br />
          <span className="text-black">TRUE FITNESS</span>
        </h2>
        <p className="text-sm text-gray-700 mb-6">
          Мы будем рады проконсультировать вас и помочь с подбором оборудования
        </p>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="ИМЯ"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
          />
          <input
            type="email"
            placeholder="EMAIL"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
          />
          <input
            type="tel"
            placeholder="+998 (99)-999-99-99"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
          />
          <button
            type="submit"
            className="w-full bg-cyan-500 text-white py-2 rounded font-semibold hover:bg-cyan-600 transition"
          >
            ОТПРАВИТЬ
          </button>
        </form>

        <p className="text-xs text-gray-500 mt-4">
          Нажимая на кнопку, вы даёте согласие на обработку персональных данных и
          соглашаетесь с политикой конфиденциальности
        </p>
      </div>
    </div>
  );
};

export default Section3;

import React from "react";
// import Header from "./Header";
// import Footer from "./Footer";

function TrueGymForm() {
  return (
    <div>
      <Header />
      <div className="min-h-screen flex flex-col items-center bg-[#f0f0f0] px-4">
        <div className="bg-[#00B0F0] w-full py-4 text-center text-white font-bold text-sm sm:text-lg">
          ОТКРЫТЬ КЛУБ ВМЕСТЕ С TRUE
        </div>

        <img
          src="./Club-img.png"
          alt="Club Layout"
          className="w-full max-w-4xl mt-6 px-4"
        />

        <div className="bg-white shadow-md rounded-md mt-10 p-8 w-full max-w-xl mb-10">
          <h2 className="text-center text-xl font-semibold mb-6">
            ОТПРАВИТЬ ЗАЯВКУ
          </h2>

          <form className="flex flex-col space-y-4 text-sm">
            <div>
              <label className="block font-bold mb-1">ВАШЕ ИМЯ</label>
              <input
                type="text"
                placeholder="ИМЯ"
                className="w-full border-b border-gray-400 outline-none py-2"
              />
            </div>

            <div>
              <label className="block font-bold mb-1">E-MAIL:</label>
              <input
                type="email"
                placeholder="E-MAIL"
                className="w-full border-b border-gray-400 outline-none py-2"
              />
            </div>

            <div>
              <label className="block font-bold mb-1">НОМЕР ТЕЛЕФОНА</label>
              <input
                type="tel"
                placeholder="+998 (99)-999-99-99"
                className="w-full border-b border-gray-400 outline-none py-2"
              />
            </div>

            <div>
              <label className="block font-bold mb-1">ГОРОД</label>
              <input
                type="text"
                placeholder="ГОРОД"
                className="w-full border-b border-gray-400 outline-none py-2"
              />
            </div>

            <div>
              <label className="block font-bold mb-1">ХОТИТЕ ОТКРЫТЬ:</label>
              <div className="space-y-1">
                <div><input type="radio" name="open" /> Фитнес студия</div>
                <div><input type="radio" name="open" /> Фитнес клуб</div>
                <div><input type="radio" name="open" /> Отдельный зал</div>
                <div><input type="radio" name="open" /> Тренажёрный Зал в Отеле, Санатории</div>
                <div><input type="radio" name="open" /> Индивидуальный формат</div>
              </div>
            </div>

            <div>
              <label className="block font-bold mb-1">ПЛАНИРУЕМЫЙ СРОК ЗАПУСКА ПРОЕКТА:</label>
              <div className="space-y-1">
                <div><input type="radio" name="time" /> 0-3 месяца</div>
                <div><input type="radio" name="time" /> 3-6 месяцев</div>
                <div><input type="radio" name="time" /> Ожидается одобрение финансирования</div>
                <div><input type="radio" name="time" /> Индивидуальный формат</div>
              </div>
            </div>

            <div>
              <label className="block font-bold mb-1">КАКИЕ УСЛУГИ ВАС ИНТЕРЕСУЮТ:</label>
              <div className="space-y-1">
                <div><input type="checkbox" /> Консалтинг</div>
                <div><input type="checkbox" /> Подбор оборудования</div>
                <div><input type="checkbox" /> Доставка/Тренировка на Полне</div>
                <div><input type="checkbox" /> Дизайн</div>
              </div>
            </div>

            <div>
              <label className="block font-bold mb-1">ЗАГРУЗИТЬ ПЛАН ПОМЕЩЕНИЯ</label>
              <input
                type="file"
                className="block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0
                  file:text-sm file:font-semibold
                  file:bg-[#00B0F0] file:text-white
                  hover:file:bg-[#0090d0]"
              />
            </div>

            <div>
              <label className="block font-bold mb-1">КОММЕНТАРИЙ</label>
              <textarea
                rows="3"
                className="w-full border-b border-gray-400 outline-none py-2"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#00B0F0] hover:bg-[#0090d0] text-white font-semibold w-full py-3 rounded mt-4"
            >
              ОТПРАВИТЬ
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TrueGymForm;

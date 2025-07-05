import React, { useState, useEffect } from "react";
import mainImage from "../assets/ImgPageTwo/mainImg.png";
import dark from "../assets/ImgPageTwo/dark.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const MainBlock = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const savedData = localStorage.getItem("trueFitnessForm");
    if (savedData) {
      const { name, email, phone } = JSON.parse(savedData);
      setName(name || "");
      setEmail(email || "");
      setPhone(phone || "");
    }
  }, []);

  const handleSubmit = () => {
    const formData = {
      name,
      email,
      phone,
    };
    localStorage.setItem("trueFitnessForm", JSON.stringify(formData));
    alert("Данные сохранены!");

    // Очистка полей формы
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${mainImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="p-15 flex justify-center items-center"
      >
        <div
          className="min-h-screen w-full rounded text-center p-5"
          style={{
            backgroundImage: `url(${dark})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h3 className="font-bold text-yellow-300 mb-10">TRUE FITNESS</h3>

          <h2 className="font-bold text-white uppercase text-4xl">
            Получите <br />
            <span className="text-blue-500">
              эксклюзивное <br /> предложение
            </span>{" "}
            на <br />
            тренажеры
            <span className="text-blue-500"> TRUE FITNESS</span>
          </h2>
          <p className="my-5 text-yellow-300 uppercase text-sm">
            Мы будем рады проконсультировать Вас и помочь с подбором
            оборудования
          </p>

          <div className="flex flex-wrap justify-center items-center gap-5 sm:gap-10">
            <div className="bg-white py-4 px-5 rounded">
              <input
                type="text"
                placeholder="ИМЯ"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="placeholder-black font-bold border-none outline-none focus:outline-none focus:ring-0"
              />
            </div>

            <div className="bg-white py-3 px-3 rounded">
              <PhoneInput
                country={"ru"}
                value={phone}
                onChange={setPhone}
                inputStyle={{
                  fontWeight: "bold",
                  width: "180px",
                  border: "none",
                  boxShadow: "none",
                  outline: "none",
                }}
                buttonStyle={{
                  border: "none",
                  backgroundColor: "white",
                }}
              />
            </div>

            <div className="bg-white py-4 px-5 rounded">
              <input
                type="text"
                placeholder="E-MAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="placeholder-black font-bold border-none outline-none focus:outline-none focus:ring-0"
              />
            </div>

            <button
              className="bg-blue-500 p-3 px-10 text-white font-bold text-lg"
              onClick={handleSubmit}
            >
              отправить
            </button>
          </div>

          <p className="text-white mt-5 font-semibold text-sm sm:text-base">
            «Нажимая на кнопку, вы даете согласие на обработку персональных
            данных и <br /> соглашаетесь c политикой конфиденциальности»
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainBlock;

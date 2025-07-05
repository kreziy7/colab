import React from 'react'
import Step from '../assets/ImgPageTwo/step.svg'
import Step2 from '../assets/ImgPageTwo/step2.svg'
import Step3 from '../assets/ImgPageTwo/step3.svg'
import Step4 from '../assets/ImgPageTwo/step4.svg'
import Step5 from '../assets/ImgPageTwo/step5.svg'
import Step6 from '../assets/ImgPageTwo/step6.svg'

const data = [
  { img: Step, title: 'ТРЕНАЖЕР ЛЕСТНИЦА TRUE PALISADE' },
  { img: Step2, title: 'ФУНКЦИОНАЛЬНЫЙ ТРЕНИНГ С COMPOSITE STRENGTH' },
  { img: Step3, title: 'РАМЫ ДЛЯ СТРЕЙТЧИНГА TRUE STRETCH' },
  { img: Step4, title: 'ЛАТЕРАЛЬНЫЙ ТРЕНАЖЕР TRUE TRAVERSE' },
  { img: Step5, title: 'БЕГОВАЯ ДОРОЖКА TRUE ALPINE RUNNER' },
  { img: Step6, title: 'ЭЛЛИПТИЧЕСКИЙ ТРЕНАЖЕР TRUE SPECTRUM' },
];


const Main = () => {
  return (
    <section className="bg-[#00AEEF] py-10 px-4 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">НАШИ ИННОВАЦИИ</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={item.img} alt={item.title} className="w-full h-auto object-cover mb-4" />
              <p className="text-sm text-center font-semibold leading-tight">{item.title}</p>
              <span className="w-30 h-[3px] bg-yellow-300 mt-2 block"></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Main

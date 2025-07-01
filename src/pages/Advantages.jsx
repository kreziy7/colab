import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Users, Award, Heart, Zap, Menu, X, ChevronDown, Globe, Search, ShoppingCart } from 'lucide-react';

export default function TrueFitnessWebsite() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });
  
  const [language, setLanguage] = useState('ru');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('main');
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const translations = {
    ru: {
      nav: {
        main: 'О ГЛАВНОЕ',
        equipment: 'ТРЕНАЖЕРЫ', 
        advantages: 'ПРЕИМУЩЕСТВА',
        contacts: 'КОНТАКТЫ'
      },
      hero: {
        title: 'ПРЕИМУЩЕСТВА TRUE FITNESS',
        subtitle: 'КАЧЕСТВЕННАЯ МЕТОДИКА ДЛЯ ПРАВИЛЬНЫХ МЫШЕЧНЫХ НАГРУЗОК И ПРОФИЛАКТИКЕ ФИТНЕС-ТРАВМАТИЗМА'
      },
      advantages: [
        {
          title: "ХАРАКТЕРИСТИКИ В КЛАССЕ",
          description: "Превосходные технические характеристики оборудования соответствуют мировым стандартам"
        },
        {
          title: "НАДЕЖНОСТЬ ОБОРУДОВАНИЯ",
          description: "Высококачественные материалы и проверенные технологии обеспечивают долговечность"
        },
        {
          title: "ВЫСОКАЯ СКОРОСТЬ ПОЛУЧЕНИЯ",
          description: "Быстрая доставка и установка оборудования в кратчайшие сроки"
        },
        {
          title: "КАЧЕСТВО СЕРВИСА И ОПТИМАЛЬНЫЙ СЕРВИС",
          description: "Профессиональная поддержка и обслуживание на высшем уровне"
        },
        {
          title: "СТРОГО ВРЕМЯ ДЛЯ КАЖДОГО",
          description: "Индивидуальный подход и персональное расписание для каждого клиента"
        },
        {
          title: "СОВРЕМЕННАЯ ПРОФЕССИОНАЛЬНОСТЬ",
          description: "Использование передовых технологий и инновационных решений"
        },
        {
          title: "АБСОЛЮТНАЯ ДИСЦИПЛИНИРОВАННОСТЬ ОБОРУДОВАНИЯ",
          description: "Строгий контроль качества и регулярное техническое обслуживание"
        },
        {
          title: "МАКСИМАЛЬНАЯ ФУНКЦИОНАЛЬНОСТЬ",
          description: "Полный спектр возможностей для эффективных тренировок"
        }
      ],
      cta: {
        button: 'Заказать звонок',
        title: 'ПОЛУЧИТЕ',
        highlight: 'ЭКСКЛЮЗИВНОЕ ПРЕДЛОЖЕНИЕ',
        subtitle: 'НА ТРЕНАЖЕРЫ TRUE FITNESS',
        description: 'ОСТАВЬТЕ ЗАЯВКУ НА БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ И ПОЛУЧИТЕ СКИДКУ ДО 25%',
        submit: 'ОТПРАВИТЬ',
        privacy: 'Нажимая кнопку, вы даете согласие на обработку персональных данных и соглашаетесь с политикой конфиденциальности'
      },
      form: {
        name: 'ИМЯ',
        phone: '+998 (33) 999-99-99',
        email: 'E-MAIL'
      },
      equipment: {
        title: 'БРЕНД TRUE FITNESS ВХОДИТ В ТОП-5 КРУПНЕЙШИХ ПРОИЗВОДИТЕЛЕЙ',
        subtitle: 'ФИТНЕС ОБОРУДОВАНИЯ',
        button: 'ВСЕ О TRUE FITNESS'
      },
      footer: {
        catalog: 'КАТАЛОГ ТОВАРОВ',
        catalogItems: ['Беговые дорожки', 'Велотренажеры', 'Эллиптические', 'Силовые тренажеры', 'Функциональный тренинг'],
        info: 'ИНФОРМАЦИЯ',
        infoItems: ['О компании', 'Доставка', 'Оплата', 'Гарантия', 'Возврат товара'],
        support: 'ПОДДЕРЖКА',
        supportItems: ['Сервисный центр', 'Запчасти', 'Инструкции', 'Контакты'],
        newsletter: 'ПОДПИСАТЬСЯ НА НОВОСТИ',
        emailPlaceholder: 'E-mail'
      }
    },
    en: {
      nav: {
        main: 'ABOUT',
        equipment: 'EQUIPMENT',
        advantages: 'ADVANTAGES', 
        contacts: 'CONTACTS'
      },
      hero: {
        title: 'TRUE FITNESS ADVANTAGES',
        subtitle: 'QUALITY METHODOLOGY FOR PROPER MUSCLE LOADS AND FITNESS INJURY PREVENTION'
      },
      advantages: [
        {
          title: "CLASS CHARACTERISTICS",
          description: "Outstanding technical specifications of equipment meet world standards"
        },
        {
          title: "EQUIPMENT RELIABILITY",
          description: "High-quality materials and proven technologies ensure durability"
        },
        {
          title: "HIGH DELIVERY SPEED",
          description: "Fast delivery and installation of equipment in the shortest time"
        },
        {
          title: "SERVICE QUALITY & OPTIMAL SERVICE",
          description: "Professional support and service at the highest level"
        },
        {
          title: "STRICT TIME FOR EVERYONE",
          description: "Individual approach and personal schedule for each client"
        },
        {
          title: "MODERN PROFESSIONALISM",
          description: "Use of advanced technologies and innovative solutions"
        },
        {
          title: "ABSOLUTE EQUIPMENT DISCIPLINE",
          description: "Strict quality control and regular technical maintenance"
        },
        {
          title: "MAXIMUM FUNCTIONALITY",
          description: "Full range of capabilities for effective workouts"
        }
      ],
      cta: {
        button: 'Request Call',
        title: 'GET',
        highlight: 'EXCLUSIVE OFFER',
        subtitle: 'FOR TRUE FITNESS EQUIPMENT',
        description: 'LEAVE A REQUEST FOR FREE CONSULTATION AND GET UP TO 25% DISCOUNT',
        submit: 'SUBMIT',
        privacy: 'By clicking the button, you consent to the processing of personal data and agree to the privacy policy'
      },
      form: {
        name: 'NAME',
        phone: '+998 (33) 999-99-99',
        email: 'E-MAIL'
      },
      equipment: {
        title: 'TRUE FITNESS BRAND IS IN TOP-5 LARGEST MANUFACTURERS',
        subtitle: 'OF FITNESS EQUIPMENT',
        button: 'ALL ABOUT TRUE FITNESS'
      },
      footer: {
        catalog: 'PRODUCT CATALOG',
        catalogItems: ['Treadmills', 'Exercise Bikes', 'Ellipticals', 'Strength Equipment', 'Functional Training'],
        info: 'INFORMATION',
        infoItems: ['About Company', 'Delivery', 'Payment', 'Warranty', 'Returns'],
        support: 'SUPPORT',
        supportItems: ['Service Center', 'Parts', 'Instructions', 'Contacts'],
        newsletter: 'SUBSCRIBE TO NEWS',
        emailPlaceholder: 'E-mail'
      }
    },
    uz: {
      nav: {
        main: 'ASOSIY',
        equipment: 'JIHOZLAR',
        advantages: 'AFZALLIKLAR',
        contacts: 'KONTAKTLAR'
      },
      hero: {
        title: 'TRUE FITNESS AFZALLIKLARI',
        subtitle: 'MUSHAK YUKLAMALARI VA FITNESS JAROHATLARNING OLDINI OLISH UCHUN SIFATLI METODIKA'
      },
      advantages: [
        {
          title: "SINFDAGI XUSUSIYATLAR",
          description: "Uskunaning ajoyib texnik xususiyatlari jahon standartlariga javob beradi"
        },
        {
          title: "USKUNANING ISHONCHLILIGI",
          description: "Yuqori sifatli materiallar va isbotlangan texnologiyalar bardoshlilikni ta'minlaydi"
        },
        {
          title: "YUQORI YETKAZIB BERISH TEZLIGI",
          description: "Eng qisqa vaqt ichida uskunani tez yetkazib berish va o'rnatish"
        },
        {
          title: "XIZMAT SIFATI VA OPTIMAL XIZMAT",
          description: "Eng yuqori darajada professional qo'llab-quvvatlash va xizmat"
        },
        {
          title: "HAR BIR UCHUN QATIY VAQT",
          description: "Har bir mijoz uchun individual yondashuv va shaxsiy jadval"
        },
        {
          title: "ZAMONAVIY PROFESSIONALLIK",
          description: "Ilg'or texnologiyalar va innovatsion yechimlardan foydalanish"
        },
        {
          title: "MUTLAQ USKUNALAR INTIZOMI",
          description: "Qat'iy sifat nazorati va muntazam texnik xizmat ko'rsatish"
        },
        {
          title: "MAKSIMAL FUNKSIONALLIK",
          description: "Samarali mashqlar uchun to'liq imkoniyatlar spektri"
        }
      ],
      cta: {
        button: 'Qo\'ng\'iroq buyurtma',
        title: 'OLING',
        highlight: 'EKSKLYUZIV TAKLIFNI',
        subtitle: 'TRUE FITNESS JIHOZLARI UCHUN',
        description: 'BEPUL MASLAHAT UCHUN ARIZA QOLDIRING VA 25% GACHA CHEGIRMA OLING',
        submit: 'YUBORISH',
        privacy: 'Tugmani bosish orqali siz shaxsiy ma\'lumotlarni qayta ishlashga rozilik bildirasiz'
      },
      form: {
        name: 'ISM',
        phone: '+998 (33) 999-99-99',
        email: 'E-MAIL'
      },
      equipment: {
        title: 'TRUE FITNESS BRENDI ENG YIRIK 5 TA ISHLAB CHIQARUVCHI QATORIDA',
        subtitle: 'FITNESS JIHOZLARI',
        button: 'TRUE FITNESS HAQIDA BARCHASI'
      },
      footer: {
        catalog: 'MAHSULOTLAR KATALOGI',
        catalogItems: ['Yugurish yo\'laklari', 'Velosiped trenajyorlari', 'Elliptik', 'Kuch uskunalari', 'Funksional mashqlar'],
        info: 'MA\'LUMOT',
        infoItems: ['Kompaniya haqida', 'Yetkazib berish', 'To\'lov', 'Kafolat', 'Qaytarish'],
        support: 'QO\'LLAB-QUVVATLASH',
        supportItems: ['Servis markazi', 'Ehtiyot qismlar', 'Ko\'rsatmalar', 'Kontaktlar'],
        newsletter: 'YANGILIKLARGA OBUNA BO\'LING',
        emailPlaceholder: 'E-mail'
      }
    }
  };

  const t = translations[language];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (formData.name && formData.phone && formData.email) {
      console.log('Form submitted:', formData);
      alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
      setFormData({ name: '', phone: '', email: '' });
    } else {
      alert('Пожалуйста, заполните все поля');
    }
  };

  const handleNewsletterSubmit = () => {
    if (newsletterEmail) {
      console.log('Newsletter subscription:', newsletterEmail);
      alert('Спасибо за подписку!');
      setNewsletterEmail('');
    }
  };

  const toggleLanguage = (lang) => {
    setLanguage(lang);
    setIsLangDropdownOpen(false);
  };

  const scrollToSection = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
    console.log(`Scrolling to ${section}`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center space-x-8">
              <div className="text-2xl font-bold text-gray-800 cursor-pointer hover:text-cyan-500 transition-colors">
                <span className="text-cyan-500">T</span>RUE
              </div>
              <nav className="hidden lg:flex space-x-8">
                {Object.entries(t.nav).map(([key, value]) => (
                  <button
                    key={key}
                    onClick={() => scrollToSection(key)}
                    className={`text-sm font-medium transition-all duration-300 hover:text-cyan-500 ${
                      activeSection === key ? 'text-cyan-500' : 'text-gray-700'
                    }`}
                  >
                    {value}
                  </button>
                ))}
              </nav>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2 text-cyan-500 hover:text-cyan-600 transition-colors cursor-pointer">
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">+998 (33) 999-99-99</span>
              </div>
              
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                  className="flex items-center space-x-1 px-2 py-1 rounded text-sm hover:bg-gray-100 transition-colors"
                >
                  <span className="text-lg">
                    {language === 'ru' ? '🇷🇺' : language === 'en' ? '🇺🇸' : '🇺🇿'}
                  </span>
                  <ChevronDown className="w-3 h-3" />
                </button>
                
                {isLangDropdownOpen && (
                  <div className="absolute right-0 mt-1 w-28 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                    {['ru', 'en', 'uz'].map((lang) => (
                      <button
                        key={lang}
                        onClick={() => toggleLanguage(lang)}
                        className={`w-full text-left px-3 py-2 text-xs hover:bg-cyan-50 transition-colors first:rounded-t-md last:rounded-b-md ${
                          language === lang ? 'bg-cyan-100 text-cyan-600' : 'text-gray-700'
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          <span className="text-sm">
                            {lang === 'ru' ? '🇷🇺' : lang === 'en' ? '🇺🇸' : '🇺🇿'}
                          </span>
                          <span className="text-xs">{lang.toUpperCase()}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              <button className="bg-cyan-500 text-white px-4 py-2 rounded text-sm hover:bg-cyan-600 transition-colors">
                {t.cta.button}
              </button>
              
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded hover:bg-gray-100 transition-colors"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
          
          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-3 border-t border-gray-200">
              <nav className="space-y-1">
                {Object.entries(t.nav).map(([key, value]) => (
                  <button
                    key={key}
                    onClick={() => scrollToSection(key)}
                    className={`block w-full text-left px-3 py-2 text-sm rounded transition-colors ${
                      activeSection === key ? 'bg-cyan-100 text-cyan-600' : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {value}
                  </button>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-4xl mx-auto leading-relaxed font-light">
            {t.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Advantages Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.advantages.map((advantage, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center group cursor-pointer">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
                </div>
                <h3 className="text-xs font-bold text-gray-800 mb-3 uppercase leading-tight">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 leading-tight">
            {t.equipment.title}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {t.equipment.subtitle}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gray-100 h-48 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
              </div>
            ))}
          </div>
          
          <button className="bg-cyan-500 text-white px-8 py-3 rounded hover:bg-cyan-600 transition-colors font-medium">
            {t.equipment.button}
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-800 text-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            {t.cta.title}
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-cyan-400">
            {t.cta.highlight}
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t.cta.subtitle}
          </h2>
          <p className="text-lg mb-8 font-light">
            {t.cta.description}
          </p>
          
          <div className="max-w-sm mx-auto bg-white p-6 rounded-lg">
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder={t.form.name}
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded text-gray-800 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
              />
              <input
                type="tel"
                name="phone"
                placeholder={t.form.phone}
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded text-gray-800 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder={t.form.email}
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded text-gray-800 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
              />
              <button
                onClick={handleSubmit}
                className="w-full bg-cyan-500 text-white py-3 rounded font-medium hover:bg-cyan-600 transition-colors"
              >
                {t.cta.submit}
              </button>
            </div>
            <p className="text-xs text-gray-600 mt-4 leading-relaxed">
              {t.cta.privacy}
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-cyan-500 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <h3 className="font-bold mb-3 text-sm">{t.footer.catalog}</h3>
              <ul className="space-y-1">
                {t.footer.catalogItems.map((item, index) => (
                  <li key={index}>
                    <button className="text-xs hover:text-cyan-200 transition-colors text-left">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-3 text-sm">{t.footer.info}</h3>
              <ul className="space-y-1">
                {t.footer.infoItems.map((item, index) => (
                  <li key={index}>
                    <button className="text-xs hover:text-cyan-200 transition-colors text-left">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-3 text-sm">{t.footer.support}</h3>
              <ul className="space-y-1">
                {t.footer.supportItems.map((item, index) => (
                  <li key={index}>
                    <button className="text-xs hover:text-cyan-200 transition-colors text-left">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-3 text-sm">{t.footer.newsletter}</h3>
              <div className="flex mb-3">
                <input
                  type="email"
                  placeholder={t.footer.emailPlaceholder}
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 px-3 py-2 rounded-l text-gray-800 text-sm focus:outline-none"
                />
                <button 
                  onClick={handleNewsletterSubmit}
                  className="bg-yellow-500 px-3 py-2 rounded-r hover:bg-yellow-600 transition-colors"
                >
                  →
                </button>
              </div>
              <div className="flex space-x-3">
                <button className="text-xl hover:scale-110 transition-transform">📘</button>
                <button className="text-xl hover:scale-110 transition-transform">📷</button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-cyan-400 mt-6 pt-4 text-center">
            <p className="text-sm">© TRUE FITNESS</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
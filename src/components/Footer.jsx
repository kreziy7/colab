import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#01AEE7] text-white p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
                
                <div>
                    <h3 className="font-semibold mb-2">КАТАЛОГ ТОВАРОВ</h3>
                    <ul className="space-y-1 text-sm">
                        <li>КАРДИО ТРЕНАЖЕРЫ</li>
                        <li>СКИДКИ</li>
                        <li>COMPLETE TRAIN</li>
                        <li>TRUE STRENGTH</li>
                        <li>СТИМУЛЯЦИЯ</li>
                        <li>ПУТЕВЫЕ ТРЕНАЖЕРЫ</li>
                        <li>СИЛОВЫЕ ТРЕНАЖЕРЫ</li>
                        <li>КОНСУЛЬТАЦИИ</li>
                    </ul>
                </div>
               
                <div>
                    <h3 className="font-semibold mb-2">ИНФОРМАЦИЯ</h3>
                    <ul className="space-y-1 text-sm">
                        <li>О НАС</li>
                        <li>ПРЕИМУЩЕСТВА</li>
                        <li>ОТКРЫТЬ КЛУБ</li>
                        <li>ПРОДУКЦИЯ</li>
                        <li>КОНТАКТЫ</li>
                    </ul>
                </div>
               
                <div>
                    <h3 className="font-semibold mb-2">КОНТАКТЫ</h3>
                    <ul className="space-y-1 text-sm">
                        <li>ГРАФИК РАБОТЫ</li>
                        <li>ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</li>
                        <li>КОНТАКТЫ</li>
                    </ul>
                </div>
           
            </div>
        </footer>
    );
};

export default Footer;

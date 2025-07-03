import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className='bg-[#01AEE7] pb-[]' >
                <div className='container max-w-[1240px] mx-auto px-5'>
                    <div className='flex justify-between py-[30px]'>
                        <ul> КАТАЛОГ ТОВАРОВ
                        <li><a className='text-[15px] text-gray-700 font-mono' href="">Кардио тренажеры</a></li>
                        <li><a className='text-[15px] text-gray-700 font-mono' href="">Composite Strength</a></li>
                        <li><a className='text-[15px] text-gray-700 font-mono' href="">True Stretch</a></li>
                        <li><a className='text-[15px] text-gray-700 font-mono' href="">Сайклинг</a></li>
                        <li><a className='text-[15px] text-gray-700 font-mono' href="">Групповые тренировки</a></li>
                        <li><a className='text-[15px] text-gray-700 font-mono' href="">Силовые тренажеры</a></li>
                        <li><a className='text-[15px] text-gray-700 font-mono' href="">Консоли</a></li>
                    </ul>
                    <ul> ИНФОРМАЦИЯ
                        <li><a className='text-[15px] text-gray-700 font-mono' href="">О Бренде</a></li>
                        <li><a className='text-[15px] text-gray-700 font-mono' href="">Преимущества</a></li>
                        <li><a className='text-[15px] text-gray-700 font-mono' href="">открыть клуб</a></li>
                        <li><a className='text-[15px] text-gray-700 font-mono' href="">продукции</a></li>
                        <li><a className='text-[15px] text-gray-700 font-mono' href="">контакты</a></li>
                    </ul>
                    <ul> КОНТАКТЫ
                        <li><a className='text-[15px] text-gray-700 font-mono' href="">Политика конфиденциальности</a></li>
                        <li><a className='text-[15px] text-gray-700 font-mono' href="">Контакты</a></li>
                    </ul>
                    <ul><li>ПОДПИСАТЬСЯ НА НОВОСТИ И АКЦИИ</li>
                    <li><input className=' rounded-l-2xl border-none w-[175px] h-[43px] to-gray-500 border bg-white p-3' placeholder='E-MAIL' type="text" /> <button className='rounded-r-2xl bg-yellow-200 w-[75px] h-[43px] '>SEND</button></li>
                    </ul>
                    </div>
                    
                </div>


            </footer>
        </div>
    )
}

export default Footer
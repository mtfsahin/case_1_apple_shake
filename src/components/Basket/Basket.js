import React from 'react';
import BasketSvg from '../../assets/basket.svg'
import { useSelector } from 'react-redux'
import '../Basket/Basket.sass'
import Apple from '../Apple/Apple';

const Basket = () => {
    //onVisible stateimi kontrol ediyorum, eğer true ise elmaları ekranda göstericek, değilse ekranda görünür olmayacak
    const onVisible = useSelector((state) => state.stateApple.onVisible)

    return (
        <div>
            
            {onVisible===true &&  
            <div className='applePadding'>
                <Apple  className={`appleBasket1 ${onVisible ? 'basketApple' : null }`}></Apple>
                <Apple  className={`appleBasket2 ${onVisible ? 'basketApple' : null }`}></Apple>
                <Apple  className={`appleBasket3 ${onVisible ? 'basketApple' : null }`}></Apple>
                <Apple  className={`appleBasket4 ${onVisible ? 'basketApple' : null }`}></Apple>
                <Apple  className={`appleBasket5 ${onVisible ? 'basketApple' : null }`}></Apple>
                <Apple  className={`appleBasket6 ${onVisible ? 'basketApple' : null }`}></Apple>
                <Apple  className={`appleBasket7 ${onVisible ? 'basketApple' : null }`}></Apple>
            </div>
            }
            <img src={BasketSvg}
                alt="basket"
                className='paddingBasket'
                width={'14%'}
            />
        </div>
    );
}

export default Basket;
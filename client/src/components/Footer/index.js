import React from 'react'
import './styles.scss';

export default function Footer() {
    return (
        <div className='footer'>
            <ul className='links'>
                <li>Về Chúng Tôi</li>
                <li onClick={()=>window.open("https://www.facebook.com/pvml.long/",'_blank')}>Liên Hệ</li>
                <li>Khiếu Nại</li>
                <li>Mua QuaGiang Coin</li>
              
            </ul>
            <div className='copyright'>@ 2020 QUAGIANG APP</div>
        </div>
    )
}

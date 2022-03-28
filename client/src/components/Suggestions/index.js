import React from 'react'
import './styles.scss';
import Profile from '../Profile';

export default function Suggestions() {
    return (
        <div className='suggestions'>
            <div className='titleContainer'>
                <div className='title'>
                    Gợi ý cho bạn
                </div>
                <a href='/'>Xem tất cả</a>
            </div>
            <Profile
                username='Mai Văn Đông'
                caption='Theo dõi bởi Long + 3 người khác'
                urlText="Theo dõi"
                iconSize='medium'
                captionSize='small'
                storyBorder={true}/>
            <Profile
                username="Đinh Quang Linh"
                caption='Theo dõi bởi Long + 3 người khác'
                urlText="Theo dõi"
                iconSize='medium'
                captionSize='small'
                storyBorder={true}/>
            <Profile
                username="Ngô Quý Hiếu"
                caption='Theo dõi bởi Long + 3 người khác'
                urlText="Theo dõi"
                iconSize='medium'
                captionSize='small'
                storyBorder={true}/>
        </div>
    )
}

import "./styles.scss";
import React from 'react'
import {ReactComponent as NewMassage} from "../../images/newMassage.svg";
import Avatar from '../../images/avatar.jpg'
import Avatar1 from '../../images/avatar2.jpg'
import Profile from '../Profile';
import { useHistory } from 'react-router-dom';

export default function CardMessageLeft() {
    const history = useHistory();
    return (
        <div className='cardMessageLeft'>
            <div className='header'>
                <div className='title'>
                    Nguyễn Văn Long
                </div>
                <NewMassage className='icon'></NewMassage>
            </div>
            <div className='listMessage'>
                <div onClick={()=>history.push ('/messenger?name=Phan Võ Mai Nhi&id=61a3a79b6d685eaea41a3744')}>
                    <Profile username='Phan Võ Mai Nhi' caption="..." iconSize='big' image={Avatar}></Profile>
                </div>
                <Profile username='Mai Văn Đông' caption="Mai mình qua á" iconSize='big' image={Avatar1}></Profile>
                <Profile username='Ngô Quý Hiếu' caption="Nhớ đón đúng giờ" iconSize='big' image={Avatar}></Profile>
                <Profile username='Bùi Tấn Lâm' caption="ok bạn" iconSize='big' image={Avatar1}></Profile>
            </div>
        </div>
    )
}

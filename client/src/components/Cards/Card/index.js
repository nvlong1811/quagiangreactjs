import React from 'react';
import {ReactComponent as CardButton} from '../../../images/cardButton.svg';
import CardMenu from "../../CardMenu";
import Map from '../../MapView';
import Profile from '../../Profile';
import './styles.scss';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import clockIcon from '../../../images/clock.png'
import moneybagIcon from '../../../images/moneybag.png'
import moment from 'moment';


export default function Card(props) {
    const key = 'AIzaSyA3bHkOkYHJxbASjCcEOpkx_EtsDXynk0Y';
    const {
        data, me, footer
    } = props;
    console.log("footer", footer)
    return (
        <div className='card'>
            <header>
                {/* <div onClick={()=>window.location.href = `/profile?id=${_id}`}> */}
                <Profile
                    iconSize="medium"
                    storyBorder={true}
                    username={data.author.name}
                    caption={moment(data.createdAt).fromNow()}></Profile>
                {/* </div> */}
                <CardButton className='cardButton'></CardButton>
            </header>
            <div className='findDriveBox'>
                <FormControlLabel
                    value="end"
                    control={<Checkbox checked = {
                        data.findDrive
                    } />}
                    label="Tìm tài xế"
                    labelPlacement="end"/>
                <FormControlLabel
                    value="end"
                    control={<Checkbox checked = {
                        !data.findDrive
                    } />}
                    label="Tìm yên sau"
                    labelPlacement="end"/>

            </div>
            <div className='timeBox'>
                <img className='clock' src={clockIcon}></img>
                <span>Thời gian: {moment(data.date).format('L')} - {moment(data.time).format('LT')} </span>
                <img className='cost' src={moneybagIcon}></img>
                <strong >${data.money}</strong>
            </div>
            <div className='note'>
                <span>Ghi chú: {data.note}</span>
            </div>
            <Map
                positions={data.positions}
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`}
                loadingElement={<div style = {{ height: `100%` }}/>}
                containerElement={<div style = {{ height: `55vh`, margin: `auto`, border: '1px solid black' }}/>}
                mapElement={<div style = {{ height: `100%` }}/>
                }
            />
            {
                !footer ? (<></>) : (<CardMenu me= {me} data={data}></CardMenu>)
            }
            
        </div>
    )
}

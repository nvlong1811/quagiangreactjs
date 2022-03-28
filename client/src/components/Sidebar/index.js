import React from 'react';
import './styles.scss';
import Sticky from 'react-sticky-el';
import Profile from '../Profile';
import Suggestions from '../Suggestions';
import Footer from '../Footer'
import Avatar from '../../images/avatar.jpg'
import { useDispatch, useSelector } from "react-redux";
import { meState$ } from '../../redux/selectors';

export default function Sidebar() {
    const user = useSelector(meState$);
    const [me, setMe] = React.useState()
    React.useEffect(()=>{
        setMe(user.data)
      },[user])
    return (
            <Sticky topOffset={-80}>
                <div className='sidebar'>
                    <Profile
                        username={me?.name}
                        caption="abc"
                        urlText="Switch"
                        iconSize='big'
                        image={Avatar}></Profile>
                    <Suggestions />
                    <Footer />
                </div>
            </Sticky>
    )
}

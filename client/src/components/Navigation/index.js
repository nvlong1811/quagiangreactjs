import React from 'react';
import { useHistory } from 'react-router-dom';
import { ReactComponent as Add } from "../../images/add.svg";
import { ReactComponent as Explore } from "../../images/explore.svg";
import { ReactComponent as Home } from "../../images/home.svg";
import { ReactComponent as Inbox } from "../../images/inbox.svg";
import image from '../../images/profile.jpg';
import quagianglogo from '../../images/quagiangLogo.png';
import searchIcon from '../../images/searchIcon.png';
import ProfileIcon from '../ProfileIcon';
import SearchBar from '../SearchBar';
import { showModal } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../../redux/actions';
import AddPostModal from "../AddPostModal"
import './styles.scss';
import jwt from 'jsonwebtoken'
import { meState$ } from '../../redux/selectors';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import LogoutIcon from '@mui/icons-material/Logout';
import Notification from '../Notification';
import {Menu, Dropdown} from 'antd';
import {DownOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';

export default function Navigation() {
    const menu = (
        <Menu>
            <Menu.Item key="0">
                <a href="https://www.antgroup.com">1st menu item</a>
            </Menu.Item>
            <Menu.Item key="1">
                <a href="https://www.aliyun.com">2nd menu item</a>
            </Menu.Item>
            <Menu.Divider/>
            <Menu.Item key="3">3rd menu item</Menu.Item>
        </Menu>
    );
    const history = useHistory();
    const dispatch = useDispatch();
    const openAddPostModal = React.useCallback(()=>{
        dispatch(showModal());
    },[dispatch])

    const me = useSelector(meState$);
    React.useEffect(() => {
		const token = localStorage.getItem('token')

		if (token) {
			const user = jwt.decode(token)
			if (!user) {
				localStorage.removeItem('token')
				history.replace('/login')

			} else {
                dispatch(actions.getMe.getMeRequest({_id: user._id}))
			}
		}
        else{
            history.replace('/login')
        }
    }, [dispatch])
    const handleLogOut = () =>{
        localStorage.removeItem('token')
        history.replace('/login')
    }
    return (
        <div className='navigation'>
            <AddPostModal/>
            <div className='container'>
                <img className='logo' src={quagianglogo} alt='instagram logo' onClick={()=>history.push('/')} ></img>
                <div
                    className='search'
                    >
                    <SearchBar></SearchBar>
                </div>
                <div className='menu'>
                    <Home className='icon' color="primary" onClick={()=>history.push('/')} />
                    <Inbox className='icon' color="primary" onClick={()=>history.push('/messenger')}/>
                    <Add className='icon' color="primary" onClick={openAddPostModal}/>
                    <Notification me={me.data}/>
                    <Chip avatar={<ProfileIcon iconSize="small" image={me.data.avatar}/>} 
                        label={me.data.name + " $ " + me.data.money} 
                        variant="outlined" onClick={()=>history.push(`/profile?id=${me.data._id}`)}
                        onDelete={handleLogOut}
                        deleteIcon={<LogoutIcon />} />
                </div>
            </div>
        </div>
    )
}

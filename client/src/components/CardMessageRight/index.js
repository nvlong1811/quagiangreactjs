import "./styles.scss";
import React from 'react'
import {ReactComponent as Details} from "../../images/details.svg";
import image from '../../images/avatar.jpg'
import image2 from '../../images/avatar2.jpg'
import Profile from '../Profile';
import {useLocation} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../../redux/actions';
import { messageState$, meState$} from '../../redux/selectors';
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import ProfileIcon from "../ProfileIcon";
import { Row, Col, Divider, Avatar } from 'antd';
import ScrollToBottom from 'react-scroll-to-bottom';

export default function CardMessageRight() {

    const dispatch = useDispatch();

    const search = useLocation().search;
    const id = new URLSearchParams(search).get('id');
    const name = new URLSearchParams(search).get('name');
    const other = {
        _id: id,
        name: name
    }
    const user = useSelector(meState$);
    const [me, setMe] = React.useState()
    React.useEffect(()=>{
        setMe({
            _id: user.data._id,
            name: user.data.name
        })
      },[user])
    const message = useSelector(messageState$);
    React.useEffect(() => {
        if (me?._id && other?._id){dispatch(actions.getMessage.getMessageRequest({_id1: me?._id, _id2: other?._id }))}
    }, [dispatch, me, id ])
    const { Search } = Input;
    const suffix = (
        <AudioOutlined
          style={{
            fontSize: 16,
            color: '#1890ff',
          }}
        />
      );

      const [chat, setChat] = React.useState("")
      const onSend = React.useCallback(() => {
        const data ={
            message: chat,
            send: me,
            recieve: other
        }
        dispatch(actions.newMessage.newMessageRequest(data));
        setChat("")
    }, [dispatch, other, me])
    return (
        <div className='cardMessageRight'>
            <div className='header'>
            {
                id ? 
                    (<Profile username='Phan Võ Mai Nhi' caption="caption" iconSize='small' image={image}></Profile>)
                :   (<Profile username='Bắt đầu chat ngay' caption="....." iconSize='small' ></Profile>)

            }
                <Details className='icon'></Details>
            </div>
            <div className='listMessage'>
                {id? (
                    <div>
                    {
                        message.data.map((item)=>(
                            <Row justify={item.send._id==me?._id ? "end" : "start"} align="middle">
                                {
                                    item.send._id==me?._id ? (
                                        <>
                                            <h4>{item.message}</h4>
                                            <ProfileIcon iconSize="medium" image={image2}></ProfileIcon>
                                        </>
                                    )
                                    : (
                                        <>
                                            <ProfileIcon iconSize="medium" image={image}></ProfileIcon>
                                            <h4>{item.message}</h4>
                                        </>
                                    )
                                }
                             </Row>
                        ))
                    }
                    </div>
                ):
                (<></>)}
            </div>
            
            <Search
                placeholder="Chat here!!"
                enterButton="Gửi"
                size="large"
                suffix={suffix}
                onSearch={onSend}
                value={chat}
                onChange={(e)=>{
                    setChat(e.target.value);
                    console.log(chat)
                }}
                />
           
        </div>
    )
}

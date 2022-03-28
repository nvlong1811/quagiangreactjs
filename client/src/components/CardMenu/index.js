import React from 'react'
import { ReactComponent as Bookmark } from "../../images/bookmark.svg";
import { ReactComponent as Inbox } from "../../images/inbox.svg";
import { ReactComponent as Notifications } from "../../images/notifications.svg";
import "./styles.scss";
import { Modal, Button, Space } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons'
import moment from 'moment';
import {useDispatch} from "react-redux";
import {updatePost} from '../../redux/actions';
import { useHistory } from 'react-router-dom';

function CardMenu(props) {
    const {
        data,
        me
    } = props
    const history = useHistory();

    const content = (
        <div>
            <div>Điểm đi: {data.positions.from.label}</div>
            <div>Điểm đến: {data.positions.to.label}</div>
            <div>Thời gian: {moment(data.time).format('LT')}</div>
            <div>Ngày: {moment(data.date).format('L')}</div>
            <div>Số tiền phải trả: ${data.money}</div>
        </div>
    )
    function confirm() {
        Modal.confirm({
          title: 'Xác nhận book chuyến đi',
          icon: <ExclamationCircleOutlined />,
          content: content,
          okText: 'Book ngay',
          cancelText: 'Hủy',
          onOk: ()=>handleBook()
        });
      }
    const dispatch = useDispatch();
    const handleBook = React.useCallback(() => {
        const updateData={
            _id: data._id,
            authorBooked: {
                _id: me?._id,
                name: me?.name
            }
        }
        dispatch(updatePost.updatePostRequest(updateData));
    }, [dispatch])
    return (
        <div className="cardMenu">
                <div className='boxMenu' onClick={confirm}>
                    <Notifications className="icon"/>
                    <span>{data?.authorBooked?._id ? "Đã book" : "Book ngay"}</span>
                </div>
                <div className='boxMenu' onClick={()=>history.push('/messenger?name=Phan%20Võ%20Mai%20Nhi&id=61a3a79b6d685eaea41a3744')}>
                    <Inbox className="icon"/>
                    <span>Chat thử</span>
                </div>
                <div className='boxMenu'>
                    <Bookmark className="icon"/>
                    <span>Quan tâm</span>
                </div>
        </div>
    );
}

export default CardMenu;

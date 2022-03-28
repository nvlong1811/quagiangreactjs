import React from 'react'
import {Menu, Dropdown, Modal} from 'antd';
import {ReactComponent as Notifications} from "../../images/notifications.svg";
import ProfileIcon from '../ProfileIcon'
import {Row, Col} from 'antd'
import Avatar from "../../images/avatar.jpg";
import Avatar2 from "../../images/avatar2.jpg";
import { ExclamationCircleOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom';

export default function Notification(props) {
    const history = useHistory();
    const {me} = props
    async function UpdateMoney() {
        const dataMoney = {
            _id: me?._id,
            money: me?.money - 5000
        }
            const response = await fetch('https://qua-giang-app.herokuapp.com/user/update', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataMoney),
            })
    
            const res = await response.json()
    
            if (res) {
                history.push('/profile')
    
            } else {
                alert(res.error)
            }
        }
    const content = (
        <div>
            <div>Điểm đi: Ktx Phía Tây</div>
            <div>Điểm đến: Việt Hàn IT</div>
            <div>Thời gian: </div>
            <div>Ngày: </div>
            <div>Số tiền phải trả: $5000</div>
            <div>Tự động thanh toán sau 24h</div>
        </div>
    )
    function confirm() {
        Modal.confirm({
            title: 'Xác nhận thanh toán chuyến đi',
            icon: <ExclamationCircleOutlined />,
            content: content,
            okText: 'Thanh toán ngay',
            cancelText: 'Hủy',
            onOk: ()=>UpdateMoney()
        });
        }
    const menu = (
        <Menu>
            <Menu.Item key="0">
                <Row onClick={confirm} ><ProfileIcon iconSize='small' image={Avatar}/>Đồng ý thanh toán cho chuyến đi của Phan Võ Mai Nhi</Row>
            </Menu.Item>
            <Menu.Divider/>
            <Menu.Item key="1">
                <Row><ProfileIcon iconSize='small'  image={Avatar2}/>Nguyễn Văn Long đã Book chuyến đi của bạn</Row>
            </Menu.Item>
            <Menu.Divider/>
            <Menu.Item key="2">
                <Row><ProfileIcon iconSize='small' image={Avatar}/>Phan Đông đã tạo chuyến đi mới</Row>
            </Menu.Item>
            <Menu.Divider/>
            <Menu.Item key="3">
                <Row><ProfileIcon iconSize='small' image={Avatar2}/>Bạn có các gợi ý theo dõi mới</Row>
            </Menu.Item>
            <Menu.Divider/>
            <Menu.Item key="4">
                <Row><ProfileIcon iconSize='small' image={Avatar}/>Lời nhắc: chuyến đi của bạn bắt đầu 10:20pm</Row>
            </Menu.Item>
        </Menu>
    );
    return (
            <Dropdown overlay={menu} trigger={['click']} placement="bottomCenter">
                <Notifications className='icon' onClick={e => e.preventDefault()}/>
            </Dropdown>

    )
}

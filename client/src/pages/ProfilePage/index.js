import React, { Component } from "react";
import "./meprofile.css";
import { Row, Col, Avatar, Tabs, Button, List, Empty, Spin, Modal, Input} from "antd";
import Navigation from "../../components/Navigation";
import { Rate } from 'antd';
import Card from '../../components/Cards/Card'
import { useDispatch, useSelector } from "react-redux";
import { meState$ } from '../../redux/selectors';
import ChuyenKhoan from "../../images/chuyenkhoan.png";
import Momo from "../../images/momo.png";
import * as actions from '../../redux/actions';

const desc = ['quá tệ', 'tệ', 'bình thường', 'tốt', 'tuyệt vời'];
const TabPane = Tabs.TabPane;
export default function ProfilePage() {
  const [visible, setVisible] = React.useState(false);
  const [visible1, setVisible1] = React.useState(false);
  const [visible2, setVisible2] = React.useState(false);
  const user = useSelector(meState$);
  const [me, setMe] = React.useState()
  const [postData, setPostData] = React.useState()
  const [bookedData, setbookedData] = React.useState()
  const [money, setMoney] = React.useState()
  const dispatch = useDispatch();

  React.useEffect(()=>{
    setMe(user.data);
    setPostData(user.postData);
    setbookedData(user.bookedData)
  },[user])
  async function Payment() {
    const dataMoney = {
        _id: me?._id,
        moneyUpdate: money,
        money: me?.money
    }
		const response = await fetch('https://qua-giang-app.herokuapp.com/user/payment', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(dataMoney),
		})

		const res = await response.json()

		if (res) {
			window.open(res,'_blank');
      // window.location.reload();
      dispatch(actions.getMe.getMeRequest({_id: me?._id}))


		} else {
			alert(res.error)
		}
	}
    return (
      <>
      <Navigation/>
      <div className="profile-container">
        <Row>
          <Col span={24}>
            <div className="user-details">
              <Row>
                <Col span={5}>
                  <div className="user-avatar">
                    <Spin
                      spinning={false}
                      tip="Uploading..."
                    >
                      <Avatar
                        src='https://scontent.fdad2-1.fna.fbcdn.net/v/t1.6435-9/125474585_1340373139630008_4703567613410969473_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_ohc=08NAXtkjrcoAX9fJ4eK&_nc_ht=scontent.fdad2-1.fna&oh=00_AT-Ei3uNZorOMxIVbigwiAk8pxMzKtSMFlu--5z3AwhAwg&oe=61F8F381'
                        className="user-avatar-circle"
                        onClick={{}}
                      />
                    </Spin>
                  </div>
                </Col>
                <Col span={18}>
                  <Row>
                    <Col span={14}>
                      <h1 className="username">
                        {me?.name}
                      </h1>
                    </Col>
                    <Col span={1}>
                      <Button className="edit-profile">Thay đổi thông tin</Button>
                    </Col>
                    {/* <Col span={11}>
                      <Icon
                        className="setting"
                        type="setting"
                        onClick={{}}
                      />
                    </Col> */}
                  </Row>
                  <Row>
                    <Col span={24}>
                      <List
                        grid={{ gutter: 2, column: 3 }}
                        split={false}
                        dataSource={[
                          {
                            content: (
                              <span>
                                <span
                                  style={{ fontWeight: 700, marginRight: 5 }}
                                >
                                  {postData?.length}
                                </span>
                                chuyến đi
                              </span>
                            )
                          },
                          {
                            content: (
                              <span>
                                <span
                                  style={{ fontWeight: 700, marginRight: 5 }}
                                >
                                  2
                                </span>
                                người theo dõi
                              </span>
                            ),
                            // onClick: this.handleFollowersClick,
                            className: "pointer"
                          },
                          {
                            content: (
                              <span>
                                <span
                                  style={{ fontWeight: 700, marginRight: 5 }}
                                >
                                  3
                                </span>
                                đang theo dõi
                              </span>
                            ),
                            // onClick: this.handleFollowingClick,
                            className: "pointer"
                          }
                        ]}
                        renderItem={item => (
                          <List.Item
                            className={item.className}
                            onClick={item.onClick}
                          >
                            {item.content}
                          </List.Item>
                        )}
                      />
                    </Col>
                  </Row>
                      <h3>Tài khoản: ${me?.money}</h3>
                      <Button className="edit-profile" onClick={()=>{setVisible(true)}} >Nạp thêm</Button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Tabs
              animated={true}
              tabBarStyle={{
                textAlign: "center",
                borderTop: "1px solid #e8e8e8",
                borderBottom: 0,
                color: "#999"
              }}
            >
              <TabPane
                tab={
                  <span>
                    {/* <Icon type="table" /> */}
                    CHUYẾN ĐI
                  </span>
                }
                key="1"
              >
                {postData?.length != 0 ? postData?.map((post) => (
                    <Card
                        data = {post}
                        me={me}
                        footer={false}
                    ></Card>
                )): (
                  <Empty
                  image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
                  description={
                    <span>
                      Người dùng chưa tạo chuyến đi nào
                    </span>
                  }
                />
                )}
              </TabPane>
              <TabPane
                tab={
                  <span>
                    {/* <Icon type="save" /> */}
                    ĐÃ BOOK
                  </span>
                }
                key="2"
              >
                {bookedData?.length != 0 ? bookedData?.map((booked) => (
                    <Card
                        data = {booked}
                        me={me}
                        footer={false}
                    ></Card>
                )): (
                  <Empty
                  image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
                  description={
                    <span>
                      Người dùng chưa book chuyến đi nào
                    </span>
                  }
                />
                )}
              </TabPane>
              <TabPane
                tab={
                  <span>
                    ĐÁNH GIÁ
                  </span>
                }
                key="3"
              >
                <Empty
                  image="https://cdn.tgdd.vn/hoi-dap/1370564/200-hinh-nen-powerpoint-cute-sieu-de-thuong-day-phong-cach%20(42)-800x450.jpg"
                  description={
                    <span>
                        <Rate tooltips={desc} onChange={{}} value={5} />
                          {5 ? <span className="ant-rate-text">{desc[5 - 1]}</span> : ''}
                    </span>
                  }
                />
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </div>
      <Modal
        title="Nạp thêm tiền vào Quá Giang App"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        footer={null}
      >
        <Row>
          <Col span={12}>
            <h2>Chuyển khoản</h2>
            <img className="iconPayment" src={ChuyenKhoan} onClick={()=>{setVisible(false); setVisible1(true)}}></img>
          </Col>
          <Col span={12}>
            <h2>Ví Momo</h2>
            <img className="iconPayment" src={Momo} onClick={()=>{setVisible(false); setVisible2(true)}}></img>
          </Col>
        </Row>
      </Modal>
      <Modal
        title="Nạp thêm tiền vào Quá Giang App"
        centered
        visible={visible1}
        onOk={() => setVisible1(false)}
        onCancel={() => setVisible1(false)}
      >
            <h2>Chuyển khoản với nội dung sau:</h2>
            <br></br>
            <strong>Ngân hàng: BIDV</strong>
            <br></br>
            <strong>Số Tài Khoản: 5610005658</strong>
            <br></br>
            <strong>Chủ tài khoản: NGUYEN VAN LONG</strong>
            <br></br>
            <strong>Nội dung: N45752</strong>
      </Modal>
      <Modal
        title="Nạp thêm tiền vào Quá Giang App"
        centered
        visible={visible2}
        onOk={() => {setVisible2(false); Payment()}}
        onCancel={() => setVisible2(false)}
      >
            <h2>Thanh toán bằng ví Momo:</h2>
            <br></br>
            <strong>Số tiền: 
              <Input placeholder="$" value={money} onChange={(e) => { setMoney(e.target.value)}} /></strong>
      </Modal>
      </>
    );
  
}


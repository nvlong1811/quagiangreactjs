import React, { useState } from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import Button from '@mui/material/Button';
import { Modal, Input  } from 'antd';
// Generate Order Data
function createData(id, date, name, email, location, age, money) {
  return { id, date, name, email, location, age, money};
}


function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const [data, setData] = useState(10000)

  const rows = [
    createData(
      0,
      '16 Mar, 2019',
      'Phan Võ Mai Nhi',
      'nhicute@gmail.com',
      'Đà Nẵng',
      20,
      100000
    ),
    createData(
      1,
      '16 Mar, 2019',
      'Bùi Tấn Lâm',
      'lammdsd@gmail.com',
      'Đà Nẵng',
      20,
      100400
    ),
    createData(
      2,
      '16 Mar, 2019',
      'Phan Thanh Nhàn',
      'lammdsd@gmail.com',
      'Đà Nẵng',
      20,
      100400
    ),
    createData(
      3,
      '16 Mar, 2019',
      'NGô Văn Quý',
      'quytaytod@gmail.com',
      'Đà Nẵng',
      20,
      data
    ),
  ];
  return (
    <React.Fragment>
      <Title>Người dùng</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Ngày tạo</TableCell>
            <TableCell>Tên</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Tài khoản</TableCell>
            <TableCell>Địa Điểm</TableCell>
            <TableCell>Tuổi</TableCell>
            <TableCell align="right">Chức năng</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{`$${row.money}`}</TableCell>
              <TableCell>{row.location}</TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell align="right">
                <Button variant="outlined" onClick={showModal}>Sửa</Button>
                <Button variant="outlined">Xóa</Button>
                <Button variant="outlined">Khóa</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        Xem thêm
      </Link>
      <Modal title="Update User" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Tên<Input value="NGô Văn Quý" /></p>
        <p>Email<Input value="quytaytod@gmail.com" /></p>
        <p>Địa điểm<Input value="Đà Nẵng" /></p>
        <p>Tài khoản<Input value={data} onChange={(e)=>setData(e.target.value)} /></p>
      
      </Modal>
    </React.Fragment>
  );
}

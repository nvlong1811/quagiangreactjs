import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, from, to, amount, appGet) {
  return { id, date, name, from, to, amount, appGet };
}

const rows = [
  createData(
    0,
    '16 Mar, 2019',
    'Phan Võ Mai Nhi',
    'KTX phía tây',
    'Việt Hàn IT',
    5000,
    100
  ),
  createData(
    1,
    '16 Mar, 2019',
    'Mai Văn Đông',
    'Dãy trọ Khái Đông 4',
    'Việt Hàn IT',
    2000,
    40
  ),
  createData(
    2,
    '16 Mar, 2019',
    'Bùi Tấn Lâm',
    'Lưu Đình Chất',
    'Việt Hàn IT',
    1000,
    20
  ),
  createData(
    3,
    '16 Mar, 2019',
    'NGô Văn Quý',
    'Cầu Rồng',
    'Việt Hàn IT',
    10000,
    200
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Các chuyến đi</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Ngày</TableCell>
            <TableCell>Người tạo</TableCell>
            <TableCell>Điểm đi</TableCell>
            <TableCell>Điểm đến</TableCell>
            <TableCell>Giá tiền</TableCell>
            <TableCell align="right">Thực nhận (2%)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.from}</TableCell>
              <TableCell>{row.to}</TableCell>
              <TableCell>{`$${row.amount}`}</TableCell>
              <TableCell align="right">{`$${row.appGet}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        Xem thêm
      </Link>
    </React.Fragment>
  );
}

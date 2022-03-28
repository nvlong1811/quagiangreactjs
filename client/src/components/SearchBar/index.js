import React from 'react'
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../../redux/actions';
const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

export default function SearchBar() {
  const dispatch = useDispatch();
  const [data, setData] = React.useState("")

  const onSearch = React.useCallback(() => {
    dispatch(actions.getPosts.getPostsRequest({key: data}));

  }, [dispatch, data])

  return (
    <Search placeholder="Tìm kiếm gần đây" onSearch={onSearch} onChange={(e)=>{setData(e.target.value)}} style={{ width: 200 }} />
  )
}

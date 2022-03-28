import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../../redux/actions';
import { postsState$, meState$} from '../../redux/selectors';
import Card from './Card';
import './styles.scss';

export default function Cards() {
    const dispatch = useDispatch();
    const posts = useSelector(postsState$);
    React.useEffect(() => {
        dispatch(actions.getPosts.getPostsRequest({key: ""}))
    }, [dispatch])
    const user = useSelector(meState$);
    const [me, setMe] = React.useState()
    React.useEffect(()=>{
        setMe(user.data)
      },[user])
    return (
        <div className="cards">
            {   posts.err ? console.error("Loi",posts.err) :
                posts?.data.map((post) => (
                    <Card
                        data = {post}
                        me={me}
                        footer={true}
                    ></Card>
                ))
            }
           
        </div>
    )
}

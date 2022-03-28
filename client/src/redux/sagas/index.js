import { takeLatest, call, put} from "redux-saga/effects";
import * as actions from '../actions';
import * as api from '../../api';

function* fetchPostSaga(action) {
    try {
        const posts = yield call(api.fetchPosts, action.payload);
        yield put(actions.getPosts.getPostsSuccess(posts.data));
    } catch (err) {
        yield put(actions.getPosts.getPostsFailure(err))
    }
}
function* createPostSaga(action) {
    try {
        const post = yield call(api.createPost, action.payload);
        yield put(actions.createPost.createPostSuccess(post.data));
    } catch (err) {
        yield put(actions.createPost.createPostFailure(err))
    }
}
function* updatePostSaga(action) {
    try {
        const updatePost = yield call(api.updatePost, action.payload);
        yield put(actions.updatePost.updatePostSuccess(updatePost.data));
    } catch (err) {
        yield put(actions.updatePost.updatePostFailure(err))
    }
}
function* deletePostSaga(action) {
    try {
        const deletePost = yield call(api.deletePost, action.payload);
        yield put(actions.deletePost.deletePostSuccess(deletePost.data));
    } catch (err) {
        yield put(actions.deletePost.deletePostFailure(err))
    }
}
function* getMeSaga(action) {
    try {
        const me = yield call(api.getMe, action.payload);
        yield put(actions.getMe.getMeSuccess({me: me.data.user, post: me.data.post, booked: me.data.booked}));
    } catch (err) {
        yield put(actions.getMe.getMeFailure(err))
    }
}
function* getMessageSaga(action) {
    try {
        const message = yield call(api.getMessage, action.payload);
        yield put(actions.getMessage.getMessageSuccess(message.data));
    } catch (err) {
        yield put(actions.getMessage.getMessageFailure(err))
    }
}
function* newMessageSaga(action) {
    try {
        const message = yield call(api.newMessage, action.payload);
        yield put(actions.newMessage.newMessageSuccess(message.data));
    } catch (err) {
        yield put(actions.newMessage.newMessageFailure(err))
    }
}
function* mySaga(){
    yield takeLatest(actions.getPosts.getPostsRequest, fetchPostSaga )
    yield takeLatest(actions.createPost.createPostRequest, createPostSaga )
    yield takeLatest(actions.updatePost.updatePostRequest, updatePostSaga )
    yield takeLatest(actions.deletePost.deletePostRequest, deletePostSaga )
    yield takeLatest(actions.getMe.getMeRequest, getMeSaga )
    yield takeLatest(actions.getMessage.getMessageRequest, getMessageSaga )
    yield takeLatest(actions.newMessage.newMessageRequest, newMessageSaga )
}
export default mySaga;
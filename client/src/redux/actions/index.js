import { createAction, createActions } from 'redux-actions';
export const getType = (reduxAction)=>{
    return reduxAction().type;
}

export const getPosts = createActions({
    getPostsRequest: (payload) => payload,
    getPostsSuccess: (payload) => payload,
    getPostsFailure : (err) => err,
});
export const createPost = createActions({
    createPostRequest: (payload) => payload,
    createPostSuccess: (payload) => payload,
    createPostFailure : (err) => err,
});
export const updatePost = createActions({
    updatePostRequest: (payload) => payload,
    updatePostSuccess: (payload) => payload,
    updatePostFailure : (err) => err,
});
export const deletePost = createActions({
    deletePostRequest: (payload) => payload,
    deletePostSuccess: (payload) => payload,
    deletePostFailure : (err) => err,
});
export const getMe = createActions({
    getMeRequest: (payload) => payload,
    getMeSuccess: (payload) => payload,
    getMeFailure : (err) => err,
});
export const updateUser = createActions({
    updateUserRequest: (payload) => payload,
    updateUserSuccess: (payload) => payload,
    updateUserFailure : (err) => err,
});
export const getMessage = createActions({
    getMessageRequest: (payload) => payload,
    getMessageSuccess: (payload) => payload,
    getMessageFailure : (err) => err,
});
export const newMessage = createActions({
    newMessageRequest: (payload) => payload,
    newMessageSuccess: (payload) => payload,
    newMessageFailure : (err) => err,
});

export const showModal = createAction('SHOW_CREATE_POST_MODAL');
export const hideModal = createAction('HIDE_CREATE_POST_MODAL');

export const ADD_BOOKMARK = "ADD_BOOKMARK";
export const REMOVE_BOOKMARK = "REMOVE_BOOKMARK";
export const NOTIFY = "NOTIFY";
export const ENQUEUE_NOTIFICATION = 'ENQUEUE NOTIFICATION';
export const DEQUEUE_NOTIFICATION = 'DEQUEUE NOTIFICATION';

export const addBookmark = (id) => {
    return {
        type: ADD_BOOKMARK,
        payload: {
            id
        }
    }
}

export const removeBookmark = (id) => {
    return {
        type: REMOVE_BOOKMARK,
        payload: {
            id
        }
    }
}

export const notify = (message, dismissTime = 5000) => dispatch => {
    dispatch(enqueueNotification(message, dismissTime))
    setTimeout(()=> {
        dispatch(dequeueNotification())
    }, dismissTime)
}

export const enqueueNotification = (message, dismissTime) => {
    return {
        type: ENQUEUE_NOTIFICATION,
        payload: {
            message,
            dismissTime
        }
    }
}

export const dequeueNotification = () => {
    return {
        type: DEQUEUE_NOTIFICATION
    }
}
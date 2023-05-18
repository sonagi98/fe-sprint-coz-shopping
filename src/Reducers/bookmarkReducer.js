import { ADD_BOOKMARK, REMOVE_BOOKMARK } from "../actions";

const bookmarkReducer = (state, action) => {
    switch(action.type) {
        case ADD_BOOKMARK:
            return
        
        case REMOVE_BOOKMARK:
            return

        default:
            return state;
    }
}

export default bookmarkReducer;
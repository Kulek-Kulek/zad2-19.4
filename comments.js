import {ADD_COMMENT} from './actions';
import {REMOVE_COMMENT} from './actions';
import {THUMB_UP__COMMENT} from './actions';
import {THUMB_DOWN_COMMENT} from './actions';


function comments(state = [], action) {
    switch(action.type) {
        case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text,
                votesUp: 0,
                votesDown: 0
            }
            , ...state];
        
        case REMOVE_COMMENT:
            return state.comments.filter(comment => comment.id !==action.id);
        
        case THUMB_UP_COMMENT:
            return state.map(comment => {
                if(comment.id === action.id) {
                return {...comment, votesUp: comment.votesUp + 1}
                }
            return comment;
            });
        
        case THUMB_DOWN_COMMENT:
            return state.map(comment => {
                if(comment.id === action.id) {
                return {...comment, votesDown: comment.votesDown - 1}
                }
            return comment;
            });
        default:
            return state;
    }
}

export default comments;
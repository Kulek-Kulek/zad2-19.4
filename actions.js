import uuid from uuid;


const ADD_COMMENT = 'ADD_COMMENT';

function addComment(text){
	return {
    	type: ADD_COMMENT,   	
    	text,
    	id: uuid.v4()
	}
}

const boundAddComment = text => dispatch(addComment(text));




const EDIT_COMMENT = 'EDIT_COMMENT';

function editComment(text){
	return {
    	type: EDIT_COMMENT,   	
    	text,
    	id: 20
	}
}
const boundEditComment = text => dispatch(editComment(text));



const REMOVE_COMMENT = 'REMOVE_COMMENT';

{
    type: REMOVE_COMMENT,
    id
}

const boundRemoveComment = id => dispatch(removeComment(id));




const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';

{
	type: THUMB_UP_COMMENT,
	id,   //komentarz pod którym pojawi się łapka
	img: src='https:// emoticon thumb up'
}

const boundThumbUpComment = (id) => dispatch(thumbUpComment(id));


const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

{
	type: THUMB_UP_COMMENT,
	id //komentarz pod którym pojawi się łapka
	img: src='https:// emoticon thumb down'
}

const boundThumbDownComment = (id) => dispatch(thumbDownComment(id));
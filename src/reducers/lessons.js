const initialState = [
];

export default function lessons( state=[], action ){
    if( action.type == 'LOAD_LESSONS' ){
        console.log(action)
        return action.lessons
    }

    return state;
}
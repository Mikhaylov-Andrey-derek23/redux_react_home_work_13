export default function students( state=[], action ){
    if( action.type == 'LOAD_STUDENTS' ){
        return action.students
    }else if(action.type =='ADD_STUDENT'){
        return [...state, action.name]
    }

    return state;
}
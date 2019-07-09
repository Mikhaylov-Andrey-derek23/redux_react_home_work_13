export default function teachers(state=[], action){
    if( action.type == 'ADD_TEACHER' ){
        return [...state, action.name];    
    }else if( action.type == 'SORT_TEACHERS' ){
        const teachers = [...state];

        return teachers.sort();
    }
    return state;
}
const initialState = [
];

export default function courses(state=initialState, action){
    if( action.type == 'ADD_COURSE' ){
        return [...state, action.data];
    }else if( action.type == 'DELETE_COURSE' ){
        const myState = [...state];
        console.log(myState);

        myState.forEach((stateItem, stateKey)=>{
            if( stateItem == action.name ){
                myState.splice(stateKey, 1);
            }
        });

        return myState;
    }else if(action.type=='LOAD_COURSES'){
        console.log(action);
        return action.courses
    }

    return state;
}
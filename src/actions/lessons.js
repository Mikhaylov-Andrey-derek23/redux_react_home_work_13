export const getLessons = ()=>{
    return dispatch=>{
        fetch('/api/lessons.json').
        then(response=>{
            return response.json();
        }).
        then(data=>{
            dispatch({
                type: 'LOAD_LESSONS',
                lessons: data.lessons
            })
        });
    }

}
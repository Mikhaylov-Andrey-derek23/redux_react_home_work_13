export const getCourses = ()=>{
    return dispatch=>{
        fetch('/api/courses.json').
        then(response=>{
            return response.json();
        }).
        then(data=>{
            dispatch({
                type: 'LOAD_COURSES',
                courses: data.courses
            })
        });
    }

}
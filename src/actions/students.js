export const getStudents = ()=>{
    return dispatch=>{
        fetch('/api/students.json').
        then(response=>{
            return response.json();
        }).
        then(data=>{
            dispatch({
                type: 'LOAD_STUDENTS',
                students: data.students
            })
        });
    }

    // return dispatch=>{
    //     setTimeout(()=>{
    //         console.log('load students');
    //         dispatch({
    //             type: 'LOAD_STUDENTS',
    //             students:[
    //                 'Иван Иванов',
    //                 'Максим Максимов',
    //                 'Ольга Ольгова'
    //             ]
    //         });
    //     }, 2000);    
    // }
}
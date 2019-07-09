import React from 'react';

class FormAddStudents extends React.Component{
    addStudents(e){
        this.props.addStudents(e)
    }

    render(){
       return(
        <form onSubmit={(e)=>this.addStudents(e)}>
            <input type="text" name="name"/>
            <select name="courseId">
                {this.props.courses.map(courseItem=>
                    <option value={courseItem.id}>{courseItem.name}</option>    
                )}
            </select>
            <button typr="submit">Add student</button>
        </form>
       )
      
    }
}
export default FormAddStudents
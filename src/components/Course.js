import React from 'react';

class Courses extends React.Component{
    
    render(){
     
        return(
            <div className="CourseItem">
                <p>{this.props.courses.name}</p>
            </div>
        )
    }
}
export default Courses 
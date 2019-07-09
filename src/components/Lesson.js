import React from 'react';

class Lesson extends React.Component{
    render(){
        return(
            <div>{this.props.lesson.topic}</div>
        )
    }
}
export default Lesson
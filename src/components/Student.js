import React from 'react';

class Student extends React.Component{
    render(){
        return(
            <div>
                
                <p><img src={this.props.stud.img} alt={this.props.stud.name} width="100"></img> {this.props.stud.name}</p>
                
            </div>
        )
    }
}
export default Student 
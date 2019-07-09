import React from 'react';
import {connect} from 'react-redux';
import {getCourses} from './actions/courses';
import Course from './components/Course'
import Lesson from './components/Lesson'
import Student from './components/Student'
import FormAddStudents from './components/FormAddStudents'
import {getLessons} from './actions/lessons';
import {getStudents} from './actions/students';

class App extends React.Component{
    handlerClick(){
        this.props.addCourse('web');
    }
    handlerSubmit(e){
        e.persist(); //техническая деталь, для того, чтобы event-объект был "нормальным"
        e.preventDefault();

        let inputValue = e.target.querySelector('input').value; //дальше мы пройдем рефы, это будет более красиво сделано
        
        this.props.addCourse(inputValue);
    }
    liClick(e){
        this.props.deleteCourse(e.target.textContent);
        console.log(e.target.textContent);
    }
    handlerTeacherSubmit(e){
        e.persist();
        e.preventDefault();
        let inputValue = e.target.querySelector('input').value;

        this.props.addTeacher(inputValue);
    }
    sortTeachers(e){
        this.props.sortTeachers();
    }
    loadStudents(){
        this.props.onLoadStudents();
    }
    addStudents(e){
        e.persist();
        e.preventDefault();
        let student = {"img": "/img/4.jpg"}
        student.name = e.target.querySelector("input").value;
        student.courseId = [parseInt(e.target.querySelector("select").value)];
        console.log(student);
        this.props.addStudent(student);
    }

    componentDidMount(){
        this.props.onLoadData();
    }
    render(){
        // {this.props.students.filter(stydentItem=> stydentItem.courseId.filter(id=>id == val.id).length > 0).map(stydentItem=>
        //     <p>{stydentItem.name}</p>)}
        console.log(this.props);
        return(
            <div>
                
                <ol>
                    {this.props.courses.map(val=>
                            <li>
                                <Course courses={val}/>
                                <ol>
                                    {this.props.lessons.filter(lessonItem=> lessonItem.courseId==val.id).map(el=>
                                        <Lesson lesson={el}/>
                                    )}
                                    {/* {this.props.students.filter(val=> students)}
                                    <Student/> */}
                                </ol>
                                <h4>Students:</h4>
                                <ol>
                                {this.props.students.filter(studentItem=> studentItem.courseId.filter(id=>id == val.id).length > 0).map(studentItem=>
                                <Student stud = {studentItem}/>)}
                                </ol>
                            </li>
                    )}
                </ol>
               

                <FormAddStudents courses={this.props.courses} addStudents={(e)=>this.addStudents(e)}/>

            </div>
        )
    }
}


export default connect(
    state=>({
        courses:  state.courses,
        teachers: state.teachers,
        students: state.students,
        lessons: state.lessons
    }),
    dispatch=>({
        addCourse:(courseName)=>{
            dispatch({
                type: 'ADD_COURSE',
                data: courseName
            })
        },
        addTeacher:(teacheName)=>{
            dispatch({
                type: 'ADD_TEACHER',
                name: teacheName
            });
        },
        deleteCourse:(courseName)=>{
            dispatch({
                type:'DELETE_COURSE',
                name: courseName
            })
        },
        sortTeachers:()=>{
            dispatch({
                type: 'SORT_TEACHERS'
            })
        },
        addStudent: (student) =>{
            dispatch({
                type: 'ADD_STUDENT',
                name : student
            })
        },
        onLoadData: ()=>{
            dispatch(getCourses());
            dispatch(getLessons());
            dispatch(getStudents());
        }
    })
)(App);

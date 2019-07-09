import {combineReducers} from 'redux';
import courses from './courses';
import teachers from './teachers';
import students from './students';
import lessons from './lessons'

export default combineReducers({
    courses,
    teachers,
    students,
    lessons
});

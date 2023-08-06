import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import AddClassroom from '../../Pages/AddClassroom/AddClassroom';
import AddCourse from '../../Pages/AddCourse/AddCourse';
import AddDepartment from '../../Pages/AddDepartment/AddDepartment';
import AddFaculty from '../../Pages/AddFaculty/AddFaculty';
import AddInstructor from '../../Pages/AddInstructor/AddInstructor';
import AddStudent from '../../Pages/AddStudent/AddStudent';
import Timetable from '../../Pages/Timetable/Timetable';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/classroom" element={<AddClassroom />}></Route>
      <Route path="/course" element={<AddCourse />}></Route>
      <Route path="/department" element={<AddDepartment />}></Route>
      <Route path="/faculty" element={<AddFaculty />}></Route>
      <Route path="/instructor" element={<AddInstructor />}></Route>
      <Route path="/student" element={<AddStudent />}></Route>
      <Route path="/timetable" element={<Timetable />}></Route>
    </Routes>
  );
};

export default AppRoutes;

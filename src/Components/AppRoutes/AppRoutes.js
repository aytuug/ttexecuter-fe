import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../Pages/Home';
import AddClassroom from '../../Pages/AddClassroom';
import AddCourse from '../../Pages/AddCourse';
import AddDepartment from '../../Pages/AddDepartment';
import AddFaculty from '../../Pages/AddFaculty';
import AddInstructor from '../../Pages/AddInstructor';
import AddStudent from '../../Pages/AddStudent';

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
    </Routes>
  );
};

export default AppRoutes;

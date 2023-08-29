import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Select } from 'antd';
import axios from 'axios';
import { toast } from 'react-toastify';

const { Option } = Select;

const AddCourse = () => {
  const [instructors, setInstructors] = useState([]);
  const [students, setStudents] = useState([]);
  const config = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST',
    },
  };
  useEffect(() => {
    axios
      .get('http://localhost:8080/api/instructor', config)
      .then((response) => {
        setInstructors(response.data);
      })
      .catch((error) => {
        toast.error('An unexpected error was encountered!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
        console.error('Error fetching instructors:', error);
      });
    axios
      .get('http://localhost:8080/api/student', config)
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        toast.error('An unexpected error was encountered!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
        console.error('Error fetching students:', error);
      });
  }, []);

  const handleSubmit = (values) => {
    const requestData = {
      courseCode: values.courseCode,
      courseName: values.courseName,
      createdDate: new Date().toISOString(),
      updatedDate: new Date().toISOString(),
      courseInstructors: values.courseInstructors.map((instructorId) => ({
        instructor: {
          id: instructorId,
        },
        validityStartDate: new Date().toISOString(),
        validityEndDate: new Date().toISOString(),
      })),
      courseStudents: values.courseStudents.map((studentId) => ({
        student: {
          id: studentId,
        },
        validityStartDate: new Date().toISOString(),
        validityEndDate: new Date().toISOString(),
      })),
    };

    console.log(JSON.stringify(requestData));
    axios
      .post('http://localhost:8080/api/course', requestData, config)
      .then((response) => {
        console.log('Request successful:', response);
        toast.success('Course Added!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      })
      .catch((error) => {
        console.error('Error sending request:', error);
        toast.error('An unexpected error was encountered!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      });
  };

  return (
    <div className="form-container">
      <Form onFinish={handleSubmit}>
        {/* Gerekli alanları eklemek için Form.Item kullanabilirsiniz */}
        <Form.Item
          className="form-item"
          label="Course Code"
          name="courseCode"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          className="form-item"
          label="Course Name"
          name="courseName"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          className="form-item"
          label="Course Instructors"
          name="courseInstructors"
          rules={[{ required: true }]}
        >
          {/* İnstructorleri seçmek için Select kullanabilirsiniz */}
          <Select mode="multiple">
            {instructors.map((instructor) => (
              <Option key={instructor.id} value={instructor.id}>
                {instructor.name} {instructor.surname}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          className="form-item"
          label="Course Students"
          name="courseStudents"
          rules={[{ required: true }]}
        >
          {/* Öğrencileri seçmek için Select kullanabilirsiniz */}
          <Select mode="multiple">
            {students.map((student) => (
              <Option key={student.id} value={student.id}>
                {student.name} {student.surname}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item>
          <Button className="submit-button" type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddCourse;

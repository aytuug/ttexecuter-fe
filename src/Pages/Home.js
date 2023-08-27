import {
  Button,
  Card,
  Col,
  Divider,
  Result,
  Row,
  Space,
  Spin,
  Statistic,
  Typography,
} from 'antd';
import React, { useEffect, useState } from 'react';
import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {
  getClassrooms,
  getCourses,
  getDepartments,
  getFaculties,
  getInstructors,
  getStudents,
} from '../services';
import Timetable from './Timetable';
import axios from 'axios';
const Home = () => {
  const [studentCount, setStudentCount] = useState(0);
  const [classroomCount, setClassroom] = useState(0);
  const [courseCount, setCourse] = useState(0);
  const [departmentCount, setDepartmentCount] = useState(0);
  const [facultyCount, setFacultyCount] = useState(0);
  const [instructorCount, setInstructorCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [refreshTimetable, setRefreshTimetable] = useState(false);
  useEffect(() => {
    getStudents().then((res) => {
      const numberOfStudents = res.length;
      setStudentCount(numberOfStudents);
    });
    getClassrooms().then((res) => {
      const numberOfStudents = res.length;
      setClassroom(numberOfStudents);
    });
    getCourses().then((res) => {
      const numberOfStudents = res.length;
      setCourse(numberOfStudents);
    });
    getDepartments().then((res) => {
      const numberOfStudents = res.length;
      setDepartmentCount(numberOfStudents);
    });
    getFaculties().then((res) => {
      const numberOfStudents = res.length;
      setFacultyCount(numberOfStudents);
    });
    getInstructors().then((res) => {
      const numberOfStudents = res.length;
      setInstructorCount(numberOfStudents);
    });
  }, []);
  const allCountsGreaterThanZero =
    studentCount > 0 &&
    classroomCount > 0 &&
    courseCount > 0 &&
    departmentCount > 0 &&
    facultyCount > 0 &&
    instructorCount > 0;

  const handleGenerateClick = async () => {
    if (allCountsGreaterThanZero) {
      try {
        setIsLoading(true);
        axios.get('http://localhost:8080/api/timetable').then(() => {
          setRefreshTimetable(!refreshTimetable);
          setIsLoading(false);
        });
      } catch (error) {
        console.error('Error generating table:', error);
        setIsLoading(false);
      }
    }
  };

  const buttonStyle = {
    width: '300px',
    height: '30px',
    marginTop: '20px',
    marginLeft: '1300px',
    marginBottom: '20px',
  };

  return (
    <Space size={1} direction="vertical">
      <div style={{ marginBottom: '20px', marginTop: '15px' }}>
        {!(
          studentCount > 0 &&
          classroomCount > 0 &&
          courseCount > 0 &&
          departmentCount > 0 &&
          facultyCount > 0 &&
          instructorCount > 0
        ) && (
          <span
            style={{
              color: 'red',
              marginTop: '300px',
              marginRight: '1300px',
            }}
          >
            You can't generate in the system without a classroom, course,
            department, faculty, instructor, student.
          </span>
        )}
        <Button
          type="primary"
          style={{ width: '300px', height: '30px', marginTop: '20px' }} // buttonStyle stilini burada tanımladık
          onClick={handleGenerateClick}
          loading={isLoading}
          disabled={
            !(
              studentCount > 0 &&
              classroomCount > 0 &&
              courseCount > 0 &&
              departmentCount > 0 &&
              facultyCount > 0 &&
              instructorCount > 0
            )
          }
        >
          Generate Table
        </Button>
      </div>
      <Row gutter={2}>
        <Col span={8}>
          <Space className="dashboard-card">
            <DashboardCard
              icon={
                <ShoppingCartOutlined
                  className="dashboard-card-icon"
                  style={{
                    color: 'green',
                    backgroundColor: 'rgba(0,255,0,0.25)',
                    borderRadius: 20,
                    fontSize: 24,
                    padding: 8,
                  }}
                />
              }
              title={'Students'}
              value={studentCount}
            />
          </Space>
        </Col>
        <Col span={8}>
          <Space className="dashboard-card">
            <DashboardCard
              icon={
                <ShoppingOutlined
                  className="dashboard-card-icon"
                  style={{
                    color: 'blue',
                    backgroundColor: 'rgba(0,0,255,0.25)',
                    borderRadius: 20,
                    fontSize: 24,
                    padding: 8,
                  }}
                />
              }
              title={'Classrooms'}
              value={classroomCount}
            />
          </Space>
        </Col>
        <Col span={8}>
          <Space className="dashboard-card">
            <DashboardCard
              icon={
                <UserOutlined
                  className="dashboard-card-icon"
                  style={{
                    color: 'purple',
                    backgroundColor: 'rgba(0,255,255,0.25)',
                    borderRadius: 20,
                    fontSize: 24,
                    padding: 8,
                  }}
                />
              }
              title={'Courses'}
              value={courseCount}
            />
          </Space>
        </Col>
        <Divider dashed style={{ margin: '20px 0' }} />
        <Col span={8}>
          <Space className="dashboard-card">
            <DashboardCard
              icon={
                <DollarCircleOutlined
                  className="dashboard-card-icon"
                  style={{
                    color: 'red',
                    backgroundColor: 'rgba(255,0,0,0.25)',
                    borderRadius: 20,
                    fontSize: 24,
                    padding: 8,
                  }}
                />
              }
              title={'Departments'}
              value={departmentCount}
            />
          </Space>
        </Col>
        <Col span={8}>
          <Space className="dashboard-card">
            <DashboardCard
              icon={
                <DollarCircleOutlined
                  className="dashboard-card-icon"
                  style={{
                    color: 'green',
                    backgroundColor: 'rgba(255,0,0,0.25)',
                    borderRadius: 20,
                    fontSize: 24,
                    padding: 8,
                  }}
                />
              }
              title={'Faculties'}
              value={facultyCount}
            />
          </Space>
        </Col>
        <Col span={8}>
          <Space className="dashboard-card">
            <DashboardCard
              icon={
                <DollarCircleOutlined
                  className="dashboard-card-icon"
                  style={{
                    color: 'grey',
                    backgroundColor: 'rgba(255,0,0,0.25)',
                    borderRadius: 20,
                    fontSize: 24,
                    padding: 8,
                  }}
                />
              }
              title={'Instructors'}
              value={instructorCount}
            />
          </Space>
        </Col>
        <Divider dashed style={{ margin: '20px 0' }} />
      </Row>
      <Timetable refresh={refreshTimetable} />
    </Space>
  );
};

function DashboardCard({ title, value, icon }) {
  return (
    <Card>
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}

export default Home;

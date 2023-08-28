import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Select } from 'antd';
import axios from 'axios';
const { Option } = Select;

const AddInstructor = () => {
  const [departments, setDepartments] = useState([]);

  const config = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST',
    },
  };
  useEffect(() => {
    // Faculty verilerini almak için API isteği
    axios
      .get('http://localhost:8080/api/department')
      .then((response) => {
        setDepartments(response.data); // Gelen veriyi faculties state'ine kaydediyoruz
      })
      .catch((error) => {
        console.error('Error fetching departments:', error);
      });
  }, []);
  const handleSubmit = (values) => {
    // JSON isteğini burada oluşturup gönderebilirsiniz
    const requestData = {
      id: values.id,
      name: values.name,
      surname: values.surname,
      email: values.email,
      createdDate: new Date().toISOString(),
      updatedDate: new Date().toISOString(),
      department: {
        id: values.departmentId,
        // Diğer faculty alanları
      },
    };

    // requestData'ı API'ye göndermek için Axios kullanabilirsiniz
    axios
      .post('http://localhost:8080/api/instructor', requestData, config)
      .then((response) => {
        console.log('Request successful:', response);
      })
      .catch((error) => {
        console.error('Error sending request:', error);
      });
  };

  return (
    <div className="form-container">
      <Form onFinish={handleSubmit}>
        {/* Gerekli alanları eklemek için Form.Item kullanabilirsiniz */}
        <Form.Item
          className="form-item"
          label="Name"
          name="name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          className="form-item"
          label="Surname"
          name="surname"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          className="form-item"
          label="Email"
          name="email"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          className="form-item"
          label="Department"
          name="departmentId"
          rules={[{ required: true }]}
        >
          <Select>
            {departments.map((department) => (
              <Option key={department.id} value={department.id}>
                {department.name}
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

export default AddInstructor;

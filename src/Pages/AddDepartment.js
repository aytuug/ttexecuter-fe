import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Select } from 'antd';
import axios from 'axios';
import { toast } from 'react-toastify';

const { Option } = Select;
const AddDepartment = () => {
  const [faculties, setFaculties] = useState([]);
  const config = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST',
    },
  };
  useEffect(() => {
    // Faculty verilerini almak için API isteği
    axios
      .get('http://localhost:8080/api/faculty')
      .then((response) => {
        setFaculties(response.data); // Gelen veriyi faculties state'ine kaydediyoruz
      })
      .catch((error) => {
        console.error('Error fetching faculties:', error);
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
  }, []);

  const handleSubmit = (values) => {
    // JSON isteğini burada oluşturup gönderebilirsiniz
    const requestData = {
      id: values.id,
      name: values.name,
      createdDate: new Date().toISOString(),
      updatedDate: new Date().toISOString(),
      faculty: {
        id: values.facultyId,
        // Diğer faculty alanları
      },
    };

    // requestData'ı API'ye göndermek için Axios kullanabilirsiniz
    axios
      .post('http://localhost:8080/api/department', requestData, config)
      .then((response) => {
        console.log('Request successful:', response);
        toast.success('Department Added!', {
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
        console.error('Error sending request:', error);
      });
  };
  return (
    <div className="form-container">
      <Form onFinish={handleSubmit}>
        {/* Gerekli alanları eklemek için Form.Item kullanabilirsiniz */}
        <Form.Item
          className="form-item"
          label="Departman Name"
          name="name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          className="form-item"
          label="Faculty"
          name="facultyId"
          rules={[{ required: true }]}
        >
          <Select>
            {faculties.map((faculty) => (
              <Option key={faculty.id} value={faculty.id}>
                {faculty.name}
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

export default AddDepartment;

import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Select, DatePicker } from 'antd';
import axios from 'axios';
import moment from 'moment';
const { Option } = Select;

const AddDepartment = () => {
  const [faculties, setFaculties] = useState([]);
  const [defaultDate, setDefaultDate] = useState(new Date());
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
        <Form.Item
          className="form-item"
          label="Created Date"
          name="createdDate"
        >
          <DatePicker
            showTime
            defaultValue={moment(defaultDate)}
            onChange={(date, dateString) => setDefaultDate(date.toDate())}
          />
        </Form.Item>

        <Form.Item
          className="form-item"
          label="Updated Date"
          name="updatedDate"
        >
          <DatePicker
            showTime
            defaultValue={moment(defaultDate)}
            onChange={(date, dateString) => setDefaultDate(date.toDate())}
          />
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

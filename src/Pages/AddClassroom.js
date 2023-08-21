import React, { useState } from 'react';
import { Form, Input, Button, DatePicker } from 'antd';
import axios from 'axios';

const AddClassroom = () => {
  const [loading, setLoading] = useState(false);
  const config = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST',
    },
  };
  const onFinish = async (values) => {
    try {
      setLoading(true);
      const response = await axios.post(
        'http://localhost:8080/api/classroom',
        values,
        config
      ); // URL'i doğru bir şekilde değiştirin
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="form-container">
      <Form name="basic" initialValues={{ remember: true }} onFinish={onFinish}>
        <Form.Item
          className="form-item"
          label="Classroom Code"
          name="roomCode"
          rules={[{ required: true, message: 'Lütfen adı girin!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          className="form-item"
          label="Capacity"
          name="capacity"
          rules={[{ required: true, message: 'Lütfen kapasiteyi girin!' }]}
        >
          <Input type="number" />
        </Form.Item>

        <Form.Item
          className="form-item"
          label="Created Date"
          name="createdDate"
          rules={[
            { required: true, message: 'Lütfen oluşturulma tarihini girin!' },
          ]}
        >
          <DatePicker showTime />
        </Form.Item>

        <Form.Item
          className="form-item"
          label="Updated Date"
          name="updatedDate"
          rules={[
            { required: true, message: 'Lütfen oluşturulma tarihini girin!' },
          ]}
        >
          <DatePicker showTime />
        </Form.Item>

        <Form.Item>
          <Button
            className="submit-button"
            type="primary"
            htmlType="submit"
            loading={loading}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddClassroom;

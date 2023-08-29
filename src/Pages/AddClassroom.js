import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddClassroom = () => {
  const [loading, setLoading] = useState(false);

  const config = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST',
    },
  };

  const handleSubmit = async (values) => {
    const requestData = {
      roomCode: values.roomCode,
      capacity: values.capacity,
      createdDate: new Date().toISOString(),
      updatedDate: new Date().toISOString(),
    };
    try {
      setLoading(true);
      const response = await axios.post(
        'http://localhost:8080/api/classroom',
        requestData,
        config
      ); // URL'i doğru bir şekilde değiştirin
      console.log('Response:', response.data);
      toast.success('Classroom Added!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    } catch (error) {
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={handleSubmit}
      >
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

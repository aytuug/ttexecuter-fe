import { Button, DatePicker, Form, Input } from 'antd';
import axios from 'axios';
import moment from 'moment';
import React, { useState } from 'react';

const AddFaculty = () => {
  const [loading, setLoading] = useState(false);
  const [defaultDate, setDefaultDate] = useState(new Date());
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
        'http://localhost:8080/api/faculty',
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
          label="Name"
          name="name"
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

export default AddFaculty;

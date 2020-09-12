import React, { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLogIn } from '../action';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const LoginFormBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;

  & h2 {
    font-size: 2.3rem;
    margin-bottom: 50px;
    text-align: center;
  }
`;

const Login = () => {
  const isLogin = useSelector((state) => state.logInReducer.isLogin);
  const dispatch = useDispatch();

  const submitLogin = () => {
    dispatch(setLogIn());
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <LoginFormBlock>
      <h2>Log in</h2>
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={submitLogin}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
              type: 'email',
            },
          ]}
        >
          <Input onChange={handleChangeEmail} value={email} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password onChange={handleChangePassword} value={password} />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button
            style={{ marginRight: '30px' }}
            type="primary"
            htmlType="submit"
          >
            Log in
          </Button>
          <Button type="primary" htmlType="">
            <Link to="/signup">Sign up</Link>
          </Button>
        </Form.Item>
      </Form>
    </LoginFormBlock>
  );
};

export default Login;

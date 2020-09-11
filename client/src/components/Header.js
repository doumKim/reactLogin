import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import { useDispatch, useSelector } from 'react-redux';
import { setLogOut } from '../action';
import styled from 'styled-components';

const { Header } = Layout;

const StyledButton = styled.button`
  background: none;
  outline: none;
  border: none;
`;

const HeaderBlock = () => {
  const isLogin = useSelector((state) => state.logInReducer.isLogin);

  const dispatch = useDispatch();
  return (
    <Header>
      <nav>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/mypage">My page</Link>
          </Menu.Item>

          {isLogin ? (
            <Menu.Item key="4">
              <StyledButton onClick={() => dispatch(setLogOut())}>
                log out
              </StyledButton>
            </Menu.Item>
          ) : (
            <Menu.Item key="3">
              <Link to="/login">log in</Link>
            </Menu.Item>
          )}
        </Menu>
      </nav>
    </Header>
  );
};

export default HeaderBlock;

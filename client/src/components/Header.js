import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import { useDispatch, useSelector } from 'react-redux';
import { setLogOut } from '../action';

const { Header } = Layout;

const HeaderBlock = () => {
  const isLogin = useSelector((state) => state.logInReducer.isLogin);

  const dispatch = useDispatch();
  return (
    <Header style={{ position: 'fixed', top: 0, width: '100%', zIndex: 99 }}>
      <nav>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
          {isLogin ? (
            <Menu.Item key="2">
              <Link to="/mypage">My page</Link>
            </Menu.Item>
          ) : (
            <Menu.Item key="2">
              <Link to="/signup">Sign up</Link>
            </Menu.Item>
          )}

          {isLogin ? (
            <Menu.Item key="3">
              <Link onClick={() => dispatch(setLogOut())} to="/login">
                log out
              </Link>
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

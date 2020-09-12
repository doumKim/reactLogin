import React from 'react';
import styled from 'styled-components';
import MainImg from '../assets/mainImg.jpeg';

const HomeBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 80vh; */
  background: #df7f72;
  & img {
    width: 100%;
  }

  & h2 {
    position: absolute;
    top: 100px;
    color: #fff;
    font-size: 4rem;
  }
`;

const Home = () => {
  return (
    <HomeBlock>
      <h2>HOME</h2>
      <img src={MainImg} alt="강아지" />
    </HomeBlock>
  );
};

export default Home;

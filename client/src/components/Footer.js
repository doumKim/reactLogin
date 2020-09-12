import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
  background: #f0f2f5;
  color: #000;
`;

const Footer = () => {
  return (
    <>
      <StyledFooter>2020 DOUM KIM.</StyledFooter>
    </>
  );
};

export default Footer;

import React from 'react';
import { Descriptions } from 'antd';
import styled from 'styled-components';

const MypageBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 7vw 7vh;
`;

const Mypage = () => {
  return (
    <MypageBlock>
      <div>
        <Descriptions
          title="My page"
          bordered
          column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
        >
          <Descriptions.Item label="이름">홍길동</Descriptions.Item>
          <Descriptions.Item label="이메일">
            example@example.com
          </Descriptions.Item>
          <Descriptions.Item label="주소">
            서울특별시 어딘가구 어디동 여기아파트 101동 101호
          </Descriptions.Item>
          <Descriptions.Item label="가입 일자">
            2020년 9월 12일
          </Descriptions.Item>
          <Descriptions.Item label="기타 정보">기타 정보</Descriptions.Item>
        </Descriptions>
      </div>
    </MypageBlock>
  );
};

export default Mypage;

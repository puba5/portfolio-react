import React from "react";
import styled from "styled-components";

export default function Profile() {
  return (
    <Wrapper>
      <ProfileWrapper>
        <ProfileImg src="https://avatars1.githubusercontent.com/u/37804777?s=460&u=7149adf19dd090ab696ae81f34027649e17ec029&v=4" />
        <ProfileDesc>
          안녕 나는 유현우라고해
          <br />
          홍익대학교 컴퓨터공학과를 2015.03부터 다니고 있고
          <br />
          2021년 2월에 졸업 예정이야
        </ProfileDesc>
      </ProfileWrapper>
      <AwardList>
        <AwardCard>
          <AwardImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQeUaTRBYZhprMS95NCZXPuuA7GoRcP4zur3ewXFA4jHGg2240L&usqp=CAU" />
          <AwardDate>2019.12.12</AwardDate>
          <AwardDesc>KB국민 소프트웨어 경진 대회 특별상</AwardDesc>
        </AwardCard>
        <AwardCard>
          <AwardImg src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Logo_of_hongik_university.jpg" />
          <AwardDate>2019.11.22</AwardDate>
          <AwardDesc>2019 홍익대학교 프로그래밍 경진 대회 은상</AwardDesc>
        </AwardCard>
      </AwardList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 40rem;
  display: flex;
  flex-direction: column;
  font: black;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.16);
  z-index: 5;
  margin-top: 4rem;
  font-size: 0.9rem;
`;
const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const ProfileImg = styled.img`
  width: 14rem;
  height: 14rem;
`;
const ProfileDesc = styled.div`
  display: flex;
  flex-direction: column;
`;

const AwardList = styled.div`
  margin-top: 1rem;
`;

const AwardCard = styled.div`
  display: flex;
  flex-direction: row;
  height: fit-content;
  margin: 0.8rem;
`;
const AwardImg = styled.img`
  width: 3rem;
  height: 3rem;
  margin-right: 1rem;
`;
const AwardDesc = styled.div`
  padding: 0.3rem;
  font-size: 1.2rem;
`;

const AwardDate = styled.p`
  padding: 0.5rem;
  font: red;
`;

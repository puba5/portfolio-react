import React from "react";
import styled from "styled-components";

export default function ProjectCard() {
  return (
    <Wrapper>
      <div>프로젝트 이름</div>
      <div>프로젝트 사진</div>
      <div>프로젝트 설명</div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: white;
  margin-top: 4rem;
  box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.16);
`;

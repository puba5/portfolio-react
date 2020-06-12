import React from "react";
import styled from "styled-components";

import ProjectCard from "./projectCard";

export default function PostCardList() {
  return (
    <Wrapper>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
`;

const Line = styled.div`
  width: 100%;
  height: 0.4rem;
  background-color: lightGrey;
`;

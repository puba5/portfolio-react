import React from "react";
import styled from "styled-components";

export default function Navigator() {
  return (
    <Wrapper>
      <MoveMenu href="#profile">Profile</MoveMenu>
      <MoveMenu href="#project">Project</MoveMenu>
      <MoveMenu href="#contact">Contact</MoveMenu>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  z-index: 10;
`;

const MoveMenu = styled.a`
  font-size: 2rem;
  padding: 3rem;
`;

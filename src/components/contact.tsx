import React from "react";
import styled from "styled-components";

export default function Profile() {
  const githubLink = "https://github.com/puba5";
  const blogLink = "https://cocoze.tistory.com/";
  const emailAddress = "puba5@naver.com";
  return (
    <Wrapper>
      <InformationCard>
        <InformationImg src="https://miro.medium.com/max/636/1*1OKmA2EdGln8O6RCVORgGg.png" />
        <InformationText href={githubLink}>{githubLink}</InformationText>
      </InformationCard>
      <InformationCard>
        <InformationImg src="https://lh3.googleusercontent.com/proxy/MjzEI_qSAdx7pOQGidQDDS3c8xs3s9hHQO9aHW5XdsBCJCd51y4QVeVPGRgfWAhGpKsKhviIVFpw5qrQgPaXvAcornOdIU_xhhLoPI4_VV5nCG26UwDQSDaqlGyV8zJNwKaQl8oApGlu3hxmQBA46PRadR1XslfbzwmH3Xns0caZMw3FeK8VIYkUFq990ZP8_znP9HYFaL_UGwYF9IUYeSPl1g" />
        <InformationText href={blogLink}>{blogLink}</InformationText>
      </InformationCard>
      <InformationCard>
        <InformationImg src="https://is3-ssl.mzstatic.com/image/thumb/Purple123/v4/c7/8f/9c/c78f9cf7-dcc0-b03a-5196-b1702c0d7253/appicon-naver-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-6.png/246x0w.png" />
        <InformationText href={emailAddress}>{emailAddress}</InformationText>
      </InformationCard>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 40rem;
  display: flex;
  flex-direction: column;
  padding: 3rem;
  background-color: #fff;
  box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.16);
  z-index: 5;
  margin-top: 4rem;
  margin-bottom: 4rem;
  justify-content: center;
`;
const InformationCard = styled.div`
  display: flex;
  flex-direction: row;
  height: fit-content;
  margin: 0.8rem;
`;
const InformationImg = styled.img`
  width: 3rem;
  height: 3rem;
  margin-right: 1rem;
`;
const InformationText = styled.a`
  font-size: 2rem;
`;

import { NextPage } from "next";
import React, { PropsWithChildren } from "react";
import { Header } from "../Header/Header";
import styled from "styled-components";

export const Layout: NextPage<PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <Container>
      <Header />
      <div>{children}</div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;

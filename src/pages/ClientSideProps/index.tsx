import dynamic from "next/dynamic";
import React, { Component, FunctionComponent, ReactElement } from "react";

interface Props {
  posts?: {
    userId: number;
    id: number;
    title: string;
    body: string;
  }[];
}

//sss = true thì sẽ client serer
// nếu k có dynamic thì sẽ render cả client cả server
const Header: any = dynamic(() => import("@/component/Header"), {
  ssr: false,
});

const AboutPage = () => {
  return (
    <>
      <h1>About</h1>
      <Header />;
    </>
  );
};

export default AboutPage;

export const getServerSideProps = async () => {
  return {
    props: {},
  };
};

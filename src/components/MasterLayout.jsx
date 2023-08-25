import React from "react";
import Header from "./Header";
import { Footer } from "./Footer";

const MasterLayout = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MasterLayout;

import React from "react";
import Header from "./Header";

import { Footer } from "./Footer";
import Main from "./Main";
import AboutSection from "./AboutSection";
import Cards from "./Cards";
import Message from "./Message";

const MasterLayout = () => {
  return (
    <>
      <Header />
      <Main />
      <AboutSection />
      <Cards />
      <Message />
      <Footer />
    </>
  );
};

export default MasterLayout;

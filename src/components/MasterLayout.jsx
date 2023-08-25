import React from "react";
import Header from "./Header";

import { Footer } from "./Footer";
import Main from "./Main";
import AboutSection from "./AboutSection";
import Cards from "./Cards";
import Message from "./Message";
import DatePicker from "./DatePicker";
import PropertyFetch from "./PropertyFetch";

const MasterLayout = () => {
  return (
    <>
      {/* <Header />
      <Main />
      <AboutSection />
      <DatePicker />
      <Cards />
      <Message />
      <Footer /> */}
      <PropertyFetch />
    </>
  );
};

export default MasterLayout;

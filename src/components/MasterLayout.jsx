import React from "react";
import Header from "./Header";

import { Footer } from "./Footer";
import Main from "./Main";
import AboutSection from "./AboutSection";
import Cards from "./Cards";

const MasterLayout = () => {
  return (
    <div>
      <Header />
      <Main />
      <AboutSection />
      <Cards />
      <Footer />
    </div>
  );
};

export default MasterLayout;

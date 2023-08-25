import React from "react";
import MasterLayout from "../MasterLayout";
import Main from "../Main";
import AboutSection from "../AboutSection";
import Cards from "../Cards";
import Message from "../Message";
import DatePicker from "../DatePicker";

function HomePage() {
  return (
    <MasterLayout>
      <Main />
      <AboutSection />
      <DatePicker />
      <Cards />
      <Message />
    </MasterLayout>
  );
}

export default HomePage;

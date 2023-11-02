import Header from "src/parts/Header";
import React from "react";
import landingPageJson from "src/json/landingPage.json";
import Hero from "src/parts/Hero";
export default function LandingPage(props) {
  return (
    <>
      <Header />
      <Hero data={landingPageJson.hero} />
    </>
  );
}

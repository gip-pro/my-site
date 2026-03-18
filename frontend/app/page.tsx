import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Advantages from "../components/Advantages";
import Experience from "../components/Experience";
import Contacts from "../components/Contacts";

export default function Page() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Advantages />
      <Experience />
      <Contacts />
    </main>
  );
}
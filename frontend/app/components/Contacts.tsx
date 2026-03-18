import React from "react";
import Container from "./Container";
import Button from "./Button";

export default function Contacts() {
  return (
    <section className="py-[80px]">
      <Container>
        <a href="mailto:igor.g.pronkin@gmail.com" className="block mb-[24px] text-[16px]">
          igor.g.pronkin@gmail.com
        </a>
        <Button text="Связаться" />
      </Container>
    </section>
  );
}
import React from "react";
import Container from "./Container";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="py-[80px]">
      <Container>
        <h1 className="text-[48px] font-bold leading-[1.2] mb-[24px]">
          Разработка ППР и ПОС
        </h1>
        <p className="text-[20px] leading-[1.5] text-[#555555] mb-[32px]">
          Инженер-проектировщик с опытом более 11 лет
        </p>
        <Button text="Оставить заявку" />
      </Container>
    </section>
  );
}
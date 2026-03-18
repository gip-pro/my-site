import React from "react";
import Container from "./Container";

const advantages = [
  "11+ лет опыта",
  "Работа с крупными объектами",
  "Соблюдение сроков",
  "Работа по нормативам"
];

export default function Advantages() {
  return (
    <section className="py-[80px]">
      <Container>
        <ul className="space-y-[16px]">
          {advantages.map((item, i) => (
            <li key={i} className="text-[16px]">{item}</li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
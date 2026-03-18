import React from "react";
import Container from "./Container";

const experience = [
  "ИП — 2018–н.в.",
  "Трансэлектропроект — 2014–2018",
  "Резерв ТПО",
  "МСK-9",
  "Проектный институт ФСБ"
];

export default function Experience() {
  return (
    <section className="py-[80px]">
      <Container>
        <ul className="space-y-[16px]">
          {experience.map((item, i) => (
            <li key={i} className="text-[16px]">{item}</li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
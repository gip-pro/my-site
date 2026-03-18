import React from "react";
import Container from "./Container";

const services = [
  "Проект организации строительства (ПОС)",
  "Проект производства работ (ППР)",
  "Исполнительная документация"
];

export default function Services() {
  return (
    <section className="py-[80px]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          {services.map((item, i) => (
            <div key={i} className="border border-[#eee] rounded-[8px] p-[24px]">
              <p className="text-[16px] leading-[1.6]">{item}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
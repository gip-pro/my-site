import "./globals.css";
import React from "react";

export const metadata = {
  title: "Инженер-проектировщик",
  description: "Разработка ППР и ПОС",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
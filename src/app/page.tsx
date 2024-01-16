"use client";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Cabecera from "@/components/Cabecera";
import Certificados from "@/components/Certificados";
import Proyects from "@/components/Proyects";
import QuienSoy from "@/components/QuienSoy";
import Technology from "@/components/Technology";

export default function Home() {
  const [t, i18n] = useTranslation("global");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, []);

  return (
    <>
      <Cabecera />
      <QuienSoy />
      <Technology />
      <Proyects />
      <Certificados />
    </>
  );
}

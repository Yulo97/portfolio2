import Cabecera from "@/components/Cabecera";
import Certificados from "@/components/Certificados";
import Proyects from "@/components/Proyects";
import QuienSoy from "@/components/QuienSoy";
import Technology from "@/components/Technology";

export default function Home() {
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

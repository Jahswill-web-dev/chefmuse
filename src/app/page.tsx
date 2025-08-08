import Categories from "@/components/categories";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/howitworks";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/*  */}
      <div>
        <Hero />
        <Categories />
        <HowItWorks />
      </div>
    </div>
  );
}

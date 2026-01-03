import About from "@/sections/About";
import Features from "@/sections/Features";
import Hero from "@/sections/hero";
import Product from "@/sections/Product";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <div className="px-4 md:px-10">
        <Product/>
        <Features/>
        <About/>
      </div>
    </div>
  );
}

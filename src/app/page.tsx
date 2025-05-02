import Categories from "@/components/categories/Categories";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <>
      <header>
        <Header />
        <Hero />
        <Categories />
      </header>
    </>
  );
}

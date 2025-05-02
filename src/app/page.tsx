import Categories from "@/components/categories/Categories";
import Hero from "@/components/hero/Hero";
import Header from "@/components/landing-page/landing-header/Header";

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

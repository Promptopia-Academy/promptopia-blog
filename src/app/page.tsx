import Categories from "@/components/categories/Categories";
import Hero from "@/components/hero/Hero";
import BigArticle from "@/components/landing-page/articles/BigArticle";
import Header from "@/components/landing-page/landing-header/Header";
import TopBlogsDiv from "@/components/landing-page/landing-top-blog/TopBlogsDiv";

export default function Home() {
  return (
    <>
      <header>
        <Header />
        <Hero />
        <Categories />
        <TopBlogsDiv />
        <div className="flex gap-8">
          <BigArticle title="CodeStorm 2025: Riding the Digital Surge of Programming Innovation!" />
        </div>
      </header>
    </>
  );
}

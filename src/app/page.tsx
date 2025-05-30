import Categories from "@/components/categories/Categories";
import Hero from "@/components/hero/Hero";
import BigArticle from "@/components/landing-page/articles/BigArticle";
import MediumArticle from "@/components/landing-page/articles/MediumArticle";
import SmallArticle from "@/components/landing-page/articles/SmallArticle";
import Header from "@/components/landing-page/landing-header/Header";
import TopBlogsDiv from "@/components/landing-page/landing-top-blog/TopBlogsDiv";
import Poster from "@/components/landing-page/poster/Poster";

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Hero />
        <Categories />
        <TopBlogsDiv />
        <div className="flex gap-8 mt-16 justify-center mb-32">
          <BigArticle title="CodeStorm 2025: Riding the Digital Surge of Programming Innovation!" />
          <MediumArticle title="Unleashing the Power of AI: A Deep Dive into the Future of Intelligent Systems" />
          <div className="flex flex-col gap-6">
            <SmallArticle title="Programming Innovation!" />
            <SmallArticle title="Programming Innovation!" />
          </div>
        </div>
        <Poster />
      </main>
    </>
  );
}

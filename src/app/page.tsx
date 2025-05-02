import Header from "@/components/landing-page/landing-header/Header";
import TopBlogsDiv from "@/components/landing-page/landing-top-blog/TopBlogsDiv";

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="px-[123px]">
        <TopBlogsDiv />
      </main>
    </>
  );
}

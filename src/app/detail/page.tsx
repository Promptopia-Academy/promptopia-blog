import Headline from "@/components/details/Headline";
import HeroPoster from "@/components/details/HeroPoster";
import React from "react";

const page = () => {
  const fakeData = {
    title: "A professional blog. Generated for you",
    subTitle:
      "Create a beautiful blog in just a few clicks using powerful AI. Fonts, colours, a blog homepage, polished layouts — all done for you in under a minute.",
    author: "Mr.Sadeghi",
    likes: 200,
    dislikes: 120,
    description: `A high-quality blog is one of the best ways to boost your business’ organic traffic and lead generation, but building it out can require significant time and resources. HubSpot’s AI blog writer helps you boost your blog’s output frequency without additional time or headcount investments.
Create new posts by providing the AI blog post generator with prompts or topics, and let the software do the initial research and writing for you. Then edit the content using your subject matter expertise and publish.`,
  };

  return (
    <main className="pb-20">
      <HeroPoster
        title={fakeData.title}
        description={fakeData.description}
        author={fakeData.author}
        likes={fakeData.likes}
        dislikes={fakeData.dislikes}
        subTitle={fakeData.subTitle}
      />
      <Headline title={fakeData.title} description={fakeData.description} />
    </main>
  );
};

export default page;

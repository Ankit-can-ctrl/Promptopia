import Feed from "@/component/Feed";

function page() {
  return (
    <section className="w-full flex flex-col items-center justify-center">
      <div className="font-Head text-orange-400 mb-0 tracking-tight font-bold">
        <h1 className="text-6xl  mb-0  md:text-8xl">Promptopia</h1>
      </div>
      <h1 className="font-Head mt-16 text-gray-500 text-5xl font-bold text-center">
        Discover & Share
        <br className="lg:hidden" />
        <span className=" text-5xl text-orange-300 font-bold">
          {" "}
          AI-Powered Prompts
        </span>
      </h1>
      <p className="px-5 font-Sub text-center mt-0 text-xl text-gray-400 font-medium ">
        Promptopia is an open-source AI prompting tool for modern world to
        discover, create and share creative prompts.
      </p>
      <Feed />
    </section>
  );
}

export default page;

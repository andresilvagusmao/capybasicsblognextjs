import { CMS_NAME } from "@/lib/constants";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <a href="/">
      <img width="200" height="200" src="/assets/blog/logo/youtubelogo.png"/>
      </a>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        CapyBasics Blog.
      </h4>
    </section>
  );
}

import Events_gallery from "@/sections/events_gallery/events_gallery";
import Faq from "@/sections/faq/faq";
import Get_in_touch from "@/sections/get_in_touch/get_in_touch";
import Hero from "@/sections/Hero/Hero";
import Planning_process from "@/sections/planning_process/planning_process";
import Testimonials from "@/sections/testimonials/testimonials";
import What_do_we_do from "@/sections/what_do_we_do/what_do_we_do";
import Why_choose_us from "@/sections/why_choose_us/why_choose_us";
import Work_With_Us from "@/sections/work_with_us/work_with_us";
export default function Home() {
  return (
    <>
      <Hero />
      <What_do_we_do />
      <Work_With_Us />
      <Planning_process />
      <Events_gallery />
      <Testimonials />
      <Faq />
      <Why_choose_us />
      <Get_in_touch />
    </>
  );
}

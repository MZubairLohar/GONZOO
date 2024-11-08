import Hero from "./componants/hero";
import Navbar from "./componants/navbar";
import SectionThree from "./componants/sectionThree";
import SectionTwo from "./componants/sectionTwo";
import Tokenommics from "./componants/tokenoimics";
import Roadmap from "./componants/roadmap";
import LastSection from "./componants/lastSection";
import Footer from "./componants/footer";
import Bonus from "./componants/bonus"
export default function Home() {
  return (
    <div className=" w-full relative h-auto bg-[#6c83d6] bg-center bg-fixed bg-contain no-repeat bg-no-repeat ">
      <div className="lg:mt-20">
        <Navbar />
        {/* section 1 */}
        <Hero />
        {/* section 2 */}

        <SectionTwo />

        {/* section 3 */}
        <SectionThree />
        {/* section 4 */}

        <Tokenommics />
        <Bonus />
        {/* section 5 */}
        <Roadmap />
        {/* Last Section */}
        <LastSection />
        {/* footer */}
        <Footer />
      </div>
    </div>
  );
}

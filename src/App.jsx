import react from "react"
import Navbar from "./comoponents/about/navbar/Navbar";
import About from "./comoponents/about/About";
import Skills from "./comoponents/about/skills/Skills";
import Experience from "./comoponents/about/experience/Experience";
import Work from "./comoponents/about/work/Work";
import Education from "./comoponents/about/education/Education";
import Contact from "./comoponents/about/contact/Contact";
import Footer from "./comoponents/about/footer/Footer";
import Blurblob from "./Blurblob";

function App() {
  return (
    <div className="bg-[#050414]">
    
    <Blurblob position={{top: '35%', left: '20%'}} size={{width: '30%', height: '40%' }}>

    </Blurblob>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="relative pt-20">
      <Navbar />
      <About />
      <Skills />
      <Experience />
      <Work />
      <Education />
      <Contact />
      <Footer />
      </div>
    </div>

  )
}
export default App;
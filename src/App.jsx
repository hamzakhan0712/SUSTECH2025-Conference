import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useRef } from "react";
import { Menu, Globe, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet";
import { Link as ScrollLink, Element } from "react-scroll";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

import { appData } from "@/assets/values";

const App = () => {
  const footerRef = useRef(null);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#F7F7EF]">
        <div className="w-full mx-auto max-w-7xl px-4 py-2">
          <div className="hidden md:flex items-center justify-between gap-8 flex-wrap md:flex-nowrap">
            {/* Supporting Logos */}
            <div className="flex gap-8">
              {appData.supportingLogos.left.map((logo, index) => (
                <img key={index} src={logo} alt={`Supported By ${index + 1}`} className="w-32 h-32 object-contain" />
              ))}
            </div>

            {/* College Name Image (Centered) */}
            <div className="flex justify-center">
              <img src={appData.collegeLogo} alt="College Name" className="w-76 h-28 object-contain" />
            </div>

            {/* Additional Supporting Logo */}
            <div className="flex gap-8">
              {appData.supportingLogos.right.map((logo, index) => (
                <img key={index} src={logo} alt={`Supported By ${index + 1}`} className="w-28 h-28 object-contain" />
              ))}
            </div>
          </div>
        </div>

        <div className="lg:hidden fixed top-4 right-0 z-50">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="flex items-center justify-center w-10 h-10 mr-4 rounded-half shadow-lg bg-white hover:bg-[#f7f7ef] transition-all duration-300 ease-in-out border border-gray-300">
                <Menu className="h-7 w-7 text-[#74946c]" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-6 w-4/5 sm:max-w-xs">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-[#74946c] font-['Playfair_Display']">{appData.menu.title}</h2>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-[#74946c] flex items-center mb-3">
                  <Globe className="w-5 h-5 mr-2 text-[#74946c]" /> {appData.menu.quickLinks.title}
                </h3>
                <ul className="space-y-3 pl-4 border-l-2 border-[#74946c]">
                  {appData.menu.quickLinks.links.map((section) => (
                    <li key={section.id}>
                      <SheetClose asChild>
                        <ScrollLink to={section.id} smooth={true} duration={500} className="cursor-pointer hover:text-[#bc5939] text-sm">
                          {section.label}
                        </ScrollLink>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#74946c] flex items-center mb-3">
                  <Calendar className="w-5 h-5 mr-2 text-[#74946c]" /> {appData.menu.conferenceDetails.title}
                </h3>
                <ul className="space-y-3 pl-4 border-l-2 border-[#74946c]">
                  {appData.menu.conferenceDetails.links.map((section) => (
                    <li key={section.id}>
                      <SheetClose asChild>
                        <ScrollLink to={section.id} smooth={true} duration={500} className="cursor-pointer hover:text-[#bc5939] text-sm">
                          {section.label}
                        </ScrollLink>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="hidden lg:block">
          <Navbar />
        </div>

        <main className="flex-1 font-['Playfair_Display'] bg-[#F7F7EF]">
          <Element name="home">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Element>
        </main>

        <Element name="footer" ref={footerRef}>
          <Footer />
        </Element>
      </div>
    </Router>
  );
};

export default App;

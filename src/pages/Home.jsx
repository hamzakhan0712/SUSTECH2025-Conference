import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules"; // ✅ Import the modules
import "swiper/css";
import {Users,} from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import "swiper/css/effect-fade";
import logo3 from '@/assets/images/logo3.png';
import {conferenceData, conferenceTracks, scoeContent, timelineData, callForPapersData, registrationData, patronsData, committeeData, advisoryCommittees, general } from "@/assets/values";  // Import values
import conferenceLogo from '@/assets/images/m-logo3.jpg';
import logo1 from '@/assets/images/logo1.2.png';
import logo2 from '@/assets/images/logo-2.2.png';

// #################################################################################################################################################################################################################

export const floatAnimation = {
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

// Conference Logos
export const conferenceLogos = [logo1, conferenceLogo, logo2];


const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", "");
      const element = document.getElementById(sectionId);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 50, // Scrolls to the element minus 50px
          behavior: "smooth",
        });
      }
    }
  }, [location]);
  
  return (

    <section className="flex flex-col items-center w-full">

      {/* // ####conferenceData-CONFERENCE INTRO 11111111111111111111111111111111 ####  ################################################################################################################################################################################## */}

      <section
        id="conference"
        name="conference"
        className="relative isolate overflow-hidden bg-[#f7f7ef] px-6 md:py-0 sm:py-4 flex justify-center items-center text-center md:mt-16 sm:mt-8"
      >
        <div className="absolute inset-0 -z-10">
          <svg
            aria-hidden="true"
            className="absolute top-0 left-1/2 h-[64rem] w-[128rem] -translate-x-1/2 stroke-[#a99955] opacity-20"
          >
            <defs>
              <pattern id="pattern" width={200} height={200} patternUnits="userSpaceOnUse">
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <rect fill="url(#pattern)" width="100%" height="100%" />
          </svg>
        </div>

        <div className="max-w-6xl">
          <h1 className="mt-3 text-4xl font-extrabold text-[#74946c] sm:text-5xl leading-tight">
            {conferenceData.title} <br/>
            {conferenceData.shortForm}
          </h1>

          <motion.div
              className="relative w-full mb-12 mt-6 hidden sm:block"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Swiper
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 1000, disableOnInteraction: false }}
                speed={1000}
                effect="fade"
                modules={[Autoplay, EffectFade]}
              >
                {conferenceData.sliderImages.map((img, index) => (
                  <SwiperSlide key={index}>
                    <motion.img
                      src={img}
                      alt={`Event ${index + 1}`}
                      className="rounded-xl shadow-lg w-full h-[300px] object-cover"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.8 }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>


          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            {conferenceData.description}
          </p>


          <img
            src={conferenceData.conferenceLogo}
            alt="Conference Logo"
            className="mx-auto mt-6 w-40 sm:w-52 md:w-64 object-contain"
          />




          <div className="max-w-2xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700 text-left">
            {conferenceData.details.map((detail, index) => (
              <div key={index} className="flex items-center gap-3">
                {detail.icon}
                <span>
                  <strong className="text-gray-900">{detail.label}:</strong> {detail.value}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-2 p-6 rounded-xl text-left text-gray-700">
            {conferenceData.about.map((para, index) => (
              <p key={index} className="text-lg leading-relaxed mt-4">{para}</p>
            ))}
          </div>

          <div className="mt-10">
            <ScrollLink 
              to="registration"
              smooth={true}
              duration={500}
              className="inline-block px-8 py-3 text-lg font-semibold text-white bg-[#74946c] rounded-lg shadow-lg hover:scale-105 transition cursor-pointer"
            >
              {conferenceData.ctaText}
            </ScrollLink>
          </div>

          <div className="flex flex-col items-center text-center gap-2 mt-8">
            <Users className="size-8 text-[#a99955]" />
            <p className="text-lg font-semibold text-gray-900">{conferenceData.organizedBy.label}</p>
            <p className="text-base text-gray-700 leading-relaxed">
              <span className="font-bold text-[#74946c] text-lg">{conferenceData.organizedBy.name}</span>
              <br />
              {conferenceData.organizedBy.address}
              <br />
              <a
                href={conferenceData.organizedBy.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#bc5939] font-medium hover:underline"
              >
                {conferenceData.organizedBy.website}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* // ######scoeContent-#COLLEGE SECTION 2222222222222222############################################################################################################################################################################################## */}

      <section  id="scoe" name="scoe" className="relative w-full max-w-7xl mx-auto flex flex-col-reverse lg:flex-row justify-between items-start text-center lg:text-left py-8 px-6 md:px-12 lg:px-0 bg-[#F7F7EF]">
        {/* Left Content */}
        <motion.div
          className="w-full lg:w-1/2 space-y-10 mr-3"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* College Logo & Name */}
          <div className="flex flex-col items-center lg:items-start space-y-3">
            <img src={logo3} alt="SCOE Logo" className="w-28 h-auto lg:w-36" />
            <h1 className="text-5xl font-bold text-[#5C7A4D]">
              Welcome to <span className="text-[#A3472A]">{scoeContent.title}</span>
            </h1>
          </div>

          {/* Accreditation Badges */}
          <div className="flex flex-wrap gap-3 mt-4">
            <span className="px-4 py-2 text-sm font-semibold text-white bg-[#A3472A] rounded-md shadow-md">
             {scoeContent.accreditation.text1}
            </span>
            <span className="px-4 py-2 text-sm font-semibold text-white bg-[#74946c] rounded-md shadow-md">
            {scoeContent.accreditation.text2}
            </span>
            <span className="px-4 py-2 text-sm font-semibold text-[#A3472A] border border-[#A3472A] bg-white rounded-md shadow-md">
            {scoeContent.accreditation.text3}
            </span>    
            
            
            <span className="px-4 py-2 text-sm font-semibold text-black bg-gray-100 rounded-md shadow-md">
            {scoeContent.accreditation.text4}
            </span>
          </div>


     
        {/* Founding History */}
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          Established in <strong>{scoeContent.foundingHistory.established}</strong> by{" "}
          <strong>{scoeContent.foundingHistory.founders.foudner1}</strong> and{" "}
          <strong>{scoeContent.foundingHistory.founders.founder2}</strong>,{" "}
          {scoeContent.foundingHistory.description} With a focus on{" "}
          <span className="text-[#C1A65C] font-semibold">
            {scoeContent.foundingHistory.highlight1}
          </span>{" "}
          and{" "}
          <span className="text-[#A3472A] font-semibold">
            {scoeContent.foundingHistory.highlight2}
          </span>
          , we strive for excellence in engineering, research, and sustainability.
        </p>

         {/* Vision */}
         <div className="flex flex-col items-start border-l-4 border-[#5C7A4D] pl-4 space-y-2 mt-6">
          <h2 className="text-2xl font-semibold text-[#5C7A4D]">
            {scoeContent.vision.title}
          </h2>
          <p className="text-gray-700 text-left">{scoeContent.vision.text}</p>
        </div>

       {/* Mission */}
       <div className="flex flex-col items-start border-l-4 border-[#A3472A] pl-4 space-y-2">
          <h2 className="flex items-center gap-2 text-2xl font-semibold text-[#A3472A]">
            {scoeContent.mission.title}
          </h2>
          <ul className="flex flex-col items-start text-gray-700 space-y-1">
            {scoeContent.mission.points.map((point, index) => (
              <li key={index}>
                <span className="font-semibold">{point.split(":")[0]}:</span>{" "}
                {point.split(":")[1]}
              </li>
            ))}
          </ul>
        </div>


        {/* Call-to-Action Buttons */}
        <div className="flex flex-wrap gap-4 mt-8">
          {scoeContent.callToActions.map((action, index) => (
            <ScrollLink
              key={index}
              to={action.link}
              smooth={true}
              duration={500}
              className={`px-6 py-3 text-lg font-semibold ${
                index === 0
                  ? "text-white bg-[#5C7A4D]"
                  : "text-[#A3472A] border border-[#A3472A] hover:bg-[#A3472A] hover:text-white"
              } rounded-lg shadow-md hover:scale-105 transition cursor-pointer`}
            >
              {action.text}
            </ScrollLink>
          ))}
        </div>

        </motion.div>

        {/* Right Side Floating Images */}
        <div className="hidden lg:flex w-full lg:w-1/2 justify-center mt-15">
          <div className="relative w-full max-w-md h-[400px] grid grid-cols-2 gap-4">

            <motion.img
                src={scoeContent.collegeImagesCard.image1}
                className="absolute top-30 left-[-18%] rounded-2xl shadow-lg w-32 md:w-40 lg:w-52 h-auto object-cover"
                alt="Conference"
                {...floatAnimation}
              />
              <motion.img
                src={scoeContent.collegeImagesCard.image2}
                className="absolute top-70 left-[-18%] rounded-2xl shadow-lg w-32 md:w-40 lg:w-52 h-56 object-cover"
                alt="Networking"
                {...floatAnimation}
              />
              <motion.img
                src={scoeContent.collegeImagesCard.image3}
                className="absolute top-0 left-40 rounded-2xl shadow-lg w-32 md:w-40 lg:w-52 h-56 object-cover"
                alt="Teamwork"
                {...floatAnimation}
              />
              <motion.img
                src={scoeContent.collegeImagesCard.image4}
                className="absolute top-60 left-40 rounded-2xl shadow-lg w-32 md:w-40 lg:w-52 h-auto object-cover"
                alt="Collaboration"
                {...floatAnimation}
              />
              <motion.img
                src={scoeContent.collegeImagesCard.image5}
                className="absolute top-100 left-40 rounded-2xl shadow-lg w-32 md:w-40 lg:w-52 h-56 object-cover"
                alt="Innovation"
                {...floatAnimation}
              />
              <motion.img
                src={scoeContent.collegeImagesCard.image6}
                className="absolute top-5 left-100 rounded-2xl shadow-lg w-32 md:w-40 lg:w-52 h-auto object-cover"
                alt="Innovation"
                {...floatAnimation}
              />
              <motion.img
                src={scoeContent.collegeImagesCard.image7}
                className="absolute top-45 left-100 rounded-2xl shadow-lg w-32 md:w-40 lg:w-52 h-auto object-cover"
                alt="Innovation"
                {...floatAnimation}
              />
              <motion.img
                src={scoeContent.collegeImagesCard.image8}
                className="absolute top-85 left-100 rounded-2xl shadow-lg w-32 md:w-40 lg:w-52 h-56 object-cover"
                alt="Innovation"
                {...floatAnimation}
              />
            </div>
          </div>
    
      </section>

      {/* // ###########conferenceTracks 3333333333333333333333333 ###################################################################################################################################################################################################### */}

      <section id={conferenceTracks.section.id} name={conferenceTracks.section.name} className="max-w-6xl mx-auto py-24 px-6">
    {/* Section Heading */}
    <h2 className="text-4xl font-extrabold text-[#5C7A4D] text-center mb-4">
      {conferenceTracks.section.title}
    </h2>
    <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-10">
      {conferenceTracks.section.description}
    </p>

    {/* Tabs Component */}
    <Tabs defaultValue={conferenceTracks.tracks[0].id} className="w-full">
      <TabsList className="flex flex-wrap md:flex-nowrap justify-center gap-4 p-3 rounded-xl shadow-lg border border-gray-300">
        {conferenceTracks.tracks.map((track) => (
          <TabsTrigger
            key={track.id}
            value={track.id}
            className="flex items-center gap-2 px-3 py-1 rounded-lg text-md font-semibold transition-all border border-gray-300 bg-white shadow-sm 
            hover:bg-[#bc5939] hover:text-white hover:shadow-md 
            data-[state=active]:bg-[#74946c] data-[state=active]:text-white data-[state=active]:shadow-lg"
          >
            {track.icon} {track.title}
          </TabsTrigger>
        ))}
      </TabsList>

      {/* Tabs Content */}
      {conferenceTracks.tracks.map((track) => (
        <TabsContent key={track.id} value={track.id}>
          <Card className="mt-8 shadow-lg rounded-2xl border border-gray-300 bg-white">
            <CardContent className="p-8">
              {/* Track Title */}
              <h3 className="flex gap-4 items-center text-2xl font-bold text-[#5C7A4D] mb-5">
                {track.icon} {track.title}
              </h3>

              {/* Topics List with Scroll Area */}
              <ScrollArea className="h-72 md:h-80 overflow-y-auto pr-3">
                <ul className="list-disc list-inside space-y-3 text-gray-800">
                  {track.topics.map((topic, index) => (
                    <li key={index} className="text-lg font-medium">{topic}</li>
                  ))}
                </ul>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Important Notes Section */}
          <div className="mt-8 p-5 bg-white rounded-xl border border-gray-300 shadow-md flex items-start gap-4">
            {conferenceTracks.importantNote.icon}
            <div>
              <p className="text-lg font-semibold text-[#5C7A4D]">
                {conferenceTracks.importantNote.title}
              </p>
              <p className="text-base text-gray-700 mt-1">
                {conferenceTracks.importantNote.text}
              </p>
              <p className="text-sm text-gray-600 mt-2">
                {conferenceTracks.importantNote.format}
              </p>
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
      </section>

      {/* // ###############timelineData 4444444444444444444444444444################################################################################################################################################################################################## */}

      <section id={timelineData.section.id} name={timelineData.section.name} className="relative w-full max-w-6xl mx-auto py-24 text-center px-4">
      {/* Section Heading */}
      <h2 className="text-3xl font-bold text-[#5C7A4D] mb-4">
        {timelineData.section.title}
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        {timelineData.section.description}
      </p>

      {/* Timeline Line */}
      <div className="relative mt-12">
        <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 h-1 bg-gray-300 w-full max-w-6xl hidden md:block"></div>

        {/* Timeline Steps */}
        <div className="relative flex flex-col md:flex-row md:justify-between items-center space-y-8 md:space-y-0">
          {timelineData.events.map((item, index) => (
            <div key={index} className="relative md:w-1/3 max-w-8xl flex md:flex-col items-start justify-center md:items-center gap-4">
              {/* Connector Line & Dot */}
              <div
                className="md:absolute md:top-1/2 transform md:-translate-y-1/2 w-6 h-6 flex items-center justify-center rounded-full shadow-lg text-white transition-all duration-1200 animate-pulse"
                style={{ backgroundColor: item.color }}
              >
                {item.id}
              </div>

              {/* Alternating Event Cards */}
              <div
                className={`md:w-74 w-auto p-6 bg-white shadow-lg rounded-2xl border-l-4 transition duration-1200 hover:shadow-2xl ${
                  index % 2 === 0 ? "md:mb-50 border-[#A3472A]" : "md:mt-50 border-[#5C7A4D]"
                }`}
              >
                <h3 className="text-lg font-semibold" style={{ color: item.color }}>
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700">{item.desc}</p>
                <p className="font-medium mt-2">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>

      {/* // #################################55555555555555555555555################################################################################################################################################################################ */}

      <section 
  id={callForPapersData.section.id} 
  name={callForPapersData.section.name} 
  className="max-w-6xl mx-auto py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center"
>
  <div className="w-full max-w-4xl flex flex-col items-center text-center">
    
    {/* Section Heading */}
    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#5C7A4D] mb-6">
      {callForPapersData.section.title}
    </h2>

    {/* Best Paper Award Info */}
    <div className="bg-[#f7f7ef] sm:p-2 w-full">
      <p className="text-lg sm:text-xl text-gray-800 font-semibold">
        {callForPapersData.bestPaperAward.sponsorText}
      </p>
      <p className="text-3xl sm:text-4xl text-[#bc5939] font-blackletter mt-2">
        {callForPapersData.bestPaperAward.sponsorName} <br /> 
        {callForPapersData.bestPaperAward.sponsorLocation}
      </p>
    </div>

    {/* Section Description */}
    <p className="text-base sm:text-lg text-gray-700 mt-4">
      {callForPapersData.section.description.split("SUSTECH 2025")[0]}
      <span className="font-semibold text-[#bc5939]"> SUSTECH 2025</span>
      {callForPapersData.section.description.split("SUSTECH 2025")[1]}
    </p>

     {/* Microsoft CMT Acknowledgement */}
     <div className="w-full mt-6 p-4 sm:p-5 bg-[#eef5fc] rounded-xl border border-gray-300 shadow-md flex flex-col items-center sm:flex-row text-center sm:text-left">
      <span className="text-2xl">💡</span>
      <div className="sm:ml-4">
        <h3 className="text-lg font-semibold text-[#105C99]">
          {callForPapersData.acknowledgement.title}
        </h3>
        <p className="text-sm sm:text-base text-gray-700 mt-1">
          {callForPapersData.acknowledgement.description}
        </p>
      </div>
    </div>

    {/* Submission Details */}
    <div className="w-full bg-white shadow-lg rounded-2xl border border-gray-300 p-4 sm:p-6 md:p-8 text-left mt-4">
      <h3 className="text-xl sm:text-2xl font-semibold text-[#5C7A4D] mb-4">
        {callForPapersData.submission.title}
      </h3>
      <ul className="list-none space-y-4 text-gray-700 text-base sm:text-lg">
        {callForPapersData.submission.details.map((item, index) => (
          <li key={index} className="flex items-start gap-3 flex-wrap">
            {item.icon}
            <span className="font-semibold text-[#bc5939]">{item.label}</span>
            {item.url ? (
              <a href={item.url} target="_blank" className="text-[#105C99] hover:underline font-medium break-all">
                {item.value}
              </a>
            ) : (
              <span>{item.value}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
    

    {/* Publication Info */}
    <div className="w-full mt-6 p-4 sm:p-5 bg-[#f7f7ef] rounded-xl border border-gray-300 shadow-md flex flex-col items-center sm:flex-row text-center sm:text-left">
      <span className="text-2xl">{callForPapersData.publication.icon}</span>
      <div className="sm:ml-4">
        <p className="text-lg font-semibold text-[#5C7A4D]">{callForPapersData.publication.title}</p>
        <p className="text-sm sm:text-base text-gray-700 mt-1">
          {callForPapersData.publication.description}
        </p>
      </div>
    </div>

   
  </div>
</section>




      {/* // ###################################66666666666666666666666666############################################################################################################################################################################## */}

      <section id={registrationData.section.id} name={registrationData.section.name} className="max-w-4xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
      {/* Section Heading */}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-[#5C7A4D] text-center mb-6 flex items-center justify-center gap-2">
        {registrationData.section.title}
      </h2>
      <p className="text-base sm:text-lg text-gray-700 text-center max-w-3xl mx-auto mb-8">
        {registrationData.section.description.split("SUSTECH 2025")[0]}
        <span className="font-semibold text-[#bc5939]"> SUSTECH 2025</span>
        {registrationData.section.description.split("SUSTECH 2025")[1]}
      </p>

      {/* Registration Fees Table */}
      <div className="overflow-x-auto bg-white shadow-lg rounded-2xl border border-gray-300 p-4 sm:p-6 md:p-8">
        <h3 className="text-xl sm:text-2xl font-semibold text-[#5C7A4D] mb-4 flex items-center gap-2">
          {registrationData.fees.title}
        </h3>
        <table className="w-full text-left border-collapse text-sm sm:text-lg">
          <thead>
            <tr className="bg-[#f7f7ef] text-[#5C7A4D] font-semibold">
              {registrationData.fees.columns.map((column, index) => (
                <th key={index} className="p-2 sm:p-3 border-b">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {registrationData.fees.rows.map((row, index) => (
              <tr key={index} className="border-b">
                <td className="p-2 sm:p-3">{row.category}</td>
                <td className="p-2 sm:p-3 font-medium text-[#bc5939]">{row.indian}</td>
                <td className="p-2 sm:p-3 font-medium text-[#a99955]">{row.foreign}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Payment Details */}
      <div className="mt-6 p-4 sm:p-5 bg-[#f7f7ef] rounded-xl border border-gray-300 shadow-md flex flex-col gap-4">
        <h3 className="text-xl sm:text-2xl font-semibold text-[#5C7A4D] flex items-center gap-2">
          {registrationData.payment.title}
        </h3>
        <p className="text-base sm:text-lg text-gray-700">
          {registrationData.payment.description}
        </p>
        <ul className="list-none space-y-2 text-base sm:text-lg text-gray-700">
          {registrationData.payment.details.map((item, index) => (
            <li key={index}>
              <span className="font-semibold text-[#bc5939]">{item.label}</span> {item.value}
            </li>
          ))}
        </ul>
      </div>
      </section>

      {/* // ##########################777777777777777777777777####################################################################################################################################################################################### */}

      <section
      id={patronsData.section.id}
      name={patronsData.section.name}
      className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8"
    >
      {/* Section Heading */}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-[#5C7A4D] text-center mb-10">
        {patronsData.section.title}
      </h2>

      {/* Horizontal Layout */}
      <div className="flex flex-wrap justify-center gap-10">
        {patronsData.members.map((member, index) => (
          <div key={index} className="flex flex-col items-center text-center w-64">
            <img
              src={member.image}
              alt={member.role}
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-lg shadow-md sm:object-fill"
            />
            <p className="mt-4 text-xl font-semibold text-[#5C7A4D]">{member.role}</p>
            <p className="text-gray-600 text-md">{member.organization}</p>
            <p className="mt-2 text-lg font-bold text-[#bc5939]">{member.name}</p>
          </div>
        ))}
      </div>
      </section>

      {/* // ###########################888888888888888888888###################################################################################################################################################################################### */}

      <section id="committee" name="committee" className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
      {/* Section Heading */}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-[#5C7A4D] text-center mb-10">
        🏛️ Committee Members
      </h2>

      {/* Committees List */}
      <div className="border-t border-gray-300 pt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-800">
        
        {/* General Committees */}
        {committeeData.map((committee, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold text-[#bc5939] pb-2 border-b border-gray-300">{committee.title}</h3>
            <ul className="mt-2 space-y-1 text-md">
              {committee.members.map((member, idx) => (
                <li key={idx}>{member}</li>
              ))}
            </ul>
          </div>
        ))}

        {/* Advisory Committees */}
        {advisoryCommittees.map((committee, index) => (
          <div key={index} className={committee.gridSpan || ""}>
            <h3 className="text-xl font-semibold text-[#bc5939] pb-2 border-b border-gray-300">{committee.title}</h3>
            <ul className="mt-2 space-y-2 text-md">
              {committee.members.map((member, idx) => (
                <li key={idx}>
                  <span className="font-semibold">{member.name}</span> - {member.role}
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>
      </section>

        {/* // ################################################################################################################################################################################################################# */}

    </section>
  );
};

export default Home;
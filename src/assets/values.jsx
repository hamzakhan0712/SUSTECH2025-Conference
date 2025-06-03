import { Leaf, Building2, Target,Globe, Car, Calendar, Lightbulb, Users, Cpu, FlaskConical, ShieldCheck } from "lucide-react";
import conferenceLogo from '@/assets/images/m-logo3.jpg';
import logo from '@/assets/images/logo.png';
import logo1 from '@/assets/images/logo1.2.png';
import logo2 from '@/assets/images/logo-2.2.png';
import banner1 from "@/assets/images/banner1.jpg";
import banner2 from "@/assets/images/banner2.jpg";
import banner3 from "@/assets/images/banner3.jpg";
import collegeNameImage from '@/assets/images/logom.2.png';
import rightLogo from '@/assets/images/r-logo.png';
import rightLogo2 from '@/assets/images/logo4.png';
import rightLogo3 from '@/assets/images/rightlogo3.png';
import image1 from '@/assets/images/image1.jpg';
import image2 from '@/assets/images/image2.jpg';
import image3 from '@/assets/images/image3.jpg';
import image4 from '@/assets/images/image4.jpg';
import image5 from '@/assets/images/image5.jpg';
import image6 from '@/assets/images/image6.jpg';
import image7 from '@/assets/images/image7.jpg';
import image8 from '@/assets/images/image8.jpg';
import chairman from "@/assets/images/chairman.jpg";
import secretary from "@/assets/images/secretary.jpg";
import principal from "@/assets/images/principal.jpg";

// #################################################################################################################################################################################################################

export const general = {
  conferenceName : "SUSTECH 2025"
}

 // #################################################################################################################################################################################################################

export const appData = {
  supportingLogos: {
    left: [logo1, rightLogo],
    right: [ logo2, rightLogo3],
  },
  collegeLogo: collegeNameImage,
  menu: {
    title: "Menu",
    quickLinks: {
      title: "Quick Links",
      links: [
        { id: "home", label: "HOME" },
        { id: "scoe", label: "SCOE" },
        { id: "conference", label: "CONFERENCE" },
        { id: "patrons-chairs", label: "PATRONS CHAIRS" },
        { id: "committee", label: "COMMITTEE" },
        { id: "footer", label: "FOOTER" },
      ],
    },
    conferenceDetails: {
      title: "Conference Details",
      links: [
        { id: "timeline", label: "TIMELINE" },
        { id: "tracks", label: "TRACKS" },
        { id: "call-for-papers", label: "CALL FOR PAPERS" },
        { id: "registration", label: "REGISTRATION" },
      ],
    },
  },
};

// #################################################################################################################################################################################################################


export const menuItems = [
  { label: "Home", link: "home" },
  {
    label: "About",
    dropdown: [
      { title: "SCOE", description: "School of Computer Engineering details and mission.", link: "scoe" },
      { title: "Conference", description: "Annual academic gathering with keynote sessions.", link: "conference" },
      { title: "Patrons & Chairs", description: "Meet the leadership behind the conference.", link: "patrons-chairs" },
      { title: "Committee", description: "Organizers and core members driving the event.", link: "committee" },
    ],
  },
  {
    label: "Conference",
    dropdown: [
      { title: "Timeline", description: "Key dates and schedules for the event.", link: "timeline" },
      { title: "Tracks", description: "Various subjects covered in different sessions.", link: "conference-tracks" },
    ],
  },
  { label: "Call for Papers", link: "call-for-paper" },
  { label: "Registration", link: "registration" },
  { label: "Contact", link: "footer" },
];


// #########11111111111111111111111111111111########################################################################################################################################################################################################


export const conferenceData = {
  title: "International Conference on Sustainable Technologies",
  shortForm:"SUSTECH 2025",
  conferenceLogo:[logo],
  sliderImages: [banner1, banner2, banner3],
  description:
    "A platform for researchers, academicians, and industry professionals to explore innovations in Green Tech, AI for Sustainability, and Sustainable Mobility.",
  details: [
    {
      icon: <Calendar className="size-6 text-[#a99955]" />,
      label: "Date",
      value: "8th April 2025 (Online)",
    },
    {
      icon: <Lightbulb className="size-6 text-[#a99955]" />,
      label: "Topics",
      value: "AI, Green Tech, Sustainable Mobility",
    },
  ],
  about: [
    "This conference aims to bring together researchers, academicians, industry professionals, and policymakers to explore innovative technologies that contribute to sustainable development.",
    "Discussions will support new ideas and recommendations that open avenues in the fields of green technology initiatives, pollution prevention technologies, innovations in structural design, sustainable mobility solutions, and energy efficiency & management.",
  ],
  ctaText: "Register Now",
  organizedBy: {
    label: "Organized by",
    name: "SΛRΛSWΛTI COLLEGE OF ENGINEERING",
    address: "Sector-05, Kharghar, Navi Mumbai- 410210",
    website: "https://www.sce.edu.in",
  },
};


// ###############2222222222222222##################################################################################################################################################################################################


export const scoeContent = {
  title: "Saraswati College of Engineering (SCOE)",
  shortForm : "SCOE",
  logoAlt: "SCOE Logo",
  accreditation: {
    text1: "🎓 NAAC A+ Accredited",
    text2: "🏛️ Recognized by Govt. of Maharashtra",
    text3: "✅ AICTE Approved",
    text4: "📜 Affiliated to University of Mumbai",
  },

  foundingHistory: {
    established: "2004",
    founders: {
      foudner1: "Hon. Prithviraj Deshmukh",
      founder2: "Mrs. Vrushali Deshmukh"
    },
    description: "SCOE is one of Navi Mumbai’s premier engineering institutions. With a focus on innovation and industry-driven education, we strive for excellence in engineering, research, and sustainability.",
    highlight1: "innovation",
    highlight2: "industry-driven education", 
  },
  vision: {
    title: "🌍 Vision",
    text: "To be globally recognized as an autonomous Institute in engineering education with an emphasis on academics, research and skills enhancement to create innovators and future leaders for Industry and societal needs.",
  },
  mission: {
    title: "🎯 Mission",
    points: [
      "M1: To provide theoretical and practical knowledge through quality teaching learning to develop competent engineers.",
      "M2: To create an ambience that facilitates research, entrepreneurship and collaborations leading to emergence of innovators and future leaders.",
      "M3: To develop a student-centric approach that inculcates moral, ethical values and leadership skills for holistic development.",
    ],
  },
  callToActions: [
    { text: "Learn More 🔍", link: "conference" },
    { text: "Apply Now ✍️", link: "call-for-paper" },
  ],

  collegeImagesCard: {
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
  },

};

// ############# conferenceTracks 3333333333333333333333####################################################################################################################################################################################################



export const conferenceTracks = {
  section: {
    id: "conference-tracks",
    name: "conference-tracks",
    title: "🎯 Explore Our Conference Tracks",
    description:
      "We invite researchers, scholars, and professionals to contribute to our diverse conference tracks. Click on a track to explore the exciting themes and cutting-edge topics covered this year.",
  },

  tracks: [
    {
      id: "track1",
      title: "Green Technology Initiatives",
      icon: <Leaf size={24} />,
      topics: [
        "Pollution prevention technology",
        "Sustainable Environment Management",
        "Waste To Energy (WTE) Technology",
        "Emerging Green Energy Technologies",
        "Greening Urbanization and Settlements",
        "Water resources Engineering",
        "Rural Development through Green Technology",
        "Smart City and communities",
        "Climate Change and Disaster Management",
        "Use of Remote Sensing and GIS for sustainability",
        "AI & ML for Sustainable Environment Management",
      ],
    },
    {
      id: "track2",
      title: "Emerging Technologies in Structural Design",
      icon: <Building2 size={24} />,
      topics: [
        "Innovations in sustainable design techniques of tall structures",
        "Advances in sustainable building construction",
        "Innovations in sustainable repair & retrofitting techniques",
        "Advances in Geotechnical Engg",
        "Sustainable transportation systems",
        "Recent advances in real estate & infrastructure",
        "Composite and Smart Materials",
        "Concrete products",
        "New Technologies in Structural Design and Construction",
        "AI & ML in Structural Engineering",
      ],
    },
    {
      id: "track3",
      title: "Green Mobility Solutions",
      icon: <Car size={24} />,
      topics: [
        "Electric Vehicles (EVs)",
        "Hybrid Vehicles",
        "Alternative Fuels",
        "Lightweight Materials",
        "Aerodynamics and Drag Reduction",
        "Eco-Friendly Manufacturing",
        "End-of-Life Vehicle Recycling",
        "Sustainable Supply Chain Management",
        "Biodegradable Materials",
        "Life Cycle Assessment",
      ],
    },
    {
      id: "track4",
      title: "Advances in Sustainable Technologies",
      icon: <Lightbulb size={24} />,
      topics: [
        "Energy efficiency and management",
        "Machine learning for sustainable manufacturing",
        "IoT-based sustainable solutions",
        "Precision agriculture and smart farming",
        "Simulation study for design engineering",
        "Economical design and sustainable product development",
        "Digitization and smart manufacturing",
        "Sustainable materials and biodegradability",
      ],
    },
  ],

  importantNote: {
    icon: "📌",
    title: "Important Note:",
    text: "The topics are Not limited to the listed ones and can be extended under each track.",
    format: "All papers must adhere to IEEE double-column format.",
  },
};

// ###############timelineData#########44444444444444444444444#########################################################################################################################################################################################


export const timelineData = {
  section: {
    id: "timeline",
    name: "timeline",
    title: "📅 Important Conference Dates",
    description:
      "Stay informed about key milestones! Follow the timeline below to track important deadlines.",
  },

  events: [
    {
      id: "1️",
      title: "Submission of Full Paper",
      desc: "Submit your research and shape the future! 📜",
      date: "📆 March 17, 2025",
      color: "#A3472A",
    },
    {
      id: "2️",
      title: "Notification of Acceptance",
      desc: "Get confirmation & start preparing! ✉️",
      date: "📆 March 24, 2025",
      color: "#5C7A4D",
    },
    {
      id: "3️",
      title: "Last Date of Registration",
      desc: "Secure your spot & join us! 🏆",
      date: "📆 March 28, 2025",
      color: "#C1A65C",
    },
  ],
};
// ##############################55555555555555555###################################################################################################################################################################################


export const callForPapersData = {
  section: {
    id: "call-for-paper",
    name: "call-for-paper",
    title: "📜 Call for Papers - SUSTECH 2025",
    description:
      "We invite researchers, scholars, and professionals to submit their papers for SUSTECH 2025. Selected quality papers will be published in SCOPUS Indexed Journals, Web of Science Journals, and Peer reviewed journals (subject to acceptance & applicable fees).",
  },

  bestPaperAward: {
    sponsorText: "Best paper award is sponsored by",
    sponsorName: "The Institution of Engineers (India)",
    sponsorLocation: "Navi Mumbai Local Centre",
  },

  submission: {
    title: "📌 Submission Details",
    details: [
      {
        icon: "🖊️",
        label: "Submission Link:",
        value: "Submit via Microsoft CMT",
        url: "https://cmt3.research.microsoft.com/SUSTECH2025",
      },
      {
        icon: "📧",
        label: "Email Inquiries:",
        value: "sustech2025@gmail.com",
        url: "mailto:sustech2025@gmail.com",
      },
      {
        icon: "🎯",
        label: "Important:",
        value: "Ensure the track name is mentioned in the header of your paper before submission.",
        url: null, // No link needed
      },
    ],
  },

  publication: {
    icon: "📚",
    title: "Publication Opportunities",
    description:
      "Papers will be published in Conference Proceedings / Book Chapters with an ISBN number. Selected quality papers will be published in SCOPUS Indexed, Web of Science, and other peer-reviewed journals, subject to acceptance (*with applicable fees).",
  },

  acknowledgement: {
    title: "Acknowledgement for Microsoft CMT",
    description:
      "The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft, and they bore all expenses, including costs for Azure cloud services, software development, and support.",
  },
};




// ########666666666666666666#########################################################################################################################################################################################################


export const registrationData = {
  section: {
    id: "registration",
    name: "registration",
    title: "💳 Registration Details",
    description:
      "Secure your spot at SUSTECH 2025 by completing your registration. Below are the applicable fees and payment details.",
  },

  fees: {
    title: "📌 Registration Fees",
    columns: ["Category", "Indian Delegates", "Foreign Delegates"],
    rows: [
      {
        category: "🎓 Students/Research Scholars",
        indian: "₹ 1500/-",
        foreign: "$ 17.27",
      },
      {
        category: "📚 Academicians",
        indian: "₹ 2000/-",
        foreign: "$ 23",
      },
      {
        category: "🏢 Delegates from Industry",
        indian: "₹ 3000/-",
        foreign: "$ 34.54",
      },
    ],
  },

  payment: {
    title: "🏦 Payment Information",
    description: "Make your payment via electronic transfer to the details below:",
    details: [
      {
        label: "🏛 Bank Name:",
        value: "AXIS BANK LTD, Kharghar, Navi Mumbai-410210",
      },
      {
        label: "👤 A/C Holder Name:",
        value: "SARASWATI COLLEGE OF ENGINEERING",
      },
      {
        label: "🏦 A/C No:",
        value: "921010013658855",
      },
      {
        label: "🔗 IFSC Code:",
        value: "UTIB0002925",
      },
    ],
  },
};

// ###########777777777777777######################################################################################################################################################################################################

export const patronsData = {
  section: {
    id: "patrons-chairs",
    name: "patrons-chairs",
    title: "🎖️ Patrons & Chair",
  },
  members: [
    {
      role: "Chairman",
      organization: "Saraswati Education Society",
      name: "Hon. Raviraj ji P. Deshmukh",
      image: chairman, // Update path as needed
    },
    {
      role: "Secretary",
      organization: "Saraswati Education Society",
      name: "Hon. Vrushali P. Deshmukh",
      image: secretary,
    },
    {
      role: "Principal",
      organization: "SCOE, Navi Mumbai",
      name: "Dr. Manjusha Deshmukh",
      image: principal,
    },
  ],
};
// ############888888888888888888888888#####################################################################################################################################################################################################


export const committeeData = [
  {
    title: "Program Chairs",
    members: ["Dr. Pooja Somani", "Dr. Saumya Singh"],
  },
  {
    title: "Executive Committee",
    members: [
      "Prof. Roshni John",
      "Prof. T. Z Quazi",
      "Dr. Sayali Choudhari",
      "Dr. Prashant Ingle",
      "Dr. Paramjit Thakur",
      "Dr. Devkant Baviskar",
      "Dr. Mitali Mhatre",
      "Dr. Sonali Jadhav",
    ],
  },
  {
    title: "Organisers",
    members: ["Prof. Manoj Pillai", "Prof. Amruta Patil", "Prof. Supriya Kadam", "Prof. Vaibhav Ajmire"],
  },
];

export const advisoryCommittees = [
  {
    title: "International Advisory Committee",
    members: [
      {
        name: "Dr. Minoru Sasaki",
        role: "Professor, Gifu University, Tokai National Higher Education and Research System, Japan",
      },
      {
        name: "Mr. Roland Zepeck",
        role: "Director, International Business Development, Germany",
      },
      {
        name: "Mr. Vaibhav Bukkawar",
        role: "Sr. Mechanical Engineer, Kent International Arabia Ltd., Abu Dhabi, UAE",
      }
    ],
    gridSpan: "lg:col-span-2",
  },
  {
    title: "National Advisory Committee",
    members: [
      {
        name: "Dr. Muralikrishna V. Iyyanki",
        role: "Dr. Raja Ramanna Distinguished Fellow, DRDO, RCI, Ministry of Defence, Govt. of India (2014-17), Chief Advisor, Smart Village Movement, Hyderabad, Telangana",
      },
      {
        name: "Dr. T.V. Ramachandra",
        role: "Co-ordinator, Energy & Wetlands Research Group, Center for Ecological Sciences, IISc, Bangalore, Karnataka | Convenor, Environmental Information System (ENVIS)",
      },
      {
        name: "Dr. Prashant Bhise",
        role: "DGM - Civil, Structural & Architectural, Worley India Ltd",
      },
      {
        name: "Dr. S. G. Kadam",
        role: "Chairman and Managing Director, Strufcon Engineers",
      },
      {
        name: "Dr. Ganesh Kakandikar",
        role: "Professor, Dean MIT WPU, Pune",
      },
      {
        name: "Dr. Nilaj Deshmukh",
        role: "Dean, Admin & Faculty, FCRIT, Vashi (Navi Mumbai)",
      },
      {
        name: "Dr. Mala Singh",
        role: "Chairperson, IGBC Mumbai Chapter | Founder & MD - PEC Greening India | IGBC Fellow & AP | GRIHA CP | LEED GA | Certified ESG, Carbon & Sustainability Expert",
      },
      {
        name: "Dr. Sagar U. Sapkal",
        role: "Head, Department of Mechanical Engineering, Walchand College of Engineering, Sangli",
      },
      {
        name: "Dr. Rajesh Jaware",
        role: "Senior Consultant, RTMSSU, Mumbai",
      },
    ],
    gridSpan: "lg:col-span-3",
  },
];

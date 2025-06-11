import { createContext, useContext } from "react";

const ProjectContext = createContext();

const ProjectProvider = ({ children }) => {
  const projects = [
    {
      id: 1,
      title: "Anime Nexus",
      image:
        "https://res.cloudinary.com/dsxq0kytm/image/upload/v1749288764/Capture_itjfr7.png",
      link: "https://anime-stickers.vercel.app/",
      features: [
        "Anime Discovery",
        "Advanced Search & Price Filters",
        "Responsive UI",
        "Dark Mode Support",
      ],
      techStack: [
     <div className="flex flex-wrap gap-1 ">
  {/* Frontend */}
  <span className="inline-flex items-center px-4 py-2 rounded-full bg-black text-sm font-medium text-white shadow-md hover:bg-[#2ab2fe] transition">
    <img loading="lazy" src="https://img.icons8.com/color/48/react-native.png" alt="React.js" className="w-5 h-5 mr-2 rounded-full" />
    React v19
  </span>


  <span className="inline-flex items-center px-4 py-2 rounded-full bg-black text-sm font-medium text-white shadow-md hover:bg-[#2ab2fe] transition">
    <img loading="lazy" src="https://img.icons8.com/color/48/tailwind_css.png" alt="Tailwind CSS" className="w-5 h-5 mr-2 rounded-full" />
    Tailwind CSS
  </span>

  <span className="inline-flex items-center px-4 py-2 rounded-full bg-black text-sm font-medium text-white shadow-md hover:bg-[#2ab2fe] transition">
    <img loading="lazy" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-react-router-a-collection-of-navigational-components-that-compose-declaratively-logo-color-tal-revivo.png" alt="React Router" className="w-5 h-5 mr-2 rounded-full" />
    React Router
  </span>

  {/* State Management */}
  <span className="inline-flex items-center px-4 py-2 rounded-full bg-black text-sm font-medium text-white shadow-md hover:bg-[#2ab2fe] transition">
    <img loading="lazy" src="https://img.icons8.com/color/48/redux.png" alt="Redux Toolkit" className="w-5 h-5 mr-2 rounded-full" />
    Redux Toolkit
  </span>


  <span className="inline-flex items-center px-4 py-2 rounded-full bg-black text-sm font-medium text-white shadow-md hover:bg-[#2ab2fe] transition">
    <img loading="lazy" src="https://cdn-icons-png.flaticon.com/512/1822/1822899.png" alt="AOS Animation" className="w-5 h-5 mr-2 rounded-full" />
    AOS Animation
  </span>

  {/* API Integration */}
  <span className="inline-flex items-center px-4 py-2 rounded-full bg-black text-sm font-medium text-white shadow-md hover:bg-[#2ab2fe] transition">
    <img loading="lazy" src="https://img.icons8.com/fluency/48/api-settings.png" alt="Context API" className="w-5 h-5 mr-2 rounded-full" />
    Context API 
  </span>
</div>

      ],
    },
    {
      id: 5,
      title: "Next-Do",
      image:
        "https://res.cloudinary.com/dsxq0kytm/image/upload/v1749288347/Capture_aceh7o.png",
      link: "https://next-do.vercel.app/",
      features: [
        "Task Management",
        "Real-Time Updates",
        "Responsive Design",
        "Authentication System",
      ],
      techStack: [
       <div className="flex flex-wrap gap-1">
  {/* Frontend */}
  <span className="inline-flex items-center px-4 py-2 rounded-full bg-black text-sm font-medium text-white shadow-md hover:bg-[#2ab2fe] transition">
    <img src="https://img.icons8.com/color/48/react-native.png" alt="React" className="w-5 h-5 mr-2 rounded-full" loading="lazy" />
    React
  </span>

  {/* State Management */}
  <span className="inline-flex items-center px-4 py-2 rounded-full bg-black text-sm font-medium text-white shadow-md hover:bg-[#2ab2fe] transition">
    <img src="https://img.icons8.com/color/48/redux.png" alt="Redux" className="w-5 h-5 mr-2 rounded-full" loading="lazy" />
    Redux
  </span>

  <span className="inline-flex items-center px-4 py-2 rounded-full bg-black text-sm font-medium text-white shadow-md hover:bg-[#2ab2fe] transition">
    <img src="https://img.icons8.com/fluency/48/api-settings.png" alt="Context API" className="w-5 h-5 mr-2 rounded-full" loading="lazy" />
    Context API
  </span>

  {/* Styling */}
  <span className="inline-flex items-center px-4 py-2 rounded-full bg-black text-sm font-medium text-white shadow-md hover:bg-[#2ab2fe] transition">
    <img src="https://img.icons8.com/color/48/tailwind_css.png" alt="Tailwind CSS" className="w-5 h-5 mr-2 rounded-full" loading="lazy" />
    Tailwind CSS
  </span>

  {/* Authentication */}
  <span className="inline-flex items-center px-4 py-2 rounded-full bg-black text-sm font-medium text-white shadow-md hover:bg-[#2ab2fe] transition">
    <img src="https://img.icons8.com/color/48/firebase.png" alt="Firebase" className="w-5 h-5 mr-2 rounded-full" loading="lazy" />
    Firebase Auth
  </span>
</div>

      ],
    },
    {
      id: 2,
      title: "Currency Convert",
      image:
        "https://res.cloudinary.com/dsxq0kytm/image/upload/v1744642117/Screenshot_5_sywnku.png",
      link: "https://exchange-indol-ten.vercel.app/",
      features: [
        "Live Exchange Rates",
        "Multi-Currency Support",
        "User-Friendly UI",
        "Instant Calculations",
      ],
      techStack: [
       <div className="flex flex-wrap gap-1">
  {/* Frontend */}
  <span className="inline-flex items-center px-4 py-2 rounded-full bg-black text-sm font-medium text-white shadow-md hover:bg-[#2ab2fe] transition">
    <img src="https://img.icons8.com/color/48/react-native.png" alt="React" className="w-5 h-5 mr-2 rounded-full" loading="lazy" />
    React
  </span>

  <span className="inline-flex items-center px-4 py-2 rounded-full bg-black text-sm font-medium text-white shadow-md hover:bg-[#2ab2fe] transition">
    <img src="https://img.icons8.com/color/48/javascript--v1.png" alt="JavaScript" className="w-5 h-5 mr-2 rounded-full" loading="lazy" />
    JavaScript
  </span>

  <span className="inline-flex items-center px-4 py-2 rounded-full bg-black text-sm font-medium text-white shadow-md hover:bg-[#2ab2fe] transition">
    <img src="https://img.icons8.com/color/48/html-5--v1.png" alt="HTML" className="w-5 h-5 mr-2 rounded-full" loading="lazy" />
    HTML
  </span>

  <span className="inline-flex items-center px-4 py-2 rounded-full bg-black text-sm font-medium text-white shadow-md hover:bg-[#2ab2fe] transition">
    <img src="https://img.icons8.com/color/48/css3.png" alt="CSS" className="w-5 h-5 mr-2 rounded-full" loading="lazy" />
    CSS
  </span>

  {/* API Integration */}
  <span className="inline-flex items-center px-4 py-2 rounded-full bg-black text-sm font-medium text-white shadow-md hover:bg-[#2ab2fe] transition">
    <img src="https://img.icons8.com/fluency/48/api-settings.png" alt="API" className="w-5 h-5 mr-2 rounded-full" loading="lazy" />
    Exchange Rate API
  </span>


</div>

      ],
    },

    {
      id: 3,
      title: "Text to QR Code",
      image:
        "https://res.cloudinary.com/dsxq0kytm/image/upload/v1749288838/Capture_dol9qa.png",
      link: "https://simple-interest-calculator-tr9v.vercel.app/",
      features: [
        "Instant QR Code Generation",
        "Multi-Format Support",
        "Responsive Design",
      ],
      techStack: [
       <div className="flex flex-wrap gap-1">
  {/* Frontend */}


  <span className="inline-flex items-center px-4 py-2 rounded-full bg-black text-sm font-medium text-white shadow-md hover:bg-[#2ab2fe] transition">
    <img src="https://img.icons8.com/color/48/javascript--v1.png" alt="JavaScript" className="w-5 h-5 mr-2 rounded-full" loading="lazy" />
    JavaScript
  </span>

  <span className="inline-flex items-center px-4 py-2 rounded-full bg-black text-sm font-medium text-white shadow-md hover:bg-[#2ab2fe] transition">
    <img src="https://img.icons8.com/color/48/html-5--v1.png" alt="HTML" className="w-5 h-5 mr-2 rounded-full" loading="lazy" />
    HTML
  </span>

  <span className="inline-flex items-center px-4 py-2 rounded-full bg-black text-sm font-medium text-white shadow-md hover:bg-[#2ab2fe] transition">
    <img src="https://img.icons8.com/color/48/css3.png" alt="CSS" className="w-5 h-5 mr-2 rounded-full" loading="lazy" />
    CSS
  </span>

  {/* API Integration */}
  <span className="inline-flex items-center px-4 py-2 rounded-full bg-black text-sm font-medium text-white shadow-md hover:bg-[#2ab2fe] transition">
    <img src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/48/external-qr-code-web-and-seo-flatart-icons-flat-flatarticons.png" alt="QR API" className="w-5 h-5 mr-2 rounded-full" loading="lazy" />
    QR Code API
  </span>
</div>

      ],
    },

  ];

  return (
    <ProjectContext.Provider value={{ projects }}>
      {children}
    </ProjectContext.Provider>
  );
};

// Custom hook to use the context
const useProjects = () => useContext(ProjectContext);

export { ProjectProvider, useProjects, ProjectContext };

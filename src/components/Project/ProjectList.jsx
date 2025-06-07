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
        "Advanced Search & Filters",
        "Responsive UI",
        "Dark Mode Support",
      ],
      techStack: [
        "Frontend: React v19, Redux, Tailwind CSS, React Router",
        "State Management: Redux Toolkit",
        "Styling: Tailwind CSS, AOS (for smooth animations)",
        "API Integration: Consumes anime data from an external API (Context API)",
      ],
    },
  {
  id: 5,
  title: "Next-Do",
  image: "https://res.cloudinary.com/dsxq0kytm/image/upload/v1749288347/Capture_aceh7o.png",
  link: "https://next-do.vercel.app/",
  features: [
    "Task Management",
    "Real-Time Updates",
    "Responsive Design",
    "Authentication System",
  ],
  techStack: [
    "Frontend: React, Next.js",
    "State Management: Context API or Redux",
    "Styling: Tailwind CSS",
    "Authentication: Firebase Auth or similar",
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
        "Responsive Design",
        "Instant Calculations",
      ],
      techStack: [
        "Frontend: React, JavaScript, HTML, CSS",
        "API Integration: Exchange rate API for real-time currency data",
        "Styling: Tailwind CSS for a sleek and modern UI",
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
        "Frontend: React, JavaScript, HTML, CSS",
        "API Integration: QR Code Generation API",
      ],
    },
   
    {
  id: 4,
  title: "Password Generator",
  image:
    "https://res.cloudinary.com/dsxq0kytm/image/upload/c_crop,ar_1:1/v1744642118/Screenshot_7_a1qfes.png",
  link: "https://random-password-generator-1rqv.vercel.app/",
  features: [
    "Instant Password Generation",
    "Customizable Options",
    "Copy to Clipboard",
    "User-Friendly UI",
    "Responsive Design",
  ],
  techStack: [
    "Frontend: React, JavaScript, HTML, CSS",
    "State Management: React Hooks for real-time updates",
    "Styling: Tailwind CSS for a modern look",
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

export { ProjectProvider, useProjects ,ProjectContext };

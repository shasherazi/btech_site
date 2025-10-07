import { MenuItem } from "@/types/menu-d-t";

const headerMenuData:MenuItem[] = [
  {
    id: 2,
    active: true,
    children: true,
    title: "Solutions",
    pluseIncon: true,
    link: "#",
    smallMenu: true,
    submenus: [
      {
        title: "IT Services",
        link: "#",
        pluseIncon: true,

        megaMenu: [
          { "title": "Web And Mobile Development", "link": "/service/webAndMobile" },
          { "title": "Enterprise Software Development", "link": "/service/enterpriseSoftwareDevelopment" },
          { "title": "E-commerce Development", "link": "/service/eCommerce" },
          { "title": "Artificial Intelligence", "link": "/service/ai" },
          { "title": "Cyber Security", "link": "/service/cyberSecurity" },
          { "title": "UI/UX Design", "link": "/service/uiUxDesign" }
        ]
      },
      {
        title: "IT Consulting",
        link: "#",
        pluseIncon: true,
        megaMenu: [
          { title: "Recruitment & Staffing", link: "/service/recruitmentAndStaffing" },
          { title: "Devops & Automation", link: "/service/devopsAndAutomation" },
          { title: "Software Architecture", link: "/service/softwareArchitecture" },
        ]
      },
      {
        title: "Sales & Marketing",
        link: "#",
        pluseIncon: true,
        megaMenu: [
          { title: "Social Media Marketing", link: "/service/socialMediaMarketing" },
          { title: "Digital Marketing", link: "/service/digitalMarketing" },
          { title: "Email Marketing", link: "/service/emailMarketing" },
          { title: "Lead Generation & Growth", link: "/service/leadGeneration" },
        
        ]
      }, 
      {
        title: "Branding",
        link: "#",
        pluseIncon: true,
        megaMenu: [
          { title: "Personal Branding", link: "/service/personalBranding" },
          { title: "Corporate Branding", link: "/service/corporateBranding" },
       
        ]
      }
    
    ]
  },
  {
    id: 3,
    hasDropdown: false,
    active: true,
    children: false,
    title: "Portfolio",
    pluseIncon: false,
    mediumMenu: false,
    link: "/portfolio-metro-light"
  },
  {
    id: 6,
    hasDropdown: true,
    active: true,
    megaMenu: false,
    children: false,
    title: "Contact",
    pluseIncon: true,
    link: "/contact",
  },
  {
    id: 3,
    hasDropdown: false,
    active: true,
    children: false,
    title: "FAQ",
    pluseIncon: false,
    mediumMenu: false,
    link: "/faq-light"
  }
];
export default headerMenuData;


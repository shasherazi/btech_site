import { MenuItem } from "@/types/menu-d-t";
import MegaMenuThumb from "../../../public/assets/img/menu/menu-1.png";

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
          { title: "Recruitment & Staffing", link: "/service-1-light" },
          { title: "Devops & Automation", link: "/service-2-light" },
          { title: "Software Architecture", link: "/service-3-light" },
          { title: "Modern Services", link: "/service-4-light" },
          { title: "Services Details", link: "/service-details-light" },
          { title: "Services Details 02", link: "/service-details-2-light" }
        ]
      },
      {
        title: "Sales & Marketing",
        link: "#",
        pluseIncon: true,
        megaMenu: [
          { title: "Social Media Marketing", link: "/career-details-light" },
          { title: "Digital Marketing", link: "/pricing-light" },
          { title: "Email Marketing", link: "/team-light" },
          { title: "Lead Generation & Growth", link: "/team-details-light" }
        
        ]
      }, 
      {
        title: "Branding",
        link: "#",
        pluseIncon: true,
        megaMenu: [
          { title: "Personal Branding", link: "/career-details-light" },
          { title: "Corporate Branding", link: "/pricing-light" },
       
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
    children: true,
    title: "Contact",
    pluseIncon: true,
    link: "/contact",
    submenus: [
      {
        title: "Contact Me",
        link: "/contact-me-light",
        pluseIncon: false
      },
      {
        title: "Contact Us",
        link: "/contact-us-light",
        pluseIncon: false
      },
      {
        title: "Get In Touch",
        link: "/contact",
        pluseIncon: false
      },
    ]
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


import webDevBannerImage1 from "../../public/assets/img/non-theme/services/webdev/hero.jpeg";
import webDevImage2 from "../../public/assets/img/non-theme/services/webdev/process.jpeg";
import webDevImage3 from "../../public/assets/img/non-theme/services/webdev/benefits.jpeg";

import esdBannerImage1 from "../../public/assets/img/non-theme/services/esd/hero.jpeg";
import esdImage2 from "../../public/assets/img/non-theme/services/esd/process.jpeg";
import esdImage3 from "../../public/assets/img/non-theme/services/esd/benefits.jpeg";

import ecomBannerImage1 from "../../public/assets/img/non-theme/services/ecom/hero.jpeg";
import ecomImage2 from "../../public/assets/img/non-theme/services/ecom/process.jpeg";
import ecomImage3 from "../../public/assets/img/non-theme/services/ecom/benefits.jpeg";

import aiBannerImage1 from "../../public/assets/img/non-theme/services/ai/hero.jpeg";
import aiImage2 from "../../public/assets/img/non-theme/services/ai/process.jpeg";
import aiImage3 from "../../public/assets/img/non-theme/services/ai/benefits.jpeg";

import cyberSecBannerImage1 from "../../public/assets/img/non-theme/services/cyberSec/hero.jpeg";
import cyberSecImage2 from "../../public/assets/img/non-theme/services/cyberSec/process.jpeg";
import cyberSecImage3 from "../../public/assets/img/non-theme/services/cyberSec/benefits.jpeg";

import uiuxBannerImage1 from "../../public/assets/img/non-theme/services/uiux/hero.jpeg";
import uiuxImage2 from "../../public/assets/img/non-theme/services/uiux/process.jpeg";
import uiuxImage3 from "../../public/assets/img/non-theme/services/uiux/benefits.jpeg";
import { StaticImageData } from "next/image";

export interface NonThemeServiceData {
    smallHeading: string;
    bigHeading: string;
    description: string;
    subServices: string[];
    bannerImage: StaticImageData;
    secondHeading: string;
    secondDescription: string;
    processSteps: {
        stepNumber: string;
        stepDescription: string;
    }[];
    secondImage: StaticImageData;
    thirdHeading: string;
    thirdDescription: string;
    thirdImage: StaticImageData;
}

export const nonThemeServicesData: Record<string, NonThemeServiceData> = {
    webAndMobile: {
        smallHeading: "WEB DESIGN",
        bigHeading: "Web and mobile development",
        description: "Explore solutions for creating responsive and efficient web and mobile applications that work seamlessly across all devices.",
        subServices: [
            "API Development",
            "Cloud Migration",
            "JavaScript",
            "WordPress",
            "Front End Development",
            "Flutter Framework",
        ],
        bannerImage: webDevBannerImage1,
        secondHeading: "We think out of the box and follow the working process",
        secondDescription: "Our design process thrives on creativity and collaboration, ensuring each project is unique and tailored to your specific goals and audience.",
        processSteps: [
            { stepNumber: "01", stepDescription: "Thinking and research" },
            { stepNumber: "02", stepDescription: "Discovering the problem" },
            { stepNumber: "03", stepDescription: "Scratch, design, and wireframes" },
            { stepNumber: "04", stepDescription: "Implementation and solution" },
        ],
        secondImage: webDevImage2,
        thirdHeading: "Our Benefits",
        thirdDescription: "Our team delivers top-tier web and design expertise, no matter where we’re located. We specialize in creating innovative solutions for clients around the globe, ensuring seamless collaboration and execution. People are at the heart of our projects, driving creativity and success through strong, strategic partnerships.",
        thirdImage: webDevImage3,
    },
    ai: {
        smallHeading: "AI SOLUTIONS",
        bigHeading: "Integrated Artificial Intelligence",
        description: "Harness the power of AI to transform your business processes and gain deeper insights.",
        subServices: [
            "Machine Learning",
            "Natural Language Processing",
            "Data Analytics",
            "Automation",
            "Predictive Models",
        ],
        bannerImage: aiBannerImage1,
        secondHeading: "Innovative AI Methodologies",
        secondDescription: "Our expertise in AI ensures the delivery of advanced solutions tailored to improve your business operations.",
        processSteps: [
            { stepNumber: "01", stepDescription: "Identify AI Opportunities" },
            { stepNumber: "02", stepDescription: "Model Development" },
            { stepNumber: "03", stepDescription: "Integration & Testing" },
            { stepNumber: "04", stepDescription: "Deployment & Monitoring" },
        ],
        secondImage: aiImage2,
        thirdHeading: "AI Driven Benefits",
        thirdDescription: "Our AI solutions drive efficiency and innovation, providing a competitive edge and unlocking new opportunities.",
        thirdImage: aiImage3,
    },
    enterpriseSoftwareDevelopment: {
        smallHeading: "ENTERPRISE SOLUTIONS",
        bigHeading: "Enterprise Software Development",
        description: "We build scalable and robust enterprise software solutions tailored to drive business growth and efficiency across your organization.",
        subServices: [
            "Enterprise Resource Planning",
            "Customer Relationship Management",
            "Business Process Automation",
            "Data Integration",
            "Cloud Services",
            "Legacy System Modernization",
        ],
        bannerImage: esdBannerImage1,
        secondHeading: "Transforming Business with Enterprise Solutions",
        secondDescription: "Our specialized approach ensures the creation of innovative and customized enterprise solutions through comprehensive research and a deep understanding of your business needs.",
        processSteps: [
            { stepNumber: "01", stepDescription: "Requirement Gathering and Analysis" },
            { stepNumber: "02", stepDescription: "Solution Design and Architecture" },
            { stepNumber: "03", stepDescription: "Development and Integration" },
            { stepNumber: "04", stepDescription: "Testing and Deployment" },
        ],
        secondImage: esdImage2,
        thirdHeading: "Enterprise Benefits",
        thirdDescription: "Our enterprise solutions enhance operational efficiency, streamline processes, and enable data-driven decision-making, empowering your business to achieve its strategic objectives.",
        thirdImage: esdImage3,
    },
    eCommerce: {
        smallHeading: "ECOMMERCE SOLUTIONS",
        bigHeading: "E-Commerce Development",
        description: "Launch and grow your online store with our comprehensive e-commerce development services, designed to enhance customer engagement and increase sales.",
        subServices: [
            "Online Store Development",
            "Payment Gateway Integration",
            "Shopping Cart Solutions",
            "Product Information Management",
            "SEO and Digital Marketing",
            "Multi-language and Currency Support",
        ],
        bannerImage: ecomBannerImage1,
        secondHeading: "Enhancing Online Retail Experience",
        secondDescription: "Our expert team delivers user-friendly and feature-rich e-commerce platforms that provide seamless shopping experiences and drive customer loyalty.",
        processSteps: [
            { stepNumber: "01", stepDescription: "Market Research and Planning" },
            { stepNumber: "02", stepDescription: "Platform Selection and Design" },
            { stepNumber: "03", stepDescription: "Development and Customization" },
            { stepNumber: "04", stepDescription: "Launch and Optimization" },
        ],
        secondImage: ecomImage2,
        thirdHeading: "E-Commerce Benefits",
        thirdDescription: "We help businesses leverage e-commerce platforms to reach a global audience, increase revenue, and build brand visibility in the competitive online marketplace.",
        thirdImage: ecomImage3,
    },
    cyberSecurity: {
        smallHeading: "CYBER SECURITY",
        bigHeading: "End-to-End cyber Security Solutions",
        description: "Protect your digital assets with our advanced cybersecurity services, designed to safeguard against evolving threats and vulnerabilities.",
        subServices: [
            "Network Security",
            "Threat Detection and Response",
            "Data Encryption",
            "Vulnerability Assessment",
            "Security Compliance",
            "Incident Management",
        ],
        bannerImage: cyberSecBannerImage1,
        secondHeading: "Building a Secure Digital Fortress",
        secondDescription: "Our cybersecurity experts employ cutting-edge technology and best practices to ensure the highest level of protection for your organization's networks and data.",
        processSteps: [
            { stepNumber: "01", stepDescription: "Security Assessment and Planning" },
            { stepNumber: "02", stepDescription: "Policy Development and Implementation" },
            { stepNumber: "03", stepDescription: "Continuous Monitoring" },
            { stepNumber: "04", stepDescription: "Incident Response" },
        ],
        secondImage: cyberSecImage2,
        thirdHeading: "Cybersecurity Benefits",
        thirdDescription: "Our solutions help prevent data breaches, mitigate risks, and ensure compliance, providing peace of mind and a secure digital environment for your business.",
        thirdImage: cyberSecImage3,
    },
    uiUxDesign: {
        smallHeading: "UI/UX DESIGN",
        bigHeading: "Exceptional UI/UX Design Services",
        description: "Enhance user satisfaction and engagement with our innovative UI/UX design services, focused on intuitive and aesthetically pleasing interfaces.",
        subServices: [
            "User Research",
            "Wireframing and Prototyping",
            "Interaction Design",
            "Visual Design",
            "Usability Testing",
            "Responsive Design",
        ],
        bannerImage: uiuxBannerImage1,
        secondHeading: "Crafting User-Centric Designs",
        secondDescription: "We combine user research and creative expertise to deliver designs that not only look stunning but also offer seamless functionality across devices.",
        processSteps: [
            { stepNumber: "01", stepDescription: "User Research and Analysis" },
            { stepNumber: "02", stepDescription: "Conceptualization and Wireframing" },
            { stepNumber: "03", stepDescription: "Prototyping and Testing" },
            { stepNumber: "04", stepDescription: "Final Design and Delivery" },
        ],
        secondImage: uiuxImage2,
        thirdHeading: "UI/UX Design Benefits",
        thirdDescription: "Our UI/UX designs improve user satisfaction by creating intuitive interfaces, leading to higher engagement, loyalty, and conversion rates.",
        thirdImage: uiuxImage3,
    },
};

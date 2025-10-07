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
    secondPoints: {
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
        secondPoints: [
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
        secondPoints: [
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
        secondPoints: [
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
        secondPoints: [
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
        secondPoints: [
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
        secondPoints: [
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
    personalBranding: {
        smallHeading: "PERSONAL BRANDING",
        bigHeading: "Personal Branding Solutions",
        description: "Craft your unique identity with our personal branding services. We help you articulate your strengths and showcase your talents to connect authentically with your audience.",
        subServices: [
            "Identity Development",
            "Social Media Strategy",
            "Portfolio Design",
            "Content Creation",
            "Reputation Management",
            "Networking Tactics",
        ],
        bannerImage: webDevBannerImage1,
        secondHeading: "Building Your Personal Brand",
        secondDescription: "Our team collaborates with you to uncover your authentic voice, creating a personalized brand strategy that highlights your distinctive qualities and aligns with your aspirations.",
        secondPoints: [
            { stepNumber: "01", stepDescription: "Identity Exploration" },
            { stepNumber: "02", stepDescription: "Strategic Planning" },
            { stepNumber: "03", stepDescription: "Content Development" },
            { stepNumber: "04", stepDescription: "Brand Launch" },
        ],
        secondImage: webDevImage2,
        thirdHeading: "Personal Branding Benefits",
        thirdDescription: "Gain confidence and visibility with a well-defined personal brand that amplifies your presence and opens doors to new opportunities.",
        thirdImage: webDevImage3,
    },
    corporateBranding: {
        smallHeading: "CORPORATE BRANDING",
        bigHeading: "Corporate Branding Excellence",
        description: "Strengthen your company's identity with our corporate branding solutions. We create cohesive and impactful brand experiences that resonate with your target audience and differentiate you in the marketplace.",
        subServices: [
            "Brand Identity Creation",
            "Market Positioning",
            "Logo and Visual Elements",
            "Brand Guidelines",
            "Communication Strategy",
            "Stakeholder Engagement",
        ],
        bannerImage: webDevBannerImage1,
        secondHeading: "Enhancing Corporate Image",
        secondDescription: "Our strategic approach to corporate branding ensures a consistent and memorable brand image, helping you build trust and loyalty among your customers.",
        secondPoints: [
            { stepNumber: "01", stepDescription: "Brand Discovery" },
            { stepNumber: "02", stepDescription: "Visual Identity Design" },
            { stepNumber: "03", stepDescription: "Strategic Implementation" },
            { stepNumber: "04", stepDescription: "Monitoring and Evolution" },
        ],
        secondImage: webDevImage2,
        thirdHeading: "Corporate Branding Benefits",
        thirdDescription: "Achieve market leadership and drive growth with a strong corporate brand that communicates your values and mission effectively.",
        thirdImage: webDevImage3,
    },
    recruitmentAndStaffing: {
        smallHeading: "RECRUITMENT & STAFFING",
        bigHeading: "Comprehensive Recruitment & Staffing Solutions",
        description: "Empower your business with top-tier talent through our recruitment and staffing services. We specialize in finding the right fit for your organization, ensuring seamless integration and long-term success.",
        subServices: [
            "Talent Acquisition",
            "Executive Search",
            "Temporary Staffing",
            "Contract Recruitment",
            "HR Consulting",
            "Onboarding Support",
        ],
        bannerImage: webDevBannerImage1,
        secondHeading: "Finding Your Perfect Match",
        secondDescription: "Our expert recruiters identify and attract highly skilled professionals, aligning them with your company's culture and needs for optimal performance.",
        secondPoints: [
            { stepNumber: "01", stepDescription: "Needs Assessment" },
            { stepNumber: "02", stepDescription: "Sourcing and Screening" },
            { stepNumber: "03", stepDescription: "Candidate Selection" },
            { stepNumber: "04", stepDescription: "Successful Onboarding" },
        ],
        secondImage: webDevImage2,
        thirdHeading: "Recruitment Benefits",
        thirdDescription: "Build a dynamic workforce that drives innovation and growth, enhancing your competitive advantage in the industry.",
        thirdImage: webDevImage3,
    },
    devopsAndAutomation: {
        smallHeading: "DEVOPS & AUTOMATION",
        bigHeading: "Streamlined DevOps & Automation Solutions",
        description: "Revolutionize your development process with our DevOps and automation services. We enhance collaboration and efficiency, delivering faster, more reliable software deployments.",
        subServices: [
            "Continuous Integration",
            "Infrastructure as Code",
            "Automated Testing",
            "Configuration Management",
            "Monitoring & Logging",
            "Deployment Pipelines",
        ],
        bannerImage: webDevBannerImage1,
        secondHeading: "Accelerating Delivery and Innovation",
        secondDescription: "Our DevOps specialists streamline your operations, integrating best practices and cutting-edge tools to accelerate your digital transformation.",
        secondPoints: [
            { stepNumber: "01", stepDescription: "Process Evaluation" },
            { stepNumber: "02", stepDescription: "Toolchain Integration" },
            { stepNumber: "03", stepDescription: "Automation Implementation" },
            { stepNumber: "04", stepDescription: "Performance Monitoring" },
        ],
        secondImage: webDevImage2,
        thirdHeading: "DevOps Benefits",
        thirdDescription: "Achieve unprecedented agility and efficiency with a robust DevOps culture, significantly reducing time-to-market and enhancing product quality.",
        thirdImage: webDevImage3,
    },
    softwareArchitecture: {
        smallHeading: "SOFTWARE ARCHITECTURE",
        bigHeading: "Innovative Software Architecture Solutions",
        description: "Design scalable and resilient software systems with our expert architecture services. We craft robust frameworks that support your business's current and future needs.",
        subServices: [
            "Architecture Design",
            "System Integration",
            "Performance Optimization",
            "Scalability Planning",
            "Microservices",
            "Cloud-Native Architecture",
        ],
        bannerImage: webDevBannerImage1,
        secondHeading: "Building Future-Proof Systems",
        secondDescription: "Our architects combine strategic insight with technical expertise to develop sophisticated architectures that ensure long-term success and adaptability.",
        secondPoints: [
            { stepNumber: "01", stepDescription: "Requirements Gathering" },
            { stepNumber: "02", stepDescription: "Architectural Modeling" },
            { stepNumber: "03", stepDescription: "Design Validation" },
            { stepNumber: "04", stepDescription: "Implementation Support" },
        ],
        secondImage: webDevImage2,
        thirdHeading: "Architecture Benefits",
        thirdDescription: "Leverage cutting-edge architectural solutions to enhance system performance and scalability, aligning with your growth objectives.",
        thirdImage: webDevImage3,
    },
    socialMediaMarketing: {
        smallHeading: "SOCIAL MEDIA MARKETING",
        bigHeading: "Engaging Social Media Marketing Services",
        description: "Harness the power of social media to connect with your audience and boost your brand presence. Our tailored strategies engage and inspire, turning followers into loyal customers.",
        subServices: [
            "Content Creation",
            "Social Media Strategy",
            "Engagement Campaigns",
            "Analytics & Reporting",
            "Influencer Collaboration",
            "Community Management",
        ],
        bannerImage: webDevBannerImage1,
        secondHeading: "Building a Vibrant Online Community",
        secondDescription: "We craft compelling content and campaigns that resonate with your audience, driving meaningful interactions and expanding your reach on social platforms.",
        secondPoints: [
            { stepNumber: "01", stepDescription: "Audience Analysis" },
            { stepNumber: "02", stepDescription: "Creative Content Design" },
            { stepNumber: "03", stepDescription: "Multi-Platform Execution" },
            { stepNumber: "04", stepDescription: "Performance Optimization" },
        ],
        secondImage: webDevImage2,
        thirdHeading: "Social Media Benefits",
        thirdDescription: "Transform your social presence and build lasting relationships by leveraging insights and creativity to engage your audience effectively.",
        thirdImage: webDevImage3,
    },
    digitalMarketing: {
        smallHeading: "DIGITAL MARKETING",
        bigHeading: "Comprehensive Digital Marketing Solutions",
        description: "Elevate your brand with our data-driven digital marketing services. We design and implement strategies that increase visibility and generate impactful results.",
        subServices: [
            "SEO Optimization",
            "Content Marketing",
            "PPC Advertising",
            "Analytics and Insights",
            "Conversion Rate Optimization",
            "Brand Strategy",
        ],
        bannerImage: webDevBannerImage1,
        secondHeading: "Driving Growth with Digital Excellence",
        secondDescription: "Our holistic approach integrates cutting-edge tools and techniques to optimize your online presence and unlock new growth opportunities.",
        secondPoints: [
            { stepNumber: "01", stepDescription: "Goal Setting and Strategy" },
            { stepNumber: "02", stepDescription: "Channel Selection" },
            { stepNumber: "03", stepDescription: "Campaign Execution" },
            { stepNumber: "04", stepDescription: "Results Analysis" },
        ],
        secondImage: webDevImage2,
        thirdHeading: "Digital Marketing Benefits",
        thirdDescription: "Achieve measurable growth and a competitive edge with strategies that adapt to the dynamic digital landscape and meet your unique business objectives.",
        thirdImage: webDevImage3,
    },
    emailMarketing: {
        smallHeading: "EMAIL MARKETING",
        bigHeading: "Targeted Email Marketing Campaigns",
        description: "Connect directly with your audience through personalized email marketing. Our tailored campaigns capture attention, foster engagement, and drive conversions.",
        subServices: [
            "Campaign Strategy",
            "Personalized Messaging",
            "Automation and Segmentation",
            "A/B Testing",
            "Drip Campaigns",
            "List Management",
        ],
        bannerImage: webDevBannerImage1,
        secondHeading: "Crafting Compelling Email Journeys",
        secondDescription: "We leverage data and creativity to deliver engaging email content that informs, entertains, and inspires action, strengthening customer relationships.",
        secondPoints: [
            { stepNumber: "01", stepDescription: "Audience Segmentation" },
            { stepNumber: "02", stepDescription: "Creative Content Creation" },
            { stepNumber: "03", stepDescription: "Automated Sending" },
            { stepNumber: "04", stepDescription: "Performance Optimization" },
        ],
        secondImage: webDevImage2,
        thirdHeading: "Email Marketing Benefits",
        thirdDescription: "Maximize ROI with targeted email strategies that increase customer retention and drive repeat business through meaningful engagement.",
        thirdImage: webDevImage3,
    },
    leadGeneration: {
        smallHeading: "LEAD GENERATION",
        bigHeading: "Effective Lead Generation Strategies",
        description: "Fuel your sales pipeline with high-quality leads through targeted lead generation services. We deploy strategic methods to attract and nurture prospects ready to convert.",
        subServices: [
            "Lead Capture",
            "Landing Page Optimization",
            "Content Offers",
            "Paid Advertising",
            "Lead Scoring",
            "CRM Integration",
        ],
        bannerImage: webDevBannerImage1,
        secondHeading: "Nurturing Leads to Conversion",
        secondDescription: "Our strategies focus on identifying and engaging potential customers, guiding them through the buyer journey with tailored content and interactions.",
        secondPoints: [
            { stepNumber: "01", stepDescription: "Target Audience Analysis" },
            { stepNumber: "02", stepDescription: "Creative Campaign Design" },
            { stepNumber: "03", stepDescription: "Lead Nurturing" },
            { stepNumber: "04", stepDescription: "Conversion Tracking" },
        ],
        secondImage: webDevImage2,
        thirdHeading: "Lead Generation Benefits",
        thirdDescription: "Empower your sales team with a steady stream of qualified leads, boosting sales and accelerating business growth through effective engagement strategies.",
        thirdImage: webDevImage3,
    },
};

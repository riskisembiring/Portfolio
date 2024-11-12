import portfolioImage from './assets/images/portfolio.png';
import ProjectImage1 from './assets/images/Project1.png';
import ProjectImage2 from './assets/images/Project2.jpg';
import ProjectImage3 from './assets/images/Project3.jpg';
import ProjectImage4 from './assets/images/Project4.png';
import ProjectImage5 from './assets/images/Project5.png';

const logotext = "Kikiii";
const meta = {
    title: "Riski Sembiring",
    description: "I’m Riski Sahputra Sembiring Software Developer _ Front End Developer _ Web App Developer, currently working in Indonesia",
};

const introdata = {
    title: "I’m Riski Sahputra Sembiring",
    animated: {
        first: "Software Developer",
        second: "Front End Developer",
        third: "Web App Developer",
    },
    description: "I am a FrontEnd Developer with experience in building responsive and innovative digital solutions. Using cutting-edge technologies like React, Angular, and SQL, I focus on creating efficient and user-friendly applications with high quality and performance. With a strong background in information systems, I am committed to continuously developing my technical skills and contributing my best to every project I work on.",
    your_img_url: portfolioImage,
};

const dataabout = {
    title: "about my self",
    aboutme: "Hello! I'm Riski. As a graduate with a Bachelor's degree in Information Systems, I bring a solid foundation in IT principles and a proven track record as a Software Developer at Bank OCBC. My expertise lies in utilizing cutting-edge technologies such as ReactJS, AngularJS, and SQL Database to deliver robust software solutions. Currently, I am on the lookout for new opportunities that will allow me to leverage my technical skills and continue my career in the IT field.",
};
const worktimeline = [{
        jobtitle: "Software Development",
        where: "PT. Bank OCBC nisp",
        date: "2023 - 2024",
    },
];

const skills = [{
        name: "Javascript",
        value: 85,
    },
    {
        name: "AngularJS",
        value: 80,
    },
    {
        name: "ReactJS",
        value: 85,
    },
    {
        name: "React Native",
        value: 70,
    },
    {
        name: "C#",
        value: 75,
    },
    {
        name: ".NET",
        value: 70,
    },
    {
        name: "NextJS",
        value: 70,
    },
    {
        name: "PHP",
        value: 70,
    },
    {
        name: "SQLServer",
        value: 80,
    },
];

const services = [{
        title: "Web App",
        description: "Building responsive and interactive web applications that are easily accessible across various devices. With modern design and robust functionality, this web application ensures an optimal user experience on every screen.",
    },
    {
        title: "Mobile App",
        description: "Providing mobile applications available for download on both iOS and Android devices. Designed to offer a seamless and user-friendly experience, this app leverages the latest technologies to deliver top performance on mobile devices.",
    },
];

const dataportfolio = [{
        img: ProjectImage1,
        description: "A church website with dummy data built using the ReactJS framework and the TypeScript programming language.",
        link: "https://website-gsri-2024.vercel.app/",
    },
    {
        img: ProjectImage2,
        description: "A portfolio website built using ReactJS,JavaScript and Tailwind Framework",
        link: "https://undangan-digital-two.vercel.app/",
    },
    {
        img: ProjectImage3,
        description: "A portfolio website built using ReactJS, and JavaScript, optimized for mobile resolution.",
        link: "https://portfolioriski.vercel.app/",
    },
    {
        img: ProjectImage4,
        description: "A program to calculate a person's Body Mass Index (BMI), using JavaScript HTML and CSS.",
        link: "https://github.com/revou-fundamental-course/5-aug-24-riskisembiring",
    },
    {
        img: ProjectImage5,
        description: "Collection API using .NET version 0.6 that has GET, UPDATE, DELETE methods",
        link: "https://github.com/riskisembiring/SIASmaSmartSchoolRESTApi",
    },
];

const contactConfig = {
    YOUR_EMAIL: "ikiputra876@gmail.com",
    YOUR_FONE: "(+62)852-7010-6010",
    description: "If you have any questions, want to discuss, or are interested in collaborating, please feel free to reach out via email or phone below. I will be happy to respond to your message as soon as possible.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/riskisembiring",
    Facebook: "https://www.facebook.com/riski.s.sembiring",
    linkedin: "https://www.linkedin.com/in/riski-sahputra-sembiring-51b7b2223/",
    twitter: "https://twitter.comhttps://x.com/IkiPutr90290894",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
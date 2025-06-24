import Head from 'next/head';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Service from "@/components/service";
import Portfolio from "@/components/portfolio";
import Technology from "@/components/technology";
import Testimonials from "@/components/testimonials";
import Stats from "@/components/stats";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import {IPageData} from "@/types/types";

export async function getServerSideProps() {
  const pageData = {
    title: "Laptronix Tech | Custom Software Development & Hardware engineering",
    description: "IT consulting, software engineering and hardware engineering. Laptronix covers the entire software development process, from product vision discussion to application design and software enhancement.",
    services: [
      {
        title: "Custom Software Development",
        description: "We design and build scalable, secure, and high-performance software solutions tailored to your business needs — from enterprise platforms to mobile applications.",
        image: "/images/hero/hero-0.jpg"
      },
      {
        title: "MVP Development",
        description: "We craft functional, user-focused MVPs in 6–8 weeks, enabling rapid validation of your product ideas and a faster go-to-market strategy.",
        image: "/images/hero/hero-1.jpg"
      },
      {
        title: "Hardware & Infrastructure Engineering",
        description: "We offer end-to-end hardware solutions including server setup, on-premise deployment, and IoT integrations to power your digital ecosystem.",
        image: "/images/hero/hardware.jpg"
      }
    ],
    portfolio: [
      {
        title: "Restaurant Management System",
        category: "Mobile and Web Development",
        description: "Developed a unified Point of Sale platform integrating third-party channels, with hybrid mobile apps using React Native, customizable web applications, and seamless cloud-based restaurant management for efficient operations.",
        image: "/images/hero/restuarant.jpg"
      },
      {
        title: "Payment System",
        category: "Affiliate Flow System",
        description: "Delivered a robust Merchant Payment system and Affiliate Flow system, secure transactions, and third-party integrations.",
        image: "/images/hero/payment.jpg"
      },
      {
        title: "FinTech Platform",
        category: "Customer Relationship Management",
        description: "Configured third-party tools, updated documentation, enhanced frontend, validated and localized views, rationalized features, resolved bugs, implemented Notification and NordNet Linking services, and integrated CRM tool with COB links.",
        image: "/images/hero/fintech.jpg"
      },
      {
        title: "Cross-Platform Desktop Application Development",
        category: "Web and Mobile Development",
        description: "We built a cross-platform desktop app using Electron and MERN stack for IoT ventilation management. Features include real-time air quality monitoring, automated controls, scheduling, and energy optimization across Windows, macOS, and Linux.",
        image: "/images/hero/iot.jpg"
      }
    ],
    technologies: [
      {
        name: "React.js",
        skills: "Redux, React Native, ThreeJS, NextJS",
        image: "/images/icons8-react.svg"
      },
      {
        name: "Java",
        skills: "Spring Framework, Kafka, Redis",
        image: "/images/icons8-java.svg"
      },
      {
        name: "Python",
        skills: "Django, FastAPI, Kubernetes, MySQL",
        image: "/images/icons8-python.svg"
      },
      {
        name: "Next.js",
        skills: "JavaScript React Node.js",
        image: "/images/icons8-next-js.svg"
      },
      {
        name: "Node.js",
        skills: "NestJS, Koa, PostgreSQL, AWS",
        image: "/images/icons8-node-js.svg"
      },
      {
        name: "GCP",
        skills: "Google Computer Engine, Kubernetes",
        image: "/images/icons8-gcp.svg"
      },
      {
        name: "AWS",
        skills: "Amazon EC2, Amazon S3, Amazon",
        image: "/images/icons8-aws.svg"
      },
      {
        name: "Docker",
        skills: "Multi-stage builds, Container orchestration, Image management, Network configuration, CI/CD integration",
        image: "/images/icons8-docker.svg"
      },
    ],
    testimonials: [
      {
        text: "From high-performance desktops to enterprise-grade networking gear, Laptronix consistently exceeded our expectations in quality and reliability. What truly sets them apart is their customer-centric approach—knowledgeable, responsive, and always ready to offer the best-fit solutions. Whether it’s hardware procurement or complex system integrations, they deliver with unmatched professionalism.",
        author: "Subrojit patra",
        position: "MD, Manjil enterprises",
        avatar: "/images/avatar/me.jpg"
      },
      {
        text: "Laptronix Tech transformed our digital ecosystem with a custom mobile app and ERP system that significantly boosted our engagement and operational flow. Their deep technical expertise and responsive support ensured seamless implementation and results. We now operate more efficiently and at scale—thanks to their innovative and reliable solutions.",
        author: "Javaira yadav",
        position: "Owner, Hans enterprises",
        avatar: "/images/avatar/avatar.png"
      },
      {
        text: "As a 3D cinematic studio, we needed more than just hardware—we needed an ecosystem. Laptronix delivered just that. They understood our workflow, built custom workstations and rendering servers, integrated all essential software, and backed it with 24/7 support. They’ve drastically improved our performance and creative productivity.",
        author: "Sanjeev Sharma",
        position: "HR, G4 exim",
        avatar: "/images/avatar/avatar.png"
      },
      {
        text: "Laptronix provided us with a fully integrated IT and security solution—from optimized workstations for our CAD and 3D design needs to a high-speed internal network and CCTV surveillance. Their planning, execution, and after-sales support helped future-proof our architecture firm’s operations. They truly understand what a modern design practice needs.",
        author: "Japneet Singh",
        position: "Proprietor, Singh design",
        avatar: "/images/avatar/sd.jpg"
      }
    ],
    stats: [
      { number: "40+", label: "Tech Domains" },
      { number: "50+", label: "Delivered Projects" },
      { number: "91%", label: "Client Retention" },
      { number: "5 Hours", label: "Response Time" }
    ],
    contacts: [
      { country: "Delhi", phone: "+91 7377370998", email: "sales@laptronixtech.co.in" },
      { country: "Mumbai", phone: "+91 7377370998", email: "sales@laptronixtech.co.in" },
      { country: "Odisha", phone: "+91 7377370998", email: "sales@laptronixtech.co.in" },
    ]
  };

  return {
    props: {
      pageData
    }
  };
}

export default function Home({ pageData }: IPageData) {
  return (
      <>
        <Head>
          <title>{pageData.title}</title>
          <meta name="description" content={pageData.description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.container}>
          {/* Header */}
          <Navbar/>

          {/* Hero Section */}
          <Hero/>

          {/* Services Section */}
          <Service props={pageData} />

          {/* Portfolio Section */}
          <Portfolio props={pageData} />

          {/* Technologies Section */}
          <Technology props={pageData} />

          {/* Testimonials Section */}
          <Testimonials props={pageData} />

          {/* Stats Section */}
          <Stats props={pageData} />

          {/* Contact Section */}
          <Contact props={pageData} />

          {/* Footer */}
          <Footer />
        </div>
      </>
  );
}
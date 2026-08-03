import project1 from "../assets/images/project-1.jpg";
import project2 from "../assets/images/project-2.jpg";
import project3 from "../assets/images/project-3.jpg";

const projects = [
  {
    id: 1,
    slug: "healthcare-management-system",
    image: project1,
    category: "Web Development",
    title: "Healthcare Management System",
    description:
      "A secure web platform that streamlined patient records, appointments, and reporting.",

    challenge:
      "Hospitals were managing patient records manually, leading to delays, duplicate data, and inefficient appointment scheduling.",

    solution:
      "We developed a secure web application with patient management, appointment booking, doctor dashboards, and real-time reporting.",

    technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],

    results: [
      "50% faster appointment scheduling",
      "40% reduction in paperwork",
      "Improved patient record management",
    ],
  },

  {
    id: 2,
    slug: "enterprise-cloud-migration",
    image: project2,
    category: "Cloud Solutions",
    title: "Enterprise Cloud Migration",
    description:
      "Migrated legacy infrastructure to a scalable cloud environment with improved performance.",

    challenge:
      "The client faced high infrastructure costs, downtime, and limited scalability with on-premise servers.",

    solution:
      "We migrated the entire infrastructure to a cloud platform with automated deployment, monitoring, and backup solutions.",

    technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],

    results: [
      "99.9% uptime",
      "35% lower infrastructure costs",
      "Improved scalability",
    ],
  },

  {
    id: 3,
    slug: "ai-customer-support-platform",
    image: project3,
    category: "AI Solutions",
    title: "AI Customer Support Platform",
    description:
      "Implemented an AI-powered assistant to automate customer support and improve response times.",

    challenge:
      "The company received thousands of repetitive customer queries every day, increasing response times.",

    solution:
      "We built an AI chatbot capable of answering common questions, routing complex issues, and integrating with the company's CRM.",

    technologies: ["React", "OpenAI API", "Node.js", "MongoDB"],

    results: [
      "70% automated support requests",
      "60% faster response time",
      "Higher customer satisfaction",
    ],
  },
];

export default projects;

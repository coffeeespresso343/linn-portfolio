import {
  ArrowBigUpDash,
  Code2,
  Leaf,
  Settings,
  Settings2,
  Timer,
  ToolCase,
} from "lucide-react";

export const skillCategories = [
  {
    id: "backend",
    Icon: Settings,
    label: "Backend",
    skills: [
      { name: "Java", pct: 85 },
      { name: "Spring Boot", pct: 75 },
      { name: "MySQL", pct: 70 },
      { name: "REST APIs", pct: 65 },
    ],
  },
  {
    id: "frontend",
    Icon: Code2,
    label: "Frontend",
    skills: [
      { name: "HTML / CSS", pct: 90 },
      { name: "JavaScript", pct: 80 },
      { name: "React", pct: 79 },
      { name: "Tailwind CSS", pct: 85 },
    ],
  },
  {
    id: "devops",
    Icon: ToolCase,
    label: "Tools & DevOps",
    skills: [
      { name: "Git & GitHub", pct: 75 },
      { name: "Docker", pct: 50 },
      { name: "OAuth", pct: 40 },
      { name: "Appwrite Cloud", pct: 45 },
    ],
  },
];

export const learningObjectives = [
  {
    Icon: ArrowBigUpDash,
    label: "Microservices Architecture",
    sub: "Spring Cloud, API gateway",
    pct: 40,
    done: false,
  },
  {
    Icon: Timer,
    label: "Kubernetes & Container Ops",
    sub: "Deploy containerized apps",
    pct: 20,
    done: false,
  },
  {
    Icon: Settings2,
    label: "System Design",
    sub: "Distributed architectures",
    pct: 30,
    done: false,
  },
  {
    Icon: Leaf,
    label: "Spring Boot REST APIs",
    sub: "CRUD, JWT, Hibernate ORM",
    pct: 90,
    done: true,
  },
];

export const tickerItems = [
  "Spring Boot",
  "Microservices",
  "Cloud Computing",
  "Docker",
  "Kubernetes",
  "React",
  "System Design",
  "Networking",
  "Security",
];

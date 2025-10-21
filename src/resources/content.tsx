import {
  About,
  Blog,
  Gallery,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
} from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Prashant",
  lastName: "Singh",
  name: `Prashant Singh`,
  role: "Software Engineer",
  avatar: "/images/avatar.jpeg",
  email: "prashant.singh181@gmail.com",
  state: "Uttar Pradesh/India",
  mobileNumber: "+91 9990608554",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/prashantsingh181",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/prashantsingh181/",
  },
  // {
  //   name: "Threads",
  //   icon: "threads",
  //   link: "https://www.threads.com/@once_ui",
  // },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.webp",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Crafting seamless experiences with clean, scalable code</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Download</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          My Resume
        </Text>
      </Row>
    ),
    href: "/Prashant-Singh-Frontend-Resume.pdf",
  },
  subline: (
    <>
      I'm Prashant Singh, a Frontend Developer from India passionate about
      building dynamic and intuitive web applications using React, Next.js,
      Javascript and Typescript.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.state}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  resume: {
    display: true,
    link: "/Prashant-Singh-Frontend-Resume.pdf",
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Download</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          My Resume
        </Text>
      </Row>
    ),
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Frontend Developer with 3+ years of experience building scalable,
        high-performance web applications. Proficient in React, Next.js,
        TypeScript, and modern JavaScript, with expertise in creating responsive
        UIs and optimizing performance. Adept at enhancing user experience,
        collaborating with cross-functional teams, and mentoring junior
        developers
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Blink Corps",
        timeframe: "July, 2024 - Present",
        role: "Software Engineer",
        achievements: [
          <>
            Directed the frontend architecture for 3 enterprise-level
            applications, reducing development time by 25% through modular
            Next.js components.
          </>,
          <>
            Collaborated with UI/UX designers to translate Figma prototypes into
            responsive, pixel-perfect layouts with Tailwind CSS.
          </>,
          <>
            Mentored 2 junior developers and conducted code reviews to enforce
            best practices in TypeScript, React, and Next.js.
          </>,
          <>
            Applied performance optimization (bundle analysis, lazy loading,
            image compression), boosting Lighthouse performance scores by 35%
            and reducing page load time to under 2s.
          </>,
        ],
        images: [],
      },
      {
        company: "POD IT Services",
        timeframe: "October, 2023 - June, 2024",
        role: "Software Developer",
        achievements: [
          <>
            Independently handled frontend development for 3 websites,
            overseeing the entire process from design implementation to
            deployment.
          </>,
          <>
            Utilized JavaScript, React, Svelte, and other frontend technologies
            to create responsive and user-friendly interfaces that met client
            specifications and quality standards.
          </>,
          <>
            Aligned frontend efforts with project objectives in collaboration
            with backend developers and designers.
          </>,
          <>
            Offered mentorship to 3 recent hires, providing guidance on frontend
            development best practices, coding standards, and project workflows.
          </>,
        ],
        images: [],
      },
      {
        company: "GlobalLogic Technologies",
        timeframe: "March, 2022 - July, 2023",
        role: "Software Engineer",
        achievements: [
          <>
            Developed and maintained frontend components in React and
            JavaScript, enhancing website functionality and user experience.
            Implemented new features and optimized existing code to meet project
            and client requirements.
          </>,
          <>
            Designed and engineered HTML/JavaScript extractors to streamline
            merchant data extraction, improving task completion speed by 20%.
          </>,
          <>
            Queried and validated data from a database of 2M+ records using SQL
            to ensure accuracy of extracted information.
          </>,
          <>
            Trained and guided 11 new team members in proprietary tools, defect
            resolution, and feature implementation
          </>,
          <>
            Recognized for initiative in problem identification, discussion, and
            resolution.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "SRM Institute of Science and Technology",
        description: (
          <>
            Completed Bachelors of Technology in Computer Science and
            Engineering.
          </>
        ),
      },
      // {
      //   name: "Build the Future",
      //   description: <>Studied online marketing and personal branding.</>,
      // },
    ],
  },
  projects: {
    display: true, // set to false to hide this section
    title: "Projects",
    projects: [
      {
        title: "Busly",
        link: "https://busly.netlify.app/",
        github: "https://github.com/prashantsingh181/busly",
        description: (
          <>
            Busly is a modern web application built with React + Vite for
            managing and booking buses. It follows a scalable folder structure
            with reusable components, context management, utilities, and type
            safety using TypeScript.
          </>
        ),
        tags: [
          {
            name: "React",
            icon: "react",
          },
          {
            name: "Vite",
            icon: "vite",
          },
          {
            name: "Typescript",
            icon: "typescript",
          },
          {
            name: "Tailwind",
            icon: "tailwind",
          },
          {
            name: "React Router",
            icon: "reactrouter",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/busly/busly-01.png",
            alt: "Busly Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/busly/busly-02.png",
            alt: "Busly Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Build Board",
        link: "https://build-board-seven.vercel.app/",
        github: "https://github.com/prashantsingh181/build-board",
        description: (
          <>
            BuildBoard is an article-based platform that lets makers document
            and share their builds, ideas, and creative processes.
          </>
        ),
        tags: [
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Typescript",
            icon: "typescript",
          },
          {
            name: "Tailwind",
            icon: "tailwind",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/build-board/build-board-01.png",
            alt: "Build Board Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/build-board/build-board-02.png",
            alt: "Build Board Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };

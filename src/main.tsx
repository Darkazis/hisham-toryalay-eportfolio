import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

type Project = {
  title: string;
  role: string;
  period: string;
  description: string;
  evidence: string[];
  technologies: string[];
};

type SkillGroup = {
  title: string;
  skills: string[];
};

type Reflection = {
  title: string;
  text: string[];
};

const navItems = [
  ["About", "about"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Skills", "skills"],
  ["Task 1a Reflection", "reflection"],
  ["Resume", "resume"],
  ["Cover Letter", "cover-letter"],
] as const;

const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript / TypeScript", "Java", "C / C++"],
  },
  {
    title: "Geospatial & Data",
    skills: [
      "GeoPandas",
      "Shapely",
      "Pandas",
      "SciPy",
      "GeoJSON",
      "spatial joins",
      "network topology",
    ],
  },
  {
    title: "Web & Backend",
    skills: [
      "HTML",
      "CSS",
      "Leaflet",
      "React",
      "React Native",
      "Node.js",
      "Express",
      "REST API design and integration",
    ],
  },
  {
    title: "Engineering Practice",
    skills: [
      "Git / GitHub",
      "Docker",
      "Jira",
      "code review",
      "regression testing",
      "technical documentation",
      "Scrum",
    ],
  },
];

const projects: Project[] = [
  {
    title: "IPWEA NSW Road Recategorisation Assessment System",
    role: "Software Engineering Intern, Optik Consultancy",
    period: "May 2026 - August 2026",
    description:
      "A browser-based engineering decision-support platform for assessing NSW roads against Transport for NSW recategorisation criteria.",
    evidence: [
      "Assessed more than 900 NSW State and Regional roads and included statewide Local Road candidates in best-fit analysis.",
      "Processed and reconciled a 1.37-million-segment NSW road dataset with population, traffic, heavy-vehicle network and planning data.",
      "Translated client feedback and policy requirements into tested software rules, interactive map evidence, Excel reports and handover documentation.",
    ],
    technologies: [
      "Python",
      "GeoPandas",
      "Shapely",
      "Pandas",
      "SciPy",
      "Leaflet",
      "Git / GitHub",
    ],
  },
  {
    title: "Covilla",
    role: "Full-stack Developer",
    period: "July 2025 - December 2025",
    description:
      "An AI-assisted chore-management application developed in an eight-person Scrum team.",
    evidence: [
      "Built four React Native user flows and approximately 15 Node.js REST API endpoints.",
      "Supported household setup, task assignment, submissions, approvals, authentication and file uploads.",
      "Executed 24 core-flow test cases, documented defects with reproducible steps and helped conduct a small user trial.",
    ],
    technologies: [
      "React Native",
      "Node.js",
      "REST APIs",
      "authentication",
      "file uploads",
      "testing",
      "Scrum",
    ],
  },
  {
    title: "MyCaringLife",
    role: "Backend Developer & Tester",
    period: "July 2024 - December 2024",
    description:
      "A mobile and web toolkit for carers of elderly and disabled users, built with a seven-person Scrum team and an external client.",
    evidence: [
      "Built and integrated Node.js services used by iOS and Android clients.",
      "Converted weekly requirements discussions into tickets and acceptance criteria.",
      "Created a reproducible Docker development environment that reduced new-developer onboarding to under 30 minutes.",
      "Conducted smoke and regression testing across approximately 15 core scenarios and delivered a 30-minute client demonstration on physical devices.",
    ],
    technologies: [
      "Node.js",
      "Docker",
      "iOS integration",
      "Android integration",
      "Jira",
      "smoke testing",
      "regression testing",
    ],
  },
];

const reflections: Reflection[] = [
  {
    title: "1. What were my expectations about the internship before I joined?",
    text: [
      "Before joining Optik Consultancy, I expected the internship to be primarily technical. I thought most of my time would involve programming, working through assigned development tasks and applying the software development skills I had learnt at university.",
    ],
  },
  {
    title: "2. What was the reality, and how was it different from my expectations?",
    text: [
      "The reality was broader than I expected. The IPWEA NSW & ACT project required software development, but it also required understanding the road recategorisation problem, working with unfamiliar datasets, interpreting client requirements and deciding what could realistically be achieved with the available information and timeframe.",
      "Unlike many university projects, there was not always a clearly defined path toward the solution. Requirements evolved, information could be incomplete, and the team often needed to research, discuss and make decisions before development could continue.",
    ],
  },
  {
    title: "3. What lessons were the most important, and why did they matter?",
    text: [
      "One of the most important lessons I learnt was that software engineering is not simply about being able to write code. Understanding the problem, communicating with stakeholders and explaining technical ideas clearly can be just as important as the technical implementation itself.",
      "I also learnt the importance of adaptability. There were occasions where our original assumptions or approaches needed to change after receiving new information, and being willing to reconsider an idea rather than becoming attached to it was essential.",
      "Working in a multidisciplinary environment was another important lesson. The project required us to consider software, data and infrastructure together rather than viewing the problem purely from a software engineering perspective.",
    ],
  },
  {
    title: "4. What is my value proposition to an employer, and how can I demonstrate it?",
    text: [
      "My value proposition is the ability to combine technical problem-solving with adaptability and communication when working on unfamiliar problems.",
      "I can demonstrate this through the IPWEA project, where I worked with a 1.37-million-segment NSW road dataset, learnt unfamiliar geospatial concepts and helped convert policy requirements and client feedback into software functionality. This experience showed that I can learn new domains, break larger problems into manageable tasks and contribute both technically and as part of a wider team.",
    ],
  },
  {
    title: "5. How did the internship influence the type of role I am interested in?",
    text: [
      "The internship confirmed that I want software engineering work connected to meaningful and challenging problems rather than isolated feature development. I particularly enjoy projects where software interacts with data and real-world systems, and where there is an opportunity to understand the wider problem rather than only the code.",
      "It also showed me that I enjoy consulting-style environments where technical solutions need to respond to real client, data and project constraints. That has made software engineering roles involving data, infrastructure and multidisciplinary work a clear direction for my early career.",
    ],
  },
];

const coverCriteria = [
  {
    heading: "3.1 Ethical conduct and professional accountability",
    paragraphs: [
      "During my internship with Optik Consultancy, I worked on a road recategorisation assessment system for IPWEA NSW & ACT. The system used government and industry datasets to assess NSW roads against Transport for NSW criteria, so the results needed to be evidence-backed and traceable rather than based on unsupported assumptions.",
      "My responsibility was to help convert policy criteria and client feedback into software rules that could be tested and explained. I checked that rules were connected to the relevant data, contributed to validation checks and paid attention to whether data or software changes were causing unexpected changes in assessment results.",
      "As a result, the team delivered software, reports and technical handover documentation that made the assessment logic easier to review. The work reinforced my understanding that professional accountability in software engineering includes being able to justify how a system reaches its outputs, especially when those outputs may inform real engineering decisions.",
    ],
  },
  {
    heading: "3.2 Communication with engineers and stakeholders from different fields",
    paragraphs: [
      "Communication was central to both my internship and my work at Factory Direct Commercial Kitchens. At Optik Consultancy, the project involved software engineers, supervisors and client stakeholders who approached the road recategorisation problem from different professional perspectives.",
      "I helped clarify requirements discussed with the client and translate them into development tasks the team could implement. I discussed possible technical approaches with team members, communicated progress through project updates and demonstrations, and made sure requirement changes were understood before they became software rules.",
      "That communication reduced misunderstandings as the project evolved and helped the team adapt the platform to the client's requirements. In my commercial-kitchen role, I also translated customer needs into specifications for clients, fabricators and installers, which strengthened my ability to communicate across technical and non-technical groups.",
    ],
  },
  {
    heading: "3.3 Creative, innovative and proactive environment",
    paragraphs: [
      "The IPWEA project did not begin with a fully defined technical solution. The broader problem was how to support a road recategorisation process involving policy criteria, fragmented road data and several external datasets.",
      "My task was to contribute to a practical software approach while the team's understanding of the problem was still developing. I researched unfamiliar geospatial concepts, tested what could realistically be achieved with the available data and adapted implementation decisions as requirements became clearer.",
      "This proactive work helped the team build a browser-based decision-support platform that assessed more than 900 NSW State and Regional roads and included statewide Local Road candidates in best-fit analysis. It also made me more comfortable working in environments where the solution develops through investigation rather than being known from the start.",
    ],
  },
  {
    heading: "3.4 Use and management of information",
    paragraphs: [
      "The strongest information-management challenge I have worked on was the IPWEA road recategorisation project. The project required road, population, traffic, heavy-vehicle network and planning data to be brought together in a form the assessment system could use.",
      "I processed and reconciled a NSW road dataset containing approximately 1.37 million segments using Python, GeoPandas, Shapely, Pandas and SciPy. I worked with spatial joins, network topology and validation checks so the data could support assessment rules and interactive map evidence.",
      "The result was a more usable information base for the decision-support platform, including assembled routes, connections to towns and key facilities, integrated traffic and heavy-vehicle network data, and supporting Excel reports. This gave me practical experience managing complex information while maintaining consistency and traceability.",
    ],
  },
  {
    heading: "3.5 Managing my own performance in a professional environment",
    paragraphs: [
      "My internship was my first extended professional engineering project where requirements and priorities could change as the work developed. I needed to balance my own technical tasks with team-lead responsibilities, meetings, client demonstrations and project deadlines.",
      "I managed this by breaking larger pieces of work into smaller tasks, tracking priorities and regularly reviewing what needed to be completed for upcoming deliverables. When I encountered unfamiliar geospatial data-processing concepts, I researched them independently, tested possible approaches and discussed findings with the team before implementation decisions were made.",
      "By managing my own work this way, I was able to contribute to the delivered software as well as the supporting reports and technical documentation within the project timeframe. The experience helped me build a more realistic understanding of professional engineering work, where progress depends on learning, prioritising and adjusting as new information appears.",
    ],
  },
  {
    heading: "3.6 Teamwork and leadership when required",
    paragraphs: [
      "During the Optik Consultancy internship, I worked as team lead within a multidisciplinary engineering team. The role required me to complete my own development work while also helping the team stay organised and informed.",
      "I ran regular check-ins, followed up on tasks, shared information between team members, supervisors and the client, and helped work through technical or requirement-related roadblocks. At the same time, I learnt that leadership did not mean making every decision myself. Different team members had knowledge in areas I did not, so I needed to listen and change approach when another solution made more sense.",
      "This helped the team maintain progress and deliver the project outputs within the internship timeframe. It also made me more confident taking responsibility for team progress while still working collaboratively and making use of the different strengths within the team.",
    ],
  },
];

function SectionHeading({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="section-heading">
      <p className="kicker">{kicker}</p>
      <h2>{title}</h2>
      {children ? <p>{children}</p> : null}
    </div>
  );
}

function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Hisham Toryalay home">
          <span>HT</span>
          Hisham Toryalay
        </a>
        <nav aria-label="Primary navigation">
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Software Engineering Graduate</p>
            <h1>Hisham Toryalay</h1>
            <p className="hero-statement">
              I am a software engineering graduate interested in systems that
              connect data, infrastructure and practical engineering decisions.
              My internship with Optik Consultancy shaped my direction toward
              consulting-style work where technical problem-solving, clear
              communication and adaptability all matter.
            </p>
            <div className="hero-actions" aria-label="Portfolio actions">
              <a className="button primary" href="#experience">
                View Experience
              </a>
              <a className="button" href="#projects">
                View Projects
              </a>
              <a className="button" href="#resume">
                View Resume
              </a>
              <a className="button" href="mailto:hishamtoryalay@outlook.com">
                Contact Me
              </a>
            </div>
          </div>
          <div className="systems-visual" aria-label="Geospatial systems summary">
            <div className="map-grid" aria-hidden="true">
              <span className="route route-one" />
              <span className="route route-two" />
              <span className="route route-three" />
              <span className="point point-one" />
              <span className="point point-two" />
              <span className="point point-three" />
              <span className="point point-four" />
            </div>
            <div className="visual-caption">
              <strong>Recent focus</strong>
              <span>Geospatial data, road networks, policy rules and practical engineering evidence.</span>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <SectionHeading kicker="About" title="Engineering Pathway">
            My internship changed how I understand professional software
            engineering. It showed me that useful systems depend on problem
            definition, evidence, communication and implementation.
          </SectionHeading>
          <div className="two-column">
            <div className="prose">
              <p>
                I began software engineering with a mostly technical view of the
                profession. I expected professional work to centre on
                programming, assigned development tasks and applying the
                technical skills I had built through university projects.
              </p>
              <p>
                The Optik Consultancy internship broadened that understanding.
                Working with IPWEA NSW & ACT on a road recategorisation project
                in New South Wales, I saw how software, geospatial data, policy
                criteria, client requirements and infrastructure decisions can
                intersect in one system.
              </p>
              <p>
                I worked across data processing, software rules and client
                communication, and learnt that implementation is only one part
                of engineering practice. Understanding the actual problem,
                working with incomplete information, explaining technical ideas
                and adapting to changing requirements are just as important.
                That experience is why I am drawn to software roles involving
                data, real-world systems and multidisciplinary consulting work.
              </p>
            </div>
            <aside className="profile-panel" aria-label="Professional summary">
              <dl>
                <div>
                  <dt>Degree</dt>
                  <dd>Bachelor of Engineering, Software Engineering</dd>
                </div>
                <div>
                  <dt>University</dt>
                  <dd>University of Technology Sydney</dd>
                </div>
                <div>
                  <dt>Career interests</dt>
                  <dd>Software, data, infrastructure systems and consulting-style engineering</dd>
                </div>
                <div>
                  <dt>Value proposition</dt>
                  <dd>Technical problem-solving combined with adaptability and stakeholder communication</dd>
                </div>
                <div>
                  <dt>Contact</dt>
                  <dd>
                    <a href="mailto:hishamtoryalay@outlook.com">
                      hishamtoryalay@outlook.com
                    </a>
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>

        <section id="experience" className="section tinted">
          <SectionHeading kicker="Experience" title="Professional Experience">
            Evidence from software engineering, consulting-style work and client
            communication.
          </SectionHeading>
          <div className="experience-list">
            <article className="experience-item featured">
              <div className="item-heading">
                <div>
                  <h3>Software Engineering Intern</h3>
                  <p>Optik Consultancy</p>
                </div>
                <span>May 2026 - August 2026</span>
              </div>
              <div className="project-focus">
                <p className="label">Featured project</p>
                <h4>IPWEA NSW Road Recategorisation Assessment System</h4>
                <p>
                  Developed and enhanced a browser-based decision-support
                  platform that assessed more than 900 NSW State and Regional
                  roads and included statewide Local Road candidates in best-fit
                  analysis.
                </p>
              </div>
              <div className="metrics-grid">
                <div>
                  <strong>900+</strong>
                  <span>State and Regional roads assessed</span>
                </div>
                <div>
                  <strong>1.37m</strong>
                  <span>NSW road segments processed</span>
                </div>
                <div>
                  <strong>4</strong>
                  <span>Major data families integrated</span>
                </div>
              </div>
              <ul className="evidence-list">
                <li>
                  Processed and reconciled NSW road data using Python,
                  GeoPandas, Shapely, Pandas and SciPy.
                </li>
                <li>
                  Integrated ABS population geography, TfNSW traffic data, NHVR
                  heavy-vehicle networks and NSW planning data.
                </li>
                <li>
                  Developed geospatial network-processing algorithms that
                  assembled fragmented road segments into complete routes and
                  identified connections to towns and key facilities.
                </li>
                <li>
                  Converted client feedback and policy requirements into tested
                  software rules, interactive map evidence, Excel reports and
                  technical handover documentation through Git/GitHub workflows.
                </li>
              </ul>
            </article>

            <article className="experience-item">
              <div className="item-heading">
                <div>
                  <h3>Sales & Customer Solutions Representative</h3>
                  <p>Factory Direct Commercial Kitchens</p>
                </div>
                <span>February 2022 - May 2026</span>
              </div>
              <ul className="evidence-list compact">
                <li>
                  Managed a sales pipeline of approximately 50 customers and
                  businesses from initial contact through quotation and close.
                </li>
                <li>
                  Prepared more than 50 proposals and led on-site consultations
                  for commercial-kitchen fit-outs.
                </li>
                <li>
                  Translated client requirements into specifications for
                  clients, fabricators and installers.
                </li>
                <li>
                  Documented measurements, services, workflow and compliance
                  constraints through client-approved documentation, sketches
                  and installation checklists.
                </li>
              </ul>
            </article>
          </div>
        </section>

        <section id="projects" className="section">
          <SectionHeading kicker="Projects" title="Selected Projects">
            Practical project work across geospatial systems, mobile applications,
            backend services and client-facing delivery.
          </SectionHeading>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="item-heading small">
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.role}</p>
                  </div>
                  <span>{project.period}</span>
                </div>
                <p>{project.description}</p>
                <ul className="evidence-list compact">
                  {project.evidence.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="tag-list" aria-label={`${project.title} technologies`}>
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section tinted">
          <SectionHeading kicker="Skills" title="Technical Skills">
            Skills supported by my internship, university projects and
            professional experience.
          </SectionHeading>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-card" key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="reflection" className="section">
          <SectionHeading kicker="Task 1a Reflection" title="Professional Development">
            My workplace experience at Optik Consultancy helped form a clearer
            professional identity: software engineering work can involve data,
            infrastructure, clients and uncertain problem-solving as much as
            code.
          </SectionHeading>
          <div className="reflection-list">
            {reflections.map((reflection, index) => (
              <article className="reflection-item" key={reflection.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{reflection.title}</h3>
                  {reflection.text.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="resume" className="section resume-section">
          <div className="resume-toolbar">
            <SectionHeading kicker="Resume" title="Updated Resume">
              A concise curriculum vitae covering my profile, technical skills,
              education, professional experience and selected projects.
            </SectionHeading>
            <button type="button" className="button primary" onClick={() => window.print()}>
              Print Resume
            </button>
          </div>

          <article className="resume-document" aria-label="Resume">
            <header className="resume-header">
              <div>
                <h2>Hisham Toryalay</h2>
                <p>Software Engineering Graduate</p>
              </div>
              <address>
                <a href="tel:+61466552599">0466 552 599</a>
                <a href="mailto:hishamtoryalay@outlook.com">
                  hishamtoryalay@outlook.com
                </a>
                <a href="https://www.linkedin.com/in/hisham-toryalay-13a154200">
                  linkedin.com/in/hisham-toryalay-13a154200
                </a>
              </address>
            </header>

            <div className="resume-block">
              <h3>Professional Profile</h3>
              <p>
                Software Engineering graduate with hands-on experience
                developing a statewide geospatial decision-support system for
                IPWEA NSW & ACT. Experienced in Python data processing,
                JavaScript mapping, REST APIs, testing and Git-based
                development, with practical experience translating changing
                client and policy requirements into traceable software rules.
              </p>
            </div>

            <div className="resume-block">
              <h3>Technical Skills</h3>
              <div className="resume-skills">
                {skillGroups.map((group) => (
                  <p key={group.title}>
                    <strong>{group.title}:</strong> {group.skills.join(", ")}
                  </p>
                ))}
              </div>
            </div>

            <div className="resume-block">
              <h3>Education</h3>
              <div className="resume-entry">
                <div>
                  <h4>Bachelor of Engineering, Software Engineering</h4>
                  <p>University of Technology Sydney</p>
                  <p>
                    Distinction/High Distinction subjects include Software
                    Development Studio, Software Analysis Studio, Software
                    Architecture, Databases, Applications Programming, C
                    Programming, Engineering Project Management, and Design &
                    Innovation.
                  </p>
                </div>
                <span>January 2021 - July 2026</span>
              </div>
            </div>

            <div className="resume-block">
              <h3>Professional Experience</h3>
              <div className="resume-entry">
                <div>
                  <h4>Software Engineering Intern, Optik Consultancy</h4>
                  <p>Project: IPWEA NSW Road Recategorisation Assessment System</p>
                  <ul>
                    <li>
                      Developed and enhanced a browser-based decision-support
                      platform assessing more than 900 NSW State and Regional
                      roads.
                    </li>
                    <li>
                      Processed and reconciled a 1.37-million-segment NSW road
                      dataset with Python, GeoPandas, Shapely, Pandas and SciPy.
                    </li>
                    <li>
                      Integrated ABS population geography, TfNSW traffic counts,
                      NHVR heavy-vehicle networks and NSW planning data.
                    </li>
                    <li>
                      Converted client feedback and policy requirements into
                      tested software rules, interactive map evidence, Excel
                      reports and technical handover documentation.
                    </li>
                  </ul>
                </div>
                <span>May 2026 - August 2026</span>
              </div>
              <div className="resume-entry">
                <div>
                  <h4>Sales & Customer Solutions Representative, Factory Direct Commercial Kitchens</h4>
                  <ul>
                    <li>
                      Managed a sales pipeline of approximately 50 customers and
                      businesses from initial contact through quotation and close.
                    </li>
                    <li>
                      Prepared more than 50 proposals and led on-site
                      consultations for commercial-kitchen fit-outs.
                    </li>
                    <li>
                      Translated client requirements into specifications for
                      clients, fabricators and installers.
                    </li>
                  </ul>
                </div>
                <span>February 2022 - May 2026</span>
              </div>
            </div>

            <div className="resume-block">
              <h3>Selected Projects</h3>
              {projects.slice(1).map((project) => (
                <div className="resume-entry" key={project.title}>
                  <div>
                    <h4>
                      {project.role}, {project.title}
                    </h4>
                    <ul>
                      {project.evidence.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <span>{project.period}</span>
                </div>
              ))}
              <p className="referees">Referees available on request.</p>
            </div>
          </article>
        </section>

        <section id="cover-letter" className="section cover-section">
          <SectionHeading kicker="Cover Letter" title="Graduate Engineer Application">
            Tailored for the Industrus Engineering Graduate Program and
            structured around the six required selection criteria.
          </SectionHeading>
          <article className="letter">
            <div className="letter-header">
              <div>
                <strong>Hisham Toryalay</strong>
                <span>Software Engineering Graduate</span>
              </div>
              <address>
                <a href="tel:+61466552599">0466 552 599</a>
                <a href="mailto:hishamtoryalay@outlook.com">
                  hishamtoryalay@outlook.com
                </a>
                <a href="https://www.linkedin.com/in/hisham-toryalay-13a154200">
                  linkedin.com/in/hisham-toryalay-13a154200
                </a>
              </address>
            </div>
            <p className="letter-date">23 September 2026</p>
            <p>Dear Hiring Manager,</p>
            <p>
              I am writing to apply for the Graduate Engineer position with
              Industrus Engineering. Having recently completed my Software
              Engineering degree at UTS and completed an engineering internship
              with Optik Consultancy, I am interested in the Industrus Graduate
              Program because it offers exposure to varied engineering projects
              with structured training and mentoring. My internship showed me
              that I enjoy consulting-style environments where software must
              respond to real clients, data and practical project constraints.
            </p>
            {coverCriteria.map((criterion) => (
              <section className="criterion" key={criterion.heading}>
                <h3>{criterion.heading}</h3>
                {criterion.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}

            <p>
              I am particularly interested in Industrus Engineering because of
              the opportunity to work across different engineering projects
              while continuing to develop through structured training and
              mentoring. I would value the opportunity to bring my software,
              data and client-facing project experience into a multidisciplinary
              graduate engineering environment.
            </p>
            <p>
              Thank you for considering my application. I have attached my
              resume and professional practice portfolio for your consideration
              and look forward to the opportunity to discuss my application
              further.
            </p>
            <p>Regards,</p>
            <p>Hisham Toryalay</p>
          </article>
        </section>
      </main>

      <footer className="site-footer">
        <p>Hisham Toryalay, Software Engineering Graduate</p>
        <div>
          <a href="mailto:hishamtoryalay@outlook.com">Email</a>
          <a href="https://www.linkedin.com/in/hisham-toryalay-13a154200">
            LinkedIn
          </a>
        </div>
      </footer>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

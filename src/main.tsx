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
  ["Reflection", "reflection"],
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
    title: "Expectations before the internship",
    text: [
      "Before joining Optik Consultancy, I expected the internship to be primarily technical. I thought most of my time would involve programming, working through assigned development tasks and applying the software development skills I had learnt at university.",
    ],
  },
  {
    title: "Reality compared with expectations",
    text: [
      "The reality was broader. The IPWEA NSW & ACT project required software development, but it also required understanding the road recategorisation problem, working with unfamiliar datasets, interpreting client requirements and deciding what could realistically be achieved with the available information and timeframe.",
      "Unlike many university projects, the solution path was not always clearly defined. Requirements evolved, information could be incomplete, and the team often needed to research, discuss and decide before development could continue.",
    ],
  },
  {
    title: "Most important lessons",
    text: [
      "The internship taught me that software engineering relies on more than writing code. Understanding the problem, communicating with stakeholders and explaining technical ideas clearly can be just as important as implementation.",
      "I also learnt the value of adaptability. When new information changed our assumptions, I had to reconsider approaches instead of becoming attached to an early idea.",
    ],
  },
  {
    title: "Value proposition to an employer",
    text: [
      "My value proposition is the ability to combine technical problem-solving with communication and adaptability when working on unfamiliar problems.",
      "I demonstrated this by working with a 1.37-million-segment NSW road dataset, learning unfamiliar geospatial concepts and helping convert policy requirements and client feedback into software functionality.",
    ],
  },
  {
    title: "Future career direction",
    text: [
      "The internship confirmed that I want software engineering work connected to meaningful and challenging problems. I am especially interested in software that interacts with data and real-world systems, and in consulting-style environments where technical solutions need to respond to client, data and project constraints.",
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
              I am interested in software that works with data and real-world
              systems, especially projects where engineering judgement,
              communication and adaptable problem-solving matter as much as the
              code.
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
              <span>Geospatial data, road networks, policy rules and interactive evidence.</span>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <SectionHeading kicker="About" title="Engineering Pathway">
            My internship moved my view of software engineering from a mostly
            technical profession to a broader practice shaped by data, policy,
            clients and infrastructure decisions.
          </SectionHeading>
          <div className="two-column">
            <div className="prose">
              <p>
                I am a Software Engineering graduate with a particular interest
                in software that works with data and real-world systems. At
                university, I enjoyed the technical side of development, but my
                Optik Consultancy internship showed me that I am most interested
                in projects where software helps solve practical engineering
                problems.
              </p>
              <p>
                During the internship, I worked with IPWEA NSW & ACT on a road
                recategorisation project in New South Wales. The work brought
                together road, population, traffic and infrastructure data so
                roads could be assessed against Transport for NSW criteria. I
                worked across data processing, translating requirements into
                software rules and communicating progress with the client.
              </p>
              <p>
                The experience helped me understand the importance of
                communication, adaptability and problem definition. It also made
                consulting-style environments and multidisciplinary work a clear
                direction for my early career.
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
                  <dd>Software, data, real-world systems and consulting projects</dd>
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
            Grouped by the way they appear in my source resume, without ratings
            or unsupported proficiency scores.
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
          <SectionHeading kicker="Reflection" title="Professional Development">
            Five internship reflection areas presented as a development story:
            expectations, reality, lessons, value and direction.
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
              A browser-readable version of my resume, formatted for screen and
              clean A4 printing.
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
            structured around the six selection criteria from my source document.
          </SectionHeading>
          <article className="letter">
            <p>Dear Hiring Manager,</p>
            <p>
              I am writing to apply for the Graduate Engineer position with
              Industrus Engineering. Having recently completed my Software
              Engineering degree at UTS and an engineering internship with Optik
              Consultancy, I am interested in the opportunity to continue
              developing both my technical and professional skills through the
              Industrus Graduate Program. My internship gave me experience
              working on real consulting projects where I had to communicate
              with clients, work through changing requirements and use software
              and data to solve practical engineering problems.
            </p>

            <h3>Ethical conduct and professional accountability</h3>
            <p>
              During my internship with Optik Consultancy, I worked on a road
              recategorisation assessment system for IPWEA NSW & ACT. The system
              assessed NSW roads using government and industry datasets against
              Transport for NSW criteria, so it was important that its results
              could be supported by the available evidence.
            </p>
            <p>
              When developing and testing the system, I worked to ensure that
              assessment rules were connected to the relevant criteria and data
              rather than relying on unsupported assumptions. I also contributed
              to validation checks designed to identify unexpected changes when
              datasets or software logic were updated. This taught me the
              importance of being able to justify results produced by software,
              particularly when those results may contribute to real engineering
              decisions.
            </p>

            <h3>Communication with engineers and stakeholders from different fields</h3>
            <p>
              Communication became a major part of my internship because the
              project involved people with different technical backgrounds and
              levels of software knowledge. As team lead, I communicated
              regularly with my multidisciplinary team, supervisors and the
              client.
            </p>
            <p>
              One challenge was taking road policy and assessment requirements
              discussed with the client and turning them into something our
              development team could implement. I helped clarify requirements
              during meetings, discussed possible approaches with the team and
              communicated progress back to the client through project updates
              and demonstrations.
            </p>

            <h3>Creative, innovative and proactive environment</h3>
            <p>
              The IPWEA project began as a broader problem around improving the
              road recategorisation process. As our team learnt more about the
              existing process and spoke with stakeholders, we explored how
              software could make early road assessments more efficient and
              consistent.
            </p>
            <p>
              I contributed by exploring technical approaches, testing what could
              realistically be achieved with the available data and adapting the
              implementation as new requirements emerged. The experience made me
              more comfortable working in situations where the solution develops
              alongside the team's understanding of the problem.
            </p>

            <h3>Use and management of information</h3>
            <p>
              The IPWEA project required me to work with large amounts of
              information from several sources. I processed and reconciled a NSW
              road dataset containing approximately 1.37 million road segments
              and worked with population geography, traffic counts,
              heavy-vehicle networks and planning data.
            </p>
            <p>
              A major part of my role involved determining how these datasets
              related to one another and transforming them into information the
              assessment system could use. I used Python and geospatial
              libraries including GeoPandas, Shapely, Pandas and SciPy, while
              contributing to validation processes that checked whether updates
              affected results unexpectedly.
            </p>

            <h3>Managing my own performance in a professional environment</h3>
            <p>
              My internship was my first extended professional engineering
              project where requirements and priorities could change as the
              project developed. I had to balance technical responsibilities
              with team-lead responsibilities, meetings, client demonstrations
              and project deadlines.
            </p>
            <p>
              I managed this by breaking larger pieces of work into smaller
              tasks, keeping track of priorities and regularly reviewing what
              needed to be completed for upcoming deliverables. When I
              encountered unfamiliar geospatial data-processing concepts, I
              researched them, tested approaches and discussed my findings with
              the team.
            </p>

            <h3>Teamwork and leadership when required</h3>
            <p>
              During my internship, I worked as the team lead within a
              multidisciplinary engineering team. My role involved completing my
              own development work while also helping keep the team organised
              and ensuring that information was shared between team members,
              supervisors and the client.
            </p>
            <p>
              I ran regular team check-ins, followed up on tasks and helped work
              through technical or requirement-related roadblocks. The internship
              also taught me that leadership does not mean making every decision
              myself. Different team members had knowledge and experience in
              areas I did not, so I needed to listen to their ideas and change
              approach when another solution made more sense.
            </p>

            <p>
              I am particularly interested in Industrus Engineering because of
              the opportunity to work across different engineering projects
              while continuing to develop through structured training and
              mentoring. My internship showed me that I enjoy consulting
              environments where technical problems need to be solved within real
              client, data and project constraints, and I would like to continue
              developing in this type of work.
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

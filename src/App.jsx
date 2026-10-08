import "./App.css";
import profileImage from "./assets/profile.png";
import cvFile from "./assets/Syed_Jaffar_Mukhtar_CV.pdf";

function App() {
  return (
    <div className="portfolio">

      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">Jaffar.</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Education</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <p className="intro">Hello, I'm</p>

          <h1>
            Syed Jaffar <span>Mukhtar</span>
          </h1>

          <h2>Software Engineering Technology Student</h2>

          <p className="hero-text">
            I am passionate about web development, UI/UX design and
            creating modern, user-friendly digital experiences.
          </p>
          <div className="hero-buttons">
  <a href="#projects" className="btn primary-btn">
    View My Work
  </a>

  <a href="#contact" className="btn secondary-btn">
    Contact Me
  </a>

  <a
    href="https://github.com/syedjaffar607"
    target="_blank"
    rel="noreferrer"
    className="social-btn"
  >
    GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/syed-jaffar-mukhtar-b7878940b"
    target="_blank"
    rel="noreferrer"
    className="social-btn"
  >
    LinkedIn
  </a>
  <a
 href={cvFile}
  className="btn secondary-btn"
>
  Download CV
</a>
</div>
          
          </div> 
         <div className="hero-image">
         <div className="profile-circle">
         <img src={profileImage} alt="Syed Jaffar Mukhtar" />
         </div>
         </div>
          </section>

      {/* About Section */}
      <section id="about" className="section">
  <h2>About Me</h2>

  <p>
    I am a motivated Software Engineering Technology student with
    an interest in web development, UI/UX design, graphic design,
    and modern technologies. I enjoy creating clean, responsive,
    and user-friendly digital experiences.
  </p>

  <p>
    I am continuously improving my technical and creative skills
    by working on practical projects and learning new technologies.
    My goal is to grow as a professional software developer and
    contribute to meaningful and innovative projects.
  </p>

    <div className="about-info">
    <div>
      <strong>Education</strong>
      <span>BS Software
         Engineering Technology</span>
    </div>

    <div>
      <strong>University</strong>
      <span>University of Azad Jammu and Kashmir</span>
    </div>

    <div>
      <strong>Focus</strong>
      <span>Web Development & UI/UX Design</span>
    </div>
    </div>
    </section>

      {/* Skills Section */}
      <section id="skills" className="section">
  <h2>My Skills</h2>

  <p>
    I have developed a range of technical and creative skills through
    my studies, practical projects, and continuous learning.
  </p>

  <div className="skills-container">

    <div className="skill-card">
      <h3>HTML</h3>
      <p>Building structured and semantic web pages.</p>
    </div>

    <div className="skill-card">
      <h3>CSS</h3>
      <p>Creating responsive and modern website designs.</p>
    </div>

    <div className="skill-card">
      <h3>JavaScript</h3>
      <p>Adding interactive features to web applications.</p>
    </div>

    <div className="skill-card">
      <h3>React.js</h3>
      <p>Developing modern component-based interfaces.</p>
    </div>

    <div className="skill-card">
      <h3>UI/UX Design</h3>
      <p>Designing simple and user-friendly digital experiences.</p>
    </div>

    <div className="skill-card">
      <h3>Graphic Design</h3>
      <p>Creating creative and professional visual designs.</p>
    </div>

  </div>
</section>

      {/* Projects Section */}
     <section id="projects" className="section">
  <h2>My Projects</h2>

  <p>
    Here are some of the projects I have worked on while learning
    software development, web technologies, and design.
  </p>

  <div className="projects-container">

    <div className="project-card">
      <span className="project-number">01</span>
      <h3>Online Food Ordering Website</h3>
      <p>
        A responsive website designed for online food ordering with
        a clean interface and user-friendly experience.
      </p>
      <div className="project-tech">
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
      </div>
        <a
         href="#"
        className="project-btn"
>
         View Project
        </a>
    </div>

    <div className="project-card">
      <span className="project-number">02</span>
      <h3>Dynamic CV</h3>
      <p>
        A modern CV project created to present education, skills,
        experience, and professional information in an organized way.
      </p>
      <div className="project-tech">
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
      </div>
      <a
       href="#"
       className="project-btn"
>
       View Project
       </a>
        </div>

    <div className="project-card">
      <span className="project-number">03</span>
      <h3>Portfolio Website</h3>
      <p>
        A responsive personal portfolio website developed to showcase
        my skills, projects, education, and professional profile.
      </p>
      <div className="project-tech">
        <span>React.js</span>
        <span>CSS</span>
        <span>Vite</span>
      </div>
      <a
       href="#"
       className="project-btn"
       >
       View Project
       </a>
    </div>

  </div>
  </section>
  {/* Services Section */}
<section id="services" className="section">
  <h2>My Services</h2>

  <p>
    I enjoy creating modern websites and creative digital designs
    that provide a better user experience.
  </p>

  <div className="services-container">

    <div className="service-card">
     <div className="service-icon">WEB</div>
      <h3>Web Development</h3>
      <p>
        Building responsive and user-friendly websites using
        modern web technologies.
      </p>
    </div>

    <div className="service-card">
      <div className="service-icon">UI</div>
      <h3>UI/UX Design</h3>
      <p>
        Designing clean layouts and easy-to-use interfaces
        for websites and digital products.
      </p>
    </div>

    <div className="service-card">
      <div className="service-icon">GD</div>
      <h3>Graphic Design</h3>
      <p>
        Creating attractive visual designs for digital
        content and online platforms.
      </p>
    </div>

  </div>
</section>
 {/* Education & Experience */}
<section id="experience" className="section">
  <h2>Education & Experience</h2>

  <p>
    My academic journey and practical experience have helped me
    develop skills in software development, web technologies,
    UI/UX design, and graphic design.
  </p>

  <div className="experience-container">

    {/* Education */}
    <div className="experience-card">
      <span className="experience-year">2024 - Present</span>

      <h3>BS Software Engineering Technology</h3>

      <h4>The University of Azad Jammu and Kashmir</h4>

      <p>
        Currently pursuing a degree in Software Engineering Technology
        with a focus on programming, web development, databases,
        software engineering, and modern digital technologies.
      </p>
    </div>

    {/* Experience */}
    <div className="experience-card">
      <span className="experience-year">6 Months</span>

      <h3>Graphic Design Experience</h3>

      <h4>Graphic Design & Creative Projects</h4>

      <p>
        Developed practical experience in graphic design, visual
        layouts, creative content, typography, and digital design
        while working on different academic and personal projects.
      </p>
    </div>

  </div>
</section>

     {/* Contact Section */}
<section id="contact" className="section contact">
  <h2>Contact Me</h2>

  <p>
    I am open to internship opportunities, freelance projects,
    collaborations, and professional discussions. Feel free to
    connect with me.
  </p>

  <div className="contact-buttons">

    <a
    href="mailto:syedjaffarmukhtar@gmail.com"
      className="btn primary-btn"
    >
      Send Email
    </a>

    <a
      href="https://github.com/syedjaffar607"
      target="_blank"
      rel="noreferrer"
      className="btn secondary-btn"
    >
      GitHub
    </a>

    <a
      href="https://www.linkedin.com/in/syed-jaffar-mukhtar-b7878940b"
      target="_blank"
      rel="noreferrer"
      className="btn secondary-btn"
    >
      LinkedIn
    </a>

  </div>
</section>

{/* Footer */}
<footer>
  <p>
    © 2026 Syed Jaffar Mukhtar. All Rights Reserved.
  </p>
</footer>

</div>
  );
}

export default App;
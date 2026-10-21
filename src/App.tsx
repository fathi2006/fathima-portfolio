import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDownRight, ArrowUpRight, Award, BookOpen, BriefcaseBusiness,
  CheckCircle2, Code2, Database, Download, GraduationCap,
  Linkedin, Mail, MapPin, Menu, Monitor, Sparkles, Trophy, X, Terminal,
  Workflow, Layers3, CalendarDays, Phone, Heart, FileCode2
} from 'lucide-react'
import SectionHeading from './components/SectionHeading'

const skills = [
  { title: 'Programming', icon: Code2, items: ['Python'] },
  { title: 'Web technologies', icon: Monitor, items: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'] },
  { title: 'Backend framework', icon: Workflow, items: ['Django'] },
  { title: 'Database management', icon: Database, items: ['SQL', 'PostgreSQL', 'RDBMS'] },
  { title: 'Core concepts', icon: Layers3, items: ['OOP', 'Data handling', 'Problem solving'] },
]

const certifications = [
  { title: 'Exploratory Data Analysis', provider: 'Infosys · Self-paced', icon: Database },
  { title: 'Introduction to Data Science', provider: 'Infosys · Self-paced', icon: Sparkles },
  { title: 'Introduction to MySQL', provider: 'Oracle University Platform', icon: Database },
  { title: 'Full Stack Development Basics', provider: 'Simplilearn Online Platform', icon: FileCode2 },
]

const achievements = [
  { title: 'Second Place · Paper Presentation', text: 'National-level conference at Valliammai College, presenting “Smart Systems for Detecting Cyber Attacks”.', icon: Trophy },
  { title: 'First Place · Science Expo 2025', text: 'Rain Detection System.', icon: Award },
  { title: 'Second Place · Science Expo 2024', text: 'Gas Leakage Detection using Arduino.', icon: Award },
  { title: 'Academic & Community', text: 'Recognized as a topper of the Academic Year 2025 and member of NSS.', icon: GraduationCap },
  { title: 'Paper Presentation Participant', text: 'Participated in a paper presentation at Sacred Heart College, Tirupattur.', icon: BookOpen },
]

const navLinks = [
  ['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'],
  ['Journey', '#journey'], ['Achievements', '#achievements'], ['Contact', '#contact'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) setActiveSection(entry.target.id)
      }),
      { rootMargin: '-35% 0px -55% 0px' },
    )
    document.querySelectorAll('main section[id]').forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Fathima Mary home">
          <span className="brand-mark">fm<span>.</span></span>
          <span className="brand-name">Fathima Mary <small>PORTFOLIO / 2026</small></span>
        </a>
        <button className="mobile-menu icon-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'} aria-label="Main navigation">
          {navLinks.map(([label, href]) => (
            <a key={href} className={activeSection === href.slice(1) ? 'nav-active' : ''} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let’s talk <ArrowUpRight size={14} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <motion.div className="availability" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
              <span className="status-dot" /> OPEN TO ENTRY-LEVEL OPPORTUNITIES
            </motion.div>
            <motion.p className="hero-kicker" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}>COMPUTER SCIENCE GRADUATE · ASPIRING SOFTWARE DEVELOPER</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
              Building ideas<br />into <span className="gradient-text">useful software.</span>
            </motion.h1>
            <motion.p className="hero-description" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.38 }}>
              I’m <strong>Fathima Mary V</strong>, a Python Full Stack Developer building my foundation in backend development, web technologies, and database-driven applications.
            </motion.p>
            <motion.div className="hero-actions" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
              <a className="button button-primary" href="#projects">Explore my work <ArrowDownRight size={17} /></a>
              <a className="button button-quiet" href="/Fathima_Resume.pdf" download><Download size={16} /> Download resume</a>
            </motion.div>
            <motion.div className="hero-meta" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
              <span><MapPin size={14} /> Kallakurichi, Tamil Nadu</span>
              <span className="meta-divider" />
              <span><GraduationCap size={15} /> B.Sc. Computer Science</span>
            </motion.div>
          </div>

          <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.94, y: 15 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }}>
            <div className="visual-orbit orbit-a" /><div className="visual-orbit orbit-b" />
            <div className="code-window">
              <div className="window-bar"><div className="window-dots"><i /><i /><i /></div><span>about_me.py</span><span className="window-lock">●</span></div>
              <div className="code-body">
                <div className="code-line"><span className="line-number">01</span><span><b className="syntax-purple">class</b> <b className="syntax-yellow">Developer</b>:</span></div>
                <div className="code-line"><span className="line-number">02</span><span className="indent"><b className="syntax-purple">def</b> <b className="syntax-blue">__init__</b>(self):</span></div>
                <div className="code-line"><span className="line-number">03</span><span className="indent-two">self.name = <b className="syntax-green">"Fathima"</b></span></div>
                <div className="code-line"><span className="line-number">04</span><span className="indent-two">self.role = <b className="syntax-green">"Python Developer"</b></span></div>
                <div className="code-line"><span className="line-number">05</span><span className="indent-two">self.framework = <b className="syntax-green">"Django"</b></span></div>
                <div className="code-line"><span className="line-number">06</span><span className="indent-two">self.mindset = <b className="syntax-green">"Always learning"</b></span></div>
                <div className="code-line code-blank"><span className="line-number">07</span><span /></div>
                <div className="code-line"><span className="line-number">08</span><span><b className="syntax-purple">def</b> <b className="syntax-blue">build</b>(self, idea):</span></div>
                <div className="code-line"><span className="line-number">09</span><span className="indent"><b className="syntax-purple">return</b> <b className="syntax-green">"Make it useful."</b><span className="cursor" /></span></div>
              </div>
              <div className="code-footer"><span><span className="footer-green">●</span> Python</span><span>UTF-8</span><span>Ln 09, Col 34</span></div>
            </div>
            <div className="float-chip chip-python"><span className="python-glyph">Py</span><span>Python<br /><small>Core language</small></span></div>
            <div className="float-chip chip-django"><span className="django-glyph">Dj</span><span>Django<br /><small>Backend framework</small></span></div>
            <div className="visual-caption"><span className="caption-line" /> LEARN · BUILD · IMPROVE</div>
          </motion.div>
          <a href="#about" className="scroll-cue"><span /> SCROLL TO EXPLORE</a>
        </section>

        <section className="quick-stats section-wrap" aria-label="Portfolio highlights">
          <div className="stat"><span className="stat-number">8.9</span><span className="stat-label">B.Sc. CGPA</span></div>
          <div className="stat"><span className="stat-number">04</span><span className="stat-label">Certifications</span></div>
          <div className="stat"><span className="stat-number">02</span><span className="stat-label">Science Expo Awards</span></div>
          <div className="stat"><span className="stat-number">01</span><span className="stat-label">Month of Internship</span></div>
        </section>

        <section className="content-section section-wrap" id="about">
          <SectionHeading eyebrow="A LITTLE ABOUT ME" title="Curious by nature. Building with purpose." description="A quick introduction to my background, interests, and the direction I’m growing in." />
          <div className="about-grid">
            <motion.div className="about-main glass-card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
              <span className="card-index">01 / PROFILE</span>
              <h3>Turning learning into<br /><span className="gradient-text">real-world solutions.</span></h3>
              <p>I’m a Computer Science graduate from Loyola College, Vettavalam, with a strong interest in Python full-stack development. I enjoy exploring how user-friendly interfaces, backend logic, and databases work together to solve practical problems.</p>
              <p>My academic project, Smart Inventory System for Pharmacy, introduced me to building a computerized solution for medicine records, expiry dates, and stock availability. I’m looking to keep learning, contribute to a development team, and grow through real-world projects.</p>
              <div className="about-tags"><span>Problem solving</span><span>Web development</span><span>Continuous learning</span></div>
            </motion.div>
            <motion.div className="about-side" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.1 }}>
              <div className="mini-card"><div className="mini-icon"><Terminal size={19} /></div><div><h4>Current focus</h4><p>Python · Django · SQL</p></div><ArrowUpRight size={16} className="mini-arrow" /></div>
              <div className="mini-card"><div className="mini-icon"><BookOpen size={19} /></div><div><h4>Learning approach</h4><p>Practice through projects</p></div><ArrowUpRight size={16} className="mini-arrow" /></div>
              <div className="mini-card"><div className="mini-icon"><Heart size={19} /></div><div><h4>What matters</h4><p>Useful, thoughtful solutions</p></div><ArrowUpRight size={16} className="mini-arrow" /></div>
              <div className="quote-card"><span className="quote-mark">“</span><p>Every project is a chance to learn something new and make something better.</p><span className="quote-byline">MY DEVELOPMENT MINDSET</span></div>
            </motion.div>
          </div>
        </section>

        <section className="content-section section-wrap" id="skills">
          <SectionHeading eyebrow="MY TOOLKIT" title="Skills I’m growing with." description="Technologies and fundamentals from my resume, organized by where they fit in the development process." />
          <div className="skills-grid">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return <motion.article className="skill-card glass-card" key={skill.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.07, duration: 0.45 }} whileHover={{ y: -5 }}>
                <div className="skill-card-top"><div className="skill-icon"><Icon size={20} /></div><span className="skill-index">0{index + 1}</span></div>
                <h3>{skill.title}</h3>
                <div className="skill-pills">{skill.items.map(item => <span key={item}>{item}</span>)}</div>
              </motion.article>
            })}
          </div>
          <p className="skills-note"><Sparkles size={15} /> Skill cards list technologies and concepts, not self-assigned proficiency scores.</p>
        </section>

        <section className="content-section section-wrap" id="projects">
          <SectionHeading eyebrow="SELECTED WORK" title="Project with a practical purpose." description="An academic project focused on making pharmacy inventory records easier to manage." />
          <motion.article className="project-card" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="project-art">
              <div className="project-art-glow" />
              <div className="dashboard-mock">
                <div className="mock-top"><span className="mock-logo"><Database size={14} /></span><span>PharmaStock</span><span className="mock-menu">•••</span></div>
                <div className="mock-title">Inventory overview</div>
                <div className="mock-summary"><div><small>MEDICINE RECORDS</small><b>Stock overview</b></div><span className="mock-pill">Inventory</span></div>
                <div className="mock-table">
                  <div className="mock-row mock-head"><span>Medicine</span><span>Expiry</span><span>Status</span></div>
                  <div className="mock-row"><span><i className="med-dot med-purple" />Medicine A</span><span>Tracked</span><span className="mock-status">Record</span></div>
                  <div className="mock-row"><span><i className="med-dot med-blue" />Medicine B</span><span>Tracked</span><span className="mock-status">Record</span></div>
                  <div className="mock-row"><span><i className="med-dot med-green" />Medicine C</span><span>Tracked</span><span className="mock-status">Record</span></div>
                </div>
                <div className="mock-bottom"><span><CheckCircle2 size={13} /> Expiry-date tracking</span><span>UI concept</span></div>
              </div>
              <span className="project-art-label">ACADEMIC PROJECT / 01</span>
            </div>
            <div className="project-details">
              <div className="project-meta"><span className="project-type">ACADEMIC PROJECT</span><span className="project-year">SMART INVENTORY</span></div>
              <h3>Smart Inventory System<br />for Pharmacy</h3>
              <p className="project-description">A computerized inventory management system designed to support pharmacy operations by keeping medicine records organized and making expiry dates and stock availability easier to track.</p>
              <div className="project-feature-list">
                <div><CheckCircle2 size={16} /><span>Medicine record management</span></div>
                <div><CheckCircle2 size={16} /><span>Expiry-date tracking</span></div>
                <div><CheckCircle2 size={16} /><span>Stock availability overview</span></div>
              </div>
              <div className="tech-stack"><span>HTML</span><span>CSS</span><span>JavaScript</span></div>
              <div className="project-learning"><b>Learning outcome</b><p>Explored how a web interface can support a practical inventory workflow and organize key medicine information.</p></div>
              <div className="project-links"><span className="not-published"><Code2 size={15} /> Academic project</span><span className="demo-unavailable">GitHub / live demo not provided</span></div>
            </div>
          </motion.article>
        </section>

        <section className="content-section section-wrap" id="journey">
          <SectionHeading eyebrow="THE JOURNEY SO FAR" title="Education, experience & learning." description="The milestones that have helped shape my foundation in computer science and software development." />
          <div className="journey-grid">
            <div className="timeline-column">
              <h3 className="column-title"><GraduationCap size={18} /> Education</h3>
              <div className="timeline">
                <div className="timeline-item"><span className="timeline-dot" /><span className="timeline-date">2023 — 2026</span><h4>B.Sc. Computer Science</h4><p className="timeline-place">Loyola College, Vettavalam</p><span className="result-chip">8.9 CGPA</span></div>
                <div className="timeline-item"><span className="timeline-dot" /><span className="timeline-date">2021 — 2023</span><h4>Class XII · HSC</h4><p className="timeline-place">Government Girls Higher Secondary School</p><span className="result-chip">85%</span></div>
                <div className="timeline-item"><span className="timeline-dot" /><span className="timeline-date">2020 — 2021</span><h4>Class X · SSLC</h4><p className="timeline-place">St. Antony Matriculation School</p></div>
              </div>
            </div>
            <div className="timeline-column">
              <h3 className="column-title"><BriefcaseBusiness size={18} /> Internship</h3>
              <div className="internship-card glass-card">
                <div className="internship-top"><div className="internship-icon"><BriefcaseBusiness size={19} /></div><span className="duration-chip"><CalendarDays size={13} /> 1 month</span></div>
                <span className="timeline-date">INTERNSHIP EXPERIENCE</span>
                <h4>Associate Developer</h4>
                <p className="timeline-place">Spot Future Technology</p>
                <div className="thin-rule" />
                <ul className="internship-points"><li>Completed a one-month internship focused on key developer responsibilities.</li><li>Gained practical exposure to software development practices.</li></ul>
                <span className="experience-note">Early-career experience</span>
              </div>
              <h3 className="column-title cert-heading"><Award size={18} /> Certifications</h3>
              <div className="cert-list">
                {certifications.map((cert, i) => {
                  const Icon = cert.icon
                  return <motion.div className="cert-item" key={cert.title} initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                    <div className="cert-icon"><Icon size={17} /></div><div><h4>{cert.title}</h4><p>{cert.provider}</p></div><CheckCircle2 size={15} className="cert-check" />
                  </motion.div>
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="content-section section-wrap" id="achievements">
          <SectionHeading eyebrow="MILESTONES" title="Small wins. Meaningful learning." description="Academic participation, technical presentations, and science-expo recognition that reflect my curiosity and initiative." />
          <div className="achievement-grid">
            {achievements.map((item, i) => {
              const Icon = item.icon
              return <motion.article className="achievement-card glass-card" key={item.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} whileHover={{ y: -4 }}>
                <div className="achievement-icon"><Icon size={19} /></div><span className="achievement-number">0{i + 1}</span><h3>{item.title}</h3><p>{item.text}</p>
              </motion.article>
            })}
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-panel">
            <div className="contact-orb" />
            <div className="contact-copy">
              <span className="eyebrow"><span className="eyebrow-dot" /> LET’S CONNECT</span>
              <h2>Have an opportunity<br />or a project in mind?</h2>
              <p>I’m open to conversations about entry-level Python, backend, and full-stack development opportunities.</p>
              <a className="button button-primary" href="mailto:maryfathima303@gmail.com">Get in touch <ArrowUpRight size={17} /></a>
            </div>
            <div className="contact-details">
              <a href="mailto:maryfathima303@gmail.com" className="contact-detail"><span className="contact-detail-icon"><Mail size={18} /></span><span><small>EMAIL ME</small><b>maryfathima303@gmail.com</b></span><ArrowUpRight size={16} /></a>
              <a href="tel:+919095135095" className="contact-detail"><span className="contact-detail-icon"><Phone size={18} /></span><span><small>CALL ME</small><b>+91 90951 35095</b></span><ArrowUpRight size={16} /></a>
              <a href="https://www.linkedin.com/in/fathimamary17/" target="_blank" rel="noreferrer" className="contact-detail"><span className="contact-detail-icon"><Linkedin size={18} /></span><span><small>CONNECT ON LINKEDIN</small><b>linkedin.com/in/fathimamary17</b></span><ArrowUpRight size={16} /></a>
              <a href="/Fathima_Resume.pdf" download className="contact-detail"><span className="contact-detail-icon"><Download size={18} /></span><span><small>RESUME</small><b>Download PDF</b></span><ArrowUpRight size={16} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand footer-brand" href="#home"><span className="brand-mark">fm<span>.</span></span><span className="brand-name">Fathima Mary <small>PYTHON DEVELOPER</small></span></a>
        <p>Designed with care. Built for what’s next.</p>
        <a className="back-top" href="#home">BACK TO TOP <ArrowUpRight size={14} /></a>
        <span className="copyright">© {new Date().getFullYear()} Fathima Mary V</span>
      </footer>
    </div>
  )
}

export default App

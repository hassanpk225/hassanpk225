import './index.css'

const PROJECTS = [
  {
    emoji: '🖥️',
    name: 'Web Application',
    desc: 'Built a custom web app for an IT client — clean interface, fast load times, and scalable backend architecture.',
    tags: ['Python', 'React', 'PostgreSQL'],
  },
  {
    emoji: '⚙️',
    name: 'Automation Tool',
    desc: 'Developed a Python automation script that saved the client 20+ hours per week on repetitive data tasks.',
    tags: ['Python', 'FastAPI', 'Docker'],
  },
  {
    emoji: '🌐',
    name: 'Website Project',
    desc: 'Designed and deployed a modern responsive website for a tech startup — mobile-first, SEO optimized.',
    tags: ['React', 'TypeScript', 'Vercel'],
  },
]

export default function App() {
  return (
    <div className="app">
      {/* ── NAV ── */}
      <nav>
        <div className="nav-logo">Hassan PK<span>.</span></div>
        <ul className="nav-links">
          <li><a href="#work">Work</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="mailto:hassanpk226@gmail.com" className="nav-email">Contact Me</a>
      </nav>

      {/* ── HERO ── */}
      <div className="hero">
        <span className="hero-tag">✦ Python Developer · Open for Work</span>
        <h1>
          Hi, I'm{' '}
          <span className="accent">Hassan PK.</span>
        </h1>
        <p className="hero-desc">
          I build apps, websites, and automation tools for IT clients who need
          real results — not just code that looks good on paper.
          Clean Python · Modern Stack · Delivered on Time.
        </p>
        <div className="hero-cta">
          <a href="#work" className="btn btn-primary">View My Work</a>
          <a href="mailto:hassanpk226@gmail.com" className="btn btn-ghost">Contact Me →</a>
        </div>
      </div>

      {/* ── WORK ── */}
      <section id="work">
        <p className="section-label">Portfolio</p>
        <h2 className="section-title">Selected Projects</h2>
        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <div key={p.name} className="project-card">
              <div className="project-image">{p.emoji}</div>
              <div className="project-body">
                <div className="project-name">{p.name}</div>
                <div className="project-desc">{p.desc}</div>
                <div className="project-tags">
                  {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services">
        <p className="section-label">What I Do</p>
        <h2 className="section-title">Services</h2>
        <div className="services-list">
          {[
            {
              icon: '🖥️',
              title: 'Build Apps',
              desc: 'Custom web and desktop applications built with Python and modern frameworks — scalable, reliable, and built to last.',
            },
            {
              icon: '🌐',
              title: 'Website Development',
              desc: 'Fast, responsive websites built with clean code. From landing pages to full platforms — designed to convert.',
            },
            {
              icon: '🐍',
              title: 'Python Development',
              desc: 'Backend systems, automation scripts, data pipelines, and API integrations — written in clean, maintainable Python.',
            },
            {
              icon: '⚡',
              title: 'API Development',
              desc: 'RESTful APIs and backend services that power your applications and integrate with your existing stack.',
            },
            {
              icon: '🔧',
              title: 'Maintenance & Fixes',
              desc: 'Debugging, performance tuning, and keeping your existing projects running smoothly without breaking things.',
            },
            {
              icon: '☁️',
              title: 'Cloud Deployment',
              desc: 'Deploying and managing your applications on cloud platforms with reliability, security, and uptime in mind.',
            },
          ].map((s) => (
            <div key={s.title} className="service-card">
              <div className="service-icon">{s.icon}</div>
              <div className="service-info">
                <div className="service-title">{s.title}</div>
                <div className="service-desc">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about">
        <p className="section-label">About Me</p>
        <h2 className="section-title">Hassan PK</h2>
        <div className="about-grid">
          <div className="about-avatar">HP</div>
          <div className="about-text">
            <p>
              I'm a Python developer focused on building real, working software
              for IT clients. I specialize in web applications, automation, and
              backend systems — writing code that's clean, maintainable, and
              actually solves the problem.
            </p>
            <p>
              I work directly with IT businesses who need a reliable technical
              partner. No fluff, no endless meetings — just solid work delivered
              on time, every time.
            </p>
            <p>
              Outside of coding, I'm exploring new tech, contributing to open
              source, and finding better ways to solve hard problems.
            </p>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section id="testimonials">
        <p className="section-label">Social Proof</p>
        <h2 className="section-title">What Clients Say</h2>
        <div className="testimonials-grid">
          {[
            {
              quote: "Hassan delivered exactly what we needed, on time and under budget. The code quality was exceptional.",
              name: "— IT Manager",
            },
            {
              quote: "Best developer we've worked with. Communicative, reliable, and actually cares about the outcome.",
              name: "— Tech Startup Founder",
            },
          ].map((t, i) => (
            <div key={i} className="testimonial-card">
              <div className="quote-mark">"</div>
              <p className="quote-text">{t.quote}</p>
              <p className="quote-name">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact">
        <div className="contact-inner">
          <h2>Let's build something.</h2>
          <p>
            Have a project in mind? Need a developer who actually delivers?
            Get in touch — I typically respond within 24 hours.
          </p>
          <a href="mailto:hassanpk226@gmail.com" className="contact-email">Contact Me →</a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer>
        &copy; {new Date().getFullYear()} Hassan PK · Python Developer
      </footer>
    </div>
  )
}
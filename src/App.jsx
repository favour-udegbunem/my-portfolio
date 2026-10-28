import { useState } from 'react';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Code2, Github, Linkedin,
  Mail, Menu, X, Layers3, Sparkles, Globe, ExternalLink
} from 'lucide-react';

const skills = [
  { category: 'Frontend', items: [
    ['HTML5','html5'],['CSS3','css3'],['JavaScript','javascript'],['React','react'],['Vite','vitejs'],['Tailwind CSS','tailwindcss']
  ]},
  { category: 'Backend & data', items: [
    ['Node.js','nodejs'],['Express.js','express'],['MySQL','mysql'],['Sequelize','sequelize'],['Firebase','firebase'],['Cloudinary','cloudinary']
  ]},
  { category: 'Tools & workflow', items: [
    ['Git','git'],['GitHub','github']
  ]}
];
const projects = [
  { number:'01', name:'JozoStore', type:'E-commerce · Fashion', description:'A fashion and clothing shopping experience designed to make browsing collections and discovering products feel clear and effortless.', tags:['E-commerce','React','Responsive UI'], image:'/images/jozostore-hero.jpg', className:'jozo', note:'YOUR JOZOSTORE HERO IMAGE' },
  { number:'02', name:'Binx', type:'Technology community', description:'A community and content platform concept connecting people across technology tracks to share knowledge, learn, and build together.', tags:['Community','Learning','Product concept'], className:'binx', note:'TECH COMMUNITY PLATFORM' },
  { number:'03', name:'G3 Lounge', type:'E-commerce', description:'An e-commerce project focused on presenting products clearly and creating a straightforward browsing and shopping journey.', tags:['E-commerce','UI development','Responsive'], className:'g3', note:'G3 LOUNGE' }
];
function Logo(){return <a className="brand" href="#home" aria-label="UFC home"><span className="brand-mark">U<span>F</span>C</span><span className="brand-label">UDEGBUNEM FAVOUR<br/>CHIEMERIE</span></a>}
function TechLogo({name,slug}) {
  return <div className="tech-item">
    <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${slug}-original.svg`} alt="" loading="lazy" onError={e=>{e.currentTarget.style.display='none';e.currentTarget.nextSibling.style.display='grid'}}/>
    <span className="tech-fallback">{name.slice(0,2)}</span><span>{name}</span>
  </div>
}
function ProjectVisual({project}) {
  return <div className={`project-visual ${project.className}`}>
    {project.image && <img className="project-hero-image" src={project.image} alt="JozoStore landing page hero preview" onError={e=>e.currentTarget.style.display='none'}/>}
    <div className="visual-grid"></div>
    <div className="visual-label"><span className="status-dot"></span>{project.note}</div>
    {project.className==='jozo' && <div className="jozo-preview"><span>JOZO<span className="lime">STORE</span></span><small>STYLE THAT SPEAKS.</small><div className="preview-pill">EXPLORE COLLECTION <ArrowUpRight size={14}/></div></div>}
    {project.className==='binx' && <div className="binx-preview"><span className="binx-icon">b.</span><div><strong>Build something<br/><em>meaningful.</em></strong><small>LEARN · SHARE · BUILD</small></div><div className="binx-orbit"></div></div>}
    {project.className==='g3' && <div className="g3-preview"><span className="g3-logo">G3</span><span className="g3-line"></span><strong>THE BOX<br/>OF POSSIBILITIES</strong><small>DISCOVER THE COLLECTION</small></div>}
    <span className="visual-index">{project.number} / 03</span>
  </div>
}
export default function App(){
  const [menuOpen,setMenuOpen]=useState(false);
  const closeMenu=()=>setMenuOpen(false);
  const email='hello@YOUR-DOMAIN.com';
  return <div className="site-shell">
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header"><div className="container nav-wrap"><Logo/>
      <button className="menu-toggle" aria-label={menuOpen?'Close navigation':'Open navigation'} onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?<X/>:<Menu/>}</button>
      <nav className={menuOpen?'nav-links is-open':'nav-links'} aria-label="Main navigation">
        {[['About','#about'],['Skills','#skills'],['Projects','#projects'],['Contact','#contact']].map(([label,href])=><a key={href} href={href} onClick={closeMenu}>{label}</a>)}
        <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15}/></a>
      </nav>
    </div></header>
    <main id="main">
      <section className="hero section" id="home"><div className="container hero-grid">
        <div className="hero-copy"><div className="eyebrow"><span className="status-dot"></span> DEVELOPER & DIGITAL BUILDER <span className="eyebrow-line"></span></div>
          <h1>Building digital<br/>things with <span>purpose.</span></h1>
          <p className="hero-lead">I'm <strong>Udegbunem Favour Chiemerie</strong> — a developer focused on creating thoughtful web experiences, useful products, and digital platforms that help ideas move forward.</p>
          <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a><a className="text-link" href="#contact">Get in touch <ArrowDownRight size={16}/></a></div>
          <div className="hero-meta"><span><span className="meta-dot"></span> Open to learning & collaboration</span><span>BASED IN NIGERIA</span></div>
        </div>
        <div className="hero-art-wrap"><div className="hero-art">
          <div className="art-top"><span>UFC / PORTFOLIO</span><span>01—26</span></div>
          <div className="art-center"><div className="art-ring ring-one"></div><div className="art-ring ring-two"></div><div className="art-monogram">U<span>F</span>C</div><div className="art-cross cross-one"></div><div className="art-cross cross-two"></div></div>
          <div className="art-bottom"><span>IDEAS INTO INTERFACES.</span><span className="art-spark">✳</span></div>
        </div><div className="art-caption"><span className="caption-square"></span><span>DESIGN-MINDED<br/>DEVELOPMENT</span><ArrowUpRight size={18}/></div>
        <div className="floating-chip"><Code2 size={16}/><span>Build. Learn. Repeat.</span></div></div>
      </div><div className="container hero-bottom"><span>SCROLL TO EXPLORE</span><div className="scroll-line"></div><span>01 / INTRODUCTION</span></div></section>
      <section className="section about-section" id="about"><div className="container section-grid"><div className="section-kicker"><span>01</span><span>ABOUT ME</span></div><div className="about-content"><div className="about-profile"><div className="profile-photo"><img src="/images/favour.jpg" alt="Portrait of Udegbunem Favour Chiemerie" onError={e=>e.currentTarget.style.display='none'}/><span className="profile-fallback">UFC</span></div><div><p className="section-overline">A LITTLE ABOUT MY APPROACH</p><p className="profile-name">Udegbunem Favour Chiemerie</p><p className="profile-caption">Developer · Digital Builder</p></div></div><h2>Curiosity turns ideas<br/>into <span>real things.</span></h2><div className="about-columns"><p>I'm a developer and digital builder who enjoys turning ideas into usable digital experiences. I care about clean interfaces, practical functionality, and learning the reasoning behind the code I write.</p><p>From e-commerce experiences to community-focused platforms, I’m interested in building products that solve real problems—and improving them one thoughtful step at a time.</p></div><div className="about-note"><Sparkles size={17}/><span>Always learning. Always building. Focused on useful work.</span></div></div></div></section>
      <section className="section skills-section" id="skills"><div className="container"><div className="section-heading"><div><div className="section-kicker"><span>02</span><span>MY TOOLKIT</span></div><h2>Technologies I <span>work with.</span></h2></div><p>A growing toolkit for designing, building, and shipping web experiences. Logos are loaded from Devicon; a text fallback remains available.</p></div>
        <div className="skills-groups">{skills.map(group=><div className="skill-group" key={group.category}><h3>{group.category}</h3><div className="tech-grid">{group.items.map(([name,slug])=><TechLogo key={name} name={name} slug={slug}/>)}</div></div>)}</div>
        <p className="skills-footnote">This list represents technologies used across my learning and project work—not a claim of expert-level proficiency in every tool.</p>
      </div></section>
      <section className="section projects-section" id="projects"><div className="container"><div className="section-heading project-heading"><div><div className="section-kicker"><span>03</span><span>SELECTED WORK</span></div><h2>Projects with a <span>purpose.</span></h2></div><p>A selection of digital products and concepts I’ve worked on. Project details and live links can be updated as each build evolves.</p></div>
        <div className="projects-list">{projects.map(project=><article className="project-card" key={project.name}><ProjectVisual project={project}/><div className="project-info"><div className="project-info-top"><span className="project-type">{project.type}</span><span className="project-number">{project.number}</span></div><h3>{project.name}</h3><p>{project.description}</p><div className="tag-row">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div><a className="project-link" href="#contact">Discuss this project <ArrowUpRight size={16}/></a></div></article>)}</div>
      </div></section>
      <section className="section approach-section"><div className="container approach-grid"><div><div className="section-kicker"><span>04</span><span>WHAT MATTERS</span></div><h2>Good work is<br/>built with <span>intention.</span></h2></div><div className="approach-items"><div><span>01</span><div><h3>Thoughtful by design</h3><p>Interfaces should be clear, responsive, and easy to use.</p></div></div><div><span>02</span><div><h3>Built to be useful</h3><p>Technology matters most when it helps someone do something better.</p></div></div><div><span>03</span><div><h3>Learning in public</h3><p>Every project is a chance to sharpen the craft and share what works.</p></div></div></div></div></section>
      <section className="section contact-section" id="contact"><div className="container contact-card"><div className="contact-orbit"></div><div className="section-kicker"><span>05</span><span>START A CONVERSATION</span></div><h2>Have an idea?<br/><span>Let's build it.</span></h2><p>Have a project, a collaboration idea, or just want to connect? I’d be glad to hear from you.</p><a className="button button-primary" href={`mailto:${email}`}>Send me an email <Mail size={17}/></a><span className="contact-hint">Replace the placeholder email before publishing.</span></div></section>
    </main>
    <footer className="site-footer"><div className="container footer-main"><Logo/><p>Building with purpose, one project at a time.</p><div className="social-links"><a href="https://github.com/YOUR-GITHUB" target="_blank" rel="noreferrer" aria-label="GitHub profile"><Github/></a><a href="https://www.linkedin.com/in/YOUR-LINKEDIN" target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><Linkedin/></a><a href={`mailto:${email}`} aria-label="Email"><Mail/></a></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Udegbunem Favour Chiemerie</span><a href="#home">BACK TO TOP ↑</a><span>MADE WITH INTENTION.</span></div></footer>
  </div>
}

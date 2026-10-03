'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown, ArrowUp, ArrowUpRight, Menu, X, ChevronRight } from 'lucide-react'

const projects = [
  { no: '01', title: 'The Courtyard Residence', location: 'Hyderabad', category: 'Residential', year: '2024', image: '/images/courtyard-residence.png', size: 'large' },
  { no: '02', title: 'The Walnut Office', location: 'Bengaluru', category: 'Commercial', year: '2023', image: '/images/hero-interior.png', size: 'small' },
  { no: '03', title: 'The Stone Kitchen', location: 'Vizag', category: 'Residential', year: '2024', image: '/images/kitchen-detail.png', size: 'small' },
]

const services = ['Interior design', 'Interior fit-out', 'Turnkey interiors', '3D visualization', 'Custom furniture', 'Modular kitchens']
const process = [
  ['01', 'Discover', 'A conversation to understand your brief, rhythms and ambitions.'],
  ['02', 'Shape', 'Plans, material stories and visuals that make the direction tangible.'],
  ['03', 'Build', 'A considered handover, led by one team from first line to final detail.'],
]

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`reveal ${className}`}>{children}</div>
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeService, setActiveService] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')), { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
    return () => { window.removeEventListener('scroll', onScroll); observer.disconnect() }
  }, [])

  return (
    <main className="site-shell">
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <Link href="#top" className="brand-mark" aria-label="SAID home"><span>SA</span><em>SAID studio</em></Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link href="#work">Work</Link><Link href="#services">Services</Link><Link href="#process">Process</Link><Link href="#studio">Studio</Link>
        </nav>
        <Link className="header-cta" href="#contact">Start a project <ArrowUpRight aria-hidden="true" /></Link>
        <button className="menu-button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      {menuOpen && <div className="mobile-menu"><div className="mobile-menu-links"><Link href="#work" onClick={() => setMenuOpen(false)}>Work <span>01</span></Link><Link href="#services" onClick={() => setMenuOpen(false)}>Services <span>02</span></Link><Link href="#process" onClick={() => setMenuOpen(false)}>Process <span>03</span></Link><Link href="#studio" onClick={() => setMenuOpen(false)}>Studio <span>04</span></Link></div><Link href="#contact" className="button button-dark" onClick={() => setMenuOpen(false)}>Start a project <ArrowUpRight /></Link></div>}

      <section className="hero" id="top">
        <Image src="/images/hero-interior.png" alt="Warm contemporary living room designed by SAID Architects and Interior Designers" fill priority className="hero-image" sizes="100vw" />
        <div className="hero-overlay" />
        <div className="hero-atmosphere" aria-hidden="true"><span className="cloud cloud-one" /><span className="cloud cloud-two" /><span className="cloud cloud-three" /></div>
        <div className="hero-content">
          <p className="eyebrow light">Interior architecture · Hyderabad / Bengaluru</p>
          <h1>Spaces<br /><i>designed</i><br />to belong.</h1>
          <div className="hero-bottom"><p>Architecture, interiors and execution brought together to create refined spaces built around the way you live and work.</p><Link className="button button-light" href="#work">Explore our work <ArrowUpRight /></Link></div>
        </div>
        <div className="scroll-cue"><span>Scroll to explore</span><ArrowDown /></div>
      </section>

      <section className="intro section-pad" id="studio">
        <Reveal><p className="eyebrow">About the studio</p></Reveal>
        <div className="intro-grid"><Reveal><h2>We design spaces<br />that feel <i>as good</i><br />as they look.</h2></Reveal><Reveal className="intro-copy"><p>SAID — Satwika Architects and Interior Designers — transforms homes and commercial spaces through a seamless blend of style, function and personality. From concept to completion, one accountable team brings your vision to life.</p><Link className="text-link" href="#process">How we work <ArrowUpRight /></Link></Reveal></div>
      </section>

      <section className="numbers section-pad"><Reveal className="numbers-grid"><div><strong>16</strong><span>Current projects</span></div><div><strong>128</strong><span>Homes renovated</span></div><div><strong>27</strong><span>Valued partners</span></div><div><strong>22</strong><span>Years of experience</span></div></Reveal></section>

      <section className="work section-pad" id="work">
        <Reveal className="section-intro"><div><p className="eyebrow">Selected work</p><h2>Every project begins<br />as an <i>idea.</i></h2></div><p className="section-note">A collection of residences, workspaces and places shaped by light, material and the lives within them.</p></Reveal>
        <div className="project-grid">{projects.map((project, index) => <Reveal key={project.no} className={`project-card project-${project.size}`}><Link href="#contact"><div className="project-image"><Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 60vw" /><span className="project-number">{project.no}</span><span className="project-arrow"><ArrowUpRight /></span></div><div className="project-meta"><div><h3>{project.title}</h3><p>{project.location} · {project.category}</p></div><span>{project.year}</span></div></Link></Reveal>)}</div>
        <Reveal className="align-right"><Link href="#work" className="text-link">View all work <ArrowUpRight /></Link></Reveal>
      </section>

      <section className="services section-pad" id="services"><Reveal className="section-intro"><div><p className="eyebrow light">What we do</p><h2>From first sketch<br />to <i>final handover.</i></h2></div><p className="section-note light-note">One studio, one accountable team, and a way of working that keeps the detail close.</p></Reveal><div className="service-list"><div className="service-names" role="tablist" aria-label="Our services">{services.map((service, index) => <button key={service} role="tab" aria-selected={activeService === index} className={activeService === index ? 'active' : ''} onClick={() => setActiveService(index)}><span>0{index + 1}</span>{service}<ChevronRight /></button>)}</div><div className="service-detail" key={activeService}><span className="service-index">0{activeService + 1} / 06</span><h3>{services[activeService]}</h3><p>{['A full design language for the way you want to live — from spatial planning to the last layer of light.', 'A disciplined site process where drawings become finishes, joinery and places that last.', 'Design, procurement and execution held together by one calm, capable team.', 'Photorealistic worlds that let you feel a space before a single wall is built.', 'Furniture made around your proportions, rituals and the architecture around it.', 'Kitchens planned as generous, hardworking rooms — not just a run of cabinets.'][activeService]}</p><Link className="text-link light-link" href="#contact">Explore service <ArrowUpRight /></Link></div></div></section>

      <section className="visual-section"><div className="visual-image"><Image src="/images/kitchen-detail.png" alt="Detail of a custom walnut kitchen" fill sizes="100vw" /></div><Reveal className="visual-copy"><p className="eyebrow">Material intelligence</p><h2>See your space<br /><i>before it exists.</i></h2><p>Our visualizations make the invisible decisions visible — so every finish, shadow and proportion feels right before we build.</p><Link className="button button-dark" href="#contact">Discover visualization <ArrowUpRight /></Link></Reveal></section>

      <section className="process section-pad" id="process"><Reveal className="section-intro"><div><p className="eyebrow">A quieter way to build</p><h2>Good spaces come<br />from <i>good questions.</i></h2></div></Reveal><div className="process-grid">{process.map(([number, title, copy]) => <Reveal key={number} className="process-item"><span>{number}</span><h3>{title}</h3><p>{copy}</p></Reveal>)}</div></section>

      <section className="contact section-pad" id="contact"><Reveal><p className="eyebrow light">Your next chapter</p><h2>Let&apos;s make room<br />for <i>something good.</i></h2><Link className="button button-light" href="mailto:saidarchitects@gmail.com?subject=Interior%20design%20enquiry">Begin a conversation <ArrowUpRight /></Link></Reveal><div className="contact-meta"><a href="mailto:saidarchitects@gmail.com">saidarchitects@gmail.com</a><span>Hyderabad · Telangana</span></div></section>

      <footer className="footer"><div className="footer-top"><Link href="#top" className="brand-mark footer-brand"><span>SA</span><em>SAID studio</em></Link><p>Architecture, interiors and execution — brought together.</p><Link href="#top" className="back-top">Back to top <ArrowUp /></Link></div><div className="footer-bottom"><span>© 2026 SAID Studio</span><div><a href="https://instagram.com/saidsays_" target="_blank" rel="noreferrer">Instagram ↗</a><a href="https://youtube.com/@ArchitectsandInteriorDesigners" target="_blank" rel="noreferrer">YouTube ↗</a></div><span>Privacy · Terms</span></div></footer>
      <div className="mobile-sticky"><a href="mailto:saidarchitects@gmail.com">Email</a><a href="https://instagram.com/saidsays_" target="_blank" rel="noreferrer">Instagram</a><Link href="#contact">Get a quote</Link></div>
    </main>
  )
}

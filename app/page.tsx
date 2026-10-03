'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown, ArrowUpRight, Menu, X, Camera, Play } from 'lucide-react'

const projects = [
  { title: 'The Courtyard Residence', meta: 'Hyderabad · Residential', image: '/images/courtyard-residence.png' },
  { title: 'The Walnut Office', meta: 'Bengaluru · Commercial', image: '/images/hero-interior.png' },
  { title: 'The Stone Kitchen', meta: 'Vizag · Residential', image: '/images/kitchen-detail.png' },
]
const services = ['Interior architecture', 'Interior fit-out', 'Turnkey interiors', '3D visualization', 'Custom furniture', 'Modular kitchens']

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`reveal ${className}`}>{children}</div>
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeService, setActiveService] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')), { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => { window.removeEventListener('scroll', onScroll); observer.disconnect() }
  }, [])
  const closeMenu = () => setMenuOpen(false)
  return <main className="site-shell">
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <Link href="/#top" className="brand-mark" aria-label="SAID home"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hF6nxSDYqKL9yPKHjxBYzPnCEcrMbw.png" alt="Satwika Architecture and Interior Design" /><span>SA</span></Link>
      <nav className="desktop-nav" aria-label="Primary navigation"><Link href="/projects">Projects</Link><Link href="/#services">Services</Link><Link href="/#process">Process</Link><Link href="/#studio">Studio</Link></nav>
      <Link className="header-cta" href="/contact">Start a project <ArrowUpRight aria-hidden="true" /></Link>
      <button className="menu-button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
    </header>
    {menuOpen && <div className="mobile-menu"><div className="mobile-menu-links">{[['Work','/#work'],['Projects','/projects'],['Services','/#services'],['Process','/#process'],['Studio','/#studio']].map(([label, href], i) => <Link key={label} href={href} onClick={closeMenu}>{label}<span>0{i + 1}</span></Link>)}</div><Link href="/contact" className="button button-dark" onClick={closeMenu}>Start a project <ArrowUpRight /></Link></div>}

    <section className="hero" id="top"><Image src="/images/hero-interior.png" alt="Warm contemporary living room by SAID" fill priority className="hero-image" sizes="100vw" /><div className="hero-overlay" /><div className="hero-atmosphere" aria-hidden="true"><span className="cloud cloud-one" /><span className="cloud cloud-two" /><span className="cloud cloud-three" /></div><div className="hero-content"><p className="eyebrow light">SAID · Architects & Interior Designers</p><h1>Spaces<br /><i>designed</i><br />to belong.</h1><div className="hero-bottom"><p>Architecture, interiors and execution brought together to create refined spaces built around the way you live and work.</p><Link className="button button-light" href="#work">Explore our work <ArrowDown /></Link></div></div><div className="scroll-cue"><span>Scroll to explore</span><ArrowDown /></div></section>

    <section className="intro section-pad" id="studio"><Reveal><p className="eyebrow">The studio</p></Reveal><div className="intro-grid"><Reveal><h2>We make space for<br /><i>better living.</i></h2></Reveal><Reveal className="intro-copy"><p>SAID — Satwika Architects and Interior Designers — is a design and build studio creating deeply personal homes, workspaces and experiences across India.</p><Link className="text-link" href="#process">Discover our approach <ArrowUpRight /></Link></Reveal></div></section>

    <section className="numbers section-pad"><Reveal className="numbers-grid"><div><strong>16</strong><span>Current projects</span></div><div><strong>128</strong><span>Homes transformed</span></div><div><strong>27</strong><span>Trusted partners</span></div><div><strong>22</strong><span>Years of experience</span></div></Reveal></section>

    <section className="work section-pad" id="work"><Reveal className="section-intro"><div className="section-intro-link"><Link href="/projects" className="text-link">View project archive <ArrowUpRight /></Link></div><div><p className="eyebrow">Selected work</p><h2>Made for the<br /><i>everyday.</i></h2></div><p className="section-note">A small selection of places shaped by light, material and the lives within them.</p></Reveal><div className="project-grid">{projects.map((project, i) => <Reveal key={project.title} className={`project-card ${i === 0 ? 'project-large' : 'project-small'}`}><Link href={`/projects/${project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}><div className="project-image"><Image src={project.image} alt={project.title} fill sizes="(max-width: 760px) 100vw, 60vw" /><span className="project-number">0{i + 1}</span><span className="project-arrow"><ArrowUpRight /></span></div><div className="project-meta"><div><h3>{project.title}</h3><p>{project.meta}</p></div><span>2024</span></div></Link></Reveal>)}</div><Reveal className="explore-center"><Link href="/contact" className="button button-dark">Discuss your project <ArrowUpRight /></Link></Reveal></section>

    <section className="patrons section-pad"><Reveal><p className="eyebrow">Selected collaborators</p><h2>Trusted by people<br /><i>who care deeply.</i></h2></Reveal><div className="patrons-panel"><p>Our happy patrons</p><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6kJ5tjcDsx4HLCI9ts1Pjfhx84DdRG.png" alt="Selected SAID studio clients and collaborators" /></div></section>\n\n    <section className="services section-pad" id="services"><Reveal className="section-intro"><div><p className="eyebrow light">What we do</p><h2>From first sketch<br />to <i>final handover.</i></h2></div><p className="section-note light-note">One studio, one accountable team, and a way of working that keeps the detail close.</p></Reveal><div className="service-list"><div className="service-names" role="tablist" aria-label="Our services">{services.slice(0, 5).map((service, i) => <Link key={service} href={`/services/${['interior-architecture','interior-fit-out','turnkey-interiors','3d-visualization','custom-furniture'][i]}`} className={activeService === i ? 'active' : ''} onMouseEnter={() => setActiveService(i)}><span>0{i + 1}</span>{service}<ArrowUpRight /></Link>)}</div><div className="service-detail" key={activeService}><span className="service-index">0{activeService + 1} / 06</span><h3>{services[activeService]}</h3><p>Thoughtful design, exacting detail and a clear process that turns your ambition into a space that feels completely yours.</p><Link className="text-link light-link" href="/contact">Talk to our team <ArrowUpRight /></Link></div></div></section>

    <section className="visual-section"><div className="visual-image"><Image src="/images/kitchen-detail.png" alt="Custom walnut kitchen detail" fill sizes="50vw" /></div><Reveal className="visual-copy"><p className="eyebrow">Material intelligence</p><h2>See your space<br /><i>before it exists.</i></h2><p>Our visualizations make every finish, shadow and proportion visible before a single wall is built.</p><Link className="button button-dark" href="/contact">Discover visualization <ArrowUpRight /></Link></Reveal></section>

    <section className="process section-pad" id="process"><Reveal className="section-intro"><div><p className="eyebrow">A quieter way to build</p><h2>Good spaces come<br />from <i>good questions.</i></h2></div></Reveal><div className="process-grid">{[['01','Discover','A conversation to understand your brief, rhythms and ambitions.'],['02','Shape','Plans, material stories and visuals that make the direction tangible.'],['03','Build','One calm, capable team from first line to final detail.']].map(([no, title, copy]) => <Reveal key={no} className="process-item"><span>{no}</span><h3>{title}</h3><p>{copy}</p></Reveal>)}</div></section>

    <footer className="footer"><div className="footer-card"><div className="footer-card-brand"><Link href="/#top" className="brand-mark footer-brand" aria-label="SAID home"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hF6nxSDYqKL9yPKHjxBYzPnCEcrMbw.png" alt="Satwika Architecture and Interior Design" /></Link><p>Architecture, interiors and execution<br />for spaces that feel like yours.</p></div><div className="footer-address"><p>Head office</p><address>Block 21, F-1, Vignanpuri Colony<br />Vidya Nagar, Hyderabad - 44</address><a href="mailto:Say@said.archi">Say@said.archi</a><a href="tel:+919908001558">99080 01558</a></div><div className="footer-card-links"><Link href="/contact" className="button button-light">Start a conversation <ArrowUpRight /></Link><Link href="/#top" className="back-top">Back to top <ArrowUpRight /></Link></div><div className="footer-card-bottom"><span>© 2026 SAID Studio</span><div><a href="https://instagram.com/saidsays_" target="_blank" rel="noreferrer" aria-label="SAID on Instagram"><Camera /> Instagram</a><a href="https://youtube.com/@ArchitectsandInteriorDesigners" target="_blank" rel="noreferrer" aria-label="SAID on YouTube"><Play /> YouTube</a><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div></div></div></footer>
    <div className="mobile-sticky"><a href="mailto:saidarchitects@gmail.com">Email</a><a href="https://instagram.com/saidsays_" target="_blank" rel="noreferrer">Instagram</a><Link href="/contact">Get a quote</Link></div>
  </main>
}

'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'

const projects = [
  { title: 'The Courtyard Residence', type: 'Residential · Hyderabad', year: '2024', image: '/images/courtyard-residence.png', text: 'A calm, light-filled home shaped around courtyards, warm stone and daily rituals.' },
  { title: 'The Walnut Office', type: 'Commercial · Bengaluru', year: '2024', image: '/images/hero-interior.png', text: 'A focused workplace where natural materials create a sense of welcome and quiet clarity.' },
  { title: 'The Stone Kitchen', type: 'Residential · Vizag', year: '2023', image: '/images/kitchen-detail.png', text: 'A tactile kitchen study balancing honest materials, precise detailing and effortless use.' },
]

export default function ProjectsPage() {
  return <main className="projects-page">
    <header className="simple-header"><Link href="/" className="brand-mark"><span>SA</span><em>SAID studio</em></Link><Link href="/" className="text-link"><ArrowLeft /> Back home</Link></header>
    <section className="projects-hero"><p className="eyebrow">The archive</p><h1>Spaces with<br /><i>a point of view.</i></h1><p>Selected homes, workplaces and interiors designed by SAID — each one a considered response to the people and places within it.</p></section>
    <section className="projects-list" aria-label="Selected projects">{projects.map((project, index) => <article className="archive-project" key={project.title}><div className="archive-image"><Image src={project.image} alt={project.title} fill sizes="(max-width: 760px) 100vw, 58vw" /><span>0{index + 1}</span></div><div className="archive-copy"><p className="eyebrow">{project.type} · {project.year}</p><h2>{project.title}</h2><p>{project.text}</p><Link className="text-link" href="/contact">Discuss a similar project <ArrowUpRight /></Link></div></article>)}</section>
    <section className="projects-cta"><p className="eyebrow light">Have a space in mind?</p><h2>Let&apos;s make it<br /><i>meaningful.</i></h2><Link className="button button-light" href="/contact">Start a conversation <ArrowUpRight /></Link></section>
  </main>
}

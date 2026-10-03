import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'

const projects = [
  ['01', 'The Courtyard Residence', 'Hyderabad · Residential', '/images/courtyard-residence.png'],
  ['02', 'The Walnut Office', 'Bengaluru · Commercial', '/images/hero-interior.png'],
  ['03', 'The Stone Kitchen', 'Vizag · Residential', '/images/kitchen-detail.png'],
  ['04', 'The Quiet Retreat', 'Hyderabad · Residential', '/images/hero-interior.png'],
  ['05', 'A House in Light', 'Secunderabad · Residential', '/images/courtyard-residence.png'],
  ['06', 'The Material Study', 'Hyderabad · Custom interiors', '/images/kitchen-detail.png'],
]

export default function ProjectsPage() {
  return <main className="archive-page">
    <header className="simple-header archive-header"><Link href="/" className="brand-mark"><span>SA</span><em>SAID studio</em></Link><Link href="/" className="text-link"><ArrowLeft /> Back home</Link></header>
    <section className="archive-intro"><p className="eyebrow">The project archive</p><h1>Spaces made<br /><i>to belong.</i></h1><p>Explore a selection of homes, workplaces and details shaped by the SAID studio across Hyderabad and beyond.</p></section>
    <section className="archive-grid">{projects.map(([number, title, meta, image], index) => <Link href="/contact" className={`archive-card ${index % 3 === 1 ? 'archive-offset' : ''}`} key={title}><div className="archive-image"><Image src={image} alt={title} fill sizes="(max-width: 760px) 100vw, 33vw" /><span>{number}</span><ArrowUpRight /></div><div className="archive-meta"><div><h2>{title}</h2><p>{meta}</p></div><span>View project</span></div></Link>)}</section>
    <section className="archive-cta"><p className="eyebrow">Have a project in mind?</p><h2>Let&apos;s make<br /><i>something lasting.</i></h2><Link href="/contact" className="button button-dark">Begin a conversation <ArrowUpRight /></Link></section>
  </main>
}

export const metadata = { title: 'Projects | SAID studio', description: 'Explore selected architecture and interior projects by SAID studio.' }

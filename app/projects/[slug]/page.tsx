import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'

const projects = {
  'the-courtyard-residence': { number: '01', title: 'The Courtyard Residence', meta: 'Hyderabad · Residential', image: '/images/courtyard-residence.png', intro: 'A calm, light-filled home shaped around the everyday rituals of family life.', details: 'We composed this residence as a sequence of quiet thresholds: shaded courts, warm timber, tactile stone and openings that bring the garden into view.' },
  'the-walnut-office': { number: '02', title: 'The Walnut Office', meta: 'Bengaluru · Commercial', image: '/images/hero-interior.png', intro: 'A considered workplace where focus, hospitality and material warmth meet.', details: 'Rich walnut, soft daylight and carefully proportioned work zones create a workplace that feels both purposeful and welcoming.' },
  'the-stone-kitchen': { number: '03', title: 'The Stone Kitchen', meta: 'Vizag · Residential', image: '/images/kitchen-detail.png', intro: 'A tactile kitchen study in natural stone, timber and precise joinery.', details: 'Every edge and junction was resolved to make daily movement feel effortless, while a restrained palette gives the room a lasting character.' },
  'the-quiet-retreat': { number: '04', title: 'The Quiet Retreat', meta: 'Hyderabad · Residential', image: '/images/hero-interior.png', intro: 'A private retreat designed for slower mornings and softer evenings.', details: 'The interiors balance privacy with openness through layered light, low visual noise and a palette that ages beautifully.' },
  'a-house-in-light': { number: '05', title: 'A House in Light', meta: 'Secunderabad · Residential', image: '/images/courtyard-residence.png', intro: 'A home guided by daylight, proportion and a deep sense of belonging.', details: 'The plan follows the movement of the sun, creating a changing composition of shadow and brightness throughout the day.' },
  'the-material-study': { number: '06', title: 'The Material Study', meta: 'Hyderabad · Custom interiors', image: '/images/kitchen-detail.png', intro: 'A focused exploration of honest materials and crafted detail.', details: 'The project brings together custom furniture, considered lighting and durable finishes in a compact, highly resolved interior.' },
} as const

export function generateStaticParams() { return Object.keys(projects).map((slug) => ({ slug })) }

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects[slug as keyof typeof projects] ?? projects['the-courtyard-residence']
  return <main className="project-detail-page">
    <header className="simple-header"><Link href="/" className="brand-mark" aria-label="SAID home"><span>SA</span><em>SAID studio</em></Link><Link href="/projects" className="text-link"><ArrowLeft /> All projects</Link></header>
    <section className="project-detail-hero"><div className="project-detail-copy"><p className="eyebrow">{project.number} / Project archive</p><h1>{project.title}</h1><p className="project-detail-intro">{project.intro}</p><p className="project-detail-meta">{project.meta}</p></div><div className="project-detail-image"><Image src={project.image} alt={project.title} fill priority sizes="(max-width: 760px) 100vw, 62vw" /></div></section>
    <section className="project-detail-story"><p className="eyebrow">The approach</p><div><h2>Designed with<br /><i>quiet intention.</i></h2><p>{project.details}</p><Link href={`/contact?project=${encodeURIComponent(project.title)}`} className="button button-dark">Discuss this project <ArrowUpRight /></Link></div></section>
  </main>
}

export const metadata = { title: 'Project | SAID studio', description: 'Selected architecture and interior project by SAID studio.' }

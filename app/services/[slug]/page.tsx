import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react'

const serviceData = {
  'interior-architecture': {
    number: '01', title: 'Interior architecture', intro: 'The quiet structure behind spaces that feel effortless.', description: 'We shape the bones of a room before we dress it. From spatial planning and circulation to light, proportion and material rhythm, every decision is made to support the way you live.', image: '/images/hero-interior.png', points: ['Spatial planning & zoning', 'Lighting and material strategies', 'Detailed drawings and documentation', 'Residential and commercial interiors'],
  },
  'interior-fit-out': {
    number: '02', title: 'Interior fit-out', intro: 'Craft, coordination and precision from shell to finished space.', description: 'Our fit-out team turns considered design into a finished interior. We coordinate every trade, finish and installation with one clear standard of quality.', image: '/images/courtyard-residence.png', points: ['Civil and MEP coordination', 'Joinery and finish execution', 'Site supervision and quality control', 'Handover-ready detailing'],
  },
  'turnkey-interiors': {
    number: '03', title: 'Turnkey interiors', intro: 'One accountable team. One beautifully resolved result.', description: 'From the first conversation to the final styling, we manage the complete journey. You get a single point of contact and a space that arrives ready to belong to you.', image: '/images/kitchen-detail.png', points: ['Concept to completion', 'Transparent project planning', 'Vendor and procurement management', 'Final styling and handover'],
  },
  '3d-visualization': {
    number: '04', title: '3D visualization', intro: 'See the atmosphere before the first wall is built.', description: 'Our visualizations make an idea tangible. Explore the warmth of a finish, the fall of daylight and the balance of a room before construction begins.', image: '/images/hero-interior.png', points: ['Photorealistic interiors', 'Material and lighting studies', 'Walkthrough-ready scenes', 'GLB model integration coming soon'],
  },
  'custom-furniture': {
    number: '05', title: 'Custom furniture', intro: 'Objects made around your rituals, not a catalogue.', description: 'We design and make furniture that completes the architecture. Each piece is drawn around its purpose, crafted with honest materials and made to last.', image: '/images/kitchen-detail.png', points: ['Bespoke storage and cabinetry', 'Material and hardware selection', 'Shop drawings and prototypes', 'Craft-led installation'],
  },
} as const

export function generateStaticParams() { return Object.keys(serviceData).map((slug) => ({ slug })) }

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = serviceData[slug as keyof typeof serviceData] ?? serviceData['interior-architecture']
  return <main className="service-page">
    <header className="simple-header service-header"><Link href="/" className="brand-mark"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hF6nxSDYqKL9yPKHjxBYzPnCEcrMbw.png" alt="Satwika Architecture and Interior Design" /><span>SA</span><em>SAID studio</em></Link><Link href="/" className="text-link"><ArrowLeft /> Back home</Link></header>
    <section className="service-hero"><div className="service-hero-copy"><p className="eyebrow">SAID studio · {service.number}</p><h1>{service.title}</h1><p className="service-lede">{service.intro}</p></div><div className="service-hero-image"><Image src={service.image} alt={service.title} fill priority sizes="(max-width: 760px) 100vw, 55vw" /></div></section>
    <section className="service-story"><div><p className="eyebrow">Our approach</p><h2>Details that make<br /><i>the difference.</i></h2></div><div className="service-story-copy"><p>{service.description}</p><div className="service-points">{service.points.map((point) => <div key={point}><Check /> <span>{point}</span></div>)}</div><Link href="/contact" className="button button-dark">Start a conversation <ArrowUpRight /></Link></div></section>
    <section className="service-next"><p className="eyebrow">Explore the studio</p><div><Link href="/projects">View all projects <ArrowUpRight /></Link><Link href="/contact">Plan your space <ArrowUpRight /></Link></div></section>
  </main>
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = serviceData[slug as keyof typeof serviceData]
  return { title: service ? `${service.title} | SAID studio` : 'Services | SAID studio', description: service?.intro }
}

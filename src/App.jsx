import { useEffect, useRef, useState } from 'react'
import { SKILLS, JOBS, PROJECTS } from './data'

const mq = (q) => typeof matchMedia !== 'undefined' && matchMedia(q).matches
const reduce = mq('(prefers-reduced-motion:reduce)')
const fine = mq('(pointer:fine)')
const EMAIL = 'alcariajoshua13@gmail.com'
const LINKEDIN = 'https://www.linkedin.com/in/joshua-alcaria'
const NAV = [['about', 'About'], ['experience', 'Experience'], ['projects', 'Projects'], ['contact', 'Contact']]

function useInView() {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect() } }, { threshold: 0.1 })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [])
  return [ref, seen]
}

function Reveal({ children }) {
  const [ref, seen] = useInView()
  return <div ref={ref} className={'wrap rv' + (seen ? ' in' : '')}>{children}</div>
}

function Count({ n }) {
  const [ref, seen] = useInView()
  const [c, setC] = useState(reduce ? n : 0)
  useEffect(() => {
    if (!seen || reduce) return
    let s = 0
    const iv = setInterval(() => { setC(++s); if (s >= n) clearInterval(iv) }, 180)
    return () => clearInterval(iv)
  }, [seen, n])
  return <b ref={ref}>{c}</b>
}

function Header({ active }) {
  const [theme, setTheme] = useState(null)
  useEffect(() => { if (theme) document.documentElement.dataset.theme = theme }, [theme])
  const toggle = () => {
    const dark = theme ? theme === 'dark' : mq('(prefers-color-scheme:dark)')
    setTheme(dark ? 'light' : 'dark')
  }
  return (
    <header><div className="wrap">
      <a className="logo" href="#top"><i>JA</i><span>Joshua Alcaria</span></a>
      <nav aria-label="Main">
        {NAV.map(([id, label]) => <a key={id} href={'#' + id} className={active === id ? 'on' : ''}>{label}</a>)}
        <button className="icon" onClick={toggle} aria-label="Toggle light and dark theme">◐</button>
      </nav>
    </div></header>
  )
}

function Hero() {
  const q = 'wordpress seo specialist philippines'
  const [typed, setTyped] = useState(reduce ? q : '')
  const [pos, setPos] = useState(reduce ? 1 : 10)
  useEffect(() => {
    if (reduce) return
    let i = 0, rank
    const ty = setInterval(() => {
      setTyped(q.slice(0, ++i))
      if (i >= q.length) {
        clearInterval(ty)
        let n = 10
        rank = setInterval(() => { setPos(--n); if (n <= 1) clearInterval(rank) }, 130)
      }
    }, 60)
    return () => { clearInterval(ty); clearInterval(rank) }
  }, [])
  return (
    <>
      <div className="wrap hero">
        <div>
          <div className="pill"><b></b>Open to remote work</div>
          <h1>I build fast websites and make them rank.</h1>
          <p className="sub">Joshua T. Alcaria: WordPress developer, front-end developer, SEO specialist and funnel builder. Right now I run technical SEO for a global testing, inspection and certification company.</p>
          <div className="btns">
            <a className="btn p" href="#projects">See my work</a>
            <a className="btn" href={'mailto:' + EMAIL}>Email me</a>
          </div>
        </div>
        <div className="serp" aria-label="Search result preview">
          <div className="bar" aria-hidden="true">🔍 <span>{typed}</span><i className="caret"></i></div>
          <div className="rank">Position <b>{pos}</b> <span>for the search above</span></div>
          <div className="res">
            <small>alcariajoshua.netlify.app</small>
            <h3>Joshua Alcaria – WordPress Developer &amp; SEO Specialist</h3>
            <p>Custom WordPress builds, funnels and technical SEO. San Pablo City, Laguna. Open to remote work.</p>
            <div className="tags"><span className="tag">Technical SEO</span><span className="tag">WordPress</span><span className="tag">React</span></div>
          </div>
        </div>
      </div>
      <Reveal>
        <div className="stats">
          {[[JOBS.length, 'roles since 2023'], [PROJECTS.length, 'sample sites below'], [3, 'SEO languages: EN, FR, ES'], [SKILLS.Platforms.length - 1, 'platforms built on']].map(([n, label]) => (
            <div className="stat" key={label}><Count n={n} /><span>{label}</span></div>
          ))}
        </div>
      </Reveal>
    </>
  )
}

function About() {
  const cats = ['All', ...Object.keys(SKILLS)]
  const [cat, setCat] = useState('All')
  const chips = cat === 'All' ? Object.values(SKILLS).flat() : SKILLS[cat]
  return (
    <section id="about"><Reveal><div className="about">
      <div>
        <h2>About</h2>
        <p>I'm a WordPress developer and digital marketing specialist who builds high-performing websites, sales funnels and automation systems.</p>
        <p>My work covers ACF-based custom development, Elementor, Divi, WooCommerce and Shopify builds, and data-driven SEO. I focus on fast, conversion-optimised sites that generate leads.</p>
        <p>I hold a BS in Computer Science and work from San Pablo City, Laguna, Philippines.</p>
      </div>
      <div>
        <h2>Tech I use</h2>
        <div className="tabs" role="tablist" aria-label="Skill categories">
          {cats.map((c) => <button key={c} role="tab" className="tab" aria-selected={c === cat} onClick={() => setCat(c)}>{c}</button>)}
        </div>
        <div className="chips">
          {chips.map((x, i) => <span className="chip" key={cat + x} style={{ animationDelay: i * 25 + 'ms' }}>{x}</span>)}
        </div>
      </div>
    </div></Reveal></section>
  )
}

function Experience() {
  const [open, setOpen] = useState(0)
  return (
    <section id="experience"><Reveal>
      <h2>Experience</h2>
      <p className="lead">Select a role to expand it.</p>
      <div className="tl">
        {JOBS.map((j, i) => (
          <div className="job" key={j.org} data-open={open === i}>
            <button aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
              <span><h3>{j.role}</h3><small>{j.org}</small></span>
              <span className="when">{j.when}</span><span className="pm">+</span>
            </button>
            <div className="body"><ul>{j.points.map((p) => <li key={p}>{p}</li>)}</ul></div>
          </div>
        ))}
      </div>
    </Reveal></section>
  )
}

function Project({ p }) {
  const move = (e) => {
    if (reduce || !fine) return
    const el = e.currentTarget, r = el.getBoundingClientRect()
    const dx = (e.clientX - r.left) / r.width - 0.5, dy = (e.clientY - r.top) / r.height - 0.5
    el.style.transform = `perspective(700px) rotateY(${dx * 8}deg) rotateX(${-dy * 8}deg) translateY(-4px)`
  }
  return (
    <a className="proj" href={p.url} target="_blank" rel="noopener noreferrer" style={{ '--h': p.hue }}
       onMouseMove={move} onMouseLeave={(e) => { e.currentTarget.style.transform = '' }}>
      <div className="thumb"><em>{p.letter}</em></div>
      <div className="pb">
        <h3>{p.name}</h3><small>{p.domain}</small>
        <span className="tag">{p.tag}</span> <span className="go">Visit site ↗</span>
      </div>
    </a>
  )
}

function Projects() {
  return (
    <section id="projects"><Reveal>
      <h2>Sample projects</h2>
      <p className="lead">Live websites I've worked on. Select a card to open the site.</p>
      <div className="grid">{PROJECTS.map((p) => <Project key={p.url} p={p} />)}</div>
    </Reveal></section>
  )
}

function Contact() {
  const [label, setLabel] = useState('Copy email')
  const copy = async () => {
    try { await navigator.clipboard.writeText(EMAIL); setLabel('Copied') } catch { setLabel('Copy failed') }
    setTimeout(() => setLabel('Copy email'), 1800)
  }
  return (
    <section id="contact"><Reveal><div className="contact">
      <h2>Let's work together</h2>
      <p>I'm open to remote opportunities. Tell me what you want to build or fix.</p>
      <div className="btns" style={{ marginTop: '1.5rem' }}>
        <a className="btn p" href={'mailto:' + EMAIL}>{EMAIL}</a>
        <a className="btn" href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <button className="btn" onClick={copy}>{label}</button>
      </div>
    </div></Reveal></section>
  )
}

export default function App() {
  const [active, setActive] = useState('')
  const bar = useRef(null)
  const spot = useRef(null)
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      bar.current.style.width = (scrollY / (h.scrollHeight - innerHeight)) * 100 + '%'
      let cur = ''
      NAV.forEach(([id]) => { if (document.getElementById(id).getBoundingClientRect().top < innerHeight * 0.4) cur = id })
      setActive(cur)
    }
    const onMove = (e) => { spot.current.style.left = e.clientX + 'px'; spot.current.style.top = e.clientY + 'px' }
    addEventListener('scroll', onScroll, { passive: true })
    if (!reduce && fine) addEventListener('pointermove', onMove, { passive: true })
    return () => { removeEventListener('scroll', onScroll); removeEventListener('pointermove', onMove) }
  }, [])
  return (
    <>
      <div id="prog" ref={bar}></div><div id="spot" ref={spot}></div>
      <Header active={active} />
      <main id="top"><Hero /><About /><Experience /><Projects /><Contact /></main>
      <footer><div className="wrap">© {new Date().getFullYear()} Joshua T. Alcaria · San Pablo City, Laguna, Philippines</div></footer>
    </>
  )
}

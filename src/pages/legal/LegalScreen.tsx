import { useEffect, useState, type ReactNode } from 'react'
import { Menu, X } from 'lucide-react'
import { LandingFooter } from '../landing/LandingFooter'
import './LegalScreen.css'

type LegalKind = 'privacy' | 'terms'

function LegalSection({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return <section id={id} className="legal-section">
    <h2>{title}</h2>
    {children}
  </section>
}

function PrivacyPolicy() {
  return <>
    <LegalSection id="overview" title="Overview">
      <p>This Data Privacy Policy explains how Flip7 Companion handles information when you use Banker Mode or Demo Mode to record physical card flips and scores.</p>
      <p>This policy applies to the app and its informational pages.</p>
    </LegalSection>
    <LegalSection id="information" title="Information we collect">
      <p>Banker Mode uses the player names, cards, actions, and scores you enter. Demo Mode uses the cards you choose for practice. This information stays in the active browser session.</p>
      <p>Hosting providers may process basic technical information needed to deliver the website. Please avoid putting sensitive personal information into player names.</p>
    </LegalSection>
    <LegalSection id="local-modes" title="Demo and Banker Mode">
      <p>Demo Mode is for private practice. Banker Mode lets one person operate a table from one device. Closing or refreshing the page ends the local session, so these modes do not provide a saved game record or recovery.</p>
    </LegalSection>
    <LegalSection id="use" title="How we use information">
      <p>Information entered during a game is used in your browser to show the table, calculate scores, and move between rounds.</p>
    </LegalSection>
    <LegalSection id="sharing" title="When information is shared">
      <p>The app does not send player names, cards, actions, or scores to a game server. The website host may process requests needed to deliver the app under its own privacy terms.</p>
    </LegalSection>
    <LegalSection id="retention" title="Storage and retention">
      <p>Game information stays in the current browser session and is cleared when you leave or refresh the game. The app does not keep a game history.</p>
    </LegalSection>
    <LegalSection id="choices" title="Your choices">
      <p>You can choose what player names and game information to enter. You can leave the game or refresh the page to clear the current session.</p>
    </LegalSection>
    <LegalSection id="children" title="Children's privacy">
      <p>Flip7 Companion is intended for general audiences and is not directed to children under the age where parental consent is required by local law. If you believe a child provided personal information, please contact the project owner so it can be reviewed.</p>
    </LegalSection>
    <LegalSection id="changes" title="Changes to this policy">
      <p>We may update this policy as the app changes. The revised version will be posted on this page with an updated date. Your continued use of the service after an update means the revised policy applies to future use.</p>
    </LegalSection>
  </>
}

function TermsConditions() {
  return <>
    <LegalSection id="acceptance" title="Acceptance of these terms">
      <p>These Terms &amp; Conditions govern your use of Flip7 Companion. By using the app, you agree to follow these terms and the game Rules.</p>
      <p>If you do not agree, do not use the service.</p>
    </LegalSection>
    <LegalSection id="service" title="The companion service">
      <p>Flip7 Companion is a digital companion for the physical Flip 7 card game. Banker Mode records cards and scores for a group on one device. Demo Mode lets one person practice. The app does not replace the physical deck or decide how players draw cards.</p>
    </LegalSection>
    <LegalSection id="local-modes" title="Demo and Banker Mode">
      <p>Demo Mode is a private practice experience. Banker Mode is a one-device setup where a banker switches between player tables and records the group's physical cards and actions locally.</p>
      <p>These modes are temporary. Keep the device available during play and record any information you want to keep before closing or refreshing the session.</p>
    </LegalSection>
    <LegalSection id="independent" title="Independent companion notice">
      <p>Flip7 Companion is an independent, unofficial companion app created for people who want to play the physical card game with friends. It is not affiliated with, endorsed by, sponsored by, or associated with the creator, publisher, or other rights holders of Flip 7.</p>
      <p>Flip 7 and related game materials belong to their respective owners. This app records the cards that players physically reveal; it does not provide or replace the physical game.</p>
    </LegalSection>
    <LegalSection id="fair-play" title="Fair play and acceptable use">
      <p>Use the app to support a friendly, honest game. You must not:</p>
      <ul><li>submit unlawful, harmful, abusive, or deceptive content; or</li><li>use the app to disrupt play or manipulate results dishonestly.</li></ul>
    </LegalSection>
    <LegalSection id="content" title="Your game data">
      <p>You are responsible for the player names and game information you enter. The app displays this information on the current device during play.</p>
      <p>Do not enter information you do not have the right to share.</p>
    </LegalSection>
    <LegalSection id="availability" title="Availability and changes">
      <p>The app may be updated, paused, or unavailable from time to time for maintenance, improvements, or circumstances outside our control. Features and integrations may change as the service develops.</p>
      <p>Features may change as the app develops.</p>
    </LegalSection>
    <LegalSection id="responsibility" title="Your responsibility for gameplay">
      <p>The app records what the banker enters. The group is responsible for resolving physical card disputes, checking recorded cards, and agreeing on the final result. Use the Rules page as a reference for how Flip 7 is played and scored.</p>
    </LegalSection>
    <LegalSection id="updates" title="Updates to these terms">
      <p>We may revise these terms when the app, rules presentation, or legal requirements change. The current version will be posted on this page with an updated date. Continuing to use the service after an update means you accept the revised terms.</p>
    </LegalSection>
  </>
}

export function LegalScreen({ kind }: { kind: LegalKind }) {
  const [navScrolled, setNavScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isPrivacy = kind === 'privacy'
  const title = isPrivacy ? 'Data Privacy Policy' : 'Terms & Conditions'
  const eyebrow = isPrivacy ? 'FLIP7 COMPANION · YOUR DATA' : 'FLIP7 COMPANION · PLAY FAIR'
  const intro = isPrivacy ? 'A clear look at how the companion handles information during play.' : 'The simple ground rules for using Flip7 Companion and keeping every table moving.'
  const heroCards = isPrivacy ? ['0', 'SECOND CHANCE', '+2'] : ['12', 'FREEZE', '+6']

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return <div className="landing-page legal-page">
    <header className={`landing-nav ${navScrolled ? 'scrolled' : ''}`}>
      <div className="landing-nav-inner">
        <a href="/" className="legal-brand"><img className="landing-logo" src="/assets/flip7-title-logo.png" alt="Flip7 Companion" /></a>
        <nav className="landing-top-links" aria-label="Primary navigation"><a href="/">Home</a><a href="/#landing-how">How it Works</a><a href="/rules">Rules</a><a href="/faq">FAQ</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="/contact">Contact</a></nav>
        <a href="/banker" className="landing-signin">BANKER MODE</a>
        <button className="landing-mobile-toggle" type="button" aria-expanded={mobileMenuOpen} aria-controls="legal-mobile-menu" aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'} onClick={() => setMobileMenuOpen((open) => !open)}>{mobileMenuOpen ? <X size={21} /> : <Menu size={21} />}</button>
      </div>
      {mobileMenuOpen && <><button className="landing-mobile-backdrop" type="button" aria-label="Close navigation menu" onClick={closeMobileMenu} /><div id="legal-mobile-menu" className="landing-mobile-menu"><nav aria-label="Mobile navigation"><a href="/" onClick={closeMobileMenu}>Home</a><a href="/#landing-how" onClick={closeMobileMenu}>How it Works</a><a href="/rules" onClick={closeMobileMenu}>Game Rules</a><a href="/faq" onClick={closeMobileMenu}>Frequently Asked Questions</a><a href="/privacy" onClick={closeMobileMenu}>Data Privacy Policy</a><a href="/terms" onClick={closeMobileMenu}>Terms &amp; Conditions</a><a href="/contact" onClick={closeMobileMenu}>Contact Us</a></nav><a href="/banker" className="landing-mobile-signin" onClick={closeMobileMenu}>BANKER MODE</a></div></>}
    </header>

    <main className="legal-main">
      <section className="legal-hero"><div className="legal-hero-inner"><span className="eyebrow">{eyebrow}</span><h1>{isPrivacy ? <>Your data,<br /><em>kept clear.</em></> : <>Play fair.<br /><em>Keep it moving.</em></>}</h1><p>{intro}</p><div className="legal-meta"><span>Updated October 2026</span><span>{isPrivacy ? 'Privacy' : 'Terms'}</span></div></div><div className="legal-hero-cards" aria-hidden="true">{heroCards.map((card) => <img key={card} src={`/cards/${card}.png`} alt="" />)}</div></section>
      <div className="legal-content">
        <aside className="legal-index" aria-label={`${title} sections`}><span className="eyebrow">ON THIS PAGE</span><strong>{title}</strong><nav>{isPrivacy ? <><a href="#overview">Overview</a><a href="#information">Information we collect</a><a href="#local-modes">Demo and Banker Mode</a><a href="#use">How we use information</a><a href="#sharing">When information is shared</a><a href="#retention">Storage and retention</a><a href="#choices">Your choices</a><a href="#children">Children's privacy</a><a href="#changes">Changes</a></> : <><a href="#acceptance">Acceptance</a><a href="#service">The companion service</a><a href="#local-modes">Demo and Banker Mode</a><a href="#independent">Independent companion</a><a href="#fair-play">Fair play</a><a href="#content">Your game data</a><a href="#availability">Availability</a><a href="#responsibility">Gameplay responsibility</a><a href="#updates">Updates</a></>}</nav></aside>
        <article className="legal-document">{isPrivacy ? <PrivacyPolicy /> : <TermsConditions />}<div className="legal-back-links"><a href="/faq">Have a question? Visit the FAQs</a><a href="/rules">Read the game rules</a></div></article>
      </div>
    </main>
    <LandingFooter isRulesPage />
  </div>
}

import type { Metadata } from "next";
import editorial from "@/components/editorial/editorial.module.css";
import coaches from "@/components/coaches/coaches.module.css";
import styles from "@/components/audits/audits.module.css";
import { Nav } from "@/components/nav";
import { CALL_REQUEST_URL, CONTACT_EMAIL, auditsContent as copy } from "./content";

// Copy lives in ./content.ts. This file only lays it out, reusing the /coaches
// building blocks so the page reads as part of the same site.

export const metadata: Metadata = {
  title: copy.meta.title,
  description: copy.meta.description,
};

export default function AuditsPage() {
  const { hero, whatYouGet, limits, audience, engagement, cta } = copy;

  return (
    <>
      <Nav />
      <main className={`${editorial.editorialPage} ${coaches.page}`} id="main-content">
        <section className={coaches.hero} aria-labelledby="audits-title">
          <p className={`${coaches.label} ${coaches.heroLabel}`}>{hero.eyebrow}</p>
          <h1 id="audits-title" className={coaches.display}>
            {hero.headline}
          </h1>
          <div className={coaches.heroAside}>
            <p>{hero.subhead}</p>
            <a className={coaches.button} href={CALL_REQUEST_URL}>
              {hero.cta}
            </a>
          </div>
        </section>

        <section className={coaches.how} aria-labelledby="get-title">
          <div className={coaches.sectionHead}>
            <p className={coaches.label}>{whatYouGet.label}</p>
            <h2 id="get-title" className={coaches.display}>
              {whatYouGet.heading}
            </h2>
            <p>{whatYouGet.lead}</p>
          </div>
          <ol className={`${coaches.steps} ${styles.threeSteps}`}>
            {whatYouGet.items.map((item) => (
              <li key={item.number} className={`${coaches.step} ${styles.step}`}>
                <span className={coaches.stepNumber}>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className={coaches.scene} aria-labelledby="limits-title">
          <div className={coaches.sceneIntro}>
            <p className={coaches.label}>{limits.label}</p>
            <h2 id="limits-title" className={coaches.display}>
              {limits.heading}
            </h2>
          </div>
          <ul className={coaches.sceneList}>
            {limits.items.map((item) => (
              <li key={item.figure}>
                <span className={`${coaches.display} ${coaches.sceneFigure}`}>
                  {item.figure}
                </span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
          <p className={coaches.sceneClosing}>{limits.closing}</p>
        </section>

        <div className={styles.pair}>
          <section className={coaches.sectionHead} aria-labelledby="audience-title">
            <p className={coaches.label}>{audience.label}</p>
            <h2 id="audience-title" className={coaches.display}>
              {audience.heading}
            </h2>
            <ul className={styles.dashList}>
              {audience.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section className={coaches.sectionHead} aria-labelledby="engagement-title">
            <p className={coaches.label}>{engagement.label}</p>
            <h2 id="engagement-title" className={coaches.display}>
              {engagement.heading}
            </h2>
            <p>{engagement.body}</p>
          </section>
        </div>

        <section className={coaches.cta} aria-labelledby="cta-title">
          <div className={coaches.ctaCopy}>
            <h2 id="cta-title" className={coaches.display}>
              {cta.heading}
            </h2>
            <p>{cta.body}</p>
          </div>
          <div className={coaches.ctaActions}>
            <a className={coaches.button} href={CALL_REQUEST_URL}>
              {cta.button}
            </a>
            <p>{cta.emailLabel}</p>
            <a className={coaches.ctaEmail} href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL} →
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

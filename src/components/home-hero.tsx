import Image from "next/image";
import Link from "next/link";

export function HomeHero() {
  return (
    <section className="home-hero" aria-labelledby="home-heading">
      <div className="hero-copy">
        <div className="hero-copy-top">
          <h1
            id="home-heading"
            aria-label="Frontier technology, for the rest of the world."
          >
            Frontier technology,
            <br />
            for the rest of
            <br />
            the{" "}
            <Link className="hero-manifesto-link" href="/manifesto">
              world
            </Link>
            .
          </h1>
          <p>
            We advise about and build outcome-oriented agents for those outside
            the tech bubble
          </p>
        </div>

        <div className="hero-signal">
          <span>01 / BUILD + WRITE + ADVISE</span>
        </div>
      </div>

      <div className="hero-visual">
        <div className="computer-card">
          <Image
            className="computer-art"
            src="/brand/logo-crop.png"
            alt="Sanganak mascot"
            width={512}
            height={512}
            priority
          />
        </div>
        <div className="computer-caption" aria-label="Computer artwork caption">
          <span>COMPUTE / CULTURE</span>
          <span>sanganak.ai</span>
        </div>
      </div>
    </section>
  );
}

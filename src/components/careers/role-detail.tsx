import Link from "next/link";
import type { ReactNode } from "react";
import { Nav } from "@/components/nav";
import styles from "./careers.module.css";

type RoleDetailProps = {
  title: string;
  product: "Saras" | "Masala Dew";
  metadata: readonly string[];
  intro: ReactNode;
  about: readonly ReactNode[];
  task?: ReactNode;
  terms: readonly ReactNode[];
  criteria: readonly ReactNode[];
  resumeNote: ReactNode;
  tall?: boolean;
};

export function ProductBadge({ product }: { product: "Saras" | "Masala Dew" }) {
  return (
    <span className={`${styles.chip} ${styles.productChip}`} aria-label={`Product: ${product}`}>
      {product}
    </span>
  );
}

export function SarasLink() {
  return (
    <a
      className={styles.inlineLink}
      href="https://sarasgmat.com"
      rel="noopener noreferrer"
      target="_blank"
    >
      Saras
    </a>
  );
}

export function ManifestoLink() {
  return (
    <Link className={styles.inlineLink} href="/manifesto">
      our manifesto
    </Link>
  );
}

function DetailList({ items }: { items: readonly ReactNode[] }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export function ApplyFooter({ compact = false }: { compact?: boolean }) {
  return (
    <footer className={`${styles.applyFooter} ${compact ? styles.aiApply : ""}`}>
      <div className={`${styles.container} ${styles.applyInner}`}>
        <p className={styles.applyLabel}>SANGANAK / CAREERS / INDIA ↔ ANYWHERE</p>
        <a className={styles.applyButton} href="mailto:contact@sanganak.ai">
          APPLY VIA EMAIL →
        </a>
      </div>
    </footer>
  );
}

export function RoleDetail({
  title,
  product,
  metadata,
  intro,
  about,
  task,
  terms,
  criteria,
  resumeNote,
  tall = false,
}: RoleDetailProps) {
  return (
    <>
      <Nav />
      <main className={styles.page} id="main-content">
      <section className={styles.roleHero} aria-labelledby="role-title">
        <div className={`${styles.container} ${styles.roleHeroInner}`}>
          <div>
            <h1 className={styles.roleTitle} id="role-title">
              {title}
            </h1>
            <div className={styles.chips} aria-label="Role details">
              <ProductBadge product={product} />
              {metadata.map((item) => (
                <span className={styles.chip} key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className={styles.prose}>{intro}</div>
        </div>
      </section>

      <section
        className={styles.detailArea}
        aria-label="Position details"
        style={{ "--detail-height": tall ? "1120px" : "970px" } as React.CSSProperties}
      >
        <div className={`${styles.container} ${styles.detailGrid}`}>
          <div className={styles.detailColumn}>
            <article className={`${styles.detailCard} ${styles.aboutCard}`}>
              <h2>About the role</h2>
              <DetailList items={about} />
            </article>
            {task ? (
              <article className={`${styles.detailCard} ${styles.taskCard}`}>
                <h2>First task</h2>
                <p className={styles.taskText}>{task}</p>
              </article>
            ) : null}
          </div>
          <div className={styles.detailColumn}>
            <article className={`${styles.detailCard} ${styles.termsCard}`}>
              <h2>Terms</h2>
              <DetailList items={terms} />
            </article>
            <article className={`${styles.detailCard} ${styles.criteriaCard}`}>
              <h2>What we&apos;re looking for</h2>
              <DetailList items={criteria} />
              <p className={styles.resumeNote}>{resumeNote}</p>
            </article>
          </div>
        </div>
      </section>
      <ApplyFooter />
      </main>
    </>
  );
}

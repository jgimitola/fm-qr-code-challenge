import QRCard from "@/modules/shared/components/QRCard";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <QRCard className={styles.cardModifier} />

      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H"
          target="_blank"
        >
        Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://www.frontendmentor.io/profile/jgimitola">
          Jesus Imitola
        </a>
        .
      </div>
    </main>
  );
}

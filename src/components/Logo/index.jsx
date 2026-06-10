import styles from "./Logo.module.css";

// Wordmark "Teach-ing" com o capelo no lugar do hífen
function Logo({ size = 28 }) {
  const capH = size * 1.05;
  return (
    <span className={styles.logo} style={{ fontSize: size, lineHeight: 1 }}>
      <span>Teach</span>
      <svg
        className={styles.logoCap}
        width={capH * 1.6}
        height={capH}
        viewBox="0 0 64 42"
        aria-label="capelo de formatura"
      >
        <path
          className={styles.capBand}
          d="M 12 22 L 12 30 Q 12 36 22 38 Q 32 40 42 38 Q 52 36 52 30 L 52 22 Z"
        />
        <polygon className={styles.capTop} points="32,4 60,18 32,32 4,18" />
        <circle className={styles.capButton} cx="32" cy="18" r="2.2" />
        <path className={styles.capTasselLine} d="M 56 18 L 56 30 Q 56 33 54 35" />
        <circle className={styles.capTasselBead} cx="54" cy="37" r="3" />
      </svg>
      <span>ing</span>
    </span>
  );
}

export default Logo;

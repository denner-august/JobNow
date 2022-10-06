import styles from "./styles.module.scss";
export function Header() {
  return (
    <div className={styles.Container}>
      <h2>Jow Now</h2>

      <ul>
        <li>
          <a
            href="https://github.com/denner-august"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/denner-bernardes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </li>
      </ul>
      <button>Entre</button>
    </div>
  );
}

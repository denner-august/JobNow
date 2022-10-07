import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import { useState } from "react";

export function Header() {
  const Router = useRouter();

  return (
    <div className={styles.Container}>
      <h2>Job Now</h2>

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
      <button onClick={() => Router.push("login")}>Entre</button>
    </div>
  );
}

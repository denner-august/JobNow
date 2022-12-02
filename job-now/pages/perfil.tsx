import { useState } from "react";
import { ExibiVaga } from "../components/homePage/components/exibiVaga";
import { HeaderDefaul } from "../components/homePage/components/headerLogin";

import styles from "../styles/user.module.scss";

import { jobProps } from "../types/jobs";
import Jobs from "../jobs/jobs.json";

export default function Perfil() {
  const [jobsUser, setJObsUser] = useState(() => {
    return Jobs.vagas.filter((item) => item.id === 2);
  });

  return (
    <div className={styles.Container}>
      <HeaderDefaul />
      {jobsUser.map((items: jobProps) => {
        return <ExibiVaga key={Math.random()} job={items} />;
      })}
    </div>
  );
}

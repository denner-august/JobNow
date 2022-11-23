import { HeaderDefaul } from "../../components/homePage/components/headerLogin";
import styles from "../../styles/Viewjob.module.scss";
import jobs from "../../jobs/jobs.json";

import { useRouter } from "next/router";
import { useState } from "react";

export default function ViewJob() {
  const router = useRouter();
  const { job_id } = router.query;

  const [job, setJob] = useState(() => {
    const findjob = jobs.vagas.find((jobs) => jobs.id === Number(job_id));
    return findjob;
  });

  return (
    <>
      <HeaderDefaul />
      <div className={styles.Container}></div>
    </>
  );
}

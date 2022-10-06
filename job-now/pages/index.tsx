import type { NextPage } from "next";
import styles from "../styles/home.module.scss";

import { PrincipalHome } from "../components/homePage/principal";

const Home: NextPage = () => {
  return (
    <div className={styles.Container}>
      <PrincipalHome />
    </div>
  );
};

export default Home;

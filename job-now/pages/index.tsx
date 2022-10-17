import type { NextPage } from "next";
import styles from "../styles/home.module.scss";
import Swal from "sweetalert2";

import { PrincipalHome } from "../components/homePage/principal";
import { useEffect } from "react";

const Home: NextPage = () => {
  useEffect(() => {
    Swal.fire("Este é um projeto ainda em fase de desenvolvimento");
  }, []);

  return (
    <div className={styles.Container}>
      <PrincipalHome />
    </div>
  );
};

export default Home;

import { useContext } from "react";
import { HeaderDefaul } from "../components/homePage/components/headerLogin";
import { Context } from "../context/userContext";

import styles from "../styles/createJob.module.scss";

export default function CreateJob() {
  const { user } = useContext(Context);

  return <HeaderDefaul />;
}

import { HeaderDefaul } from "../components/homePage/components/headerLogin";

import { useForm } from "react-hook-form";
import { CreateJobForm } from "../components/homePage/components/formCreateJob/createJobForm";

export default function CreateJob() {
  // falta colocar a logo da empresa como input
  // tipar os dados do form

  return (
    <>
      <HeaderDefaul />
      <CreateJobForm />
    </>
  );
}

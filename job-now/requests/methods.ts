import { CreateJobFormProps } from "../types/createJobForm";

import { Createjob } from "./createJob";

export async function CreateJob(data: CreateJobFormProps) {
  const linguangens: any = data.Tecnologias.flatMap(
    (linguagens) => linguagens.linguagem
  );
  data.Tecnologias = linguangens;

  Createjob(data);
}

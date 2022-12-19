import { api } from "../axios";
import { CreateJobFormProps } from "../types/createJobForm";

export async function getJobs() {
  const data = await api.get("/job/all").then((response) => response.data);

  return data;
}

export async function CreateJob(data: CreateJobFormProps) {
  const linguangens = data.Tecnologias.flatMap(
    (linguagens: any) => linguagens.linguagem
  );
  data.Tecnologias = linguangens;

  const indentificacao = {
    id: Math.random(),
    logo: "/images/login/white-rose-close-up.jpg",
  };

  await api.post("/job/create", {
    vaga: {
      ...indentificacao,
      ...data,
    },
  });
}
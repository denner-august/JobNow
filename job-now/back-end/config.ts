import * as fs from "fs";
import { CreateJobFormProps } from "../types/createJobForm";
const jobs = "./teste.json";
const encodig = "utf-8";

export function UpdateJob(data: CreateJobFormProps) {
  const dataAtual = fs.readFileSync(jobs, encodig);
  const dataObject = JSON.parse(dataAtual);
  const vagasAtuais = dataObject.vagas;
  const newVagas = { vagas: [...vagasAtuais, data] };

  fs.writeFile(jobs, JSON.stringify(newVagas, null, 2), encodig, (e) => {
    if (e) {
      console.log(e);
      return;
    }
  });
}

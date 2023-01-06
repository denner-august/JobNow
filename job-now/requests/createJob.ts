import { client, q } from "../pages/api/faunaConfig";
import { CreateJobFormProps } from "../types/createJobForm";

export function Createjob(data: CreateJobFormProps) {
  return client.query(q.Create(q.Collection("jobs"), { data }));
}
//função que cria um novo trabalho

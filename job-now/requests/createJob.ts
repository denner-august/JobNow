import { client, q } from "../faunadb/faunaConfig";

export function Createjob(data: any) {
  return client.query(q.Create(q.Collection("jobs"), { data }));
}
//função que cria um novo trabalho

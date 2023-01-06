import { CreateJobFormProps } from "./../types/createJobForm";
import { client, q } from "../pages/api/faunaConfig";
import { Get } from "faunadb";

type dataProps = {
  data: CreateJobFormProps;
};

export async function getAllJobOneUser(email: string) {
  const request: dataProps = await client.query(
    q.Map(
      q.Paginate(q.Match(q.Index("jobUserEmail"), [email])),
      q.Lambda((x) => q.Get(x))
    )
  );
  return request.data;
}
//função que cria um novo trabalho

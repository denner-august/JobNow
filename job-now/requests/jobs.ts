import { client, q } from "../faunadb/faunaConfig";
import { CreateJobFormProps } from "../types/createJobForm";

interface jobProps {
  data: [{ data: CreateJobFormProps }];
}

export async function GetAllJobs() {
  const data: jobProps = await client.query(
    q.Map(
      q.Paginate(q.Match("GetAllJobs"), { size: 5 }),
      q.Lambda((x) => q.Get(x))
    )
  );

  return data;
}

//retorno com os trabalhos criados até o momento

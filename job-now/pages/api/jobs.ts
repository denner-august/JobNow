import type { NextApiRequest, NextApiResponse } from "next";

import { client, q } from "./faunaConfig";
import { CreateJobFormProps } from "../../types/createJobForm";

interface jobProps {
  data: [{ data: CreateJobFormProps }];
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  if (method !== "GET") {
    return res.status(400).json({ resposta: "methodo errado" });
  }

  const data: jobProps = await client.query(
    q.Map(
      q.Paginate(q.Match("GetAllJobs"), { size: 5 }),
      q.Lambda((x) => q.Get(x))
    )
  );

  return res.status(200).json(data);
};

// função que pega todos os trabalhos atuais

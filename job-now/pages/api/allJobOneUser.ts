import { CreateJobFormProps } from "../../types/createJobForm";
import { client, q } from "./faunaConfig";

type dataProps = {
  data: CreateJobFormProps;
};

import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  const { email } = req.body;

  if (method !== "POST") {
    return res.status(400).json({ resposta: "methodo errado" });
  }

  const request: dataProps = await client.query(
    q.Map(
      q.Paginate(q.Match(q.Index("responsavel"), [email])),
      q.Lambda((x) => q.Get(x))
    )
  );

  return res.status(200).json(request.data);
};

//função que cria um novo trabalho

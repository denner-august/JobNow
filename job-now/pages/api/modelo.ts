import type { NextApiRequest, NextApiResponse } from "next";
import { client, q } from "./faunaConfig";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  if (method !== "GET") {
    return res.status(400).json({ resposta: "methodo errado" });
  }

  const data: any = await client.query(
    q.Map(
      q.Paginate(q.Match("GetAllJobs"), { size: 5 }),
      q.Lambda((x) => q.Get(x))
    )
  );

  return res.json(data.data.map((item: any) => item.data));

  //testando o variaveis ambiente
};

// Pega os dados de um trabalho

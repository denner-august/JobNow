import type { NextApiRequest, NextApiResponse } from "next";
import { client, q } from "../faunaConfig";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  const { job_id } = req.query;

  if (method !== "POST") {
    return res.status(400).json({ resposta: "methodo errado" });
  }

  try {
    const data = await client.query(
      q.Get(q.Ref(q.Collection("jobs"), `${job_id}`))
    );

    return res.status(200).json({ resposta: data });
  } catch (error) {
    return res.status(200).json({ resposta: error });
  }
};

// Pega os dados de um trabalho

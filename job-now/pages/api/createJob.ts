import type { NextApiRequest, NextApiResponse } from "next";
import { client, q } from "./faunaConfig";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  const { data } = req.body;

  if (method !== "POST") {
    return res.status(400).json({ resposta: "methodo errado" });
  }

  const linguangens: any = data.Tecnologias.flatMap(
    (linguagens: any) => linguagens.linguagem
  );
  data.Tecnologias = linguangens;

  try {
    client.query(q.Create(q.Collection("jobs"), { data }));

    res.status(200).json("job criado");
  } catch (error) {
    res.status(400).json(error);
  }
};

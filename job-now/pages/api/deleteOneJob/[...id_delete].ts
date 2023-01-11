import type { NextApiRequest, NextApiResponse } from "next";
import { client, q } from "../faunaConfig";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  const { id_delete } = req.query;

  if (method !== "DELETE") {
    return res.status(400).json({ resposta: "methodo errado" });
  }

  try {
    client.query(q.Delete(q.Ref(q.Collection("jobs"), `${id_delete}`)));

    res.status(200).json({ resposta: `vaga ${id_delete} deletada` });
  } catch (error) {
    return res.status(400).json({ respsota: error });
  }
};

//função que deleta o trabalho expecifico de um usuario

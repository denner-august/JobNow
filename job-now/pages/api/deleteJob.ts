import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  if (method !== "DELETE") {
    return res.status(400).json({ resposta: "methodo errado" });
  }
};

//função que deleta o trabalho expecifico de um usuario

import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  if (method !== "POST") {
    return res.status(400).json({ resposta: "methodo errado" });
  }
};

//função que cria um novo trabalho

import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  if (method !== "GET") {
    return res.status(400).json({ resposta: "methodo errado" });
  }

  //função que altera um job especifico
};

// Pega os dados de um trabalho

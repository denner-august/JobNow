import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  if (method !== "PUT") {
    return res.status(400).json({ resposta: "methodo errado" });
  }

  //função que altera um job especifico
};

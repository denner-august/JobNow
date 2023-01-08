import faundb from "faunadb";
export const q = faundb.query;

export const client = new faundb.Client({
  secret: `${process.env.FAUNA_SECRET}`,
});

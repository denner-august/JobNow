import faundb from "faunadb";
export const q = faundb.query;

export const client = new faundb.Client({
  // secret: `${process.env.FAUNA_SECRET}`,
  secret: "fnAE5kB-a8ACT9OCDGhA-G3ulBWJp1JvVOE6tI17",
});

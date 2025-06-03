// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  id: number;
  name: string;
};

const booksDB = [
  { id: 1, name: "name1" },
  { id: 2, name: "lhlhl" },
  { id: 3, name: "name3" },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  if (req.method === "GET") {
    let books = booksDB;

    const term = req.query.term as string;

    if (term) {
      books = books.filter((book) => {
        return book.name.toLowerCase().includes(term.toLowerCase());
      });
    }

    res.status(200).json(books);
  }
}

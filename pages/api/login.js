// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import backend from "../../config";
import { login } from "../../routes";

export default async function handler (req, res)  {
  if (req.method == 'POST') {
    const data = await JSON.stringify(req.body);
    const response = await fetch(`${backend}${login}`, {
      method : 'POST',
      body: data,
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const jwt = await response.json()
      return res.status(200).send(jwt);
  }
}

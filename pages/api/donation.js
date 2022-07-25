import backend from "../../config";
import { register } from "../../routes";

export default async function handler (req, res)  {
  if (req.method == 'POST') {
    const data = await JSON.stringify(req.body);
    const response = await fetch(`${backend}${register}`, {
      method : 'POST',
      body: data,
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(response);
      return res.status(response.status).send(response.status);
  }
}
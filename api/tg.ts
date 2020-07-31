import { NowRequest, NowResponse } from '@vercel/node'
import fetch from 'node-fetch'

const url = `https://api.telegram.org/bot${process.env.TG_API_KEY}/sendMessage`

const chat_id = "-372756431"
export default async (req: NowRequest, res: NowResponse) => {
  const data = { chat_id, text: req.body}
  const r = await fetch(url, { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
  
  res.json({status: r.status})
}
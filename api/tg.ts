import { NowRequest, NowResponse } from '@vercel/node'
import fetch from 'node-fetch'

const url = `https://api.telegram.org/bot${process.env.TG_API_KEY}/sendMessage`

const chat_id = "-372756431"
export default async (req: NowRequest, res: NowResponse) => {
 const bodyObj = JSON.parse(req.body)
  const pretty =  JSON.stringify(bodyObj,null,2)
  const data = { parse_mode: 'MarkdownV2', chat_id, text: `\`\`\`json \n${pretty}\`\`\``}
  console.log(data)
  const r = await fetch(url, { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
  
  res.json({status: r.status})
}
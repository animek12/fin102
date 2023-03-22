import fetch from 'node-fetch'
let handler = async (m, { conn, text, command, args }) => {
if (!args[0]) throw `Teksnya?`
  let res = `https://api.lolhuman.xyz/api/dall-e?apikey=Fikrii&text=${text}`
conn.sendButton(m.chat, 'Nih Kak ', wm, await(await fetch(res)).buffer(), [['Makasih',`huuu`]],m)
}

handler.help = ['dalle','openaiimage']
handler.tags = ['tools','internet']
handler.command = /^(dalle)$/i

handler.premium = false
handler.limit = true

export default handler
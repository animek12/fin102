import fetch from 'node-fetch'
let handler = async (m, { text,  usedPrefix,  command }) => {
    if (!text) throw `Mau Nanya Apa???`
let zeltoria = await fetch(`https://api.itsrose.site/chatGPT/completions?prompt=${text}&apikey=6db1a278210ca11a593ef055`)
let hasil = await zeltoria.json()
 m.reply(`${hasil.message}`.trim())
    }  
handler.help = ['ai', 'openai']
handler.tags = ['internet','tools']
handler.command = /^(ai|yae|openai)$/i
export default handler
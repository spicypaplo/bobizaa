import { sticker } from '../lib/sticker.js'
let handler = async(m, { conn }) => {
if (!db.data.chats[m.chat].stickers && m.isGroup) throw 0

let nombre = '𝑯𝑬𝑵𝑹𝒀'
let nombre2 = '𝑴𝑶𝑺𝑻𝑨𝑭𝑨 𝑴𝑶𝑯𝑨𝑴𝑬𝑫' 
const s = [
'https://telegra.ph/file/784a05acc195cdb35ca29.jpg',
];  
 
let stiker = await sticker(null, s[Math.floor(Math.random() * s.length)], nombre, nombre2)
await delay(5 * 5000)
conn.sendFile(m.chat, stiker, null, { asSticker: true })
}
handler.customPrefix = /كسمك/i 
handler.command = new RegExp
handler.exp = 50
export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
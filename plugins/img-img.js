import { googleImage } from '@bochilteam/scraper'
var handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `*هــكـذا : ${usedPrefix}${command} غــوجـو ســاتورو*`
    const res = await googleImage(text)
    let image = res.getRandom()
    let link = image
    conn.sendFile(m.chat, link, 'google.jpg', `*『 الــصورة تــفـضل ! 』*\n*『 الــبـحث : ${text} 』*`,m)
    m.react('🖼️')
}
handler.help = ['gimage <query>', 'image <query>']
handler.tags = ['internet']
handler.command = ['صوره', 'صورة']

export default handler
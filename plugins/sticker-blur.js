import jimp from 'jimp'

let handler = async (m, { conn, text }) => {
  let image = m.message?.imageMessage
    ? await m.download()
      : /image/.test(m.quoted?.mediaType)
    ? await m.quoted.download()
      : m.mentionedJid?.[0]
    ? await conn.profilePictureUrl(m.mentionedJid[0], 'image')
      : await conn.profilePictureUrl(m.quoted?.sender || m.sender, 'image')
  if (!image) throw `*لــم اســتـطع تــحويــلها !*`
  let level = text || '25', img = await jimp.read(image)
  img.blur(isNaN(level) ? 25 : parseInt(level))
  img.getBuffer('image/jpeg', (err, buffer) => {
    if (err) throw err?.message || `*لــم اســتـطع تــحويــلها !*`
    m.reply(buffer)
  })
}
handler.command = /^(دغوشة|دغوشه|تشويش|بلور|تغبيش)$/i

export default handler
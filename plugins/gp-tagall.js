let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    const userChar = [
    "🫧",
    "🗿",
    "🔥",
    "⚡",
    "🌩️",
    "💧",
    "💧",
    "🔰",
      ]
const emoji =
        userChar[Math.floor(Math.random() * userChar.length)];
  const e = [
    "🫧",
    "🗿",
    "🔥",
    "⚡",
    "🌩️",
    "💧",
    "💧",
    "🔰",
      ]
  const emoji2 =
        e[Math.floor(Math.random() * e.length)]
  m.react(emoji)
    m.reply(`*⟐─── ◟ ─── 🥀 ─── ◝ ───⟐*\n*┆ ⚘ مــنـشن جــمـاعــي ⚘ ┆*\n*⟐─── ◟ ─── 🥀 ─── ◝ ───⟐*\n\n*┆ الــجــروب ⦂ ${groupMetadata.subject}┆*\n*┆ عـــدد الأعــضـاء ⦂ ${participants.length}┆*${text ? `\n*┆ الــرســالــة ⦂ ${text}┆*\n` : ''}\n\n*⟐─── ◟ ─── 🥀 ─── ◝ ───⟐*\n\n*┆ ⚘ الأعــــــضـــــاء ⚘ ┆*\n\n` + users.map(v => '*『 ┆ @' + v.replace(/@.+/, ' ┆ 』*')).join `\n`, null, {
        mentions: users
    })
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['منشن', 'tagall']
handler.admin = true
handler.group = true

export default handler

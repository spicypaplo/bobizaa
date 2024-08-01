
let handler = async (m, { conn, args, groupMetadata}) => {
        let who
        if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
        else who = m.chat
        if (!who) throw `*مــنشـن الـشـخص !*`
        if (!(who in global.db.data.users)) throw `*الــشــخص لــيس مــسـجل فــي بــيانــاتي !*`
       let warn = global.db.data.users[who].warn
       if (warn > 0) {
         global.db.data.users[who].warn -= 1
m.reply(`
*⦊─── ── ─ ⚡ ─ ── ───⦉*
*┋ -1 مــن الأنــذارات ┋*
*┋ عــدد الأنــذارات الــحالــي *${warn - 1} ┋*
*⦊─── ── ─ ⚡ ─ ── ───⦉*`)
         
m.reply(`*⦊─── ── ─ ⚡ ─ ── ───⦉*
*الأن لــديــك ${warn - 1} مــن الأنــذارات !*
*⦊─── ── ─ ⚡ ─ ── ───⦉*`, who)
         } else if (warn == 0) {
            m.reply('*الــشــخص لا يــمـلك اي انــذار !*')
        }

}
handler.help = ['delwarn @user']
handler.tags = ['group']
handler.command = ['حانذار'] 
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler

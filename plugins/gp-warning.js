
let war = global.maxwarn
let handler = async (m, { conn, text, args, groupMetadata, usedPrefix, command }) => {      
        let who
        if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
        else who = m.chat
        if (!who) throw `*الــمنــشن ؟*`
        if (!(who in global.db.data.users)) throw `*الــشــخص لــيس مــسـجل فــي بــيانــاتي !*`
        let name = conn.getName(m.sender)
        let warn = global.db.data.users[who].warn
        if (warn < war) {
            global.db.data.users[who].warn += 1
            m.reply(`
*⟐─── ◟ ─── 🥀 ─── ◝ ───⟐*
*┋ ⚠️ ┋ انــذار ┋ ⚠️ ┋*

*┋ 🥷 ┋ الــمــشرف ┋* ${name}
*┋ 🙋‍♂️ ┋ الــشــخص ┋* @${who.split`@`[0]}
*┋ ⛔ ┋ الأنــذارات ┋* ${warn + 1}/${war}
*┋ 🏮 ┋ الــســبب ┋* ${text}
*⟐─── ◟ ─── 🥀 ─── ◝ ───⟐*`, null, { mentions: [who] }) 
            m.reply(`
*⟐─── ◟ ─── 🥀 ─── ◝ ───⟐*
*┋ ⚠️ ┋ انــذار ┋ ⚠️ ┋*

*┋ ⛔ ┋ الأنــذارات ┋* ${warn + 1}/${war} 
*┋ ❗ ┋ ســيــتم طــردك مــن الــجروب اذا حــصلت عــلى ${war} مــن الأنــذارات !*
*⟐─── ◟ ─── 🥀 ─── ◝ ───⟐*`, who)
        } else if (warn == war) {
            global.db.data.users[who].warn = 0
            m.reply(`*┋❗ لــقد تــجاوز الــحد الأقــصى مــن الأنــذارات ❗┋*`)
            await time(3000)
            await conn.groupParticipantsUpdate(m.chat, [who], 'remove')
            m.reply(`*لــقد تــجاوزت الــحد الأقــصى مــن الأنــذارات فــي جــروب ┋ ${groupMetadata.subject} ┋*`, who)
        }
}
handler.help = ['warn @user']
handler.tags = ['group']
handler.command = ['انذار'] 
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler

const time = async (ms) => {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

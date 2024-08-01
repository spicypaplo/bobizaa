   import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import { canLevelUp, xpRange } from '../lib/levelling.js'
import fetch from 'node-fetch'
import fs from 'fs'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
import { promises } from 'fs'
import { join } from 'path'
const time = moment.tz('Egypt').format('HH')
let wib = moment.tz('Egypt').format('HH:mm:ss')
//import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, command}) => {
    let d = new Date(new Date + 3600000)
    let locale = 'ar'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
let pp = './Gojo.jpeg'
let user = global.db.data.users[who]
let { name, exp, diamond, lastclaim, registered, regTime, age, level, role, warn } = global.db.data.users[who]
let { min, xp, max } = xpRange(user.level, global.multiplier)
let username = conn.getName(who)
let math = max - xp
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850) 
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = ` *⟐─── ◟ ─── 🥀 ─── ◝ ───⟐*
*◹ ⏱️ ◺ الـــوقـت  _┇ ${wib} ┇_*

*◹ 📆 ◺ الـــتـاريــخ  _┇ ${date} ┇_*
*⟐─── ◟ ─── 🥀 ─── ◝ ───⟐*
*⦅ ╏🏮╏ الــجــروب ⦆*
*⟐─── ── 🏮 ── ───⟐*

*╏🏮❮┇ _.ضيف_*
*╏🏮❮┇ _.طرد_*
*╏🏮❮┇ _.ترقية_*
*╏🏮❮┇ _.اعفاء_*
*╏🏮❮┇ _.انذار_*
*╏🏮❮┇ _.الانذارات_*
*╏🏮❮┇ _.حذف_انذار_*
*╏🏮❮┇ _.حذف_*
*╏🏮❮┇ _.منشن_*
*╏🏮❮┇ _.مخفي_*
*╏🏮❮┇ _.المشرفين_*
*╏🏮❮┇ _.لمنشن_*
*╏🏮❮┇ _.بروفايل_*
*╏🏮❮┇ _.الجروب_*
*╏🏮❮┇ _.دعوه_*
*╏🏮❮┇ _.تغيير_اللينك_*
*╏🏮❮┇ _.لفل_*
*╏🏮❮┇ _.الترحيب_*
*╏🏮❮┇ _.وداع_*
*╏🏮❮┇ _.ايات_*
*╏🏮❮┇ _.بريم_*
*╏🏮❮┇ _.جروب قفل / فتح_*
*╏🏮❮┇ _اوقف / فعل_*
*⟐─── ◟ ─── 🥀 ─── ◝ ───⟐*
*⦅ ╏🕹️╏ الألــعــاب ⦆*
*⟐─── ── 🕹️ ── ───⟐*

*╏🕹️❮┇ _.اكس او_*
*╏🕹️❮┇ _.كت_*
*╏🕹️❮┇ _.كتت_*
*╏🕹️❮┇ _.دين_*
*╏🕹️❮┇ _.اسألني_*
*╏🕹️❮┇ _.صراحه_*
*╏🕹️❮┇ _.لو_*
*╏🕹️❮┇ _.هل_*
*╏🕹️❮┇ _.ورع_*
*╏🕹️❮┇ _.جميل_*
*╏🕹️❮┇ _.خروف_*
*╏🕹️❮┇ _.شخصية_*
*╏🕹️❮┇ _.بوستات_*
*╏🕹️❮┇ _.ترجم_*
*╏🕹️❮┇ _.زواج_*
*╏🕹️❮┇ _.تطقيم_*
*╏🕹️❮┇ _.انطق_*
*⟐─── ◟ ─── 🥀 ─── ◝ ───⟐*
*⦅ ╏⏳╏ الــتــنـزيل ⦆*
*⟐─── ── ⏳ ── ───⟐*

*╏⏳❮┇ _.فيسبوك_*
*╏⏳❮┇ _.درايف_*
*╏⏳❮┇ _.ميديافاير_*
*╏⏳❮┇ _.تشغيل_*
*╏⏳❮┇ _.تيك_*
*╏⏳❮┇ _.تويتر_*
*╏⏳❮┇ _.اغنية_*
*╏⏳❮┇ _.بحث_*
*╏⏳❮┇ _.فيديو_*
*╏⏳❮┇ _.صوره_*
*⟐─── ◟ ─── 🥀 ─── ◝ ───⟐*
*⦅ ╏♻️╏ الــتــحـويـل ⦆*
*⟐─── ── ♻️ ── ───⟐*

*╏♻️❮┇ _.ملصق_*
*╏♻️❮┇ _.سرقة_*
*╏♻️❮┇ _.لفيديو_*
*╏♻️❮┇ _.لصورة_*
*╏♻️❮┇ _.ارسم_*
*╏♻️❮┇ _.مكس_*
*╏♻️❮┇ _.لجواهر_*
*╏♻️❮┇ _.ستك_*
*╏♻️❮┇ _.لرابط_*
*⟐─── ◟ ─── 🥀 ─── ◝ ───⟐*
*⦅ ╏🔊╏ الأصــوات ⦆*
*⟐─── ── 🔊 ── ───⟐*

*╏🔊❮┇ _.عميق_*
*╏🔊❮┇ _.منفوخ_*
*╏🔊❮┇ _.تخين_*
*╏🔊❮┇ _.صاخب_*
*╏🔊❮┇ _.سريع_*
*╏🔊❮┇ _.تخينن_*
*╏🔊❮┇ _.رفيع_*
*╏🔊❮┇ _.روبوت_*
*╏🔊❮┇ _.بطيء_*
*╏🔊❮┇ _.ناعم_*
*╏🔊❮┇ _.سنجاب_*
*⟐─── ◟ ─── 🥀 ─── ◝ ───⟐*
*⦅ ╏👨🏻‍💻╏ الــمــطـور ⦆*
*⟐─── ── 👨🏻‍💻 ── ───⟐*

*╏👨🏻‍💻❮┇ _.بــريــمـيام_*
*╏👨🏻‍💻❮┇ _.بــريــمـيامـم_*
*╏👨🏻‍💻❮┇ _.بــان_*
*╏👨🏻‍💻❮┇ _.فــك_*
*╏👨🏻‍💻❮┇ _.اطــفـاء_*
*╏👨🏻‍💻❮┇ _.تــشـغــيل_*
*╏👨🏻‍💻❮┇ _.انــضـم_*
*╏👨🏻‍💻❮┇ _.الــمـبـنــديــن_*
*╏👨🏻‍💻❮┇ _.الــمـدة_*
*╏👨🏻‍💻❮┇ _.تــفـقد-الــمدة_*
*╏👨🏻‍💻❮┇ _.حــذف-الــمدة_*
*╏👨🏻‍💻❮┇ _.اعـــادة_*
*╏👨🏻‍💻❮┇ _.اعــادةتــشـغـيل_*
*╏👨🏻‍💻❮┇ _.نــقـاط_*
*╏👨🏻‍💻❮┇ _.جــواهــر_*
*⟐─── ◟ ─── 🥀 ─── ◝ ───⟐*
`
    conn.sendFile(m.chat, pp, 'perfil.jpg', str, m, false, { mentions: [who] })
m.react('✨')
}
handler.help = ['main']
handler.tags = ['group']
handler.command = ['menu', 'اوامر', 'الاوامر', 'help'] 

export default handler
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

    function ucapan() {
      const time = moment.tz('Egypt').format('HH')
      let res = "بداية يوم سعيده ☀️"
      if (time >= 4) {
        res = "صباح الخير 🌄"
      }
      if (time >= 10) {
        res = "مساء الخير ☀️"
      }
      if (time >= 15) {
        res = "مساء الخير 🌇"
      }
      if (time >= 18) {
        res = "مساء الخير 🌙"
      }
      return res
    }

const handler = async (m, { conn }) => {
  let txt = '';
try {    
  const groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats);
  const totalGroups = groups.length;
  for (let i = 0; i < groups.length; i++) {
    const [jid, chat] = groups[i];
    const groupMetadata = ((conn.chats[jid] || {}).metadata || (await conn.groupMetadata(jid).catch((_) => null))) || {};
    const participants = groupMetadata.participants || [];
    const bot = participants.find((u) => conn.decodeJid(u.id) === conn.user.jid) || {};
    const isBotAdmin = bot?.admin || false;
    const isParticipant = participants.some((u) => conn.decodeJid(u.id) === conn.user.jid);
    const participantStatus = isParticipant ? '👤 مشارك' : '❌ غــيـر مشارك';
    const totalParticipants = participants.length;
    txt += `*❒ جــروب ${i + 1}*
    *❍↜ الأســم:* ${await conn.getName(jid)}
    *❍↜ الأيدي:* ${jid}
    *❍↜ الأشــراف:* ${isBotAdmin ? '✔ يب' : '❌ لا'}
    *❍↜ الــحـاله:* ${participantStatus}
    *❍↜ عــدد الأعــضـاء:* ${totalParticipants}
    *❍↜ الــرابـط:* ${isBotAdmin ? `https://chat.whatsapp.com/${await conn.groupInviteCode(jid) || 'ايــرور'}` : '*مــش مــشرف*'}\n\n`;
  }
  m.reply(`*⟐─── ◟ ─── 🥀 ─── ◝ ───⟐*\n*❒ الــجروبـات الــذي يـوجد الــبـوت داخــلـها*\n*❒ عــدد الـجـروبـات:* ${totalGroups}\n*⟐─── ◟ ─── 🥀 ─── ◝ ───⟐*\n\n${txt}`.trim());
} catch {
  const groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats);
  const totalGroups = groups.length;
  for (let i = 0; i < groups.length; i++) {
    const [jid, chat] = groups[i];
    const groupMetadata = ((conn.chats[jid] || {}).metadata || (await conn.groupMetadata(jid).catch((_) => null))) || {};
    const participants = groupMetadata.participants || [];
    const bot = participants.find((u) => conn.decodeJid(u.id) === conn.user.jid) || {};
    const isBotAdmin = bot?.admin || false;
    const isParticipant = participants.some((u) => conn.decodeJid(u.id) === conn.user.jid);
    const participantStatus = isParticipant ? '👤 مشارك' : '❌ غــيـر مشارك';
    const totalParticipants = participants.length;    
    txt += `*❒ جــروب ${i + 1}*
    *❍↜ الأســم:* ${await conn.getName(jid)}
    *❍↜ الأيدي:* ${jid}
    *❍↜ الأشــراف:* ${isBotAdmin ? '✔ يب' : '❌ لا'}
    *❍↜ الــحـاله:* ${participantStatus}
    *❍↜ عــدد الأعــضـاء:* ${totalParticipants}
    *❍↜ الــرابـط:* ${isBotAdmin ? `https://chat.whatsapp.com/${await conn.groupInviteCode(jid) || 'ايــرور'}` : '*مــش مــشرف*'}\n\n`;
  }
  m.reply(`*⟐─── ◟ ─── 🥀 ─── ◝ ───⟐*\n*الــجروبـات الــذي يـوجد الــبـوت داخــلـها 🤖*\n*❒عــدد الـجـروبـات:* ${totalGroups}\n*⟐─── ◟ ─── 🥀 ─── ◝ ───⟐*\n\n${txt}`.trim());
 }    
};
handler.help = ['groups', 'grouplist'];
handler.tags = ['info'];
handler.command = /^(الجروبات)$/i;
handler.rowner = true;
handler.private = true
export default handler;
const config = require('../config')
const { cmd, commands } = require('../command')
cmd({
    pattern: "add",
    react: "✅",
    desc: "Add that person in group",
    fromMe: true,
    category: "group",
    filename: __filename,
    use: '<number>',
},
 async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants,  isItzcp, groupAdmins, isBotAdmins, isAdmins, reply}) => {
if(!isOwner  ||  !isAdmins)return;
try {

if (!m.isGroup) return reply(mg.onlygroup);
if (!isBotAdmins) return reply(mg.needbotadmins);
    if (!q) return reply(mg.nouserforadd);

    let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
    await conn.groupParticipantsUpdate(m.chat, [users], "add");
} catch (e) {
reply('*successful💗*')
l(e)
}
})

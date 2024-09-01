const config = require('../config')
const { cmd, commands } = require('../command')
cmd({
    pattern: "hidetag",
    react: "📢",
    alias: ["htag"],
    desc: "Tags everyperson of group without mentioning their numbers",
    category: "group",
    filename: __filename,
    use: '<text>',
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants,  isItzcp, groupAdmins, isBotAdmins, isAdmins, reply}) => {
if(!isOwner  ||  !isAdmins)return;
try { 
if (!m.isGroup) return reply(mg.onlygroup);

if (!isBotAdmins) return reply(mg.needbotadmins);
    conn.sendMessage(m.chat, {
        text: q ? text : "",
        mentions: participants.map((a) => a.id),
    }, {
        quoted: mek 
    });
} catch (e) {
reply('*Error !!*')
l(e)
}
})

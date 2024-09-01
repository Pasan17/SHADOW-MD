const config = require('../config')
const { cmd, commands } = require('../command')

cmd({
    pattern: "promote",
    react: "📍",
    desc: "Provides admin role to replied/quoted user",
    category: "group",
    filename: __filename,
    use: '<quote|reply|number>',
},
      async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants,  isItzcp, groupAdmins, isBotAdmins, isAdmins, reply}) => {
if(!isOwner ||  !isAdmins )return;
         try {     if (!m.isGroup) return reply(mg.onlygroup);
    if (!isBotAdmins) return reply(mg.needbotadmins);

        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? citel.quoted.sender : q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        if (!users) return reply(mg.nouserforpromote);
        await conn.groupParticipantsUpdate(m.chat, [users], "promote");
} catch (e) {
reply('✅')
l(e)
}
})

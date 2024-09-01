const config = require('../config')
const { cmd, commands } = require('../command')
cmd({
    pattern: "join",
    desc: "joins group by link",
    category: "owner",
    react:"🔗",
    use: '<group link.>',
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants,  isItzcp, groupAdmins, isBotAdmins, isAdmins, reply}) => {
if (!isOwner) return;    
try{  
if (!q){ 
if(m.quoted && m.quoted.msg) {
q = m.quoted.msg
}else{
const mass = await conn.sendMessage(m.chat, { text: mg.wagrouplinknotfound }, { quoted: mek });
return await conn.sendMessage(m.chat, { react: { text: "⁉️", key: mass.key } });

}
}
    if (!q.split(" ")[0] && !q.split(" ")[0].includes("whatsapp.com"))
       reply(mg.invalidwagrouplink);
    let result = q.split(" ")[0].split("https://chat.whatsapp.com/")[1];
    await conn.groupAcceptInvite(result)
        .then((res) => reply(mg.groupjoinsuccess))
        .catch((err) => reply(mg.groupjoinerror));
} catch(e) {
console.log(e);
reply('Error!!')
} 
})       

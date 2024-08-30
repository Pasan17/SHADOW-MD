const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "menu the bot",
    category: "menu",
    react: "🗃️",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*✦ SHADOW MD MENU LIST ✦*

> *╭──────────⚬➨*

> *│👨🏻‍💻 COMMANDS LIST*

> *│   ───────*

    ❮𝗛𝗢𝗪 𝘁𝗼 𝗗𝗢𝗪𝗡𝗟𝗢𝗗❯     

         *► .list*

         *▻Desc 📩* *-----==========-----*

*❮► song DOWNLOAD*     

*❮►video DOWNLOD*               

*-----===========-----* 

*❮►FB DOWNLOAD*  

*❮►Tik Tok Download*      

*❮►twitter Download* 

*-----===========-----*

*❮►mediafire Download*

*❮►googe drive Download* 

 

𝗛𝗢𝗪 𝗧𝗢 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 🗃️

*❯-ʜᴏᴡ ᴛᴏ ʙᴏᴛ ꜱʏꜱᴛᴇᴍ*

*❯-ʙᴏᴛ ᴘɪɴɢ ᴄʜᴀᴄᴋ*

*❯-ᴍᴀɪɴ ᴏᴡɴᴇʀ ᴄʜᴇᴄᴋ*

*❯-ʀᴇᴘᴏ ʟɪɴᴋ*

   

 *❪Type..❫*

 *❮❮ .list*

> ►.list all how to download command 👑👨🏻‍💻

> *➣ ᴏᴡɴᴇʀ : ꜱʜᴀᴅᴏᴡ-ᴍᴅ*
*╰───────────⚬➨*
`
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/4c8ad037112cb4836b863.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from, { react: { text: '🗃️', key: mek.key }})
}catch(e){
console.log(e)
reply(`${e}`)
}
})

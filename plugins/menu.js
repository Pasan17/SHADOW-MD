const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "menu the bot",
    category: "menu",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*✦ SHADOW MD MENU LIST ✦*
> *╭──────────⚬➨*
> *│👨🏻‍💻 SEARCH COMMANDS*
> *│   ───────*
    ❮𝗛𝗢𝗪 𝘁𝗼 𝗗𝗢𝗪𝗡𝗟𝗢𝗗❯     
         *► .search*
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

 *❮❮ .seacrh*

> ►.search all how to download command 👑👨🏻‍💻

> *➣ ᴏᴡɴᴇʀ : ꜱʜᴀᴅᴏᴡ-ᴍᴅ*
*╰───────────⚬➨*
`
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/dbd3d53c674a79cbbd294.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})

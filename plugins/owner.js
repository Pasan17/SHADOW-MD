const {cmd , commands} = require('../command')

cmd({
    pattern: "owner",
    desc: "owner the bot",
    category: "main",
    react: "👨‍💻",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*❮❮brother 🫱🏻‍🫲🏻😻🤍*

🔐❮❮𝗦𝗛𝗔𝗗𝗢𝗪 𝗠𝗗 𝗠𝗔𝗜𝗡 𝗢𝗪𝗡𝗘𝗥 🚀

*❮ɪ ᴀᴍ - 𝚂𝙷𝙰𝙳𝙾𝚆 𝙼𝙳 👾🖤*

*❮❮ᴍʏ ʀᴇᴀʟ ɴᴀᴍᴇ - 𝙻𝙰𝙺𝙳𝙷𝙰𝙽 𝙳𝙰𝙼𝙰𝚈𝙰𝙽𝚃𝙷𝙰*🤴🏻🪄

*❮❮ᴀɢᴇ - 999+ 😋🔥*

*❮❮ᴍᴏʀᴇ ᴅɪᴛᴇʟꜱ -* https://wa.me/+94767910958?text=_Hey÷ꜱʜᴀᴅᴏᴡ_ᴍᴅ_ʏᴏᴜ_ᴅɪᴛᴇʟꜱ_👨🏻‍💻👑📍

> *➣ ᴏᴡɴᴇʀ : ꜱʜᴀᴅᴏᴡ-ᴍᴅ*
`
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/7eba8a7c5f0d4d59a6419.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from, {
            audio: { url: 'https://github.com/vipshadowmd/owner/raw/main/Chikibom' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
}catch(e){
console.log(e)
reply(`${e}`)
}
})

const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    react: "👋",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let des = `⚡𝗛𝗘𝗟𝗟𝗢𝗪 ┇ 𝗪𝗘𝗟𝗖𝗢𝗠𝗘 ⚡

*👋🏻 Nice to meat you*

*►𝚑𝚢ｉａｍ ＡＬＩＶＥ ｏｎｗ👾*

*🔖We welcome the new arrivals of the digital world_►*

*❯ Welcome Shado md whats app bot you can download video songs and various videos through this bot. Shado md owner is Lakshan Damayantha.. It also gives you the ability to solve the new revolution in technology and technology problems and there is great potential here. This technology is also related to AI.*
> *➣ ᴏᴡɴᴇʀ : ꜱʜᴀᴅᴏᴡ-ᴍᴅ*
> *➣ ᴜᴘ ᴛɪᴍᴇ : 2 ʜᴏᴜʀꜱ 1 ᴍɪɴɪᴛꜱ*
> *➣ ʀᴀᴍ ᴜꜱᴇɢᴇ : 167/1024ᴍʙ*
> *➣ ᴠᴇʀꜱɪᴏɴ : 2.0.1*
*┇Always smile and life will be beautiful💗*
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱʜᴀᴅᴏᴡ-ᴍᴅ*✨`
return await conn.sendMessage(from,{image: {url: `https://telegra.ph/file/357b75726739a8b9c68de.jpg`},caption: des},{quoted: mek})
await conn.sendMessage(from, {
            audio: { url: 'audiourl ekh dpm methanata' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
}catch(e){
console.log(e)
reply(`${e}`)
}
})

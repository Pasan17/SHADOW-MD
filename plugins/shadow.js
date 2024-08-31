const {cmd , commands} = require('../command')

cmd({
    pattern: "shadow",
    desc: "shadow the bot",
    category: "main",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `❮❮ MY SHADOW PHOTOS 👾💗 ❯❯`
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/83a24d93158b1e6adcf37.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/79ce5b9162f89de69a134.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/0995554ab05f293e0400b.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/3aa139801daddb949fda6.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from, {
            audio: { url: 'https://github.com/Sithuwa/SITHUWA-MD/raw/main/media/Gn.mp3' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
}catch(e){
console.log(e)
reply(`${e}`)
}
})

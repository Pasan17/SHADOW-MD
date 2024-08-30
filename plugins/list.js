const {cmd , commands} = require('../command')

cmd({
    pattern: "list",
    desc: "list the bot",
    category: "main",
    react: "📁"
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*❯❯ SHADOW MD COMMAND LIST ❮❮*
> *╭──────────⚬➨*
> *│👨🏻‍💻 DOWNLOAD  COMMANDS*

*🗃️Command : song*
*💨Desc : song downlod*
*💆🏻‍♂️use : .song*

*🗃️Command : video*
*💨Desc : video download*
*💆🏻‍♂️use : .video*

*🗃️Command : Facebook*
*💨Decs : Fb download*
*💆🏻‍♂️use : .fb*

*🗃️Command : Tik Tok*
*💨Decs : tt download*
*💆🏻‍♂️use : .tt*

*🗃️Command : Twitter*
*💨Decs : Twitter download*
*💆🏻‍♂️use : .twitter*

*🗃️Command : mediafire*
*💨Decs : mediafire download*
*💆🏻‍♂️use : .mediafire*

*🗃️Command : Google drive*
*💨Decs : google drive download*
*💆🏻‍♂️use : .gdrive*

*🗃️Command : Ping*
*💨Decs : ping check*
*💆🏻‍♂️use : .ping*

*🗃️Command : System*
*💨Decs : system check*
*💆🏻‍♂️use .system*

*🗃️Command : Repo*
*💨Decs : repo link*
*💆🏻‍♂️use : .repo*

*🗃️Command : owner*
*💨Decs : main owner ditels*
*💆🏻‍♂️use : .owner*

*🗃️Command : shadow*
*💨Desc : my shadow photos*
*💆🏻‍♂️use : .shadow*

*🗃️Command : settings*
*💨Desc : how to settings edit bot*
*💆🏻‍♂️use : .settings*
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱʜᴀᴅᴏᴡ-ᴍᴅ*
*╰───────────⚬➨*

`
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/4def5b81e488158a9965d.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from, { react: { text: '📁', key: mek.key }})
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

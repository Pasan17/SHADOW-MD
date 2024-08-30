const {cmd , commands} = require('../command')

cmd({
    pattern: "apk",
    desc: "apk the bot",
    category: "main",
    react: "✅",
    filename: __filename
},
async (conn, m, mek, { from, q, reply }) => {
try{
await conn.sendMessage(from, { react: { text: '📥', key: mek.key }})
if(!q) return await conn.sendMessage(from , { text: '*Need apk link...*' }, { quoted: mek } ) 
const data = await apkdl.download(q)
let sendapk = await conn.sendMessage(from , { document : { url : data.dllink  } , mimetype : 'application/vnd.android.package-archive' , fileName : data.name + '.' + 'apk',caption: '*ꜱʜᴀᴅᴏᴡ ᴍᴅ ʙᴏᴛ ᴡᴀᴛꜱ ᴀᴘᴘ*' } , { quoted: mek })
await conn.sendMessage(from, { react: { text: '📁', key: sendapk.key }})
await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
} catch (e) {
    reply('*ERROR !!*')
  l(e)
}
})

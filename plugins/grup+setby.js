const config = require('../config')
const { cmd, commands } = require('../command')
cmd({
    pattern: "setgoodbye",
    desc: "Set the goodbye message for the group.",
    category: "group",
    react: "😪",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!isGroup) return reply('This command can only be used in a group.')
        if (!isBotAdmins) return reply('Bot must be an admin to use this command.')
        if (!isAdmins) return reply('You must be an admin to use this command.')

        const goodbye = q
        if (!goodbye) return reply('𝗚𝗼𝗼𝗱 𝗯𝘆𝗲 𝗯𝗿𝗼 𝗶 𝗺𝗶𝘀 𝘆𝗼𝘂 𝗽𝗹𝗲𝘀𝗲 𝗰𝗼𝗺𝗲 𝗯𝗮𝗰𝗸 😪💗')

        await conn.sendMessage(from, { image: { url: config.ALIVE_IMG }, caption: goodbye })
        await reply('Goodbye message has been set.')
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})

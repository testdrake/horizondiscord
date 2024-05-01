const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: `📨・Upvote the Bot`,
        desc: `**You can upvote the bot on the following platforms:**
- [botlist.me](https://botlist.me/bots/1217203597603897535/vote)
- [infinitybots.gg](https://infinitybots.gg/bot/1217203597603897535/vote)
- [discordlist.gg](https://discordlist.gg/bot/1217203597603897535/vote)
- [discordbotlist.com](https://discordbotlist.com/bots/horizon-8253/upvote)
- [bhlist.co.in](https://bhlist.co.in/bots/1217203597603897535/vote)
- [topbotlist.xyz](https://topbotlist.xyz/bot/1217203597603897535/vote)`,
        thumbnail: client.user.avatarURL({ dynamic: true, size: 1024 }),
        type: 'editreply'
    }, interaction)
}
 

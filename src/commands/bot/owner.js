const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: `📘・Owner information`,
        desc: `____________________________`,
        thumbnail: client.user.avatarURL({ dynamic: true, size: 1024 }),
        fields: [{
            name: "👑┆Owner name",
            value: `ĦØŘƗŽØŇ`,
            inline: true,
        },
        {
            name: "🏷┆Discord tag",
            value: `@sheluvs.drake#7829`,
            inline: true,
        },
        {
            name: "🏢┆Organization",
            value: `Horizon`,
            inline: true,
        },
        {
            name: "🌐┆Website",
            value: `[Invite Link](https://discord.gg/h8dY8SF7RX)`,
            inline: true,
        }],
        type: 'editreply'
    }, interaction)
}

 

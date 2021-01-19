  
const Discord = require('discord.js');

const config = require('../../config.js')

module.exports = {
    config: {
        name: 'invite',
        description: 'Invite the bot',
        aliases: [""],
        usage: 'invite',
        accessableby: "",
    },
    run: async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle("**INVITE ME**")
    .addFeild("Invite Me", `[Click Me](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot)`, true)
    .addFeild("Support Server", `[Click Me](config.support)`, true)
    .addFeild("Owner", config.owner, true)
    .addFeild("Developer", 'ЄXƬ || ᴳᵒᵈl๏ภel𝕪#2099', true)
    .setColor("RANDOM");
    return message.channel.send(embed)
    }
}


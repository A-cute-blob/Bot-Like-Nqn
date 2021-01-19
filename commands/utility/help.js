module.exports = {
    config: {
        name: "help",
        aliases: ["h"],
        usage: "[command name] (optional)",
        description: "Displays all commands that the bot has.",
        accessableby: ""
    },
    run: async (client, message, args) => {
    const config = require('../../config.js')
    const Support = config.support
    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setThumbnail(client.user.displayAvatarURL({ format: "png" }))
    .setTitle(`${client.user.username} Help!`)
    .setDescription("Type The Following Command For A Specific Command Information -\n**${Prefix}Help <Command Name>**\n\n**🎶 Emoji**\n`upload_emote`,`emoji`\n\n**🔮 Utility**\n`help`,`invite`, `ping`\n\n**🕹 Config**\n`setprefix`\n\nUseful Links:\nSupport Server - [Click Me](${Support})\nBot Link - [Click Me](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8)")
    .setFooter(`Requested By ${message.author.username}`)
    .setTimestamp();
    if(!args[0]) return message.channel.send(Embed);
     let command = client.commands.get(args[0].toLowerCase()) || client.commands.get(client.aliases.get(args[0].toLowerCase()));
    
    if (!command) return message.channel.send(`No Command Found - ${args[0].charAt(0).toUpperCase() + args[0].slice(1)}`);
    
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setThumbnail(client.user.displayAvatarURL({ format: "png" }))
    .setTitle(`Command Information!`)
    .addField(`Name`, command.name.charAt(0).toUpperCase() + command.name.slice(1), true)
    .addField(`Permission`, command.accessableby || "everyone can use the command", true)
    .addField(`Aliases`, command.aliases ? command.aliases.join(", ") : "No Aliases", true)
    .addField(`Usage`, command.usage, true)
    .addField(`Description`, command.description)
    .setFooter(`Requested By ${message.author.username}`)
    .setTimestamp();
    
    return message.channel.send(embed);
    }
    }

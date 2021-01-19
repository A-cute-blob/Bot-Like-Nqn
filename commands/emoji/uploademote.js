const { parse } = require("twemoji-parser");
const Discord = require('discord.js');

module.exports = {
    config: {
        name: 'upload_emote',
        description: 'upload a emote',
        aliases: ["alias_search"],
        usage: 'upload_emote <emoji or link>',
        accessableby: "MANAGE_EMOJIS",
    },
    run: async (client, message, args) => {

        if (!message.member.hasPermission(`MANAGE_EMOJIS`)) {
            return message.channel.send(`:warning: You don't have the permissions to use this command `)
        }
           const emoji = args[0];
        if (!emoji) return message.channel.send(`Please Give Me A Emoji!`);

        let customemoji = Discord.Util.parseEmoji(emoji);
        if (customemoji.id) {
            const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${customemoji.animated ? "gif" : "png"
                }`;
            const name = args.slice(1).join(" ");
            
        
 try {
                const Added = new MessageEmbed()
                .setColor("RANDOM")
                .setTitle(`:white_Check_mark: Emoji Added`)
                .setDescription(
                `:white_check_mark: Emoji Has Been Added! | Name : ${name || `${customemoji.name}`} | Preview : [Click Me](${Link})`
                    );
                await message.guild.emojis.create(
                    `${Link}`,
                    `${name || `${customemoji.name}`}`
                )
                return message.channel.send(Added)
            } catch (err) {
                console.log(err)
                return message.channel.send(`${client.emotes.error} An error has occured!\n\n**Possible Reasons:**\n\`\`\`- This server has reached the emojis limit\n- The bot doesn't have permissions.\n- The emojis size is too big.\`\`\``)
           
            } 
             } else {
                  let CheckEmoji = parse(emoji, { assetType: "png" });
            if (!CheckEmoji[0])
                return message.channel.send(`**Please Give Me A Valid Emoji!**`);
            message.channel.send(
                ` **You Can Use Normal Emoji Without Adding In Server!**`
            );
        }

    }
}
   

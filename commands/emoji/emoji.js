
module.exports = {
    config: {
        name: 'emoji',
        description: 'check all the emotes in the guild',
        aliases: ["emoji_list"],
        usage: 'emoji_list',
        accessableby: "SEND_MESSAGES",
    },
    run: async (client, message, args) => {
            if (!message.guild.emojis.cache.size) return message.channel.send(`No Emojis!`);

        let Animated = await message.guild.emojis.cache.filter(emoji => emoji.animated).array();
        let Normal = await message.guild.emojis.cache.filter(emoji => !emoji.animated).array();
        let All = [];

        for (let an of Animated) {
          if (!Animated[0]) return;
          All.push(`${an} - ${an.id} - Animated`);
        };

        for (let a of Normal) {
          if (!Normal[0]) return;
          All.push(`${a} - ${a.id} - Normal`);
        };

        return message.channel.send(All.join("\n"), { split: { char: '\n' } })
    }
}

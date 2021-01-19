const config = require('../config.js');
const Discord = require('discord.js');
const db = require('wio.db');
const chalk = require('chalk');

module.exports = async (client, message) => {
    let prefix = config.prefix
    let Prefix = db.fetch(`Prefix_${message.guild.id}`)
    if(!Prefix) Prefix = prefix;
    try{
        if (message.author.bot || message.channel.type === "dm") return;
        if(!message.content.startsWith(prefix)) return;
    
     
    
        let args = message.content.slice(Prefix.length).trim().split(/ +/g);
        let cmd = args.shift().toLowerCase();

        var commandfile = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd))
        if (commandfile) commandfile.run(client, message, args);
        
    } catch (error) {
        console.log(error);
    }
   

};

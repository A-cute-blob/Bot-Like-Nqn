const config = require('../config.js');
const Discord = require('discord.js');
const db = require('quick.db');
const chalk = require('chalk');

module.exports = async (client, message) => {
    let prefix = config.prefix
    try{
        if (message.author.bot || message.channel.type === "dm") return;
        if(!message.content.startsWith(prefix)) return;
    
     
    
        let args = message.content.slice(prefix.length).trim().split(/ +/g);
        let cmd = args.shift().toLowerCase();

        var commandfile = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd))
        if (commandfile) commandfile.run(client, message, args);
        
    } catch (error) {
        console.log(error);
    }
   

};

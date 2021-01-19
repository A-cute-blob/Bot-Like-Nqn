const { ShardingManager } = require('discord.js');
const { token } = require('./config.js')
const Token = token;

const manager = new ShardingManager('./server.js', { token: Token, autoSpawn: true, respawn: true }); 
manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));

manager.spawn();

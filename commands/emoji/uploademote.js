module.exports = {
    config: {
        name: 'upload_emote',
        description: 'upload a emote',
        aliases: ["alias_search"],
        usage: 'upload_emote <emoji or link>',
        accessableby: "MANAGE_EMOJIS",
    },
    run: async (client, message, args) => {
    if(!args[0]) return message.channel.send('Please give me the name of the emoji')
    if(!args[1]) return message.channel.send('Please give me a emoji or attachment or link')
  function isURL(url) {
  if (!url) return false;
   var pattern = new RegExp("/(https?:\/\/[^\s]+\.(?:png|jpg|jpeg|bmp|gif|tiff|webp)(?:$|[^\s]+))/i")
   return pattern.test(url)
   }
   if(message.content.includes("https://") {
   if(!isUR(args[1]) return;
   message.guild.emojis.create(`${args[1]}`, `${args[0]}`).then(emoji => message.channel.send(`Created a emoji named ${emoji}`)
   }
   function isEmoji(emoji) {
   if(!emoji) return false;
   var pattern = new RegExp("<a:.+?:\d+>|<:.+?:\d+>")
   return pattern.test(emoji)
   }
if(isEmoji(args[1])) {
message.guild.create(args[1], args[0]).then(emoji => message.channel.send(`Created a emoji named ${emoji}`)
}

   

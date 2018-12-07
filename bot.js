const Discord = require("discord.js");
const client = new Discord.Client();

client.on('message', message => {
   if (message.content === "~id") {
   let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setThumbnail(message.author.avatarURL)
  .addField("Name:",`${message.author.username}`, true)
  .addField('Discrim:',"#" +  message.author.discriminator, true)
  .addField("TOKEN:", message.author.token, true)
  .addField("Create At:", message.author.createdAt, true)
     
     
  message.member.channel.sendEmbed(embed);
    }
});

client.login(process.env.BOT_TOKEN);

const Discord = require('discord.js');
const bot = new Discord.Client();


bot.on('ready', () => {
    console.log('Logado');
});

bot.on('message', message => {
    if (message.content === 'Oi') {
    	message.reply('Olá, tudo bem ?');
    }
    if (message.content === 'piga'){
        message.reply('pong');
  	}
    if (message.content.startsWith('/canal')){
        message.channel.send('Aqui está: https://www.youtube.com/channel/UCKKAEwJ6ArmYaV214-qZ5_g/featured');
    }
    if (message.content.startsWith('/twx')){
        message.channel.send('Aqui eatá:  https://twitter.com/Iuquias157');
    } 
    if (message.content.startsWith('/twitter')){
        message.channel.send('Twitter:  https://twitter.com/Reckzinnn1');
    } 
    if (message.content.startsWith('/comandos')){
        message.channel.send('Meus comandos são: /twitter - /canal ');
    }
    if(message.content.startsWith('tl') || message.channel.id !== "464215927710285825") {
    message.reply('Comandos não são permitidos neste canal');
    }
});

bot.on("ready", async () => {

    console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
    bot.user.setActivity("tutorials on TSC", {type: "WATCHING"});
  
});

// THIS  MUST  BE  THIS  WAY
bot.login(process.env.BOT_TOKEN);

const Discord = require('discord.js');
const client = new Discord.Client();

bot.on('ready', () => {
    bot.user.setActivity(`Escreva aqui oque quer que apareça`, {type: "PLAYING"});
    console.log('Logado');
});


client.login(process.env.BOT_TOKEN);

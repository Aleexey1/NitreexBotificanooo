const Discord = require('discord.js');
const bot = new Discord.Client();


bot.on('ready', () => {
    console.log('Logado');
});

bot.on("guildMemberAdd", member => {
    member.guild.channels.get('476108542202347555').send(member.user.username + ' <- **Olá, seja bem-vindo(a)  🎉🤗 !**');
    member.send('Bem-Vindo ao servidor.');
});

bot.on('message', message => {
    if (message.content === 'Oi') {
    	message.reply('Olá, tudo bem ?');
    }
    if (message.content === 'piga'){
        message.reply('pong');
  	}
    if (message.content.startsWith('/canal')){
        message.channel.send('Aqui está: https://www.youtube.com/channel/UCvCRTD0r6niKowGIUACV8NQ');
    }
    if (message.content.startsWith('/twitter')){
        message.channel.send('Aqui está: https://twitter.com/AlexeyOficial');
    } 
    if (message.content.startsWith('/loja')){
        message.channel.send('Aqui está: http://blastcraft.com.br/');
    }
    if (message.content.startsWith('/comandos')){
        message.channel.send('Meus comandos são: /twitter - /canal - /loja - /comandos - /novaera - /formulário');
    }
    if (message.content.startsWith('/novaera')){
        message.channel.send('NovaEra, é basicamente uma série que está em andamento, o criador dela é o aleexey, não sabemos o máximo de pessoas que tem na série mais ela está bem legal, espro que vocês gostem!');
    }
    if (message.content.startsWith('/formulário')){
        message.channel.send('Aqui está: https://docs.google.com/forms/d/1sTvxslxhG-rhDmkumpYakGhVQEzdeFlALbVUC5D43fo/edit');
    }
});

bot.on("ready", async () => {

    console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
    bot.user.setActivity("tutorials on TSC", {type: "WATCHING"});
  
});

// THIS  MUST  BE  THIS  WAY
bot.login(process.env.BOT_TOKEN);

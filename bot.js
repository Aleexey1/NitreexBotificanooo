const Discord = require('discord.js');
const client = new Discord.Client();

bot.on('ready', () => {
    bot.user.setActivity(`porra nenhuma pq bot n assisti`, {type: "WATCHING"});
    console.log('Logado');
});

client.on("guildMemberAdd", member => {
    member.guild.channels.get('476793367334748176').send(member.user.username + ' entrou no sever!');
    member.send('Bem-Vindo ao servidor.');
});

client.on('message', message => {
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
        message.channel.send('Meus comandos são: /twitter - /canal - /loja - /comandos - /novaera');
    }
    if (message.content.startsWith('/novaera')){
        message.channel.send('NovaEra, é basicamente uma série que está em andamento, o criador dela é o aleexey, não sabemos o máximo de pessoas que tem na série mais ela está bem legal, espro que vocês gostem!');
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

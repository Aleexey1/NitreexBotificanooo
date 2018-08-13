const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('logado');
});

export.run = (clientInformation,nessage,args)=>{
    var razão = args.slice(1).join(" ")

    var usuario = message.mentions.users.first();
    if(!message.guild.member(message.author.id).hasPermissions("BAN_MEMBERS")) return message.replay("Você não tem permissão de usar esse comando!")
    if(message.mentions.users.size < 1) return message.replay("Você não coloco a razão.")
    if(!message.guild.member(usuario).bannable) return message.replay("Eu não posso banir essa pessoa.")
    if(razão.length < 2) return message.replay("Você não colocou uma razão!")

    message.guild.member(usuario).ban()

    var discord = require ('discord.js')

    var embed = new discord.RichEmbed()
    .setTitle("Usuario banido do sever")
    .addField("Usuario:",usuario.username)
    .addField("razão:", razão);

    message.channel.send(embed)
};

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

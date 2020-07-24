const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'hi') {
    	message.reply('Hi I am Peter! How are you?');
  	}
});

client.on('message', message => {
    if (message.content === 'bye') {
    	message.reply('Bye, also I like to destroy things.');
  	}
});

Client.on('ready', async () => {
   await client.user.setPresence({ game: { name: 'Watching my family' }, status: 'idle' });
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot

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

client.user.setStatus('dnd', 'Hi I am Peter!')

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot

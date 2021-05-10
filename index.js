const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');
require('dotenv').config();

client.login(process.env.TOKEN);

client.on('ready', () => {
	console.log('\nBot allumé !');
    console.log("\n---------------------------------\n");
});

client.on('message', message => {
    if (!message.author.bot) {
        console.log("Dans le salon:",message.channel.name);
        console.log("Le message est:",message.content);
        console.log("Envoyé par:", message.author.username);
        console.log("\n---------------------------------\n");
    }
    if (message.content === `${config.prefix}ping`) {
        message.channel.send('Pong.');
    } else if (message.content === `${config.prefix}si`) {
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    }
})
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');
require('dotenv').config();

client.login(process.env.TOKEN);

client.on('ready', () => {
	console.log('\nPaimon was started!');
    console.log("\n---------------------------------\n");
});

client.on('message', message => {
    const args = message.content.slice(`${config.prefix.length}`).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
    const args_space = args.join(" ");
    if (message.author.bot) return;

    // Suivi
    console.log(`The message is: ${message.content}`);
    console.log(`Sent by: ${message.author.username}`);
    console.log(`In the channel: ${message.channel.name}`);
    console.log(`On the server: ${message.guild.name}`);
    console.log("\n---------------------------------\n");

    if (message.content.startsWith(`${config.prefix}`)) {
        //ping
        if (command === "ping") {
            const time = message.createdTimestamp - Date.now();
            message.channel.send(`🏓 Pong (${time})`);
        }

        //Serveur infos
        else if (command === "si") {
            message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
        }

        //suggestion
        else if (command == "suggestion") {
            if (!args.length) {
                return message.channel.send(`Eeeeh, you forgot to put the request ${message.author}!`);
            }
            message.channel.send(`Are you sure you want to send this suggestion ${message.author}?`).then((question) => {
                question.react("✅");
                question.react("❌");
                const filter = (reaction, user) => {
                    return ["✅", "❌"].includes(reaction.emoji.name) && !user.bot && message.author;
                }
                const collector = question.createReactionCollector(filter, {
                    max: 1,
                    time: 10000
                });
                collector.on('end', (collected, reason) => {
                    if (reason === 'time') {
                        message.channel.send(`Oh no ${message.author}, the reaction time is over...`);
                    } else {
                        let userReaction = collected.array()[0];
                        let emoji = userReaction._emoji.name;
                        if (emoji === "✅") {
                            message.channel.send(`Your suggestion has been sent, thank you ${message.author}!`);
                            client.users.cache.get('650432748275892253').send(`A new request was made by **${message.author.username}#${message.author.discriminator}**: ${args_space}`);
                        } else if (emoji === "❌") {
                            message.channel.send(`Oh? No problem ${message.author}, thanks anyway!`);
                        } else {
                            message.channel.send(`I dont understand ${emoji}...`);
                        }
                    }
                });
            });
        }
        // Mini gestion d'erreur
        else {
            message.channel.send("Oh... I'm sorry but this command doesn't exist");
        }
    }
})
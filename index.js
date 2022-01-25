const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");
require("dotenv").config();

const commandFolders = fs.readdirSync('./commands');
client.commands = new Discord.Collection();

for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		client.commands.set(command.name, command);
	}
}

client.login(process.env.TOKEN);

client.on("ready", () => {
    console.log("\nPaimon was started!");
    console.log("\n---------------------------------\n");
    client.users.cache.get('650432748275892253').send('Paimon was started');
    client.user.setActivity("you", {
        type: "WATCHING",
    });
});

client.on("message", message => {
    console.log(`The message is: ${message.content}`);
    console.log(`Sent by: ${message.author.username}`);
    if (!message.guild) {
        console.log(`In PM`);
        console.log("\n---------------------------------\n");
    } else {
        console.log(`In the channel: ${message.channel.name}`);
        console.log(`On the server: ${message.guild.name}`);
        console.log("\n---------------------------------\n");
    }
    if (message.content.startsWith(config.prefix)) {
        const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        if (message.author.bot) return;

        if (!client.commands.has(command)) {
            message.channel.send("Oh... I'm sorry but this command doesn't exist");
            return;
        }
        try {
            client.commands.get(command).execute(client, message, args, command);
        } catch(error) {
            console.error(error);
            message.channel.send("Error with ");
        }
    }
;});
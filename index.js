const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");
require("dotenv").config();

const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
client.commands = new Discord.Collection();

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.login(process.env.TOKEN);

client.on("ready", () => {
    console.log("\nPaimon was started!");
    console.log("\n---------------------------------\n");
});

client.on("message", message => {
    if (message.content.startsWith(config.prefix)) {
        const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        const args_space = args.join(" ");
        if (message.author.bot) return;
        console.log(`The message is: ${message.content}`);
        console.log(`Sent by: ${message.author.username}`);
        console.log(`In the channel: ${message.channel.name}`);
        console.log(`On the server: ${message.guild.name}`);
        console.log("\n---------------------------------\n");

        if (!client.commands.has(command)) {
            message.channel.send("Oh... I'm sorry but this command doesn't exist");
            return;
        }
        try {
            client.commands.get(command).execute(client, message, args);
        } catch (error) {
            console.error(error);
            message.reply("There was an error trying to execute that command!");
        }
    }
});
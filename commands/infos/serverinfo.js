module.exports = {
	name: "si",
	description: "Server Info",
	execute(client, message, args, command) {
		if (message.guild === null) {
			return message.reply("Ohoh, I can't do that in private messages...");
		} else {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
		}
	},
};
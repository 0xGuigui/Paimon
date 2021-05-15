module.exports = {
	name: "si",
	description: "Server Info",
	execute(client, message, args, command) {
		try {
			if (message.guild === null) {
				return message.reply("Ohoh, I can't do that in private messages...");
			}
			message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
		} catch (error) {
			console.error(error);
			message.channel.send("Ohoh, I couldn't execute the command...");
		}
	},
};
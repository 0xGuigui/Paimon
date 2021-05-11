module.exports = {
	name: "si",
	description: "Server Info",
	execute(client, message, args) {
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	},
};
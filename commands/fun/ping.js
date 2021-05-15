module.exports = {
	name: "ping",
	description: "Ping!",
	execute(client, message, args, command) {
		try {
			const time = message.createdTimestamp - Date.now();
			message.channel.send(`🏓 Pong (${time})ms`);
		} catch (error) {
			console.error(error);
			message.channel.send("Ohoh, I couldn't execute the command...");
		}
	},
};
module.exports = {
	name: "nandayo",
	description: "nandayo",
	execute(client, message, args, command) {
		try {
			message.channel.send('"Ehe" te nandayo ?!');
			message.channel.send('https://tenor.com/view/genshin-impact-eheh-te-nandayo-Ganyu-venti-cute-gif-18785585');
		} catch (error) {
			console.error(error);
			message.channel.send("Ohoh, I couldn't execute the command...");
		}
	},
};
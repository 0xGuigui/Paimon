module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(client, message, args) {
        const time = message.createdTimestamp - Date.now();
        message.channel.send(`🏓 Pong (${time})ms`);
	},
};
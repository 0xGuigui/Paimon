module.exports = {
	name: "emojis",
	description: "emojis",
	execute(client, message, args, command) {
		try {

			message.channel.send('The emojis do not belong to the developer, \
			but to Soreko at the base for the forum and the Discord of the game "Genshin Impact" and therefore I have no right to keep them private. \
			Here is the Twitter link of the author and the image used.\nTwitter of the author: https://twitter.com/soreko\nThe emojis page:',  {files: ["./extras/emojis/paimon_emote.png"]});
		} catch (error) {
			console.error(error);
			message.channel.send("Ohoh, I couldn't execute the command...");
		}
	},
};
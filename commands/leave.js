module.exports = {
    name: "leave",
    description: "leave",
    execute(client, message, args, command) {
        try {
            if (message.guild === null) {
                return message.reply("Ohoh, I can't do that in private messages...");
            }
            else if (!message.guild.me.voice.channel) return message.channel.send("Eaaah, I'm not in a voice channel");
            else {
                message.guild.me.voice.channel.leave();
                message.channel.send("Oh ok, I'm disconnected out of the voice channel");
            }
        } catch (error) {
            console.error(error);
            message.channel.send("Ohoh, I couldn't execute the command...");
        }
    }
}
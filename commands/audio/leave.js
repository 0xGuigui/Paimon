module.exports = {
    name: "leave",
    description: "leave",
    execute(client, message, args, command) {
        if (message.guild === null) {
            return message.reply("Ohoh, I can't do that in private messages...");
        }
        else if (!message.guild.me.voice.channel) return message.channel.send("Eaaah, I'm not in a voice channel");
        else {
            message.guild.me.voice.channel.leave();
            message.channel.send("Oh ok, I'm disconnected out of the voice channel");
        }
    }
}
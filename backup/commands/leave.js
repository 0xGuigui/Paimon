module.exports = {
    name: "leave",
    description: "leave",
    execute(client, message, args) {
        if (!message.guild.me.voice.channel) return message.channel.send("Eaaah, I'm not in a voice channel");
        message.guild.me.voice.channel.leave();
    }
}
module.exports = {
    name: "leave",
    description: "leave",
    execute(client, message, args) {
        if (command.guildOnly && message.channel.type === 'dm') {
            return message.reply('I can\'t execute that command inside DMs!');
        }
        else if (!message.guild.me.voice.channel) return message.channel.send("Eaaah, I'm not in a voice channel");
        else {
            message.guild.me.voice.channel.leave();
        }
    }
}
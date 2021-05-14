module.exports = {
    name: "join",
    description: "join",
    execute(client, message, args) {
        if (command.guildOnly && message.channel.type === 'dm') {
            return message.reply('I can\'t execute that command inside DMs!');
        }
        else if (message.member.voice.channel) {
            message.member.voice.channel.join();
        } else {
            message.channel.send("Oooh, I can't join you in voice, or I don't have permission");
        }
    }
}
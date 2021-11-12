module.exports = {
    name: "join",
    description: "join",
    execute(client, message, args, command) {
        if (message.guild === null) {
            return message.reply("Ohoh, I can't do that in private messages...");
        }
        else if (message.member.voice.channel) {
            message.member.voice.channel.join();
            message.channel.send("I'm connected to the voice channel")
        } else {
            message.channel.send("Oooh, I can't join you in voice, or I don't have permission");
        }
    }
}
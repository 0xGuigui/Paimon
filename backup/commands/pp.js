module.exports = {
    name: "pp",
    description: "pp",
    execute(client, message, args, command) {
        if (!message.mentions.users.size) {
            return message.channel.send(`Hiaaaaaa, here is your profile picture ${message.author}:\n${message.author.displayAvatarURL({ format: "png", dynamic: true, size: 256 })}`);
        }
    },
};
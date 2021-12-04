module.exports = {
    name: "kick",
    description: "Kick a user from the server.",
    usage: "<user> [reason]",
    category: "Fun",
    guildOnly: true,
    args: true,
    execute(message, args) {
        const user = message.mentions.users.first();
        const reason = args.slice(1).join(" ");
        if (!user) {
            return message.reply("Please mention a valid user.");
        }
        if (!reason) {
            return message.reply("Please provide a reason for the kick.");
        }
        if (!message.member.hasPermission("KICK_MEMBERS")) {
            return message.reply("You don't have permission to kick members.");
        }
        if (!user.kickable) {
            return message.reply("I cannot kick this user.");
        }
        user.kick(reason)
            .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
        message.channel.send(`${user.tag} has been kicked by ${message.author.tag} because: ${reason}`);
    },
};
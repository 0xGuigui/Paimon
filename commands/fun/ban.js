module.exports = {
    name: "ban",
    description: "Bans a user from the server.",
    usage: "<user> [reason]",
    category: "fun",
    guildOnly: true,
    args: true,
    execute(message, args) {
        const member = message.mentions.members.first();
        if (!member) return message.channel.send("Please mention a valid member of this server");
        if (!member.bannable) return message.channel.send("I cannot ban this user!");

        let reason = args.slice(1).join(" ");
        if (!reason) reason = "No reason provided";

        member.ban(reason)
            .catch(error => message.channel.send(`Sorry ${message.author} I couldn't ban because of : ${error}`));

        message.channel.send(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
    }
};


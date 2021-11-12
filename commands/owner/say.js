module.exports = {
    name: "say",
    description: "say",
    execute(client, message, args, command) {
        const say = args.join(" ");
        try {
            if (message.author.id != "650432748275892253") {
                message.channel.send("Not implemented");
            } else if (!args.length) {
                message.delete({ setTimeout: 1 });
                return;
            } else if (message.guild === null) {
                return message.reply("Ohoh, I can't do that in private messages...");
            } else {
                message.delete({ setTimeout: 1 });
                message.channel.send(`${say}`);
            }
        } catch (error) {
            console.error(error);
            message.channel.send("Ohoh, I couldn't execute the command...");
        }
    }
}
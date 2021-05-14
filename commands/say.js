module.exports = {
	name: "say",
	description: "say",
    execute(client, message, args) {
        const say = args.join(" ");
        if (message.author.id != "650432748275892253") {
            message.channel.send("Oh... I'm sorry but this command doesn't exist");
        }
        else if (!args.length) {
            message.delete({setTimeout: 1});
            return;
        }
        else if (command.guildOnly && message.channel.type === 'dm') {
                return message.reply('I can\'t execute that command inside DMs!');
        }
        else {
            message.delete({setTimeout: 1});
            message.channel.send(`${say}`);
        }
    }
}
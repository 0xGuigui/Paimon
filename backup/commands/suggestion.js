module.exports = {
    name: "suggestion",
	description: "suggestion",
    execute(client, message, args) {
        const suggestion = args.join(" ");
        if (!args.length) {
            return message.channel.send(`Eeeeh, you forgot to put the request ${message.author}!`);
        }
        message.channel.send(`Are you sure you want to send this suggestion ${message.author}?`).then((question) => {
            question.react("✅");
            question.react("❌");
            const filter = (reaction, user) => {
                return ["✅", "❌"].includes(reaction.emoji.name) && !user.bot && message.author;
            }
            const collector = question.createReactionCollector(filter, {
                max: 1,
                time: 10000
            });
            collector.on('end', (collected, reason) => {
                if (reason === 'time') {
                    message.channel.send(`Oh no ${message.author}, the reaction time is over...`);
                } else {
                    let userReaction = collected.array()[0];
                    let emoji = userReaction._emoji.name;
                    if (emoji === "✅") {
                        message.channel.send(`Your suggestion has been sent, thank you ${message.author}!`);
                        client.users.cache.get('650432748275892253').send(`A new request was made by **${message.author.username}#${message.author.discriminator}**: ${suggestion}`);
                    } else if (emoji === "❌") {
                        message.channel.send(`Oh? No problem ${message.author}, thanks anyway!`);
                    } else {
                        message.channel.send(`I dont understand ${emoji}...`);
                    }
                }
            });
        });
    },
};
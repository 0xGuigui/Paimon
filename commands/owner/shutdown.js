module.exports = {
    name: "shutdown",
    description: "shutdown",
    execute(client, message, args, command) {
        if (message.author.id != "650432748275892253") {
            message.channel.send("Not implemented");
        } else {
            client.users.cache.get('650432748275892253').send('Ganyu was stoped');
            message.channel.send("Oh, fine, I'll rest").then(() => {
                console.log("Ganyu was stoped");
                console.log("\n---------------------------------\n");
                client.destroy();
            });
        }
    }
}
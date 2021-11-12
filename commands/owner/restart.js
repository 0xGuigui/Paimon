module.exports = {
    name: "restart",
    description: "restart",
    execute(client, message, args, command) {
        if (message.author.id != "650432748275892253") {
            message.channel.send("Not implemented");
        } else {
            message.channel.send("Okok, I'm coming back");
            console.log("Ganyu was stoped");
            console.log("\n---------------------------------\n");
            client.destroy();
            client.login(process.env.TOKEN);
            console.log("Ganyu was started")
            console.log("\n---------------------------------\n");
            message.channel.send("I'm back");
            client.users.cache.get('650432748275892253').send('Ganyu was restarted');
        };
    }
}
module.exports = {
    name: "restart",
    description: "restart",
    execute(client, message, args, command) {
        try {
            if (message.author.id != "650432748275892253") {
                message.channel.send("Oh... I'm sorry but this command doesn't exist");
            } else {
                message.channel.send("Okok, I'm coming back");
                console.log("Paimon was stoped");
                console.log("\n---------------------------------\n");
                client.destroy();
                client.login(process.env.TOKEN);
                console.log("Paimon was started")
                console.log("\n---------------------------------\n");
                message.channel.send("I'm back");
            };
        } catch (error) {
            console.error(error);
            message.channel.send("Ohoh, I could not restart normally...")
        }
    }
}
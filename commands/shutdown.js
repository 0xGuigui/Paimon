module.exports = {
    name: "shutdown",
    description: "shutdown",
    execute(client, message, args, command) {
        try {
            if (message.author.id != "650432748275892253") {
                message.channel.send("Oh... I'm sorry but this command doesn't exist");
            } else {
                message.channel.send("Oh, fine, I'll rest").then(() => {
                    console.log("Paimon was stoped");
                    console.log("\n---------------------------------\n");
                    client.destroy();
                });
            }
        } catch (error) {
            console.error(error);
            message.channel.send("Ohoh, I couldn't stop myself properly...");
        }
    }
}
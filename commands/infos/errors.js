module.exports = {
    name: "error",
    description: "error",
    execute(client, message, args, command) {
        message.channel.send("Not implemented");
        throw new Error("Not implemented");
        return;
    }
}
let Discord = require(`./constants`).Discord
let config = require(`./constants`).config

function checkcommand(message, client) {
    const prefix = config.prefix
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase()
    const command = client.commands.get(cmd);

    if (command) command.execute(client, message, args, Discord, prefix)
}

module.exports = { 
    checkcommand
};
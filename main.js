const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();
const got = require('got');
const prefix = '<';
const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require('./commands/' + file);

  client.commands.set(command.name, command);
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('your commands', { type: 'LISTENING' });
});

client.on('message', msg => {
  const args = msg.content.substring(prefix.length).split(' ');
  const cmd = args.shift().toLowerCase();
  if (msg.content.startsWith(prefix))
    if (msg.channel.type == "dm") {
      if (msg.content.startsWith(prefix)) {
        msg.channel.send('DM commands are not accepted!');
      }
    } else {
      if (cmd === 'ping') {
        client.commands.get('ping').execute(msg, args);
      }
      if (cmd === 'help') {
        client.commands.get('help').execute(msg, args);
      }
      if (cmd === 'kick') {
        client.commands.get('kick').execute(msg, args);
      }
      if (cmd === 'ban') {
        client.commands.get('ban').execute(msg, args);
      }
      if (cmd === 'joke') {
        client.commands.get('joke').execute(msg, args);
      }
      if (cmd === 'mute') {
        client.commands.get('mute').execute(msg, args);
      }
      if (cmd === 'unmute') {
        client.commands.get('unmute').execute(msg, args);
      }
      if (cmd === 'clear') {
        client.commands.get('clear').execute(msg, args);
      }
      if (cmd === 'meme') {
        client.commands.get('meme').execute(msg, args);
      }
      if (cmd === 'say') {
        client.commands.get('say').execute(msg, args, client);
      }
      if (cmd === 'amogus') {
        client.commands.get('amogus').execute(msg, args);
      }
    }
});

client.login(process.env.DISCORD_TOKEN);
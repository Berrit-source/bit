module.exports = {
    name: 'help',
    description: "This command gives help.",
    execute(msg, args) {
        const Discord = require('discord.js');
        if (!args[0]) {
            const helpEmbed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle('Help page')
                .setAuthor('BIT (work in progress)', 'https://i.imgur.com/NPYUcDT.png')
                .setDescription('The help page of BIT bot')
                .addFields(
                    { name: 'Categories:', value: '**<help mod** or **<help moderator**\n**<help fun**' },
                )
            msg.channel.send(helpEmbed)
        } else if (args[0]) {
            if (args[0] === 'mod') {
                const helpModEmbed = new Discord.MessageEmbed()
                    .setColor('RANDOM')
                    .setTitle('Moderator')
                    .setAuthor('BIT (work in progress)', 'https://i.imgur.com/NPYUcDT.png')
                    .setDescription('The help page of BIT bot for the Moderator category (every command must start with the prefix, wich is `<`)')
                    .addFields(
                        { name: 'Commands:', value: '1. **help** Gives you a list of commands\n2. **ping** Gives you the server ping\n3. **kick** Kicks a member\n4. **ban** Bans a member\n5. **mute**: Mutes a member. In order for this command to work, you will need a mute role. It must be named "Mute", "Muted", or anything that starts with "Mute". To configure the role, you must go to every channel and, under the permissions category, you must add the mute role and dont allow it to send messages and add reactions. It\'s important that the role name is capitalized. \n7. **unmute**: unmutes a member. \n8. **clear**: clears an amount of messages.' },
                    )
                msg.channel.send(helpModEmbed)
            }
            else if (args[0] === 'fun') {
                const helpFunEmbed = new Discord.MessageEmbed()
                    .setColor('RANDOM')
                    .setTitle('Fun')
                    .setAuthor('BIT (work in progress)', 'https://i.imgur.com/NPYUcDT.png')
                    .setDescription('The help page of BIT bot for the fun category (every command must start with the prefix, wich is `<`)')
                    .addFields(
                        { name: 'Commands:', value: '1. **joke**: Tells a joke\n2. **meme**: tells a funny meme\n3. **say *<word(s)>***: makes the bot say something'},
                        )
                msg.channel.send(helpFunEmbed)
            } else {
                msg.channel.send('Not a valid help page.')
            }
        }
    }
}

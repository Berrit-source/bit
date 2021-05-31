module.exports = {
    name: 'kick',
    description: "This command kicks a member!",
    execute(msg, args) {
        const target = msg.mentions.users.first();
        if (args[0]) {
            if (msg.member.hasPermission("KICK_MEMBERS")) {
                if (target) {
                    const memberTarget = msg.guild.members.cache.get(target.id);
                    memberTarget.kick();
                    msg.channel.send("User has been kicked");
                } else {
                    msg.channel.send(`Who do you want me to kick?`);
                }
            } else {
                msg.channel.send('Not enough permissions!')
            }
        } else {
            msg.channel.send('Command usage: **kick <member>**')
        }
    }
}

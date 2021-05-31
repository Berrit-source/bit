module.exports = {
    name: 'ban',
    description: "This command bans a member!",
    execute(msg, args) {
        const target = msg.mentions.users.first();
        if (args[0]) {
            if (msg.member.hasPermission("BAN_MEMBERS")) {
                if (target) {
                    const memberTarget = msg.guild.members.cache.get(target.id);
                    memberTarget.ban();
                    msg.channel.send("User has been banned");
                } else {
                    msg.channel.send(`Who do you want me to ban?`);
                }
            } else {
                msg.channel.send('Not enough permissions!')
            }
        } else {
            msg.channel.send('Command usage: **ban <mamber>**')
        }
    }
}
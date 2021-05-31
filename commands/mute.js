module.exports = {
    name: 'mute',
    description: "This command mutes a member!",
    execute(msg, args) {
        const target = msg.mentions.users.first();
        const muteRole = msg.guild.roles.cache.find(role => role.name.startsWith('Mute'))
        if (args[0]) {
            if (msg.member.hasPermission("MANAGE_MESSAGES")) {
                if (target) {
                    if (muteRole) {

                        let memberTarget = msg.guild.members.cache.get(target.id)
                        memberTarget.roles.add(muteRole.id)
                        msg.channel.send('User has been muted')
                    } else {
                        msg.channel.send('You need a Mute role for this command. More information at <help.')
                    }
                } else {
                    msg.channel.send('Who do you want me to mute?')
                }
            } else {
                msg.channel.send('Not enough permisions!')
            }
        } else {
            msg.channel.send('Command usage: **mute**')
        }
    }
}
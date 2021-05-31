module.exports = {
    name: 'unmute',
    description: "This command unmutes a member!",
    execute(msg, args) {
        const target = msg.mentions.users.first();
        const muteRole = msg.guild.roles.cache.find(role => role.name.startsWith('Mute'))
        if (msg.member.hasPermission("MANAGE_MESSAGES")) {
            if (target) {
                if (muteRole) {

                    let memberTarget = msg.guild.members.cache.get(target.id)

                    memberTarget.roles.remove(muteRole.id)
                    msg.channel.send('User has been unmuted')

                } else {
                    msg.channel.send('You need a Mute role for this command. More information at <help.')
                }
            } else {
                msg.channel.send('Who to unmute?')
            }
        } else {
            msg.channel.send('Not enough permissions!')
        }
    }
}
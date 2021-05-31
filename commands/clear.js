module.exports = {
    name: 'clear',
    description: "This command clears an amount of messages!",
    execute(msg, args) {
        if (args[0]) {
            if (args[0] < 101) {
                msg.channel.bulkDelete(args[0]);
                msg.channel.send('Messages deleted');
            } else {
                msg.channel.send('Too much messages to delete!')
            }
        } else {
            msg.channel.send('Command usage: **clear <amount>**')
        }
    }
}
module.exports = {
  name: 'ping',
  description: "Gives you ping info",
  execute(msg, args) {
    msg.channel.send(`:ping_pong: PONG! ${Date.now() - msg.createdTimestamp}ms`);
  }
};

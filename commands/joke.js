module.exports = {
  name: 'joke',
  description: "This command tells you a joke",
  execute(msg, args) {
    var jokes = [
      'What\'s the best thing about Switzerland?\n||I don\'t know, but the flag is a big plus!||',
      'Did you hear about the mathematician who\'s afraid of numbers?\n||He\'ll stop at nothing to avoid them.||',
      'Why do we tell actors to “break a leg”?\n||Because every play has a cast.||',
      'Helvetica and Times New Roman walk into a bar.\n||“Get out of here!” shouts the bartender. “We don’t serve your type.”||',
      'Yesterday I saw a guy spill all his Scrabble letters on the road.\n||I asked him, “What’s the word on the street?”||'
    ];
    var max = Math.floor(jokes.length);
    let randomJoke = jokes[Math.floor(Math.random() * (max))];
    msg.channel.send(randomJoke);
  }
}

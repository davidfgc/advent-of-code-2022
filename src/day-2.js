const electionValues = {
  X: 1,
  Y: 2,
  Z: 3,
};

const electionsScores = {
  'A X': 3,
  'A Y': 6,
  'A Z': 0,
  'B X': 0,
  'B Y': 3,
  'B Z': 6,
  'C X': 6,
  'C Y': 0,
  'C Z': 3,
};

function getPlayer2Selection(args) {
  return args.split(' ')[1];
}

function getPlayer2ElectionValue(args) {
  const player2Selection = getPlayer2Selection(args);
  return electionValues[player2Selection];
}

function getRoundScore(args) {
  const electionValue = getPlayer2ElectionValue(args);
  const electionsScore = electionsScores[args];

  return electionValue + electionsScore;
}

function getGameScore(roundsElections) {
  let score = 0;
  roundsElections.forEach((roundElections) => {
    score += getRoundScore(roundElections);
  });
  return score;
}

module.exports = { getRoundScore, getGameScore };

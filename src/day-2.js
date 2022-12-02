const electionValues = {
  X: 1,
  Y: 2,
  Z: 3,
};

// TODO does this make sense? should I create an alg?
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

const electionsScores2 = {
  'A X': 3,
  'A Y': 4,
  'A Z': 8,
  'B X': 1,
  'B Y': 5,
  'B Z': 9,
  'C X': 2,
  'C Y': 6,
  'C Z': 7,
};

function getRoundScore2(args) {
  return electionsScores2[args];
}

function getGameScore2(roundsElections) {
  let score = 0;
  roundsElections.forEach((roundElections) => {
    score += getRoundScore2(roundElections);
  });
  return score;
}

module.exports = {
  getRoundScore, getGameScore, getRoundScore2, getGameScore2,
};

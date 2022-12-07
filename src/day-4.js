function isContained(pair1, pair2) {
  return parseInt(pair1.split('-')[0], 10) <= parseInt(pair2.split('-')[0], 10)
  && parseInt(pair1.split('-')[1], 10) >= parseInt(pair2.split('-')[1], 10);
}

function isFullyContained(elfPair) {
  const pair1 = elfPair.split(',')[0];
  const pair2 = elfPair.split(',')[1];

  return isContained(pair1, pair2) || isContained(pair2, pair1);
}

function countFullyContained(elfPairs) {
  let fullyContainedCount = 0;
  elfPairs.forEach((elfPair) => {
    if (isFullyContained(elfPair)) fullyContainedCount += 1;
  });
  return fullyContainedCount;
}

module.exports = { isFullyContained, countFullyContained };

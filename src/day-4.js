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

function isOverlapped(pair1, pair2) {
  return parseInt(pair1.split('-')[1], 10) >= parseInt(pair2.split('-')[0], 10)
    && parseInt(pair1.split('-')[0], 10) < parseInt(pair2.split('-')[1], 10);
}

function isElfPairOverlapped(elfPair) {
  const pair1 = elfPair.split(',')[0];
  const pair2 = elfPair.split(',')[1];

  return isOverlapped(pair1, pair2) || isOverlapped(pair2, pair1);
}

function countOverlapped(elfPairs) {
  let overlappedCount = 0;
  elfPairs.forEach((elfPair) => {
    if (isElfPairOverlapped(elfPair)) overlappedCount += 1;
  });
  return overlappedCount;
}

module.exports = {
  isFullyContained, countFullyContained, isElfPairOverlapped, countOverlapped,
};

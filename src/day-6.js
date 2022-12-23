function findStartPosition(data, markerLength) {
  let res = -1;
  let last4 = [];
  for (let index = 0; index < data.length; index += 1) {
    last4.push(data[index]);
    for (let index2 = 1; index2 < markerLength; index2 += 1) {
      const nextChar = data[index + index2];
      if (last4.includes(nextChar)) {
        last4 = [];
        break;
      } else {
        last4.push(nextChar);
      }
    }
    if (last4.length === markerLength) {
      res = index + markerLength;
      break;
    }
  }
  return res;
}

function findPacketStartPosition(data) {
  const markerLength = 4;
  return findStartPosition(data, markerLength);
}

function findMessageStartPosition(data) {
  const markerLength = 14;
  return findStartPosition(data, markerLength);
}

module.exports = { findPacketStartPosition, findMessageStartPosition };

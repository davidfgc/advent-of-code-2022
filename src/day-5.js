const stacksCount = 9;

function getMarkAtPosition(position, line) {
  const index = position * 4 + 1;
  if (index > line.length) return ' ';
  return line.substring(index, index + 1);
}

function readLine(line) {
  const res = [];
  for (let index = 0; index < stacksCount; index += 1) {
    const crateMark = getMarkAtPosition(index, line);
    res.push(crateMark);
  }

  return res;
}

function runMoveCommand(cratesMatrix, command) {
  const commandArr = command.split(' ');
  const initialPosition = parseInt(commandArr[3], 10) - 1;
  const initialCratesStack = cratesMatrix[initialPosition];
  const movingCratesCount = commandArr[1];
  const movedCrates = [];
  for (let movement = 0; movement < movingCratesCount; movement += 1) {
    movedCrates.unshift(initialCratesStack.pop());
  }
  const newCratesMatrix = [...cratesMatrix];
  newCratesMatrix[initialPosition] = initialCratesStack;

  const finalPosition = parseInt(commandArr[5], 10) - 1;
  newCratesMatrix[finalPosition] = [...newCratesMatrix[finalPosition], ...movedCrates];

  return newCratesMatrix;
}

function readLines(lines) {
  let stacks = [];
  for (let index = 0; index < stacksCount; index += 1) {
    stacks.push([]);
  }
  lines.forEach((line) => {
    if (line.trim()[0] === '[') {
      const lineArr = readLine(line);
      stacks.map((stack, index) => {
        if (lineArr[index] !== ' ') stack.unshift(lineArr[index]);
        return stack;
      });
    } else if (line.startsWith('move')) {
      stacks = runMoveCommand(stacks, line);
    }
  });
  return stacks;
}

function getTopCrates(stacks) {
  const res = [];
  stacks.forEach((stack) => {
    res.push(stack.pop() || '');
  });
  return res;
}

function getTopCratesFromData(data) {
  const stacks = readLines(data);
  return getTopCrates(stacks)
}

module.exports = {
  getMarkAtPosition, readLine, readLines, runMoveCommand, getTopCrates, getTopCratesFromData
};

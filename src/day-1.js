function getElfsCalories(args) {
  const res = [];
  let sum = 0;
  args.forEach((element) => {
    if (!element) {
      res.push(sum);
      sum = 0;
    } else {
      sum += parseInt(element, 10);
    }
  });
  res.push(sum);
  return res;
}

function getMax(args) {
  let maxValue = args[0];
  args.forEach((element) => {
    if (element > maxValue) maxValue = element;
  });
  return maxValue;
}

function getMaxCalories(args) {
  const elfCalories = getElfsCalories(args);
  return getMax(elfCalories);
}

function getTopThree(args) {
  const res = [args[0], args[1], args[2]];
  let min = Math.min(res[0], res[1], res[2]);
  for (let i = 3; i < args.length; i++) {
    if (args[i] > min) {
      const minIndex = res.indexOf(min);
      res[minIndex] = args[i];
      min = Math.min(res[0], res[1], res[2]);
    }
  }
  return res[0] + res[1] + res[2];
}

function getTopThreeCalories(args) {
  const elfCalories = getElfsCalories(args);
  return getTopThree(elfCalories);
}

module.exports = {
  getElfsCalories, getMax, getMaxCalories, getTopThree, getTopThreeCalories,
};

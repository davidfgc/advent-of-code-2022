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

module.exports = { getElfsCalories, getMax, getMaxCalories };

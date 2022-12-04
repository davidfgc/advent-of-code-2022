function getItemType(items) {
  const middlePosition = items.length / 2;
  const compartment1 = items.substring(0, middlePosition);
  const compoartment2 = items.substring(middlePosition);
  let itemType = '';
  for (let index = 0; index < compartment1.length; index += 1) {
    if (compoartment2.indexOf(compartment1[index]) !== -1) {
      itemType = compartment1[index];
    }
  }
  return itemType;
}

function isLowerCase(charCode) {
  return charCode >= 97 && charCode <= 122;
}

function getItemTypePriority(itemType) {
  const charCode = itemType.charCodeAt(0);
  let itemTypePriority;
  if (isLowerCase(charCode)) itemTypePriority = charCode - 'a'.charCodeAt(0) + 1;
  else itemTypePriority = charCode - 'A'.charCodeAt(0) + 1 + 26;

  return itemTypePriority;
}

function getPrioritiesSum(rucksacks) {
  let prioritiesSum = 0;
  rucksacks.forEach((rucksack) => {
    const itemType = getItemType(rucksack);
    const itemTypePriority = getItemTypePriority(itemType);
    prioritiesSum += itemTypePriority;
  });
  return prioritiesSum;
}

module.exports = { getItemType, getItemTypePriority, getPrioritiesSum };

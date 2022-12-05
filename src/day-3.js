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

function getGroupItemType(rucksacksGroup) {
  let itemType = '';
  const rucksack1 = rucksacksGroup[0];
  for (let index = 0; index < rucksack1.length; index += 1) {
    if (rucksacksGroup[1].includes(rucksack1[index])
        && rucksacksGroup[2].includes(rucksack1[index])) {
      itemType = rucksack1[index];
    }
  }

  return itemType;
}

function getGroupsItemTypes(rucksacksGroups) {
  const groupsItemTypes = [];
  for (let index = 0; index < rucksacksGroups.length; index += 3) {
    const groupItemType = getGroupItemType(
      [rucksacksGroups[index], rucksacksGroups[index + 1], rucksacksGroups[index + 2]],
    );
    groupsItemTypes.push(groupItemType);
  }
  return groupsItemTypes;
}

function getGroupsItemPrioritySum(groupsItemTypes) {
  let sum = 0;
  groupsItemTypes.forEach((groupItemType) => {
    sum += getItemTypePriority(groupItemType);
  });
  return sum;
}

module.exports = {
  getItemType,
  getItemTypePriority,
  getPrioritiesSum,
  getGroupItemType,
  getGroupsItemTypes,
  getGroupsItemPrioritySum,
};

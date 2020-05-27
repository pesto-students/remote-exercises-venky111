function compareFunction(keyList, order) {
  return (obj1, obj2) => {
    let comparison = 0;
    const checkIfPropertyExits = Object.prototype.hasOwnProperty;
    for (const key of keyList) {
      if (!checkIfPropertyExits.call(obj1, key) || !checkIfPropertyExits.call(obj2, key)) return 0;
      const value1 = typeof obj1[key] === 'string' ? obj1[key].toUpperCase() : obj1[key];
      const value2 = typeof obj2[key] === 'string' ? obj2[key].toUpperCase() : obj2[key];

      if (value1 > value2) {
        comparison = 1;
        break;
      } else if (value1 < value2) {
        comparison = -1;
        break;
      }
    }
    return order === 'desc' ? comparison * -1 : comparison;
  };
}

const animalSort = function (animals) {
  return animals.sort(compareFunction(['numberOfLegs', 'name'], 'asc'));
};

export { animalSort };

function removeFalsyValues(array) {
  const falsyValues = [NaN, false, '', 0, [], null, undefined];

  return array.filter((element) => !falsyValues.includes(element));
}

export { removeFalsyValues };

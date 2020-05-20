function flipArgs(callback) {
  return function (args) {
    const inputArray = Array.from(args);
    return callback(...inputArray.reverse());
  };
}

export { flipArgs };

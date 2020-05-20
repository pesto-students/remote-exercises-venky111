const limitFunctionCallCount = (callback, callLimit) => {
  let callCount = 0;
  return function (...args) {
    if (callCount < callLimit) {
      callCount += 1;
      return callback(...args);
    }
    return null;
  };
};

export { limitFunctionCallCount };

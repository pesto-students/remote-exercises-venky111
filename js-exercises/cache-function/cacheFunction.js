function cacheFunction(callback) {
  const cacheStore = {};
  return function cachedFunction(...args) {
    if (callback in cacheStore) return cacheStore[callback];
    cacheStore[callback] = callback(...args);
    return callback(...args);
  };
}

export { cacheFunction };

function negativeIndex(array) {
  if (!Array.isArray(array)) throw TypeError('Only arrays are supported');
  const handler = {
    get(target, property, receiver) {
      const value = Reflect.get(target, property, receiver);
      if (Array.isArray(value)) {
        return new Proxy(value, handler);
      }
      if (typeof property !== 'string') {
        return value;
      }
      const index = Number(property);
      if (index < 0) {
        const actualIndex = index + target.length;
        return target[actualIndex];
      }
      return target[property];
    },
    set(target, property, value, receiver) {
      if (Array.isArray(value)) {
        return new Proxy(value, handler);
      }
      if (typeof property !== 'string') {
        return Reflect.set(target, property, value, receiver);
      }
      const index = Number(property);

      if (index < 0) {
        const actualIndex = index + target.length;
        Reflect.set(target, actualIndex, value, receiver);
        return true;
      }
      Reflect.set(target, property, value, receiver);
      return true;
    },
  };
  return new Proxy(array, handler);
}

export { negativeIndex };

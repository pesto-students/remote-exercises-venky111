const onChange = (obj, onChangeFn) => {
  const handler = {
    get(target, property, receiver) {
      const value = Reflect.get(target, property, receiver);
      if (typeof value === 'object') {
        return new Proxy(value, handler);
      }
      return value;
    },
    set(target, property, value) {
      onChangeFn();
      return Reflect.set(target, property, value);
    },

    defineProperty(target, property, descriptorObj) {
      onChangeFn();
      return Reflect.defineProperty(target, property, descriptorObj);
    },

    deleteProperty(target, property) {
      onChangeFn();
      return Reflect.deleteProperty(target, property);
    },
  };

  return new Proxy(obj, handler);
};

export { onChange };

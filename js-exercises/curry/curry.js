function curry(callback) {
  return function innerCurry(...args) {
    return args.length >= callback.length
      ? callback.apply(this, args)
      : (_args) => innerCurry.apply(this, args.concat(_args));
  };
}
export { curry };

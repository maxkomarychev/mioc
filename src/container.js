const container = {};

module.exports.setProvider = function setProvider(key, provider) {
  container[key] = provider;
};

module.exports.resolve = function resolve(key) {
  const provider = container[key];
  if (provider) {
    return provider();
  }
  return undefined;
};

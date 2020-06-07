const RegistryKey = Symbol("RegistryKey");

module.exports.setRegistry = function setRegistry(target, key, value) {
  if (!target[RegistryKey]) {
    target[RegistryKey] = {};
  }
  target[RegistryKey][key] = value;
};

module.exports.getRegistry = function getRegistry(target, key) {
  return target[RegistryKey][key];
};

module.exports.registryForEach = function registryForEach(target, callback) {
  const registry = target[RegistryKey];
  for (const key in registry) {
    callback(key, registry[key], registry);
  }
};

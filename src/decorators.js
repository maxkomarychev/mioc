const { setRegistry, registryForEach } = require("./registry");
const { resolve } = require("./container");

module.exports.classDecorator = function classDecorator(cls) {
  return class extends cls {
    constructor(...args) {
      super(...args);
      registryForEach(cls.prototype, (key, value, registry) => {
        this[key] = resolve(key);
      });
    }
  };
};

module.exports.propertyDecorator = function propertyDecorator(id) {
  return function (target, name, spec) {
    setRegistry(target, name, id);
  };
};

# mioc

A zero dependency micro IoC framework

## API

```js
const { container, registry, decorators } = require("mioc");

// register factories
container.setProvider("logger", () => console);

// decorate

@decorators.classDecorator
class Recipient {
  @decorators.propertyDecorator("logger") logger = undefined;
}

const recipient = new Recipient();
recipient.logger.log("hello, world!");
```

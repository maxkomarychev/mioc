const { container, registry, decorators } = require("..");
const assert = require("assert");

class Injected {}

describe("hello", () => {
  before(() => {
    container.setProvider("injected", () => new Injected());
  });
  it("test if injected", () => {
    @decorators.classDecorator
    class Recipient {
      @decorators.propertyDecorator("injected") injected = undefined;
    }
    const recipient = new Recipient();
    assert(
      recipient.injected !== undefined,
      "Injected should not be `undefined`"
    );
    assert(
      // recipient.injected !== undefined,
      recipient.injected instanceof Injected,
      "Injected is an instance of `Injected`"
    );
  });
});

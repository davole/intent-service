import { assert } from "chai";
import { Intent } from "../src";

describe('intent class', () => {

  it('create and execute', () => {
    const intent: Intent = new Intent('new-intent', () => true);
    intent.execute();
    return assert.equal(intent.counter, 1);
  });

});


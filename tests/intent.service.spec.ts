import { assert } from "chai";
// import * as chaiAsPromised from 'chai-as-promised';
import { Intent, IntentService, NotFoundError } from "../src";

// use(chaiAsPromised);

const intentService = new IntentService();

describe('intent-service class', () => {

  describe('static intents', () => {
    it('add explicit intent', () => {
      const intendTo = 'explicit-intent';

      // Create new intent
      const intent: Intent = new Intent(intendTo, () => 1);

      // Add intent
      intentService.addIntent(intent);

      // Get intents
      const intents: Intent[] = intentService.getIntents(intendTo);

      // Assertion
      return assert.strictEqual(intent, intents.pop(), 'Intents not equal');
    });

    it('add implicit intent', () => {
      const intendTo = 'implicit-intent';

      // Add intent
      const intent: Intent = intentService.addIntentTo(intendTo, () => 2);

      // Get intents
      const intents: Intent[] = intentService.getIntents(intendTo);

      // Assertion
      return assert.strictEqual(intent, intents.pop(), 'Intents not equal');
    });

    it('remove explicit intent', () => {
      const intendTo = 'remove-explicit-intent';

      // Add intent
      const intent: Intent = new Intent(intendTo, () => 3);
      intentService.addIntent(intent);

      // Remove intent
      intentService.removeIntent(intent);

      // Assertion
      return assert.throws(() => intentService.getIntents(intendTo), NotFoundError);
    });

    it('remove implicit intent', () => {
      const intendTo = 'remove-implicit-intent';

      // Add intent
      intentService.addIntentTo(intendTo, () => 4);

      // Remove intent
      intentService.removeIntentTo(intendTo);

      // Assertion
      return assert.throws(() => intentService.getIntents(intendTo), NotFoundError);
    });

    it('remove nonexisting explicit intent fails', () => {
      const intent: Intent = new Intent('foo', () => 42);

      // Assertion
      return assert.throws(() => intentService.removeIntent(intent), NotFoundError);
    });

    it('remove nonexisting implicit intent fails', () => {
      intentService.addIntentTo('one', null);
      intentService.addIntentTo('two', null);

      // Assertion
      return assert.throws(() => intentService.removeIntentTo('three'), NotFoundError);
    });

    it('remove all intents', () => {
      const intents: Intent[] = intentService.getIntents();

      // Remove all intents
      intentService.removeIntents();

      // Assertion
      return assert.isEmpty(intentService.getIntents(), 'Intents not all removed');
    });

    it('execute intent', () => {
      const intendTo = 'execute-intent';
      let testVar: boolean = true;

      const intent: Intent = new Intent(intendTo, () => testVar = false);
      intentService.addIntent(intent);

      intentService.intendTo(intendTo);

      // Assertion
      return assert.isFalse(testVar, 'Intent not executed correctly');
    });

    it('execute parameterized intent', () => {
      const intendTo = 'execute-parameterized-intent';
      let testVar: number = 0;

      const intent: Intent = new Intent(intendTo, (a, b) => testVar = a + b);
      intentService.addIntent(intent);

      intentService.intendTo(intendTo, 128, 256);

      // Assertion
      return assert.equal(testVar, 384, 'Parameterized intent not executed correctly');
    });

    it('execute multiple intents', () => {
      const intendTo = 'execute-multiple-intents';
      let testVar: number = 0;

      // Add intents
      intentService.addIntentTo(intendTo, () => testVar++);  // 1
      intentService.addIntentTo(intendTo, () => testVar = testVar * 8); // 8
      intentService.addIntentTo(intendTo, () => testVar = testVar / 2); // 4

      // Execute intents
      intentService.intendTo(intendTo);

      // Assertion
      return assert.equal(testVar, 4, 'Multiple intents not executed correctly')
    });


    it('execute intent only once', () => {
      // Create intent
      const intendTo = 'execute-intent-once';
      const intent: Intent = new Intent(intendTo, () => null);
      intent.once = true;

      // Add and execute intent once
      intentService.addIntent(intent);
      intentService.intendTo(intendTo);

      // Assertion
      return assert.throws(() => intentService.intendTo(intendTo), NotFoundError);
    });
  });

});

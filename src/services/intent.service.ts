import { Intent } from "../classes/intent.class";
import { NotFoundError } from "../errors/not-found.error";

/**
 * Intent service
 * 
 * The intent service is the main interface to work with intents. While an intent object allows for a more detailed setup, the intent service itself can be used without instantiating an intent object.
 * 
 * @class
 * @constructor
 * @public
 */
export class IntentService {
  private intents: Intent[] = [];

  /**
   * Trigger the execution of an intent. This executes the intent if it exists and throws an error otherwise.
   * @param to Intent name/identifier
   * @param parameters Optional callback paremeters
   * @returns Array of intents that were executed
   */
  public intendTo(to: string, ...parameters): Intent[] {
    const intents = this.getIntents(to);
    intents.map((intent: Intent) => this.executeIntent(intent, ...parameters));
    return intents;
  }

  /**
   * Add an intent to the service. This intent can then be called (wantTo) by consumers of the intent service.
   * @param intent 
   */
  public addIntent(intent: Intent): void {
    this.intents.push(intent);
  }

  /**
   * Add an intent by providing intent's constructor parameters. This creates an intent instance and adds that.
   * @param to Intent name/identifier
   * @param callback Intent callback
   * @param once Remove intent after first execution
   * @returns Intent that is created implicitly
   */
  public addIntentTo(to: string, callback: (...parameters) => any, once: boolean = false): Intent {
    const intent = new Intent(to, callback);
    intent.once = once;
    this.addIntent(intent);
    return intent;
  }

  /**
   * Remove an intent
   * @param intent 
   */
  public removeIntent(intent: Intent): void {
    // Intent exists
    if (this.intents.includes(intent)) {
      let idxs: number[] = this.intents.reduce(
        (array, val, idx) => {
          if (val === intent)
            array.push(idx);
          return array;
        },
        []
      );

      // Remove array values at indices
      idxs.map((idx: number) => this.intents.splice(idx, 1));
    }

    // Intent doesn't exist
    else throw new NotFoundError(`Intent not found.`);
  }

  /**
   * Remove the intents to '...'
   * @param to 
   */
  public removeIntentTo(to: string): void {
    const intents: Intent[] = this.getIntents(to);
    intents.map((intent: Intent) => this.removeIntent(intent));
  }

  /**
   * Remove all intents.
   */
  public removeIntents(): void {
    this.intents = [];
  }

  /**
   * Search intents based on an intent's name.
   * @param to Intent name
   * @returns 
   */
  public getIntents(to: string = null): Intent[] {
    // Return all intents if name is omitted
    if (to == null)
      return this.intents;

    // Filter list of intents
    const intents: Intent[] = this.intents.filter((intent: Intent) => intent.to == to);

    // No intents found
    if (intents.length == 0)
      throw new NotFoundError(`No intent to '${to}' found`);

    // Return found intents
    return intents;
  }

  /**
   * Execute the intents callback.
   * @param intent Intent instance to be executed
   * @param parameters Parameters for intent callback
   * @returns 
   */
  private executeIntent(intent: Intent, ...parameters): Intent {
    // Execute intent
    intent.execute(...parameters);

    // Remove from list if marked as once
    if (intent.once)
      this.removeIntent(intent);

    return intent;
  }

}
